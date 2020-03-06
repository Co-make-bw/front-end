import React, { useState } from 'react';
import { loginUser } from '../actions/onboardingActions';
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
					props.loginUser(submitValues).then(res => {
						history.push(`/dashboard/${res.data.user_id}`);
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

export default connect(null, { loginUser })(LoginBox);
