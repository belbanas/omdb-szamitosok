import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import ReviewList from './ReviewList';

const Button = styled.button`
	padding: 0.5rem;
	margin: 0.5rem;
`;

const AddMovie = (props) => {
	const [movies, setMovies] = useContext(MovieContext);
	const [rating, setRating] = useState();
	const [review, setReview] = useState();

	const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
	const listItems = numbers.map((number) => <option>{number}</option>);

	const getReview = (event) => {
		setReview(event.target.value);
	};

	const getRating = (event) => {
		setRating(event.target.value);
	};

	const handleRatingAndReview = (event) => {
		event.preventDefault();
		axios
			.post(
				'http://127.0.0.1:8000/api/rating',
				{
					rating: rating,
					imdb_id: props.movie.imdbID,
					review: review,
				},
				config
			)
			.then((response) => {
				console.log(response);
				props.addRating();
			})
			.catch(function (error) {
				alert('error');
			});
	};

	//this is for modal
	const [show, setShow] = useState(false);
	const [show2, setShow2] = useState(false);
	const handleClose = () => {
		setShow(false);
		setShow2(false);
		props.changeCard();
	};
	const handleShow = () => {
		setShow(true);
		props.changeCard();
	};
	const handleShow2 = () => {
		setShow2(true);
		props.changeCard();
	};
	//

	let config = {
		headers: {
			Authorization: 'Bearer ' + sessionStorage.getItem('token'),
		},
	};

	let data = {
		imdb_id: props.movie.imdbID,
	};

	const addMovie = () => {
		axios
			.post('http://127.0.0.1:8000/api/watchlist', data, config)
			.then((response) => console.log(response));
	};

	const removeFromWatchlist = () => {
		axios
			.post('http://127.0.0.1:8000/api/delete', data, config)
			.then((response) => {
				console.log(response);
				alert(response.data.message);
				window.location.href = '/watchlist';
			});
	};

	if (sessionStorage.getItem('token')) {
		return (
			<React.Fragment>
				<Button type='submit' onClick={addMovie}>
					Add to Watchlist
				</Button>
				<Button onClick={removeFromWatchlist}>Remove from watchlist</Button>

				{/* <Button type="submit" onClick={addMovieTwo}>
					Seen
				</Button> */}
				{/* <form onSubmit={handleRatingAndReview}>
						<input onChange={handleRating}></input> <button>Test</button> */}

				<Button variant='primary' onClick={handleShow}>
					Write a review
				</Button>
				<Button onClick={handleShow2}>Reviews</Button>
				<Modal show={show} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Write a review!</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<form onSubmit={handleRatingAndReview}>
							<Form.Group controlId='exampleForm.ControlSelect1'>
								<Form.Label>Rating</Form.Label>
								<Form.Control onChange={getRating} as='select'>
									{listItems}
								</Form.Control>
							</Form.Group>
							<Form.Group controlId='exampleForm.ControlTextarea1'>
								<Form.Label>Review</Form.Label>
								<Form.Control onChange={getReview} as='textarea' rows={3} />
							</Form.Group>
							<Button onClick={handleClose} type='submit'>
								Send Review
							</Button>
						</form>
					</Modal.Body>
				</Modal>

				<Modal show={show2} onHide={handleClose}>
					<Modal.Header closeButton>
						<Modal.Title>Reviews</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<ReviewList imdb_id={props.movie.imdbID} />
					</Modal.Body>
				</Modal>
			</React.Fragment>
		);
	} else {
		return null;
	}
};

export default AddMovie;
