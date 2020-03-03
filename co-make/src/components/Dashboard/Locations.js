import React, { useState } from 'react';
import { connect } from 'react-redux';
import { addState } from '../../actions/dashboardActions';

const Locations = props => {
	const [editing, setEditing] = useState(false);
	const [stateValue, setStateValue] = useState({ value: '' });

	const editStates = () => {
		setEditing(true);
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
	};

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

	if (props.user.locations.length === 0) {
		return (
			<div>
				<p>Add your states you belong to and get started!</p>
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
					</form>
				)}
			</div>
		);
	}

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
		</div>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, { addState })(Locations);
