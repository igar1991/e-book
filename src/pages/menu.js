import React, {useContext} from "react";
import { useHistory } from "react-router-dom";
import { BookContext } from "../context/book/bookContext";
import { SolutionContext } from "../context/solution/solutionContext";
import { ThemeContext } from "../context/themebook/themeContext";

export const Menu = () => {
  const {book} = useContext(BookContext)
  const {theme, addTheme} = useContext(ThemeContext)
  const {addQuest, clearQuest} = useContext(SolutionContext)
  let his = useHistory()

  const addQuestAll=(item)=>{
    his.push("/solution")
    addQuest(item)
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
          onClick={() =>addTheme(item)}
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
              clearQuest()
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
