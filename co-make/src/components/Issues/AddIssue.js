import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewIssue } from '../../actions/issuesActions';

const AddIssue = props => {
	const { id } = useParams();
	const history = useHistory();
	const [stateValue, setStateValue] = useState({ value: '' });
	const [issueStatus, setIssueStatus] = useState(false);
	const [newIssue, setNewIssue] = useState({
		title: '',
		description: '',
		location: '',
		upvotes: 0
	});

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

	const handleChange = e => {
		setStateValue({
			value: e.target.value
		});
	};
	const handleTextInputs = e => {
		setNewIssue({
			...newIssue,
			[e.target.name]: e.target.value
		});
	};
	const handleSubmit = e => {
		e.preventDefault();
		const userID = id;
		let tempID = 0;
		usStates.forEach((item, index) => {
			if (item === stateValue.value) {
				tempID = index;
				return item;
			} else {
				return 0;
			}
		});
		const stateID = Number(tempID) + 1;
		const issueInfo = newIssue;
		props.addNewIssue(stateID, issueInfo).then(() => {
			if (!props.addIssueError) {
				setIssueStatus(false);
				history.push(`/dashboard/${userID}`);
			} else {
				setIssueStatus(true);
			}
		});
	};

	return (
		<div>
			<h1>Add an Issue</h1>
			<form onSubmit={handleSubmit}>
				<label htmlFor='us-state'>Select a state</label>
				<select id='us-state' value={stateValue.value} onChange={handleChange}>
					{usStates.map((item, index) => (
						<option key={index} name={index + 1} value={item}>
							{item}
						</option>
					))}
				</select>

				<label htmlFor='title'>Issue Title</label>
				<input
					type='text'
					id='title'
					name='title'
					value={newIssue.title}
					onChange={handleTextInputs}
					required
				/>

				<label htmlFor='location'>Issue Location</label>
				<input
					type='text'
					id='location'
					name='location'
					value={newIssue.location}
					onChange={handleTextInputs}
					required
				/>

				<label htmlFor='description'>Issue Description</label>
				<input
					type='textarea'
					id='description'
					name='description'
					value={newIssue.description}
					onChange={handleTextInputs}
					required
				/>

				<button type='submit'>Submit</button>
			</form>
			{issueStatus && <p>Issue could not be created, try again.</p>}
		</div>
	);
};

const mapStateToProps = state => {
	return {
		addIssueError: state.issuesReducer.addIssueError
	};
};

export default connect(mapStateToProps, { addNewIssue })(AddIssue);
