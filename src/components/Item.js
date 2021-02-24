import React, { useState, useEffect, useContext } from 'react';
import styled from 'styled-components';
import Flippy, { FrontSide, BackSide } from 'react-flippy';
import axios from 'axios';
import AddMovie from './AddMovie';
import { MovieContext } from './MovieContext';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

const MovieCard = styled.div`
	color: black;
	padding: 5px 5px;
	border: 2px solid;
	background: lightyellow;
	text-align: center;
	border-radius: 1rem;
	width: 22rem;
	height: 40rem;
	display: flex;
	flex-flow: column wrap;
	justify-content: center;
	align-content: center;
	align-items: center;
	overflow: hidden;
`;

const Poster = styled.img`
	max-width: 95%;
	max-height: 95%;
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

const GrayScale = styled.div``;

const Item = (props) => {
	const [details, setDetails] = useState({});
	const [movies, setMovies] = useContext(MovieContext);
	const [grayscale, setGrayscale] = useState(false);
	const [rating, setRating] = useState();
	const [review, setReview] = useState();

	const handleReview = (event) => {
		setReview(event.target.value);
	};

	const handleRating = (event) => {
		setRating(event.target.value);
	};

	const handleRatingAndReview = (event) => {
		event.preventDefault();
		axios
			.post(
				'http://127.0.0.1:8000/api/rating',
				{
					rating: rating,
				},
				config
			)
			.then((response) => {
				console.log(response);
			})
			.catch(function (error) {
				alert('error');
			});
	};

	//this is for modal
	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);
	//

	let config = {
		headers: {
			Authorization: 'Bearer ' + sessionStorage.getItem('token'),
		},
	};

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
							<Score>{details.imdbRating}</Score>
							<Detail>{details.Runtime}</Detail>
							<Detail>{details.Genre}</Detail>
							<Detail>{details.Plot}</Detail>
							<Detail>
								<AddMovie movie={details} />
							</Detail>
							<>
								<form onSubmit={handleRatingAndReview}>
									<Button variant='primary' onClick={handleShow}>
										Write a review
									</Button>

									<Modal show={show} onHide={handleClose}>
										<Modal.Header closeButton>
											<Modal.Title>Write a review!</Modal.Title>
										</Modal.Header>
										<Modal.Body>
											<Form.Group controlId='exampleForm.ControlSelect1'>
												<Form.Label>Rating</Form.Label>
												<Form.Control as='select' onChange={handleRating}>
													<option>1</option>
													<option>2</option>
													<option>3</option>
													<option>4</option>
													<option>5</option>
												</Form.Control>
											</Form.Group>
											<Form.Group controlId='exampleForm.ControlTextarea1'>
												<Form.Label>Review</Form.Label>
												<Form.Control as='textarea' rows={3} />
											</Form.Group>
										</Modal.Body>
										<Modal.Footer>
											<Button variant='secondary' onClick={handleClose}>
												Close
											</Button>
											<Button variant='primary' onClick={handleClose}>
												Save Changes
											</Button>
										</Modal.Footer>
									</Modal>
								</form>
							</>
						</CardDetails>
					</MovieCard>
				</BackSide>
			</Flippy>
		</React.Fragment>
	);
};

export default Item;
