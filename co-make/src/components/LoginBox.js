import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DashboardDefault from './Dashboard/Default';
import CheckUsername from "./Validation/CheckUsername";
import CheckPassword from "./Validation/CheckPassword";
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

							return errors;
						}}
						onSubmit={( values, { resetForm } ) => {
							let submitValues = values;
							axios
								.get(
									'https://cors-anywhere.herokuapp.com/https://eddiemadrigal.net/users/users.json', submitValues
								)
								.then(res => {

									const myData = [];
									console.log("3-6 myData: ", myData);
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
										console.log("user results: ", userResults);
										let passwordResults = userResults.filter( function(user) {
											return user["password"] === values.password;
										});
										if (passwordResults.length > 0) {
											props.setLogin(true);
											window.sessionStorage.setItem('id', passwordResults[0]["id"]);
											let currentId = window.sessionStorage.getItem('id');
											history.push(`/dashboard/${currentId}`);
										} else {
											console.log("Password not good.")
											resetForm({});
											alert("Either your username or password was incorrect.  Please try again!");
										}
									} else {
										console.log("No user found");
										resetForm({});
										alert("Either your username or password was incorrect.  Please try again!");
									}
								})
								.catch(err => {
									console.log('error from user login post', err);
								});
						}}
					>
						{({ values, isSubmitting }) => (
							<Form id='loginForm'>
								<Field
									type='text'
									name='username'
									autoComplete='off'
									placeholder='Username'
									autoFocus
								/>
								<ErrorMessage name='username' component={ CheckUsername } />
								<Field type='password' name='password' placeholder='Password' />
								<ErrorMessage name='password' component={ CheckPassword } />
								<button type='submit' disabled={isSubmitting}>
									Submit
								</button>
								<pre>{JSON.stringify(values, null, 2)}</pre>
							</Form>
						)}
					</Formik>
					
				</div>
				<Router>
					<Switch>
						<Route>
						<Route path="/dashboard/:id">
							<DashboardDefault />
						</Route>
						</Route>
					</Switch>
				</Router>
			</div>
		</div>
	);
}

export default LoginBox;