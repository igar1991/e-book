import React from "react";
import ser from './ser.png'
const store = require('store')


export const Result = () => {

  const allResult = store.get('resultBook')

  function wrapText(context, text, x, y, maxWidth, lineHeight) {
    let words = text.split(' ');
    let line = '';

    for(let n = 0; n < words.length; n++) {
      let testLine = line + words[n] + ' ';
      let metrics = context.measureText(testLine);
      let testWidth = metrics.width;
      if (testWidth > maxWidth && n > 0) {
        context.fillText(line, x, y);
        line = words[n] + ' ';
        y += lineHeight;
      }
      else {
        line = testLine;
      }
    }
    context.fillText(line, x, y);
  }

  const uploadSer = (titleClass, nameSrudent, dateName, ball ) => {
    let canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    
    function getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
    }
    canvas.width = 1623
    canvas.height = 1124
    let image = new Image()
    image.src = ser
    image.width = 1623
    image.height = 1124

    image.onload = function (){
      ctx.drawImage(image, 0, 0, 1623, 1124)
      ctx.font = "45px serif";
      ctx.fillText(`№ ${getRandomInt(1000, 9999)}`, 100, 90);
      ctx.textAlign = 'center'
      wrapText(ctx, titleClass ,800, 360, 800, 70 )
      ctx.font = "60px serif";
      ctx.fillText(nameSrudent, 800, 580);
      ctx.font = "45px serif";
      ctx.fillText(ball, 800, 720);
      ctx.fillText(dateName, 1190, 1050);
      let data = canvas.toDataURL("image/png")
      downloadURI(data, 'Сертификат')
    }
  }

  const downloadURI = (uri, name) => {
    const link = document.createElement('a');
    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  // const handleExport = () => {
  //   const uri = stageRef.current?.toDataURL();
  //   downloadURI(uri, 'stage.png');
  // };

  return (
    <div className="book" style={{ minHeight: "40rem" }}>
      <div className="d-flex justify-content-around p-2">
        <h2>Результаты</h2>
      </div>
      <div className="row justify-content-start p-4">
        {allResult && allResult.map((item, index) => {
          let truans = []
          let mistake1 = []
          let mistake2 = []
          let err = []
          for (let i = 0; i < 10; i++) {
            if (Number(item.miss[i]) === 0) {
              truans.push(i)
            } else if (Number(item.miss[i]) === 1) {
              mistake1.push(i)
            } else if (Number(item.miss[i]) === 2) {
              mistake2.push(i)
            } else {
              err.push(i)
            }

          }

          let ball = Math.ceil(truans.length * 10 + mistake1.length * 5 + mistake2.length * 2.5)
          return (
            <div className="col-lg-4 col-md-6" key={index}>
               <div className="resultcards m-1 p-2">
              <h3>{item.titleBook}</h3>
              <h4>{item.titleClass}</h4>
              <hr />
              <h4 className="fw-bold">{item.nameStudent}</h4>
              <h5>{item.date}</h5>
              <hr />
              {truans.length > 0 && <h4 className="text-success">{`Выполнено с 1 попытки: ${truans.length} заданий (№ ${truans.map((item) => ` ${++item}`)})`}</h4>}
              {mistake1.length > 0 && <h4 className="text-warning">{`Выполнено со 2 попытки: ${mistake1.length} заданий (№ ${mistake1.map((item) => ` ${++item}`)})`}</h4>}
              {mistake2.length > 0 && <h4 className="text-warning">{`Выполнено с 3 попытки: ${mistake2.length} заданий (№ ${mistake2.map((item) => ` ${++item}`)})`}</h4>}
              {err.length > 0 && <h4 className="text-danger">{`Не выполнено: ${err.length} заданий (№ ${err.map((item) => ` ${++item}`)})`}</h4>}
              <hr />
              <h3 className="text-primary">{`Результат: ${Math.ceil(truans.length * 10 + mistake1.length * 5 + mistake2.length * 2.5)} баллов из 100`}</h3>
              
            </div>
            <div className="d-flex justify-content-center">
            <button className = "btn btn-outline-success fs-4" onClick={()=>uploadSer(item.titleClass, item.nameStudent, item.date, ball)}>Скачать сертификат</button>
            </div>
            </div>
            
          )
        })}

      </div>
    </div>
  );
};
