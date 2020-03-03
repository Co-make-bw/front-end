import React from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginUser } from '../actions/onboardingActions';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Box.css';

function LoginBox(props) {
	const history = useHistory();

	return (
		<div className='inner-container'>
			<div className='box'>
				<div className='input-group'>
					<Formik
						initialValues={{
							username: '',
							password: ''
						}}
						validate={values => {
							const errors = {};
							if (!values.username) {
								errors.username = 'Required';
							}
							return errors;
						}}
						onSubmit={(values, { setSubmitting }) => {
							// setTimeout(() => {
							// 	setSubmitting(true);
							// }, 400);
							let submitValues = values;
							props.loginUser(submitValues);
							history.push(`/dashboard/${submitValues.username}`);
						}}
					>
						{({ isSubmitting }) => (
							<Form id='loginForm'>
								<Field
									type='text'
									name='username'
									autoComplete='off'
									placeholder='Username'
								/>
								<ErrorMessage name='username' component='div' />
								<Field type='password' name='password' placeholder='Password' />
								<ErrorMessage name='password' component='div' />
								<button type='submit' disabled={isSubmitting}>
									Submit
								</button>
							</Form>
						)}
					</Formik>
				</div>
			</div>
		</div>
	);
}

export default connect(null, { loginUser })(LoginBox);
