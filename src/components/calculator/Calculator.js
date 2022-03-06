import React, { useState } from "react";
import Button from "../button/Button";
import "./Calculator.css";

const Calculator = () => {
    const [submitNum, setSubmitNum] = useState({
        num: 0,
        operator: "",
        result: 0,
    });

    const onSubmitNum = (value) => {
        setSubmitNum(value);
    };

    return (
        <div className="border">
            <h2>Calculator App</h2>
            <input className="result-input" disabled value={submitNum.num} />
            <Button onSubmitNum={onSubmitNum} />
        </div>
    );
};

export default Calculator;
