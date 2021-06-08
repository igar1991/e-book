import React, { useState } from "react";
import ImagePicker from "react-image-picker";
import "react-image-picker/dist/index.css";
import { falseAnswer, trueAnswer } from "../redux/action";
import { useDispatch } from "react-redux";

export const ImagePic = ({ imgArr, quiz }) => {
  const [value, setValue]=useState(null)
  const dispatch = useDispatch();

  return (
    <div>
      <p>{quiz}</p>
      <ImagePicker
        images={imgArr.map((image, i) => ({ src: image, value: i }))}
        onPick={(image) => setValue(image)}
      />

      <button
        type="button"
        className="btn btn-outline-primary btn-block"
        onClick={() => dispatch(falseAnswer(1))}
      >
        Неправильный ответ
      </button>
      <button
        type="button"
        className="btn btn-outline-primary btn-block"
        onClick={() => dispatch(trueAnswer(1))}
      >
        Правильный ответ
      </button>
    </div>
  );
};
