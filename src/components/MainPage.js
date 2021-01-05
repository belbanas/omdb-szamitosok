import React from 'react';
import styled from 'styled-components';

const WrapStyle = styled.div`
	width: 30%;
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const SearchStyle = styled.div`
	position: relative;
	display: flex;
`;

const InputStyle = styled.input`
	width: 5000px;
	border: 2px solid black;
	border-right: none;
	padding: 5px;
	height: 50px;
	border-radius: 5px 0 0 5px;
	outline: none;
	font-size: 1.5rem;
`;

const SearchButton = styled.button`
	width: 500px;
	height: 50px;
	border: 1px solid black;
	background: #00b4cc;
	text-align: center;
	color: #fff;
	border-radius: 0 5px 5px 0;
	cursor: pointer;
	font-size: 20px;
`;

const MainPage = (props) => {
	return (
		<React.Fragment>
			<WrapStyle>
				<SearchStyle>
					<InputStyle placeholder='Search'></InputStyle>
					<SearchButton>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Magnifying_glass_icon.svg/1200px-Magnifying_glass_icon.svg.png'
							height='33'
							width='32'
							alt=''
						></img>
					</SearchButton>
				</SearchStyle>
			</WrapStyle>
		</React.Fragment>
	);
};

export default MainPage;
