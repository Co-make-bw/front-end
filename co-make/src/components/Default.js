import React, { useState } from 'react';
import LoginBox from './LoginBox';
import Register from './Register';
import LoggedInState from './LoggedInState';

import './Default.css';

function Default() {
	const [loginBox, setLoginBox] = useState(true);
	const [registerBox, setRegisterBox] = useState(false);
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	function showLogin(e) {
		e.preventDefault();
		setLoginBox(true);
		setRegisterBox(false);
	}

	function showRegistration(e) {
		e.preventDefault();
		setLoginBox(false);
		setRegisterBox(true);
	}

	return (
		<div className='root-container'>
			<div style={{ marginBottom: 30 }}>
				<LoggedInState loggedInStatus={isLoggedIn} />
			</div>
			<div className='box-controller'>
				<div className='controller'>
					<div
						onClick={showLogin}
						className={'header' + (loginBox ? ' selected' : '')}
					>
						Login
					</div>
				</div>
				<div className='controller'>
					<div
						onClick={showRegistration}
						className={'header' + (registerBox ? ' selected' : '')}
					>
						Register
					</div>
				</div>
			</div>
			<div className='box-container'>
				<div className='controller'>
					{loginBox && <LoginBox shLogin={showLogin} />}

					{registerBox && <Register shRegistration={showRegistration} />}

				</div>
			</div>
		</div>
	);
}

export default Default;
