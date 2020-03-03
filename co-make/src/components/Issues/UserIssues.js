import React from 'react';
import Issue from "./Issue"
const issues = [
    {
        id: 16,
        title: "No complaints",
        description: "I just came here to just say that the fried chicken at the Puritan Backroom is delicious!",
        location: "Manchester",
        upvoted: 0,
        created_at: "2020-03-03T15:42:35.153Z",
        updated_at: "2020-03-03T15:42:35.153Z",
        user_id: 3,
        state_id: 29
    },
    {
        id: 17,
        title: "Bicycles",
        description: "There needs to be more bicycle lanes downtown. I am too affraid to ride because cars never give me enough room",
        location: "Manchester",
        upvotes: 0,
        created_at: "2020-03-03T15:42:35.153Z",
        updated_at: "2020-03-03T15:42:35.153Z",
        user_id: 3,
        state_id: 29
    },
]

const UserIssues = () => {
	return (
		<div className="card-layout">
			{
				issues.map(issue => {
					return (
						<div className="card-container">
							<div className="card">
							<p>User Issue: {issue.title}</p>
							<p>User Description: {issue.description}</p>
							<p>User Location: {issue.location}</p>
							<p>User Upvotes: {issue.upvotes}</p>
							</div>
						</div>)
				})
			}
			
		</div>
	);
};

export default UserIssues;
