import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { falseAnswer, nextQuest, trueAnswer, addStartdata, addAllResult } from "../redux/action"
import { useDispatch } from "react-redux";

export const Solution = () => {

  const dispatch = useDispatch();
  const allQuests = useSelector(state => state.solutionReducer.allquests)
  const currentQuest = useSelector(state => state.solutionReducer.currentQuest)
  const modalFalse = useSelector(state => state.solutionReducer.modalFalse)
  const modalTrue = useSelector(state => state.solutionReducer.modalTrue)

  const [name, setName] = useState('')
  const [numberClass, setNumberClass] = useState('')

  const book = useSelector(state => state.bookReducer)
  const stateR = useSelector(state => state.resultReducer)

  let his = useHistory()

  const answerTrue = () => {
    if (allQuests.quests.length <= currentQuest + 1) {
      dispatch(trueAnswer(1));
      dispatch(addAllResult());
      his.push("/result")
    } else {
      dispatch(trueAnswer(1));
      dispatch(nextQuest(1));
    }
  };
  return (
    <div className="book p-2">
      {allQuests&&<><div className="d-flex justify-content-around p-1">
        <h2>Урок №{currentQuest + 1}</h2>
      </div>
      <div className="d-flex justify-content-around p-1">
        <h4>{allQuests.title}</h4>
      </div>
      <hr />
      <div className="d-flex flex-wrap row justify-content-center m-3">
        {allQuests.quests.map((item, index) => {
            return (
              <div
                key={index}
                className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1"
              >
                {currentQuest <= index ? (
                  <div
                    className="border border-primary rounded-circle"
                    style={{ width: "2rem", height: "2rem" }}
                  >
                    <h4 className="text-center">{index + 1}</h4>
                  </div>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="35"
                    height="35"
                    fill="green"
                    className="bi bi-check-circle"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                    <path d="M10.97 4.97a.235.235 0 0 0-.02.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05z" />
                  </svg>
                )}
              </div>
            );
          })}
      </div>
      <hr />
      <div>{allQuests.quests[currentQuest]}</div>
      <Modal
        size="md"
        show={modalTrue}
        backdrop="static"
        keyboard={false}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-success text-light">
          <Modal.Title>Верно! 😀</Modal.Title>
        </Modal.Header>
        <Modal.Body className="d-flex justify-content-center">
          {(allQuests.quests.length <= currentQuest + 1) ? <h2>Поздравляем!<br /> Вы прошли урок Урок №{currentQuest + 1}</h2> : <h2>Молодец! Так держать!</h2>}
        </Modal.Body>
        <Modal.Footer>
          {(allQuests.quests.length <= currentQuest + 1) ? <button
            type="button"
            className="btn btn-success btn-block"
            onClick={answerTrue}
          >
            Сохранить результаты
          </button> : <button
            type="button"
            className="btn btn-success btn-block"
            onClick={answerTrue}
          >
            Далее
          </button>}

        </Modal.Footer>
      </Modal>
      <Modal
        size="md"
        show={modalFalse}
        backdrop="static"
        keyboard={false}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-danger text-light">
          <Modal.Title>Неверно! 😔</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>Не огорчайся! Попробуй еще раз!</h2>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-danger btn-block"
            onClick={() => dispatch(falseAnswer(1))}
          >
            Закрыть
          </button>
        </Modal.Footer>
      </Modal>
      <Modal
        size="lg"
        show={stateR.modalName}
        backdrop="static"
        keyboard={false}
        centered
        aria-labelledby="contained-modal-title-vcenter"
      >
        <Modal.Header className="bg-success text-light">
          <Modal.Title>Введите ваши данные</Modal.Title>
        </Modal.Header>
        <Modal.Body>

          <div className="row">

            <div className="col-md-9">
              <label htmlFor="name" className="form-label">
                Фамилия и Имя
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="name"
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="col-md-3">
              <label htmlFor="class" className="form-label">
                Класс
              </label>
              <input
                type="text"
                className="form-control form-control-lg"
                id="class"
                onChange={(e) => setNumberClass(e.target.value)}
              />
            </div>

          </div>
        </Modal.Body>
        <Modal.Footer>
          <button
            type="button"
            className="btn btn-success btn-block"
            onClick={() => {
              dispatch(addStartdata(name, numberClass, book.title, allQuests.title))
            }}
          >
            Начать
          </button>
        </Modal.Footer>
      </Modal></>}
      
    </div>
  );
};
