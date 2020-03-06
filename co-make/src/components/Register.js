import React from 'react';
import {Formik, Form, Field, ErrorMessage} from 'formik';
import CheckEmail from './Validation/CheckEmail';
import CheckPassword from './Validation/CheckPassword';
import CheckUsername from './Validation/CheckUsername';
import ConfirmEmail from './Validation/ConfirmEmail';
import CheckTOS from './Validation/CheckTOS';
import './Box.css';

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

                        if (!values.username) {
                            errors.username = 'Required';
                        } else if (values.username.length < 5) {
                            errors.username = 'Username must be at least 5 characters in length';
                        } else if (values.username.length > 15) {
                            errors.username = 'Username must be no more than 15 characters in length';
                        }

                        if (!values.password) {
                            errors.password = 'Required';
                        } else if (values.password.length < 6) {
                            errors.password = '6 or more characters is required';
                        } else if (values.password.length > 15) {
                            errors.password = 'Too long';
                        } else if (values.password.search(/\d/) === -1) {
                            errors.password = 'You must include a number';
                        } else if (values.password.search(/[A-Z]/) === -1) {
                            errors.password = 'You must include an upper case letter';
                        } else if (values.password.search(/[a-z]/) === -1) {
                            errors.password = 'You must include an lower case letter';
                        } else if (values.password.search(/[!@#$]/) === -1) {
                            errors.password = 'You must use at least one special character: ! @ # $';
                        }

                        if (!values.password2) {
                            errors.password2 = 'Confirmation Email Required'
                        } else if (values.password !== values.password2) {
                            errors.password2 = 'Passwords do not match';
                        }

                        if (!values.tos) {
                            errors.tos = 'You must accept the Terms of Service Agreement'
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
                                <Field placeholder="Username" autoFocus type="text" name="username" autoComplete="off" onChange = {handleChange} />
                                <ErrorMessage name="username" component={ CheckUsername } />
                                
                                <label htmlFor="email">Email<span className="star">*</span></label>
                                <Field placeholder="Email" type="email" name="email" autoComplete="off"/>
                                <ErrorMessage name="email" component={ CheckEmail }/>
                                
                                <label htmlFor="password">Password<span className="star">*</span></label>
                                <Field placeholder="Password" type="password" name="password" autoComplete="off"/>
                                <ErrorMessage name="password" component={ CheckPassword } />
                                
                                <label htmlFor="password2">Confirm Password<span className="star">*</span></label>
                                <Field placeholder="Confirm Password" type="password" name="password2" autoComplete="off"/>
                                <ErrorMessage name="password2" component={ ConfirmEmail }/>

                                <div className="tos">
                                    <Field type="checkbox" name="tos"/>
                                    <label htmlFor="tos">Accept Terms of Service<span className="star">*</span></label>
                                    <ErrorMessage name="tos" component={ CheckTOS }/>
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