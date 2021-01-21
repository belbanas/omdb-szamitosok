import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
	color: 'black',
	textDecoration: 'none',
};

const Logout = () => {
	const handleLogout = () => {
		alert('Logout');
		sessionStorage.clear();
		window.location.href = '/';
	};

	return (
		<React.Fragment>
			<Link style={linkStyle} onClick={handleLogout}>
				Logout
			</Link>
		</React.Fragment>
	);
};

export default Logout;
