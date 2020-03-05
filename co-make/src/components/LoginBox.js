import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import DashboardDefault from './Dashboard/Default';
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
							}

							if (!values.password) {
								errors.password = 'Required';
							} else if (values.password.length < 6) {
								errors.password = '6 or more characters is required';
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

export default connect(null, {})(LoginBox);