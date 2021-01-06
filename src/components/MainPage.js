import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Item from './Item';

const SearchField = styled.input`
	width: 500px;
	border: 2px solid black;
	height: 50px;
	border-radius: 5px 0 0 5px;
	outline: none;
	font-size: 1.5rem;
	display: block;
`;

const Place = styled.div`
	display: flex;
	justify-content: center; /* horizontal */
	align-items: center; /* vertical */
	padding: 10px;
`;

const MovieCards = styled.div`
	display: flex;
	flex-flow: row wrap;
	justify-content: center;
`;

const MainPage = () => {
	const [results, setResults] = useState([]);
	const [value, setValue] = useState('');

	useEffect(() => {
		axios
			.get('http://www.omdbapi.com/?apikey=530b6ee1&s=' + value)
			.then((response) => {
				if (response.data.Response === 'True') {
					console.log(response.data.Search);
					setResults(response.data.Search);
				}
			});
	}, [value]);

	const getResults = () => {
		if (results.length >= 0) {
			return results.map((item) => (
				<Item
					key={item.imdbID}
					title={item.Title}
					year={item.Year}
					type={item.Type}
					poster={item.Poster}
				/>
			));
		} else {
			return <h1>Nincs</h1>;
		}
	};

	const handleChange = (e) => {
		setValue(e.target.value);
	};

	return (
		<React.Fragment>
			<Place>
				<form>
					<SearchField
						placeholder='Search'
						name='search'
						type='text'
						placeholder='Start typing'
						onChange={handleChange}
					></SearchField>
				</form>
			</Place>
			<MovieCards>{getResults()}</MovieCards>
		</React.Fragment>
	);
};

export default MainPage;
