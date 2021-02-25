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

const Item = styled.b`
	text-decoration: none;
	margin: 8px;
`;

const Item2 = styled.b`
	text-decoration: none;
	margin: 8px;
	color: red;
`;

const linkStyle = {
	color: 'black',
	textDecoration: 'none',
};

const HeaderNavbar = (props) => {
	const [movies, setMovies] = useContext(MovieContext);

	let loginText = 'You are not logged in!';
	let userHandle = (
		<React.Fragment>
			<Item>
				<Link to='/register' style={linkStyle}>
					Registration
				</Link>
			</Item>
			{' | '}
			<Item>
				<Link to='/login' style={linkStyle}>
					Login
				</Link>
			</Item>
		</React.Fragment>
	);

	if (sessionStorage.getItem('token')) {
		loginText = 'You are logged in as: ' + sessionStorage.getItem('username');
		userHandle = (
			<React.Fragment>
				<Item>
					<Logout />
				</Item>
			</React.Fragment>
		);
	}

	return (
		// <NavbarDiv className='navbar'>
		// 	<Item>
		// 		<Link to='/' style={linkStyle}>
		// 			Home
		// 		</Link>
		// 	</Item>
		// 	{' | '}
		// 	<Item>
		// 		<Link to='/watchlist' style={linkStyle}>
		// 			Watch List
		// 			{/* : {movies.watchlist.length} */}
		// 		</Link>
		// 	</Item>
		// 	{' | '}
		// 	{userHandle}
		// 	{' | '}
		// 	<Item>{loginText}</Item>
		// </NavbarDiv>
		<Navbar bg='dark' variant='dark'>
			<Navbar.Brand href='/'>OMDB</Navbar.Brand>
			<Nav className='mr-auto'>
				<Nav.Link href='/'>Home</Nav.Link>
				<Nav.Link href='/watchlist'>Watch List</Nav.Link>
				<Nav.Link href='/login'>LogIn</Nav.Link>
				<Nav.Link href='/register'>Register</Nav.Link>
				<Nav.Link href='/'>
					<Logout />
				</Nav.Link>
				<Item>
					<span style={{ color: 'white' }}>{loginText}</span>
				</Item>
			</Nav>
		</Navbar>
	);
};

export default HeaderNavbar;
