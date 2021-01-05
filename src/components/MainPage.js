import React from 'react';
import styled from 'styled-components';

const SearchBarStyle = styled.div`
	font-weight: bold;
	text-align: center;
`;

const MainPage = (props) => {
	return (
		<React.Fragment>
			<SearchBarStyle>
				<input type='text' placeholder='Search a movie or Tv Show'></input>
				teszt
			</SearchBarStyle>
		</React.Fragment>
	);
};

export default MainPage;
