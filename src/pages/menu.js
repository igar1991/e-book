import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { addTheme, addQuest, clearQuest, openModalName } from "../redux/action"

export const Menu = () => {

  const dispatch = useDispatch();
  let his = useHistory()

  const book = useSelector(state => state.bookReducer)
  const theme = useSelector(state => state.themeReducer)

  const addQuestAll = (item) => {
    dispatch(clearQuest())
    his.push("/solution")
    dispatch(addQuest(item))
    dispatch(openModalName())
  }

  return (
    <div className="book"  style={{minHeight: '85vh'}}>
      <div className="d-flex justify-content-around p-2">
        <h2>Рабочая электронная тетрадь по безопасности для детей (2-4 класс)</h2>
      </div>
      <div className="m-2 row justify-content-center">
        <div className="list-group col-lg-5 mb-2">
          {book && book.theme.map((item, index) => {
            return (
              <button
                key={index}
                type="button"
                className="list-group-item list-group-item-primary list-group-item-action fs-3"
                onClick={() => dispatch(addTheme(item))}
              >
                {item.title==='ЗОЖ'?"БОНУС! 2 темы ЗОЖ":item.title}
              </button>
            )
          })}
        </div>
        <div className="list-group col-lg-5 mb-2">
          {theme && theme.class.map((item, index) => {
            return (
              <button key={index} type="button" className="list-group-item list-group-item-action list-group-item-warning" onClick={() => {
                addQuestAll(item)
              }}>
                {item.title}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  );
};
