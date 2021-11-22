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

const getItemStyle = (isDragging, draggableStyle) => ({
  userSelect: "none",
  padding: "0.1rem",
  borderRadius: "0.25rem",
  fontSize: "calc(0.5rem + .7vw)",

  // change background colour if dragging
  background: isDragging ? "#9ec5fe" : "#198754",

  ...draggableStyle,
});


export const Imgdrop = ({ quiz, ans, col, trueans, arr, ansImg, arrImg, h, dec }) => {
  const dispatch = useDispatch();
  const getListStyle = (isDraggingOver) => ({
    background: isDraggingOver ? "lightblue" : "#9ec5fe",
    width: "20vw",
    minWidth: "5vw",
    maxWidth: 200,
    borderRadius: "0.25rem",
    fontSize: "calc(0.5rem + .7vw)",
    height: h,
    minHeight: "5vw",
    maxHeight: 200,
    marginLeft: "auto",
    marginRight: "auto",

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
        console.log(result[dInd]);

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
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        {dec&&<p>{dec}</p>}
      </div>
      <DragDropContext onDragEnd={onDragEnd}>
        <div className="d-flex ">
          {!ansImg && ans?.map((item, index) => <div key={index} className="card text-center bg-success col-lg-4 col-sm-4 col-4 pt-2 pb-2">
            <h4
              class="card-text text-white"
              style={{
                fontSize: "calc(0.4rem + 1vw)",
              }}
            >
              {item}
            </h4>
          </div>)}
          {ansImg && ans?.map((item, index) => <div key={index} className="d-flex justify-content-center col-lg-4 col-sm-4 col-4 pt-2" >
            <img src={item} alt="1" style={{ height: h }} />
          </div>)}
        </div>
        <div className="d-flex flex-wrap">
          {state && state?.map((el, i) => <div className={i < ans.length ? `col-lg-4 col-sm-4 col-4 mb-1` : `col-${col}`}><Droppable droppableId={`${i}`}>
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
                {...provided.droppableProps}
              >
                {i < ans.length && state[i].map((item, index) => (
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
                        <div className="text-center d-flex justify-content-center align-items-center" style={{ width: "20vw", height: h, maxWidth: 200, maxHeight: 200 }}>
                          
                          {arrImg && <img src={item.content} alt="1" className="img-fluid"  style={{height: h, maxHeight: 200}}/>}
                          {!arrImg && <h4
                            className="card-text text-white"
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
                {i >= ans.length && state[i].map((item, index) => (
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
                        <div className="d-flex justify-content-center align-items-center" style={{ width: "20vw", height: h, maxWidth: 200, maxHeight: 200 }}>
                          {arrImg && <img src={item.content} alt="1" className="img-fluid" style={{height: h, maxHeight: 200}} />}
                          {!arrImg && <h4
                            className="card-text text-white text-center"
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
      <CheckButton currentAns={currentAns} />
    </div>
  );
};
