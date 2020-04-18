import React from "react";
import { default as st } from "./style";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import CreateBordBtn from "../../components/CreateBordBtn";
import CrossBtn from "../../components/CrossBtn";

const buildList = (obj, removeBoard) => {
    let list = [];

    for (let key in obj) {
        list.push(
            <div className={`${st}__item ${st}__item_board`} key={key}>
                <Link to={`/board/${key}`} className={`${st}__board-link`}>
                    <h3 className={`${st}__title`}>{obj[key].title}</h3>
                </Link>
                <div className={`${st}__cross`}>
                    <CrossBtn clickHandler={() => removeBoard(key)} />
                </div>
            </div>
        );
    }

    return list;
};

const BordsList = ({ list, addBoard, removeBoard }) => {
    return (
        <div className={st}>
            {list && buildList(list, removeBoard)}
            <div className={`${st}__item`}>
                <CreateBordBtn
                    createHandler={addBoard}
                    title="Создать доску"
                    form={{
                        placeholder: "Добавить заголовок доски",
                        btnText: "Создать доску",
                        initialValues: { title: "" },
                    }}
                />
            </div>
        </div>
    );
};

BordsList.propTypes = {
    list: PropTypes.object,
    addBoard: PropTypes.func.isRequired,
    removeBoard: PropTypes.func.isRequired,
};

export default BordsList;
