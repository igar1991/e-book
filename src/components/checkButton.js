import React from "react";

export const CheckButton=({currentAns})=>{
    return (
        <div className="quiz-btn">
        <button
          type="button"
          className="btn btn-success w-100"
          onClick={currentAns}
        >
          Проверить
        </button>
      </div>
    )
}