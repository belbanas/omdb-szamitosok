import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Table } from 'react-bootstrap';

const ReviewList = (props) => {
	const [reviews, setReviews] = useState([]);

	useEffect(() => {
		axios
			.get('http://127.0.0.1:8000/api/reviews?imdb_id=' + props.imdb_id)
			.then((response) => {
				setReviews(response.data.reviews);
			});
	}, [props.imdb_id]);

	const getReviews = () => {
		if (reviews.length >= 0) {
			return reviews.map((item) => (
				<tr key={item.id}>
					<td>{item.username}</td>
					<td>{item.review}</td>
					<td>{item.rating}</td>
				</tr>
			));
		} else {
			return <h1>Nincs</h1>;
		}
	};

	return (
		<React.Fragment>
			<Table>
				<thead>
					<tr>
						<th>User</th>
						<th>Review</th>
						<th>Rating</th>
					</tr>
				</thead>
				<tbody>{getReviews()}</tbody>
			</Table>
		</React.Fragment>
	);
};

export default ReviewList;
