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
					alert('Already kaki');
				} else {
					setMovies({
						watchlist: [...movies.watchlist, props.watchlist],
						alreadyWatched: [...movies.alreadyWatched],
					});
					console.log('kakkanat');
				}
			}
		} else {
			setMovies({
				watchlist: [...movies.watchlist, props.watchlist],
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
			alert('Already added!');
		}
	};

	return (
		<React.Fragment>
			<Button type='submit' onClick={addMovie}>
				Add to Watchlist
			</Button>

			<Button type='submit' onClick={addMovieTwo}>
				Seen
			</Button>
		</React.Fragment>
	);
};

export default AddMovie;
