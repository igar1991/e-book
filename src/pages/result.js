import React from "react";
const store = require('store')


export const Result = () => {

  const allResult = store.get('resultBook')

  return (
    <div className="book" style={{ minHeight: "40rem" }}>
      <div className="d-flex justify-content-around p-2">
        <h2>Результаты</h2>
      </div>
      <div className="row justify-content-around p-4">
        {allResult && allResult.map((item, index) => {
          let truans = []
          let mistake1 = []
          let mistake2 = []
          let err = []
          for(let i=0; i<10; i++) {
            if(Number(item.miss[i])===0) {
              truans.push(i)
            } else if(Number(item.miss[i])===1) {
              mistake1.push(i)
            } else if(Number(item.miss[i])===2) {
              mistake2.push(i)
            } else {
              err.push(i)
            }

          }
          return (
            <div className="resultcards col-lg-4 col-md-6 m-1" key={index}>
              <h3>{item.titleBook}</h3>
              <h4>{item.titleClass}</h4>
              <hr />
              <h4>{item.nameStudent}</h4>
              <h5>{item.date}</h5>
              <hr />
              {truans.length>0&&<h4 className="text-success">{`Выполнено с 1 попытки: ${truans.length} заданий (№ ${truans.map((item)=>` ${++item}`)})`}</h4>}
              {mistake1.length>0&&<h4 className="text-warning">{`Выполнено со 2 попытки: ${mistake1.length} заданий (№ ${mistake1.map((item)=>` ${++item}`)})`}</h4>}
              {mistake2.length>0&&<h4 className="text-warning">{`Выполнено с 3 попытки: ${mistake2.length} заданий (№ ${mistake2.map((item)=>` ${++item}`)})`}</h4>}
              {err.length>0&&<h4 className="text-danger">{`Не выполнено: ${err.length} заданий(№ ${err.map((item)=>` ${++item}`)})`}</h4>}
              <hr />
              <h3 className="text-primary">{`Результат: ${Math.ceil(truans.length*10+mistake1.length*5+mistake2.length*2.5)} баллов из 100`}</h3>
            </div>
          )
        })}

      </div>
    </div>
  );
};
