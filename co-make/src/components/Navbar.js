import React from 'react';
import { connect } from 'react-redux';
import { StyledNav, NavLogo, NavContainer, NavLink } from '../styles';

function Navbar(props) {
	const logOut = e => {
		window.localStorage.clear();
	};

	return (
		<>
			<StyledNav>
				<NavLogo>Co-Make</NavLogo>
				<NavContainer>
					<NavLink to='/'>Home</NavLink>
					{props.user.id && (
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
		user: {
			id: state.dashboardReducer.user.id
		}
	};
};

export default connect(mapStateToProps, {})(Navbar);
