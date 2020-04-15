import React from "react";
import { default as st } from "./style";

const CrossBtn = ({ clickHandler }) => {
    return <div onClick={() => clickHandler()} className={st}></div>;
};

export default CrossBtn;
