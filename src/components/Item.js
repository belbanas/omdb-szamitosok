import React from 'react';
import styled from 'styled-components';

const MovieDesign = styled.h3`
	color: black;
	display: inline-table;
	margin: 5px;
	padding: 5px 5px;
	border: 2px solid;
	background: lightyellow;
	text-align: center;
	flex-flow: column;
`;

const Test = styled.p`
	text-align: center;
`;

const Item = (props) => {
	return (
		<MovieDesign>
			{props.title}
			<Test>{props.year}</Test>
		</MovieDesign>
	);
};

export default Item;
