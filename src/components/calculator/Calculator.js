import React from "react";
import Button from "../button/Button";
import "./Calculator.css";

const Calculator = () => {
    return (
        <div className="border">
            <h2>Calculator App</h2>
            <input className="result-input" disabled value={0} />
            <Button />
        </div>
    );
};

export default Calculator;
