import React from 'react';
import Navbar from './Navbar';
import styled from 'styled-components';

const HeaderHeader = styled.header`
	text-align: center;
	margin: auto 20rem auto 20rem;
`;

const Title = styled.div`
	background: #fff;
	border-radius: 1rem;
	padding: 1rem;
`;

const Header = (props) => {
	return (
		<HeaderHeader>
			<Title>
				<h1>MovieBase</h1>
			</Title>
			<Navbar />
		</HeaderHeader>
	);
};

export default Header;
