import React, { Fragment, useState } from "react";
import { default as st } from "./style";
import { Formik, Form } from "formik";

import CrossBtn from "../../components/CrossBtn";

const BoardPopup = ({ toggleHandler, state, createHandler }) => {
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
                        <Formik
                            enableReinitialize={false}
                            onSubmit={(values, actions) => {
                                console.log(values, actions);
                            }}
                            initialValues={{ title: "" }}
                        >
                            {(props) => <Form>{console.log(props)}</Form>}
                        </Formik>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default BoardPopup;
