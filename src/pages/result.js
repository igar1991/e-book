import React from "react";

export const Result = () => {
  return (
    <div className="book" style={{ minHeight: "40rem" }}>
      <div className="d-flex justify-content-around p-2">
        <h2>Результаты</h2>
      </div>
      <div className="row justify-content-around p-4">
        <div className="resultcards col-lg-2 col-md-6 m-1">
          <h3>Математика</h3>
          <h4>Урок 23</h4>
          <hr />
          <h4>Поляков Вася</h4>
          <h5>23.04.21</h5>
          <hr />
          <h4 className="text-success">Выполнено: 10</h4>
          <h4 className="text-danger">Ошибок: 8</h4>
          <h4 className="text-warning">Пропущено: 2</h4>
          <hr />
          <h3 className="text-success">Отлично! 😀</h3>
        </div>
        <div className="resultcards col-lg-2 col-md-6 m-1">
          <h3>История</h3>
          <h4>Урок 24</h4>
          <hr />
          <h4>Поляков Вася</h4>
          <h5>23.04.21</h5>
          <hr />
          <h4 className="text-success">Выполнено: 10</h4>
          <h4 className="text-danger">Ошибок: 8</h4>
          <h4 className="text-warning">Пропущено: 2</h4>
          <hr />
          <h3 className="text-warning">Хорошо! 😐</h3>
        </div>
        <div className="resultcards col-lg-2 col-md-6 m-1">
          <h3>Биология</h3>
          <h4>Урок 3</h4>
          <hr />
          <h4>Поляков Вася</h4>
          <h5>23.04.21</h5>
          <hr />
          <h4 className="text-success">Выполнено: 10</h4>
          <h4 className="text-danger">Ошибок: 8</h4>
          <h4 className="text-warning">Пропущено: 2</h4>
          <hr />
          <h3 className="text-danger">Плохо! 😔</h3>
        </div>
        <div className="resultcards col-lg-2 col-md-6 m-1">
          <h3>История</h3>
          <h4>Урок 23</h4>
          <hr />
          <h4>Поляков Вася</h4>
          <h5>23.04.21</h5>
          <hr />
          <h4 className="text-success">Выполнено: 10</h4>
          <h4 className="text-danger">Ошибок: 8</h4>
          <h4 className="text-warning">Пропущено: 2</h4>
          <hr />
          <h3 className="text-danger">Плохо! 😔</h3>
        </div>
        <div className="resultcards col-lg-2 col-md-6 m-1">
          <h3>Математика</h3>
          <h4>Урок 23</h4>
          <hr />
          <h4>Поляков Вася</h4>
          <h5>23.04.21</h5>
          <hr />
          <h4 className="text-success">Выполнено: 10</h4>
          <h4 className="text-danger">Ошибок: 8</h4>
          <h4 className="text-warning">Пропущено: 2</h4>
          <hr />
          <h3 className="text-danger">Плохо! 😔</h3>
        </div>
      </div>
    </div>
  );
};
