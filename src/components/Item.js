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
	padding: 0.01rem;
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

const Score2 = styled.p`
	padding: 0.8rem;
	border: 2px solid;
	border-radius: 5rem;
	width: 3.5rem;
	background: lightblue;
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
	const [rating, setRating] = useState([]);

	useEffect(() => {
		axios
			.get('http://localhost:8000/api/movie/' + props.imdbid)
			// .then((response) => JSON.parse(response.data))
			.then((resp) => {
				setDetails(resp.data);
				grayScaled();
				getRatings();
			});
	}, [props.imdbid, movies.alreadyWatched]);

	const getRatings = () => {
		axios
			.get(
				'http://127.0.0.1:8000/api/user-review?imdb_id=' + props.imdbid,
				config
			)
			.then((response) => {
				setRating(response.data.reviews);
			});
	};

	let config = {
		headers: {
			'Access-Control-Allow-Origin': '*',
			Authorization: 'Bearer ' + sessionStorage.getItem('token'),
		},
	};

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

	const [cardFlip, setCardFlip] = useState(true);

	const changeCardFlip = () => {
		if (cardFlip) {
			setCardFlip(false);
		} else {
			setCardFlip(true);
		}
	};

	const setRatingData = () => {
		if (sessionStorage.getItem('token')) {
			if (rating.length > 0) {
				return rating.map((item) => <div>{item.rating}</div>);
			}
		} else {
			return 'N/A';
		}
	};

	return (
		<React.Fragment>
			<Flippy
				flipOnHover={false}
				flipOnClick={cardFlip}
				flipDirection='horizontal'
			>
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
								<Score2>{setRatingData()}</Score2>
							</Scores>
							<Detail>{details.Runtime}</Detail>
							<Detail>{details.Genre}</Detail>
							<Detail>{details.Plot}</Detail>
							<Detail>Director: {details.Director}</Detail>
							<Detail>Starring: {details.Actors}</Detail>
							<Detail>
								<AddMovie
									addRating={getRatings}
									changeCard={changeCardFlip}
									movie={details}
								/>
							</Detail>
						</CardDetails>
					</MovieCard>
				</BackSide>
			</Flippy>
		</React.Fragment>
	);
};

export default Item;
