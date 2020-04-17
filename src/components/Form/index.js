import React, { Fragment, useState } from "react";
import { default as st } from "./style";
import { Formik, Form, Field } from "formik";

import CrossBtn from "../../components/CrossBtn";

const BoardPopup = ({
    submitHandler,
    placeholder,
    btnText,
    id,
    initialValues,
}) => {
    return (
        <Formik
            enableReinitialize={false}
            onSubmit={(values, actions) => {
                submitHandler(values, id);
            }}
            initialValues={initialValues}
        >
            {() => (
                <Form>
                    <Field name="title">
                        {({ field, form }) => (
                            <input
                                {...field}
                                placeholder={placeholder}
                                className={`${st}__input`}
                            />
                        )}
                    </Field>
                    <button className={`${st}__btn`}>{btnText}</button>
                </Form>
            )}
        </Formik>
    );
};

export default BoardPopup;
