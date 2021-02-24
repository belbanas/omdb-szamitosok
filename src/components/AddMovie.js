import React, { useContext, useState } from 'react';
import { MovieContext } from './MovieContext';
import styled from 'styled-components';
import axios from 'axios';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

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

	let data = {
		imdb_id: props.movie.imdbID,
	};

	const addMovie = () => {
		axios
			.post('http://127.0.0.1:8000/api/watchlist', data, config)
			.then((response) => console.log(response));
	};

	// const addMovieTwo = () => {
	//     if (!movies.alreadyWatched.includes(props.movie.Title)) {
	//         setMovies({
	//             watchlist: [...movies.watchlist],
	//             alreadyWatched: [...movies.alreadyWatched, props.movie.Title],
	//         });
	//     } else {
	//         let filteredArray = movies.alreadyWatched.filter(
	//             (title) => title !== props.movie.Title
	//         );
	//         setMovies({
	//             watchlist: [...movies.watchlist],
	//             alreadyWatched: filteredArray,
	//         });
	//     }
	// };

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
			</React.Fragment>
		);
	} else {
		return null;
	}
};

export default AddMovie;
