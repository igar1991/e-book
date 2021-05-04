import React, { useContext } from "react";
import { Modal, Button, Row } from "react-bootstrap";
import { SolutionContext } from "../context/solution/solutionContext";

export const Solution = () => {
  const { allQuests, current } = useContext(SolutionContext);
  return (
    <div className="book p-2">
      <div className="d-flex justify-content-around p-1">
        <h2>Урок №{current + 1}</h2>
      </div>
      <div className="d-flex justify-content-around p-1">
        <h4>{allQuests && allQuests.title}</h4>
      </div>
      <hr />
      <div className="d-flex flex-wrap row justify-content-center m-3">
        {allQuests &&
          allQuests.quests.map((item, index) => {
            return (
              <div
                key={index}
                className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1"
              >
                <div
                  className="border border-primary rounded-circle"
                  style={{ width: "2rem", height: "2rem" }}
                >
                  <h4 className="text-center">{index + 1}</h4>
                </div>
              </div>
            );
          })}
      </div>
      <hr />
      <div>{allQuests && allQuests.quests[current]}</div>
        <Modal
          size="sm"
          show={false}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header className="bg-success">
            <Modal.Title>Верно! 😀</Modal.Title>
          </Modal.Header>
          <Modal.Body className="d-flex justify-content-center">
            <h2>Молодец! Так держать!</h2>
          </Modal.Body>
          <Modal.Footer>
            <button type="button" class="btn btn-success btn-block">
              Далее
            </button>
          </Modal.Footer>
        </Modal>
        <Modal
          size="sm"
          show={false}
          backdrop="static"
          keyboard={false}
          centered
        >
          <Modal.Header className="bg-danger">
            <Modal.Title>Неверно! 😔</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>Не огорчайся! Попробуй еще раз!</h2> 
          </Modal.Body>
          <Modal.Footer>
            <button type="button" class="btn btn-danger btn-block">
              Закрыть
            </button>
          </Modal.Footer>
        </Modal>
    </div>
  );
};
