import React from 'react';
import AddIssue from './AddIssue';
import ViewIssues from './ViewIssues';
import EditIssues from './EditIssues';

function Default() {
    return (
        <div>
            <h1>Issue Home Page</h1>
            <AddIssue />
            <ViewIssues />
            <EditIssues />
        </div>
    )
}

export default Default;