import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";


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




export const DropwordList = ({quiz, ans, trueans, h}) => {
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "#0dcaf0" : "#ffc107",
    minWidth: 100,
    width: "100%",
    borderRadius: "0.25rem",
    fontSize: "calc(0.5rem + .7vw)",
    minHeight: h,
    maxHeight: h*1.2,
    margin: 2,
  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "0.7rem",
    minHeight: h,
    borderRadius: "0.25rem",
    fontSize: "calc(0.1rem + .7vw)",
  
    // change background colour if dragging
    background: isDragging ? "#0dcaf0" : "#0d6efd",

  ...draggableStyle,
});
  const dispatch = useDispatch();

  useEffect(()=>{
    setState(ans)
  },[ans] )

  const [state, setState] = useState(null);

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
        setState(newState);
      }
    }
  }

  const currentAns = () => {
    let i = trueans.length;
    let arrstate = state.slice(0,5)
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
        <h4>{quiz}</h4>
      </div>
      <div className="d-flex col-12 flex-wrap">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="d-flex flex-column col-12 col-sm-6 p-2">
          {state?.filter((e, i)=>i<state.length/2).map((el, ind)=><div key={ind}>
                          <Droppable droppableId={`${ind}`}>
                            {(provided, snapshot) => (
                              <div
                              className="mb-3"
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                              >
                                {el.map((item, index) => (
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
                                        <div className="text-center text-white mb-1" >
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
          )}
          </div>
          <div className="d-flex flex-column col-12 col-sm-6 p-2">
                    {state?.filter((e, i)=>i>=state.length/2).map((el, ind)=><div key={ind}>
                          <Droppable droppableId={`${ind+state.length/2}`}>
                            {(provided, snapshot) => (
                              <div
                              className="mb-3"
                                ref={provided.innerRef}
                                style={getListStyle(snapshot.isDraggingOver)}
                                {...provided.droppableProps}
                              >
                                {el.map((item, index) => (
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
                                        <div className="text-center text-white mb-1" >
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
          )}
          </div>
        </DragDropContext>
      </div> 
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
