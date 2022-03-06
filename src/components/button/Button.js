import React, { useState } from "react";
import "./Button.css";

const Button = (props) => {
    const [inputNum, setInputNum] = useState({
        num: 0,
        operator: "",
        result: 0,
    });

    props.onSubmitNum(inputNum);

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleInput = (e) => {
        setInputNum({ num: e.target.value });
    };

    const handleOperator = (e) => {
        setInputNum({
            operator: e.target.value,
        });
    };

    return (
        <div>
            <form onSubmit={handleOperator} className="grid-container">
                {/* first row */}
                <input
                    className="grid-item"
                    type={"button"}
                    value={"%"}
                    operator={"%"}
                    onClick={(e) => handleOperator(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={"X"}
                    operator={"X"}
                    onClick={(e) => handleOperator(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={"+"}
                    operator={"+"}
                    onClick={(e) => handleOperator(e)}
                />
            </form>
            <form onSubmit={handleSubmit} className="grid-container">
                {/* second row */}
                <input
                    className="grid-item"
                    type={"button"}
                    value={7}
                    onClick={(e) => handleInput(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={8}
                    onClick={(e) => handleInput(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={9}
                    onClick={(e) => handleInput(e)}
                />

                {/* third row */}
                <input
                    className="grid-item"
                    type={"button"}
                    value={4}
                    onClick={(e) => handleInput(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={5}
                    onClick={(e) => handleInput(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={6}
                    onClick={(e) => handleInput(e)}
                />

                {/* fourth row */}
                <input
                    className="grid-item"
                    type={"button"}
                    value={"⇐"}
                    onClick={(e) => handleInput(e)}
                />
                <input
                    className="grid-item"
                    type={"button"}
                    value={0}
                    onClick={(e) => handleInput(e)}
                />
                <button className="grid-item" type={"submit"}>
                    =
                </button>
            </form>
        </div>
    );
};

export default Button;
