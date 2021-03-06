import React, { useEffect, useState } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";
import { CheckButton } from "../components/checkButton";

export const ImagePic = ({ imgArr, quiz, trueans, des, img, imgsize }) => {

  const [value, setValue] = useState(null);
  const [arrnew, setArr] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    setArr(imgArr)
  }, [imgArr])

  const currentAns = () => {
    let arr = value.sort(function (a, b) {
      return a - b;
    });
    let i = trueans.length;
    if (arr.length !== trueans.length) {
      return dispatch(falseAnswer(1));
    } else {
      while (i--) {
        if (trueans[i] !== arr[i]) return dispatch(falseAnswer(1));
      }
      setValue(null)
      return dispatch(trueAnswer(1));

    }

  };

  return (
    <div className="d-flex flex-column justify-content-between" style={{minHeight: '50vh'}}>
      <div className="quiz-title">
        <h4>{quiz}</h4>
        {des && <h4>{des}</h4>}
        {img && <div className={`col-lg-5 col-sm-11 col-11 d-flex justify-content-center align-content-center`}>
          <img src={img} alt="Responsive" style={{ width: imgsize?imgsize: '90%', maxWidth: "90vw", objectFit: 'contain'}} />
        </div>}
      </div>
      {arrnew && <ImagePicker
        images={arrnew.map((image, i) => ({ src: image, value: i }))}
        onPick={(image) => setValue(image.map((item) => item.value))}
        multiple={true}
      />}
      <div className="mt-3">
      <CheckButton currentAns={currentAns} dic={value ? false : true} />
      </div>
    </div>
  );
};
