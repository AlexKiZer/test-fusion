import React, { Fragment, useState } from "react";
import { default as st } from "./style";

import BoardPopup from "../../components/BoardPopup";

const CreateBordBtn = ({ createHandler }) => {
    let [showPopup, handlePopup] = useState(false);

    const togglePopup = (state) => {
        handlePopup(!state);
    };

    return (
        <Fragment>
            <div className={st} onClick={() => togglePopup(showPopup)}>
                <p>Создать доску</p>
            </div>
            {showPopup && (
                <BoardPopup toggleHandler={togglePopup} state={showPopup} />
            )}
        </Fragment>
    );
};

export default CreateBordBtn;
