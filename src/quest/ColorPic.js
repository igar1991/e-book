import React, { useState, useEffect } from "react";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CirclePicker } from "react-color";
import { CheckButton } from "../components/checkButton";
import { Modal } from "react-bootstrap";

export const ColorPic = ({arr, trueans, ans, dec }) => {
  const dispatch = useDispatch();

  useEffect(()=>{
    setarrY(arr.map(() => "#000"))
  },[arr])

  const [arrY, setarrY] = useState(null);

  const [currentColor, setCurrentColor] = useState("#000");
  const [modal, setModal] = useState(false);

  const changeColorY = (i) => {
    setarrY(
      arrY.map((item, index) =>
        index === i ?  currentColor : item
      )
    );
  };

  const handColor=(color)=>{
    if(trueans.includes(color)) {
      setCurrentColor(color)
    } else {
      setModal(true)
    }
  }


  const currentAns = () => {
    let i = trueans.length;
    while (i--) {
      if (trueans[i] !== arrY[i]) return dispatch(falseAnswer(1));
    }
    return dispatch(trueAnswer(1));

  };

  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '95vh'}}>
      <div className="quiz-title">
        <h4>{ans}</h4>
        {dec&&<h4>{dec}</h4>}
      </div>
      <div className="d-flex flex-row justify-content-center">
        <div className="d-flex flex-column justify-content-between col-9 col-sm-6 col-lg-10 col-md-10 me-2">
          {arrY &&
            arr.map((item, index) => {
              return (
                <div className="d-flex flex-row justify-content-center" key={index}>
                  <h4
                    className="col-sm-10"
                    style={{ color: arrY[index] }}
                    onClick={() => changeColorY(index)}
                    role="button"
                  >
                    {item}
                  </h4>
                </div>
              );
            })}
            <div className="d-flex flex-row-reverse">
            <button
            type="button"
            className="btn btn-warning btn-block mt-2 col-5 col-sm-5 col-lg-3 col-md-4 text-white"
            onClick={() => setCurrentColor("#000")}
          >
            Ластик
          </button>
          </div>
        </div>
        
        <div className="cl-par d-flex">
        <CirclePicker
          className="flex-column "
          circleSize={46}
          colors={[
            "#32adf0",
            "#f74f5a",
            "#18d945",
            "#ffc107",
            "#fd7e14",
          ]}
          onChange={(e) => handColor(e.hex)}
        />
        <div className="cl-par2 ml-2"></div>
        </div>
        
      </div>
      <div><CheckButton currentAns={currentAns} /></div>
      <Modal
          size="md"
          show={modal}
          backdrop="static"
          keyboard={false}
          centered
          aria-labelledby="contained-modal-title-vcenter"
        >
          <Modal.Header className="bg-danger text-light">
            <Modal.Title>Будь внимательней с цветами!</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <h2>К сожалению, ты выбрал неправильный цвет.</h2>
          </Modal.Body>
          <Modal.Footer>
          <button
              type="button"
              className="btn btn-danger btn-block"
              onClick={()=>setModal(false)}
            >
              Закрыть
          </button>

          </Modal.Footer>
        </Modal>
    </div>
  );
};
