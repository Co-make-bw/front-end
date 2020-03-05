import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addState, deleteState } from '../../actions/dashboardActions';
import {
	MainContainer,
	LocationButton,
	MainText,
	StateList,
	StateItem,
	StateDelete
} from '../../styles';

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
		usStates.forEach((item, index) => {
			if (item === stateValue.value) {
				tempID = index;
				return item;
			} else {
				return 0;
			}
		});
		const stateID = { state_id: Number(tempID) + 1 };
		props.addState(stateID, userID);
		setEditing(false);
	};
	const handleDelete = state_id => {
		const stateID = state_id;
		const userID = props.user.id;
		props.deleteState(stateID, userID);
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
		'Illinois',
		'Indiana',
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

	// ROUTING
	const history = useHistory();
	const toStateIssues = routeID => {
		history.push(`/state/${routeID}`);
	};

	// IF NO LOCATIONS, DISPLAY FORM
	if (props.user.locations.length === 0) {
		return (
			<MainContainer>
				<MainText>Add the states you care about and get started!</MainText>
				{!editing && (
					<LocationButton onClick={editStates}>Add States</LocationButton>
				)}
				{editing && (
					<form onSubmit={handleSubmit}>
						<select value={stateValue.value} onChange={handleChange}>
							{usStates.map((item, index) => (
								<option key={index} name={index + 1} value={item}>
									{item}
								</option>
							))}
						</select>
						<LocationButton type='submit'>Add State</LocationButton>
						<LocationButton onClick={editStates}>Cancel</LocationButton>
					</form>
				)}
			</MainContainer>
		);
	}

	// IF THERE ARE LOCATIONS, SHOW LOCATIONS AND FORM
	return (
		<MainContainer>
			<MainText>Your States:</MainText>
			<StateList>
				{props.user.locations.map(location => (
					<StateItem key={location.state_id}>
						<span onClick={() => toStateIssues(location.state_id)}>
							<StateDelete
								onClick={e => {
									e.stopPropagation();
									handleDelete(location.state_id);
								}}
							>
								x
							</StateDelete>{' '}
							{location.state}
						</span>
					</StateItem>
				))}
			</StateList>
			{!editing && (
				<LocationButton onClick={editStates}>Add States</LocationButton>
			)}
			{editing && (
				<form onSubmit={handleSubmit}>
					<select value={stateValue.value} onChange={handleChange}>
						{usStates.map((item, index) => (
							<option key={index} name={index + 1} value={item}>
								{item}
							</option>
						))}
					</select>
					<LocationButton type='submit'>Add State</LocationButton>
					<LocationButton onClick={editStates}>Cancel</LocationButton>
				</form>
			)}
		</MainContainer>
	);
};

const mapStateToProps = state => {
	return {
		user: state.dashboardReducer.user
	};
};

export default connect(mapStateToProps, { addState, deleteState })(Locations);
