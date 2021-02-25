import React, { useContext } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MovieContext } from '../MovieContext';
import Logout from '../Logout';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

const NavbarDiv = styled.div`
	background: #fff;
	border-radius: 1rem;
	border: 1px solid;
	padding: 1rem;
`;

const Item = styled.a`
	text-decoration: none;
	margin: 8px;
`;

const Item2 = styled.b`
	text-decoration: none;
	margin: 8px;
	color: red;
`;

const linkStyle = {
	color: 'white',
	textDecoration: 'none',
};

const HeaderNavbar = (props) => {
	const [movies, setMovies] = useContext(MovieContext);

	let loginText = 'You are not logged in!';
	let userHandle = (
		<React.Fragment>
			<Item>
				<Link to='/login' style={linkStyle}>
					Login
				</Link>
			</Item>
			<Item>
				<Link to='/register' style={linkStyle}>
					Registration
				</Link>
			</Item>
		</React.Fragment>
	);

	if (sessionStorage.getItem('token')) {
		loginText = 'You are logged in as: ' + sessionStorage.getItem('username');
		userHandle = (
			<React.Fragment>
				<Item>
					<Link to='/watchlist' style={linkStyle}>
						Watchlist
					</Link>{' '}
				</Item>
				<Item>
					<Logout />
				</Item>
			</React.Fragment>
		);
	}

	return (
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='/'>Home</Navbar.Brand>
			<Nav className='mr-auto'>
				{userHandle}

				<Item>
					<span style={{ color: 'white' }}>{loginText}</span>
				</Item>
			</Nav>
		</Navbar>
	);
};

export default HeaderNavbar;
