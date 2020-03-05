import React from "react";

function LoggedInState(props) {

    return (
        <p style={{ textAlign: "center" }}>
            Currently Logged { props.loggedInStatus ? "In" : "Out" }
        </p>
    )

}

export default LoggedInState;