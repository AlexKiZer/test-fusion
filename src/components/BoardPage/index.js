import React, { Component } from "react";
import { default as st } from "./style";

import CreateBordBtn from "../../components/CreateBordBtn";

const BoardPage = ({ match, data }) => {
    const { params } = match;

    return (
        <div className={st}>
            {data[params.id] && (
                <h3>{`Доска под названием: ${data[params.id].title}`}</h3>
            )}
            <div className={`${st}__btn-wrapper`}>
                <CreateBordBtn
                    title="Создать колонку"
                    form={{
                        placeholder: "Укажите заголовок колонки",
                        btnText: "Создать колонку",
                        initialValues: { title: "" },
                    }}
                />
            </div>
        </div>
    );
};

export default BoardPage;
