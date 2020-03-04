import React from 'react';
import ViewByState from './ViewByState';
import ViewByZip from './ViewByZip';

function Default() {
    return (
        <div>
            <h1>Location Home Page</h1>
            <ViewByState />
            <ViewByZip />
        </div>
    )
}

export default Default;