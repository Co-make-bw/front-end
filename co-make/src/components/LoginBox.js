import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import "./Box.css";

function LoginBox(props) {

    return (
        <div className="inner-container">

            <div className="box">

                <div className="input-group">
                    <Formik
                        initialValues={{
                        username: '',
                        password: ''
                    }}
                        validate={values => {
                        const errors = {};
                        if (!values.username) {
                            errors.email = 'Required';
                        }
                        return errors;
                    }}
                        onSubmit={(values, {setSubmitting}) => {
                        setTimeout(() => {
                            let submitValues = values;
                            props.processData(submitValues);
                            setSubmitting(true);
                        }, 400);
                    }}>
                        {({isSubmitting}) => (
                            <Form id="loginForm">
                                <label htmlFor="username">Username</label>
                                <Field type="text" name="username" autoFocus autoComplete="off"/>
                                <ErrorMessage name="username" component="div"/>
                                <label htmlFor="password">Password</label>
                                <Field type="password" name="password"/>
                                <ErrorMessage name="password" component="div"/>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                            </Form>
                        )}
                    </Formik>
                </div>

            </div>

        </div>
    )

}

export default LoginBox;