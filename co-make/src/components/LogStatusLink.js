import React from 'react';
import {Link} from 'react-router-dom';

function LogStatusLink(props) {

    console.log("Props from LogStatusLink: ", props);

    if ( props.isLoggedIn ) {
        return (
            <Link to='/logout' className='link'>
                Logout
            </Link>
        )
    }
    return (
        <Link to='/login' className='link'>
            Login
        </Link> 
    )

}

export default LogStatusLink;