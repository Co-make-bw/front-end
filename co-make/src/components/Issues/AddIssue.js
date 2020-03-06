import React, { useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { addNewIssue } from '../../actions/issuesActions';
import {
	AddIssueContainer,
	StyledDropdown,
	StyledInput,
	StyledForm,
	StyledButton,
	StyledTextArea
} from '../../styles';

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
		<AddIssueContainer>
			<h1>Add an Issue</h1>
			<StyledForm onSubmit={handleSubmit}>
				<label htmlFor='us-state'>Select a state</label>
				<StyledDropdown
					id='us-state'
					value={stateValue.value}
					onChange={handleChange}
				>
					{usStates.map((item, index) => (
						<option key={index} name={index + 1} value={item}>
							{item}
						</option>
					))}
				</StyledDropdown>

				<StyledInput
					type='text'
					id='title'
					name='title'
					value={newIssue.title}
					onChange={handleTextInputs}
					placeholder='Issue Title'
					required
				/>

				<StyledInput
					type='text'
					id='location'
					name='location'
					value={newIssue.location}
					onChange={handleTextInputs}
					placeholder='Issue Location'
					required
				/>

				<StyledTextArea
					type='textarea'
					id='description'
					name='description'
					value={newIssue.description}
					onChange={handleTextInputs}
					placeholder='Issue Description'
					required
				/>

				<StyledButton type='submit'>Submit</StyledButton>
			</StyledForm>
			{issueStatus && <p>Issue could not be created, try again.</p>}
		</AddIssueContainer>
	);
};

const mapStateToProps = state => {
	return {
		addIssueError: state.issuesReducer.addIssueError
	};
};

export default connect(mapStateToProps, { addNewIssue })(AddIssue);
