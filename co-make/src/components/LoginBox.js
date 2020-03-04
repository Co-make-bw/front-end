import React from 'react';
import axios from 'axios';
// import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Box.css';

function LoginBox(props) {
	// const history = useHistory();
	console.log("props: ", props);

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
						onSubmit={( values ) => {
							let submitValues = values;
							axios
								.post(
									'https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/users/users.json',
									submitValues
								)
								.then(res => {
									console.log('response for login:', res);
									props.setLogin(true);
									// window.localStorage.setItem('token', res.data.token);
									// history.push(`/dashboard/${res.data.user_id}`);
								})
								.catch(err => {
									console.log('error from user login post', err);
								});
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

export default connect(null, {})(LoginBox);