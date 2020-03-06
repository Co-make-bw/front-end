import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { StyledNav, NavLogo, NavContainer, NavLink } from '../styles';

function Navbar(props) {
	const [ifToken, setIfToken] = useState(false);

	useEffect(() => {
		const token = window.localStorage.getItem('token');
		if (token) {
			setIfToken(true);
		} else {
			setIfToken(false);
		}
	}, []);

	const logOut = e => {
		window.localStorage.clear();
	};

	return (
		<>
			<StyledNav>
				<NavLogo>Co-Make</NavLogo>
				<NavContainer>
					<NavLink to='/'>Home</NavLink>
					{ifToken && (
						<>
							<NavLink to={`/dashboard/${props.user.id}`}>Dashboard</NavLink>
							<NavLink to='/' onClick={logOut}>
								Log Out
							</NavLink>
						</>
					)}
				</NavContainer>
			</StyledNav>
		</>
	);
}

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, {})(Navbar);
