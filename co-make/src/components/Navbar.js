import React from 'react';
import { connect } from 'react-redux';
import { StyledNav, NavLogo, NavContainer, NavLink } from '../styles';

function Navbar(props) {
	return (
		<>
			<StyledNav>
				<NavLogo>Co-Make</NavLogo>
				<NavContainer>
					<NavLink to='/' className='link'>
						Home
					</NavLink>
					{props.user.id && (
						<NavLink to={`/dashboard/${props.user.id}`} className='link'>
							Dashboard
						</NavLink>
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
