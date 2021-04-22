import React from "react";

export const Solution = () => {
  return (
    <div className="book p-2">
      <div className="d-flex justify-content-around p-1">
        <h2>Урок №1.</h2>
      </div>
      <div className="d-flex justify-content-around p-1">
        <h4>Название урока.</h4>
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
      <div className="d-flex justify-content-center p-2">
        <h4>
          Текст задания. Текст задания. Текст задания.??? Текст задания. Текст
          задания. Текст задания.{" "}
        </h4>
      </div>
      <div className="d-flex row justify-content-center pt-2 pb-2">
        <div className="col-lg-5">
          <button type="button" class="btn btn-outline-primary btn-block">
            Варимант один.
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
            Вариант два.
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
            Вариант четыре.
          </button>
          <button type="button" class="btn btn-outline-primary btn-block">
            Вариант пять.
          </button>
        </div>
      </div>

      <div class="modal" tabindex="-1">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">Modal title</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <p>Modal body text goes here.</p>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
