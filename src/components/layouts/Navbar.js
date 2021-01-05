import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavbarDiv = styled.div`
	background: #fff;
	border-radius: 1rem;
	border: 1px solid;
	padding: 1rem;
`;

const Navbar = (props) => {
	return (
		<NavbarDiv className='navbar'>
			<Link to='/'>Home</Link>##<Link to='/movies'>Movies</Link>##
			<Link to='/shows'>Tv Shows</Link>##<Link to='/watchlist'>Watch List</Link>
			##
			<Link to='/seen'>Already Watched</Link>
		</NavbarDiv>
	);
};

export default Navbar;
