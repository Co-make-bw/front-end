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
                        email: '',
                        password: ''
                    }}
                        validate={values => {
                        const errors = {};
                        if (!values.email) {
                            errors.email = 'Required';
                        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                            errors.email = 'Invalid email address';
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
                                <label htmlFor="email">Email</label>
                                <Field type="email" name="email" autoComplete="off"/>
                                <ErrorMessage name="email" component="div"/>
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