import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Form, Field } from 'formik';

// GLOBAL STYLES

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
	border-radius: 3px;
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
export const StyledDropdown = styled.select`
	width: 100%;
	padding: 0.5rem;
	border: 1px solid black;
	color: black;
`;
export const StyledError = styled.p`
	color: white;
	background-color: #ff4a48;
	font-size: 1rem;
	border-radius: 5px;
`;

// PROFILE STYLES
export const ProfileContainer = styled.div`
	width: 25%;
	height: 100%;
	z-index: -1;
	position: fixed;
	top: 0;
	left: 0;
	overflow-x: hidden;
	padding-top: 150px;
	background: linear-gradient(
		275deg,
		rgba(94, 102, 118, 1) 50%,
		rgba(40, 44, 52, 1) 100%
	);
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

	&:hover {
		cursor: pointer;
		border: 1px solid green;
	}
`;

// DASHBOARD CONTENT STYLES
export const MainContainer = styled.div`
	margin: 2rem auto 2rem 30%;
	padding: 0.5rem;
	width: 65%;
	border: 1px solid black;
	border-radius: 5px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-between;
`;
export const LocationButton = styled.button`
	width: 60%;
	padding: 0.5rem 1.5rem;
	margin: 1rem auto 0 auto;
	border: 1px solid green;
	border-radius: 3px;
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
export const MainText = styled.h4`
	font-size: 1.2rem;
`;
export const StateList = styled.ul`
	list-style-type: none;
`;
export const StateItem = styled.li`
	font-size: 0.8rem;
	margin-bottom: 1rem;

	&:hover {
		cursor: pointer;
		font-size: 1rem;
		transition: font-size 0.5s;
	}
`;
export const StateDelete = styled.span`
	color: #ff4a48;
	background-color: white;
	font-size: 1.2rem;
	padding: 0.5rem;
	border-radius: 50%;

	&:hover {
		color: white;
		background-color: #ff4a48;
		transition: color 0.5s, background-color 0.5s;
	}
`;
export const IssueLink = styled(Link)`
	text-decoration: none;
	font-size: 1rem;
	color: green;

	&:hover {
		cursor: pointer;
	}
`;
