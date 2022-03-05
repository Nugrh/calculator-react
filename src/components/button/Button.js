import React from "react";
import "./Button.css";

const Button = () => {
    return (
        <form className="grid-container">
            {/* first row */}
            <input className="grid-item" type={"button"} value={"%"} />
            <input className="grid-item" type={"button"} value={"X"} />
            <input className="grid-item" type={"button"} value={"+"} />

            {/* second row */}
            <input className="grid-item" type={"button"} value={"7"} />
            <input className="grid-item" type={"button"} value={"8"} />
            <input className="grid-item" type={"button"} value={"9"} />

            {/* third row */}
            <input className="grid-item" type={"button"} value={"4"} />
            <input className="grid-item" type={"button"} value={"5"} />
            <input className="grid-item" type={"button"} value={"6"} />

            {/* fourth row */}
            <input className="grid-item" type={"button"} value={"<-"} />
            <input className="grid-item" type={"button"} value={"0"} />
            <button className="grid-item" type={"submit"}>
                =
            </button>
        </form>
    );
};

export default Button;
