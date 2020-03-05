import React from "react";
import { useHistory } from 'react-router-dom';
import Home from './Home';

function Logout() {

    sessionStorage.clear();
    const history = useHistory();
    history.push(`/`);

    return (
        <Home />
    )
}

export default Logout;