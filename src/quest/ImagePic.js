import React, { useState } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const ImagePic = ({ imgArr, quiz, trueans }) => {
  const [value, setValue] = useState(null);
  const dispatch = useDispatch();

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
      return dispatch(trueAnswer(1));

    }
  
  };

  return (
    <div>
      <div className="quiz-title">
        <h4>{quiz}</h4>
      </div>
      <ImagePicker
        images={imgArr.map((image, i) => ({ src: image, value: i }))}
        onPick={(image) => setValue(image.map((item) => item.value))}
        multiple={true}
      />
      <div className="quiz-btn">
        {value && (
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
