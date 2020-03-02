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
                            let submitValues = JSON.stringify(values, null, 2);
                            props.loginData(submitValues);
                            console.log(submitValues);
                            props.processData();
                            setSubmitting(true);
                        }, 400);
                    }}>
                        {({isSubmitting}) => (
                            <Form id="loginForm">
                                <Field type="email" name="email" autoComplete="off" placeholder="Email"/>
                                <ErrorMessage name="email" component="div"/>
                                <Field type="password" name="password" placeholder="Password"/>
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