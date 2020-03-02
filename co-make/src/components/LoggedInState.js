import React from "react";

function LoggedInState(props) {

    return (
        <>
            Currently Logged { props.loggedInStatus ? "In" : "Out" }
        </>
    )

}

export default LoggedInState;