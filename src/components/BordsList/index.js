import React, { Component } from "react";
import { default as st } from "./style";

import CreateBordBtn from "../../components/CreateBordBtn";

const BordsList = ({ list, addBoard }) => {
    return (
        <div className={st}>
            {/*         {list &&
                list.map((item) => {
                    return (
                        <div className={`${st}__item`}>{console.log(item)}</div>
                    );
                })}
*/}
            <div className={`${st}__item`}>
                <CreateBordBtn createHandler={addBoard} />
            </div>
        </div>
    );
};

export default BordsList;
