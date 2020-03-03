import React, { useState } from 'react';
import { connect } from 'react-redux';

const Locations = props => {
	const [editing, setEditing] = useState(false);

	const editStates = () => {
		setEditing(true);
	};

	if (props.user.locations.length === 0) {
		return (
			<div>
				<p>Add your states you belong to and get started!</p>
				{!editing && <button onClick={editStates}>Add States</button>}
				{editing && <select></select>}
			</div>
		);
	}

	return (
		<div>
			<ul>
				{props.user.locations.map(location => (
					<li key={location.state_id}>
						<span>
							<span
								onClick={e => {
									e.stopPropagation();
								}}
							>
								x
							</span>{' '}
							{location.state}
						</span>
					</li>
				))}
			</ul>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, {})(Locations);
