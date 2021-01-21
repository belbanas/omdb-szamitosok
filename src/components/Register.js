import React, { useState } from 'react';
import axios from 'axios';

const Register = (params) => {
	const [userEmail, setEmail] = useState('');
	const [userName, setName] = useState('');
	const [userPassword, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handleNameChange = (event) => {
		setName(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleRegistration = (event) => {
		event.preventDefault();
		alert(userEmail + userName + userPassword);
		axios
			.post('http://127.0.0.1:8000/api/registration', {
				name: userName,
				email: userEmail,
				password: userPassword,
				_token: '{{ csrf_token() }}',
			})

			.then((response) => {
				console.log(response);
			});
	};

	return (
		<div>
			<form onSubmit={handleRegistration}>
				<input type='email' onChange={handleEmailChange} />
				<input type='text' onChange={handleNameChange} />
				<input type='password' onChange={handlePasswordChange} />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
