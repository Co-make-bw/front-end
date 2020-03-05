import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function Logout(props) {

    let setLogin = props.setIsLoggedIn;
    
    useEffect(() => {
        setLogin(false);
    }, [setLogin]);

    const history = useHistory();
    history.push(`/`);

    return null;
}

export default Logout;