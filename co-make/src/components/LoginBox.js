import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, ErrorMessage } from 'formik';
import {
	StyledFormik,
	StyledField,
	StyledButton,
	StyledError
} from '../styles';

function LoginBox(props) {
	const history = useHistory();
	const [loginError, setLoginError] = useState(false);
	const [loading, setLoading] = useState(false);

	return (
		<div>
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
					let submitValues = values;
					setSubmitting(true);
					setLoading(true);
					axios
						.post('https://comake4.herokuapp.com/api/auth/login', submitValues)
						.then(res => {
							window.localStorage.setItem('token', res.data.token);
							setLoginError(false);
							setTimeout(function() {
								history.push(`/dashboard/${res.data.user_id}`);
								setLoading(false);
							}, 4000);
						})
						.catch(err => {
							console.log('error from user login post', err);
							setLoginError(true);
							setSubmitting(false);
							setLoading(false);
						});
				}}
			>
				{({ isSubmitting }) => (
					<StyledFormik id='loginForm'>
						<StyledField
							type='text'
							name='username'
							autoComplete='off'
							placeholder='Username'
						/>
						<ErrorMessage name='username' component='div' />
						<StyledField
							type='password'
							name='password'
							placeholder='Password'
						/>
						<ErrorMessage name='password' component='div' />
						<StyledButton type='submit' disabled={isSubmitting}>
							Submit
						</StyledButton>
						{loginError && (
							<StyledError>Wrong username and/or password</StyledError>
						)}
						{loading && <p>loading...</p>}
					</StyledFormik>
				)}
			</Formik>
		</div>
	);
}

export default connect(null, {})(LoginBox);
