import React from 'react';
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const MovieCard = styled.div`
	color: black;
	padding: 5px 5px;
	border: 2px solid;
	background: lightyellow;
	text-align: center;
	width: 13rem;
	height: 22rem;
`;

const Poster = styled.img`
	max-width: 95%;
	max-height: 95%;
`;

const Test = styled.p`
	text-align: center;
`;

const Item = (props) => {
	return (
		<React.Fragment>
			<Flippy flipOnHover={false} flipOnClick={true} flipDirection='horizontal'>
				<FrontSide>
					<MovieCard>
						<Poster src={props.poster}></Poster>
						{props.title}
						<Test>{props.year}</Test>
					</MovieCard>
				</FrontSide>
				<BackSide>ROCKS</BackSide>
			</Flippy>
		</React.Fragment>
	);
};

export default Item;
