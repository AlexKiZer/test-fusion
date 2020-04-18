import React from "react";
import { default as st } from "./style";
import { Formik, Form, Field } from "formik";
import PropTypes from "prop-types";

const BoardPopup = ({
    submitHandler,
    placeholder = "Введите текст",
    btnText = "Отправить",
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
                <Form className={st}>
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

BoardPopup.propTypes = {
    submitHandler: PropTypes.func.isRequired,
    placeholder: PropTypes.string,
    btnText: PropTypes.string,
    id: PropTypes.string.isRequired,
    initialValues: PropTypes.object.isRequired,
};

export default BoardPopup;
