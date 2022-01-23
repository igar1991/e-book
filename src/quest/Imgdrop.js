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


export const Imgdrop = ({ quiz, ans, col, trueans, arr, ansImg, arrImg, h,w,  dec, hq, col2 }) => {
  const dispatch = useDispatch();
  const getListStyle = (isDraggingOver) => ({
    background: ansImg ?(isDraggingOver ? "#0dcaf0" : "#ffc107"):'',
    border: `1px solid black`,
    minWidth: "5vw",
    width: w,
    opacity: isDraggingOver ? 0.33 : 1,
    borderRadius: "0.25rem",
    fontSize: "calc(0.5rem + .7vw)",
    height: h,
    minHeight: "5vw",
    marginLeft: "auto",
    marginRight: "auto",

  });
  const getItemStyle = (isDragging, draggableStyle) => ({
    userSelect: "none",
    padding: "0.1rem",
    borderRadius: "0.25rem",
    fontSize: "calc(0.5rem + .7vw)",
    height: h,
  
    // change background colour if dragging
    background: ansImg ? (isDragging ? "#0dcaf0" : "#0d6efd"):'',
  
    ...draggableStyle,
  });
  const [state, setState] = useState(null);

  useEffect(() => {
    setState(arr)
  }, [arr])


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
    let arrstate = state.slice(0, i);
    while (i--) {
      if (trueans[i] !== arrstate[i][0]?.id) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '50vh'}} >
      <div className="quiz-title">
        <h4>{quiz}</h4>
        {dec&&<h4>{dec}</h4>}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="d-flex flex-wrap">
          {state && state?.map((el, i) => <div key={i} className={`col-sm-${i<ans.length? col: col2} col-6 mb-1 p-1`}>
          {ansImg&&ans[i]&& <div className="d-flex justify-content-center" >
            <img src={ans[i]} alt="1" style={{ height: hq, objectFit: 'contain' }} />
          </div>}
          {!ansImg &&ans[i]&& <div className="card text-center bg-success p-3" style={{ height: hq }}>
            <h4
              className="card-text text-white"
              style={{
                fontSize: "calc(0.4rem + 1vw)",
              }}
            >
              {ans[i]}
            </h4>
          </div>}
            <Droppable droppableId={`${i}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {state[i]?.map((item, index) => (
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
                        <div className="d-flex justify-content-center align-items-center">
                          {arrImg && <img src={item.content} alt="1"  style={{height: h, objectFit: 'contain'}}/>}
                          {!arrImg && <h4
                            className="card-text text-center pt-2"
                            style={{
                              fontSize: "calc(0.4rem + 1vw)",
                            }}
                          >
                            {item.content}
                          </h4>}
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable></div>)}
        </div>
      </DragDropContext>
      <div>
      <CheckButton currentAns={currentAns} />
      </div>
    </div>
  );
};
