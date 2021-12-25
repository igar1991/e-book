import React, { useEffect, useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const getItemStyle = (isDragging, draggableStyle) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: "none",
  padding: "0.7rem",
  margin: `0 0 0.5rem 0`,
  borderRadius: "0.25rem",
  fontSize: "calc(0.5rem + .7vw)",

  // change background colour if dragging
  background: isDragging ? "#0dcaf0" : "#ffc107",

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? "white" : "white",
  padding: "0.1rem",
  borderRadius: "0.25rem",
  borderWidth: "1rem",
  borderColor: "gray",
});

export const Arrow = ({ quiz, description, ans, trueans }) => {
  const [state, setState] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setState({ items: description });
  }, [description]);

  const onDragEnd = (result) => {
    // dropped outside the list
    if (!result.destination) {
      return;
    }
    const items = reorder(
      state.items,
      result.source.index,
      result.destination.index
    );

    setState({
      items,
    });
  };

  const currentAns = () => {
    let i = trueans.length;
    while (i--) {
      if (trueans[i] !== state.items[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));
  };

  const clr = ["#0d6efd", "#6f42c1", "#dc3545", "#198754"];

  return (
    <>
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '95vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      {state && (
        <div className="d-flex">
          <div className="d-flex flex-column col-lg-4 justify-content-around ">
            {ans?.map((item, index) => (
              <div
                key={index}
                className="text-center text-white border border-dark rounded p-2"
                style={{
                  fontSize: "calc(0.8rem + .7vw)",
                  backgroundColor: `${clr[index]}`,
                }}
              >
                {item}
              </div>
            ))}
          </div>

          <div className="col-lg-8">
            <DragDropContext onDragEnd={(res) => onDragEnd(res)}>
              <Droppable droppableId="droppable">
                {(provided, snapshot) => (
                  <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    {state.items.map((item, index) => (
                      <Draggable
                        key={index}
                        draggableId={`item-${index}`}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            style={getItemStyle(
                              snapshot.isDragging,
                              provided.draggableProps.style
                            )}
                            className="text-center text-white"
                          >
                            {item}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            </DragDropContext>
          </div>
        </div>
      )}
      <CheckButton currentAns={currentAns} />
      </div>
    </>
  );
};
