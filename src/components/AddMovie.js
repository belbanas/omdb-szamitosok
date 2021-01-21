import React, { useContext } from 'react';
import { MovieContext } from './MovieContext';
import styled from 'styled-components';

const Button = styled.button`
	padding: 0.5rem;
	margin: 0.5rem;
`;

const AddMovie = (props) => {
	const [movies, setMovies] = useContext(MovieContext);

	const addMovie = () => {
		if (movies.watchlist.length > 0) {
			for (let movie of movies.watchlist) {
				if (movie.Title === props.movie.Title) {
					alert('Already added to watchlist!');
				} else {
					setMovies({
						watchlist: [...movies.watchlist, props.movie],
						alreadyWatched: [...movies.alreadyWatched],
					});
				}
			}
		} else {
			setMovies({
				watchlist: [...movies.watchlist, props.movie],
				alreadyWatched: [...movies.alreadyWatched],
			});
		}
	};

	const addMovieTwo = () => {
		if (!movies.alreadyWatched.includes(props.movie.Title)) {
			setMovies({
				watchlist: [...movies.watchlist],
				alreadyWatched: [...movies.alreadyWatched, props.movie.Title],
			});
		} else {
			let filteredArray = movies.alreadyWatched.filter(
				(title) => title !== props.movie.Title
			);
			setMovies({
				watchlist: [...movies.watchlist],
				alreadyWatched: filteredArray,
			});
		}
	};

	const removeFromWatchlist = () => {
		let filteredArray = movies.watchlist.filter(
			(movie) => movie.Title !== props.movie.Title
		);
		setMovies({
			watchlist: filteredArray,
			alreadyWatched: [...movies.alreadyWatched],
		});
	};

	return (
		<React.Fragment>
			<Button type='submit' onClick={addMovie}>
				Add to Watchlist
			</Button>
			<Button onClick={removeFromWatchlist}>Remove from watchlist</Button>

			<Button type='submit' onClick={addMovieTwo}>
				Seen
			</Button>
		</React.Fragment>
	);
};

export default AddMovie;
