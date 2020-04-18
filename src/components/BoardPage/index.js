import React from "react";
import { default as st } from "./style";
import Board from "react-trello";
import PropTypes from "prop-types";

const setLineToStorage = (newData, id) => {
    const currentLocalStorageData =
        JSON.parse(localStorage.getItem("desk")) || {};

    currentLocalStorageData[id].lanes = newData.lanes;
    localStorage.setItem("desk", JSON.stringify(currentLocalStorageData));
};

const BoardPage = ({ match, data }) => {
    const { params } = match,
        { id } = params;

    return (
        <div className={st}>
            {data[params.id] && (
                <h3
                    className={`${st}__title`}
                >{`Доска под названием: ${data[id].title}`}</h3>
            )}

            <div className={`${st}__board`}>
                {data[id] && (
                    <Board
                        data={data[id]}
                        draggable
                        editable
                        canAddLanes
                        onDataChange={(newData) => {
                            setLineToStorage(newData, id);
                        }}
                    />
                )}
            </div>
        </div>
    );
};

BoardPage.propTypes = {
    match: PropTypes.object.isRequired,
    data: PropTypes.object,
};

export default BoardPage;
