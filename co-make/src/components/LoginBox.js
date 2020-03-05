import React from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
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
						onSubmit={( values ) => {
							let submitValues = values;
							axios
								.get(
									'https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/users/users.json', submitValues
								)
								.then(res => {

									const myData = [];
									res.data.forEach(({id, fname, lname, username, password, email }) => {
										myData.push({ 
											id: `${id}`,
											fname: `${fname}`,
											lname: `${lname}`,
											username: `${username}`, 
											password: `${password}`,
											email: `${email}` });
									});

									let userResults = myData.filter( function(user) {
										return user["username"] === values.username;
									});

									if (userResults.length > 0) {
										console.log("User found");
										let passwordResults = userResults.filter( function(user) {
											return user["password"] === values.password;
										});
										if (passwordResults.length > 0) {
											console.log("Password is good");
											props.setLogin(true);
											console.log("ID: ", passwordResults[0]["id"]);
											window.sessionStorage.setItem('id', passwordResults[0]["id"]);
											let currentId = window.sessionStorage.getItem('id');
											console.log(currentId);
											history.push(`/dashboard/${currentId}`);
										} else {
											console.log("Password not good.")
										}
									} else {
										console.log("No user found");
									}

									
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