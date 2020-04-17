import React, { Fragment, useState } from "react";
import { default as st } from "./style";

import BoardPopup from "../../components/BoardPopup";

const CreateBordBtn = ({ createHandler, form, title }) => {
    let [showPopup, handlePopup] = useState(false);

    const togglePopup = (state) => {
        handlePopup(!state);
    };

    return (
        <Fragment>
            <div className={st} onClick={() => togglePopup(showPopup)}>
                <p>{title}</p>
            </div>
            {showPopup && (
                <BoardPopup
                    form={form}
                    toggleHandler={togglePopup}
                    state={showPopup}
                    createHandler={createHandler}
                />
            )}
        </Fragment>
    );
};

export default CreateBordBtn;
