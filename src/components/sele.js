import React from "react";

export const Sele = ({ arr, addValue, n }) => {
    return (
        <select
            className="fs-4 form-select d-inline w-auto text-success"
            aria-label="Default select"
            onChange={(e) => addValue(e.target.value, n)}
        ><option selected> </option>
            {arr?.map((item, index) => <option className="fs-4" key={index} value={index}>{item}</option>)}
        </select>
    )
}