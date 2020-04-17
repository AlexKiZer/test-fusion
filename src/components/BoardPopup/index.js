import React, { Fragment } from "react";
import { default as st } from "./style";
import { v4 as uuidv4 } from "uuid";
import { useHistory } from "react-router-dom";

import CrossBtn from "../../components/CrossBtn";
import Form from "../../components/Form";

const BoardPopup = ({ toggleHandler, state, createHandler, form }) => {
    const id = uuidv4(),
        history = useHistory();

    return (
        <Fragment>
            <div
                className={`${st}__overlay`}
                onClick={() => toggleHandler(state)}
            ></div>
            <div className={`${st}__popup`}>
                <div className={`${st}__content`}>
                    <div className={`${st}__cross`}>
                        <CrossBtn clickHandler={() => toggleHandler(state)} />
                    </div>

                    <h4 className={`${st}__title`}>Введите заголовок</h4>

                    <div className={`${st}__form`}>
                        <Form
                            {...form}
                            id={id}
                            submitHandler={(values, id) => {
                                createHandler({ values: values, id: id });
                                history.push(`board/${id}`);
                            }}
                        />
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BoardPopup;
