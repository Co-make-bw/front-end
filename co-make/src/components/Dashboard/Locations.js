import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { addState, getStates } from '../../actions/dashboardActions';

const Locations = props => {
	const [editing, setEditing] = useState(false);
	const [stateValue, setStateValue] = useState({ value: '' });

	// FORM CONTROLS
	const editStates = () => {
		setEditing(!editing);
	};
	const handleChange = e => {
		setStateValue({
			value: e.target.value
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		const userID = props.user.id;
		let tempID = 0;
		usStates.filter((item, index) => {
			if (item === stateValue.value) {
				tempID = index + 1;
				return item;
			} else {
				return 0;
			}
		});
		const stateID = { state_id: tempID };
		props.addState(stateID, userID);
		setEditing(false);
	};

	// LOCATIONS INFO
	const usStates = [
		'Alabama',
		'Alaska',
		'Arizona',
		'Arkansas',
		'California',
		'Colorado',
		'Connecticut',
		'Delaware',
		'Florida',
		'Georgia',
		'Hawaii',
		'Idaho',
		'IllinoisIndiana',
		'Iowa',
		'Kansas',
		'Kentucky',
		'Louisiana',
		'Maine',
		'Maryland',
		'Massachusetts',
		'Michigan',
		'Minnesota',
		'Mississippi',
		'Missouri',
		'Montana',
		'Nebraska',
		'Nevada',
		'New Hampshire',
		'New Jersey',
		'New Mexico',
		'New York',
		'North Carolina',
		'North Dakota',
		'Ohio',
		'Oklahoma',
		'Oregon',
		'Pennsylvania',
		'Rhode Island',
		'South Carolina',
		'South Dakota',
		'Tennessee',
		'Texas',
		'Utah',
		'Vermont',
		'Virginia',
		'Washington',
		'West Virginia',
		'Wisconsin',
		'Wyoming'
	];
	useEffect(() => {
		setTimeout(function() {
			const userID = props.user.id;
			console.log('user id', userID);
			props.getStates(userID);
		}, 2000);
	}, [props.user.locations]);

	// IF NO LOCATIONS, DISPLAY FORM
	if (props.user.locations.length === 0) {
		return (
			<div>
				<p>Add the states you care about and get started!</p>
				{!editing && <button onClick={editStates}>Add States</button>}
				{editing && (
					<form onSubmit={handleSubmit}>
						<select value={stateValue.value} onChange={handleChange}>
							{usStates.map((item, index) => (
								<option key={index} name={index + 1} value={item}>
									{item}
								</option>
							))}
						</select>
						<button type='submit'>Add State</button>
						<button onClick={editStates}>Cancel</button>
					</form>
				)}
			</div>
		);
	}

	// IF THERE ARE LOCATIONS, SHOW LOCATIONS AND FORM
	return (
		<div>
			<p>Your States:</p>
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
			<p>Add more States</p>
			{!editing && <button onClick={editStates}>Add States</button>}
			{editing && (
				<form onSubmit={handleSubmit}>
					<select value={stateValue.value} onChange={handleChange}>
						{usStates.map((item, index) => (
							<option key={index} name={index + 1} value={item}>
								{item}
							</option>
						))}
					</select>
					<button type='submit'>Add State</button>
					<button onClick={editStates}>Cancel</button>
				</form>
			)}
		</div>
	);
};

const mapStateToProps = state => {
	console.log('state in locations fired');
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, { addState, getStates })(Locations);
