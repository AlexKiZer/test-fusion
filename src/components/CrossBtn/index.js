import React from "react";
import { default as st } from "./style";
import PropTypes from "prop-types";

const CrossBtn = ({ clickHandler }) => {
    return <div onClick={() => clickHandler()} className={st}></div>;
};

CrossBtn.propsTypes = {
    clickHandler: PropTypes.func.isRequired,
};

export default CrossBtn;
