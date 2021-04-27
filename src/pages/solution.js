import React, {useContext} from "react";
import { SolutionContext } from "../context/solution/solutionContext";
import { Quest1 } from "../quest/quest1";

export const Solution = () => {

  const {allQuests, current}=useContext(SolutionContext)
  return (
    <div className="book p-2">
      <div className="d-flex justify-content-around p-1">
        <h2>Урок №1.</h2>
      </div>
      <div className="d-flex justify-content-around p-1">
        <h4>{allQuests.title}</h4>
      </div>
      <hr />
      <div className="d-flex flex-wrap row justify-content-center m-3">
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">1</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">2</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">3</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">4</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">5</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">6</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">7</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-primary ml-1 mr-1 mt-1">
          <div
            className="border border-primary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">8</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-secondary ml-1 mr-1 mt-1">
          <div
            className="border border-secondary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">9</h4>
          </div>
        </div>
        <div className="row justify-content-center align-content-center text-secondary ml-1 mr-1 mt-1">
          <div
            className="border border-secondary rounded-circle"
            style={{ width: "2rem", height: "2rem" }}
          >
            <h4 className="text-center">10</h4>
          </div>
        </div>
      </div>
      <hr />
      <div>
        {allQuests&&allQuests.quests[current]}
      </div>
    </div>
  );
};
