import React from 'react';
import styled from 'styled-components';

const MovieCard = styled.div`
	color: black;
	margin: 2rem;
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
		<MovieCard>
			<Poster src={props.poster}></Poster>
			{props.title}
			<Test>{props.year}</Test>
		</MovieCard>
	);
};

export default Item;
