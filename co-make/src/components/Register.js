import React from "react";
import {Formik, Form, Field, ErrorMessage} from 'formik';
import "./Box.css";

function Register(props) {

    return (
        <div className="inner-container">

            <div className="box">

                <div className="input-group">
                    <Formik
                        initialValues={{
                        username: '',
                        email: '',
                        password: '',
                        password2: '',
                        tos: false
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
                            console.log(values);
                            setSubmitting(true);
                        }, 400);
                    }}>
                        {({ values, handleChange, isSubmitting}) => (
                            <Form id="loginForm">
                                <label htmlFor="username">Username<span className="star">*</span></label>
                                <Field type="text" name="username" autoComplete="off" onChange = {handleChange} />
                                <ErrorMessage name="username" component="div"/>
                                <label htmlFor="email">Email<span className="star">*</span></label>
                                <Field type="email" name="email" autoComplete="off"/>
                                <ErrorMessage name="email" component="div"/>
                                <label htmlFor="password">Password<span className="star">*</span></label>
                                <Field type="password" name="password" autoComplete="off"/>
                                <ErrorMessage name="password" component="div"/>
                                <label htmlFor="password2">Confirm Password<span className="star">*</span></label>
                                <Field type="password" name="password2" autoComplete="off"/>
                                <ErrorMessage name="password2" component="div"/>
                                <div className="tos">
                                    <Field type="checkbox" name="tos"/>
                                    <label htmlFor="tos">Accept Terms of Service<span className="star">*</span></label>
                                    <ErrorMessage name="tos" component="div"/>
                                </div>
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button>
                                <pre>{JSON.stringify(values, null, 2)}</pre>
                            </Form>
                            
                        )}
                    </Formik>
                        
                </div>

            </div>

        </div>
    )

}

export default Register;