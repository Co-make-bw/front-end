import React from "react";
import { useHistory, BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';

function Logout(props) {

    const history = useHistory();

    return (
        <>
            { history.push(`/`) }
            <Router>
                <Switch>
                    <Route>
                    <Route path="/">
                        <Home />
                    </Route>
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Logout;