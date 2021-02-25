import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import AddMovie from './AddMovie';
import { MovieContext } from './MovieContext';

const MovieCard = styled.div`
	color: black;
	padding: 5px 5px;
	border: 3px solid;
	background: lightgrey;
	text-align: center;
	border-radius: 1rem;
	width: 22rem;
	height: 43rem;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	overflow: hidden;
`;

const Poster = styled.img`
	max-width: 110%;
	max-height: 110%;
`;

const CardDetails = styled.div`
	text-align: center;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: center;
	align-items: center;
`;

const Title = styled.h3``;

const Detail = styled.p`
	padding: 0.8rem;
`;

const Button = styled.button`
	padding: 0.5rem;
	margin: 0.5rem;
`;

const Score = styled.p`
	padding: 0.8rem;
	border: 2px solid;
	border-radius: 5rem;
	width: 3.5rem;
	background: yellow;
	font-weight: bold;
`;

const Scores = styled.div`
	float: left;
	display: flex;
`;

const GrayScale = styled.div``;

const Item = (props) => {
	const [details, setDetails] = useState({});
	const [movies, setMovies] = useContext(MovieContext);
	const [grayscale, setGrayscale] = useState(false);

	useEffect(() => {
		axios
			.get('http://www.omdbapi.com/?apikey=530b6ee1&i=' + props.imdbid)
			.then((response) => {
				setDetails(response.data);
				grayScaled();
			});
	}, [props.imdbid, movies.alreadyWatched]);

	const grayScaleStyle = () => {
		if (grayscale) {
			return {
				filter: 'grayscale(100%)',
			};
		} else {
			return {
				filter: 'grayscale(0%)',
			};
		}
	};
	const grayScaled = () => {
		if (movies.alreadyWatched.includes(props.title)) {
			setGrayscale(true);
		} else {
			setGrayscale(false);
		}
	};

	return (
		<React.Fragment>
			<Flippy flipOnHover={false} flipOnClick={true} flipDirection='horizontal'>
				<FrontSide>
					<MovieCard>
						<GrayScale style={grayScaleStyle()}>
							<Poster src={details.Poster}></Poster>
						</GrayScale>
						<Title>{details.Title}</Title>
						<p>{details.Year}</p>
					</MovieCard>
				</FrontSide>
				<BackSide>
					<MovieCard>
						<CardDetails>
							<Title>{details.Title}</Title>
							<Scores>
								<Score>{details.imdbRating}</Score>
								<Score>{details.imdbRating}</Score>
							</Scores>
							<Detail>{details.Runtime}</Detail>
							<Detail>{details.Genre}</Detail>
							<Detail>{details.Plot}</Detail>
              <Detail>Director: {details.Director}</Detail>
              <Detail>Starring: {details.Actors}</Detail>
							<Detail>
								<AddMovie movie={details} />
							</Detail>
						</CardDetails>
					</MovieCard>
				</BackSide>
			</Flippy>
		</React.Fragment>
	);
};

export default Item;
