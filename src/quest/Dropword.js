import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";


const move = (source, destination, droppableSource, droppableDestination) => {
  const sourceClone = Array.from(source);
  const destClone = Array.from(destination);
  const [removed] = sourceClone.splice(droppableSource.index, 1);

  destClone.splice(droppableDestination.index, 0, removed);

  const result = {};
  result[droppableSource.droppableId] = sourceClone;
  result[droppableDestination.droppableId] = destClone;

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "0.7rem",
    borderRadius: "0.25rem",
    fontSize: "calc(0.5rem + .7vw)",
  
    // change background colour if dragging
    background: isDragging ? "#9ec5fe" : "#ffe69c",

  ...draggableStyle,
});
const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "lightblue" : "#9ec5fe",
  padding: 2,
  minWidth: 200,
  borderRadius: "0.25rem",
  fontSize: "calc(0.5rem + .7vw)",
  minHeight: 50,
  margin: 2,
});

export const Dropword = () => {

  const dispatch = useDispatch();

  const [state, setState] = useState([
    [],
    [],
    [],
    [{ id: "1", content: "многое потерял" }],
    [{ id: "2", content: "все потерял" }],
    [{ id: "3", content: "ничего не потерял" }],
  ]);

  const trueans = ["3","1","2"]

  function onDragEnd(result) {
    const { source, destination } = result;

    // dropped outside the list
    if (!destination) {
      return;
    }
    const sInd = +source.droppableId;
    const dInd = +destination.droppableId;

    if (sInd === dInd) {
      //   const items = reorder(state[sInd], source.index, destination.index);
      //   const newState = [...state];
      //   newState[sInd] = items;
      //   setState(newState);
      return;
    } else {
      const result = move(state[sInd], state[dInd], source, destination);
      if (result[dInd].length === 2) {
        return;
      } else {
        const newState = [...state];
        newState[sInd] = result[sInd];
        newState[dInd] = result[dInd];
        console.log(result[dInd]);

        setState(newState);
      }
    }
  }

  const currentAns = () => {
    let i = trueans.length;
    let arrstate = state.slice(0,3)
    while (i--) {
      if(arrstate[i][0]) {
        if (trueans[i] !== arrstate[i][0].id) return dispatch(falseAnswer(1))
        return dispatch(trueAnswer(1));
      }
      else {
        dispatch(falseAnswer(1))
      }
    }
  };

  return (
    <div>
      <div className="quiz-title">
        <h4>
          Заполни пропуски в данной пословице. (зажимай ответы левой клавишей
          мыши и перетаскивай в нужное место)
        </h4>
      </div>
      <div className="d-flex flex-wrap text-danger justify-content-center">
        <DragDropContext onDragEnd={onDragEnd}>
          <h2>Деньги потерял - </h2>
          <Droppable droppableId={`${0}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[0].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center" >
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <h2>,время потерял - </h2>
          <Droppable droppableId={`${1}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[1].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center">
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <h2>,здоровье потерял - </h2>
          <Droppable droppableId={`${2}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[2].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center">
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <h2>.</h2>
          <div className="mt-5 d-flex flex-wrap justify-content-around">
          <Droppable droppableId={`${3}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[3].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className="border border-dark rounded"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center">
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId={`${4}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[4].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className="border border-dark rounded"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center">
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          <Droppable droppableId={`${5}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[5].map((item, index) => (
                  <Draggable key={item.id} draggableId={item.id} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        className="border border-dark rounded"
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <div className="text-center">
                          <h4>{item.content}</h4>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
          </div>
        </DragDropContext>
      </div>
      <div className="quiz-btn">
        {state && (
          <button
            type="button"
            className="btn btn btn-success btn-block"
            onClick={currentAns}
          >
            Проверить
          </button>
        )}
      </div>
    </div>
  );
};
