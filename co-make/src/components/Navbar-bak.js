import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar(props) {
	return (
		<div className='App'>
			<nav>
				<h2>Co-Make</h2>
				<div className='nav-links'>
					<Link to='/' className='link'>
						Home
					</Link>
					{props.user.id && (
						<Link to={`/dashboard/${props.user.id}`} className='link'>
							Dashboard
						</Link>
					)}
				</div>
			</nav>
		</div>
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