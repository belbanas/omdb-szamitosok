import React, { useState, useContext, useEffect } from 'react';
import { MovieContext } from './MovieContext';
import Item from './Item';
import styled from 'styled-components';
import axios from 'axios';

const MovieCards = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
`;

const Movies = () => {
	const [movies, setMovies] = useContext(MovieContext);
	const [watchlist, setWatchlist] = useState([]);

	useEffect(() => {
		let config = {
			headers: {
				Authorization: 'Bearer ' + sessionStorage.getItem('token'),
			},
		};
		axios
			.get('http://127.0.0.1:8000/api/watchlist', config)
			.then((response) => {
				console.log(response);
				setWatchlist(response.data.watchlist);
			});
	}, []);

	const getWatchlist = () => {
		if (watchlist.length >= 0) {
			return watchlist.map((item) => (
				<Item key={item.id} imdbid={item.imdb_id} />
			));
		} else {
			return <h1>Nincs</h1>;
		}
	};

	return (
		<div>
			<MovieCards>{getWatchlist()}</MovieCards>
		</div>
	);
};

export default Movies;
