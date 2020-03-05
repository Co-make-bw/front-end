import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

// GLOBAL STYLES
export const StyledError = styled.p`
    color: white;
    background-color: #FF4A48
    font-size: 1rem;
    border-radius: 5px;
`;

// NAVBAR STYLES
export const StyledNav = styled.nav`
	background-color: #282c34;
	display: flex;
	justify-content: space-around;
	align-items: center;
	min-height: 10vh;
	color: white;
	border-bottom: 2px solid green;
	z-index: 2;
`;
export const NavLogo = styled.h3`
	font-size: 2rem;
`;
export const NavContainer = styled.div`
	width: 30%;
	display: flex;
	justify-content: space-around;
	align-items: center;
	list-style: none;
`;
export const NavLink = styled(Link)`
	text-decoration: none;
	font-size: 1.2rem;
	color: white;

	&:hover {
		cursor: pointer;
		color: green;
		transition: color 1s;
	}
`;

// FORM STYLES
export const StyledFormik = styled(Form)`
	width: 300px;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
export const StyledField = styled(Field)`
	width: 100%;
	padding: 0.5rem;
	margin-top: 2rem;
	border: none;
	border-bottom: 1px solid green;
	color: black;
`;
export const StyledButton = styled.button`
	width: 100%;
	padding: 0.5rem 1.5rem;
	margin-top: 2rem;
	border: 1px solid green;
	background-color: white;
	color: black;
	text-align: center;

	&:hover {
		cursor: pointer;
		background-color: green;
		color: white;
		transition: background-color 1s, color 1s;
	}
`;
export const StyledForm = styled.form`
	width: 300px;
	margin-top: 2rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
export const StyledInput = styled.input`
	width: 100%;
	margin-top: 2rem;
	padding: 0.5rem;
	border: none;
	border-bottom: 1px solid green;
	color: black;
`;

// PROFILE STYLES
export const ProfileContainer = styled.div`
	width: 250px;
	height: 100%;
	z-index: -1;
	position: fixed;
	top: 0;
	left: 0;
	overflow-x: hidden;
	padding-top: 12vh;
	background-color: #5e6676;
	border-right: 2px solid green;
	color: white;
	text-align: center;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	align-items: center;
`;
export const ProfileTitle = styled.h3`
	font-size: 1.4rem;
	padding-bottom: 0.5rem;
	border-bottom: 1px solid black;
`;
export const ProfileGroup = styled.div`
	min-height: 20vh;
	font-size: 1rem;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
`;
export const ProfileEditLink = styled(Link)`
	width: 25px;
	height: 25px;
	margin: 0 auto;
	text-decoration: none;
	color: white;
	background-color: #282c34;
	text-align: center;
`;
