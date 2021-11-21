import React from "react";

export const CheckButton=({currentAns, dic})=>{
    return (
        <div className="quiz-btn">
        <button
          type="button"
          className={`btn btn-success w-100 ${dic&&"disabled"}`}
          onClick={currentAns}
        >
          Проверить
        </button>
      </div>
    )
}