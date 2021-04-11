import React from 'react';

export const Book =()=> {
    return (
        <div className="row justify-content-around">
            <div  className="col-lg-8 book" style={{minHeight: "500px"}}>
                <div className="d-flex justify-content-around p-2"><h2>Наши тетради</h2></div>
            </div>
            <div  className="col-lg-3 advantages" style={{minHeight: "500px"}}>
            <div className="d-flex justify-content-around p-2"><h2>Преимущества</h2></div>
            </div>
            </div>
    )
}