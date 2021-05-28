import React, {useContext} from "react";
import { useDispatch } from "react-redux";

import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/book/bookContext";
import { ResultContext } from "../context/result/resultContext";
import { SolutionContext } from "../context/solution/solutionContext";
import { ThemeContext } from "../context/themebook/themeContext";
import {addTheme, addQuest, clearQuest, openModalName} from "../redux/action"

export const Menu = () => {
  //const {book} = useContext(BookContext)
  const dispatch = useDispatch();
 // const {theme} = useContext(ThemeContext)
  // const {addQuest, clearQuest} = useContext(SolutionContext)
  // const {openModalName}=useContext(ResultContext)
  let his = useHistory()

  const book = useSelector(state=>state.bookReducer)
  const theme = useSelector(state=>state.themeReducer)

  const addQuestAll=(item)=>{
    his.push("/solution")
    dispatch(addQuest(item))
    console.log(item)
    
  }
  return (
    <div className="book">
      <div className="d-flex justify-content-around p-2">
          <h2>{book&&book.title}</h2>
        </div>
    <div className="m-2 row justify-content-center">
      <div className="list-group col-lg-5 mb-2">  
      {book&&book.theme.map((item, index)=>{
        return(
          <button
          key={index}
          type="button"
          className="list-group-item list-group-item-primary list-group-item-action"
          onClick={() =>dispatch(addTheme(item))}
        >
          {item.title}
        </button>
        )
      })}
      </div>
      <div className="list-group col-lg-5 mb-2">
        {theme&&theme.class.map((item, index)=>{
          return (
            <button key={index} type="button" className="list-group-item list-group-item-action list-group-item-warning" onClick={()=>{
              dispatch(clearQuest())
              addQuestAll(item)
              dispatch(openModalName())
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
