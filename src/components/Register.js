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
		// alert(userEmail + userName + userPassword);
		axios
			.post('http://127.0.0.1:8000/api/registration', {
				name: userName,
				email: userEmail,
				password: userPassword,
			})
			.then((response) => {
				console.log(response);
				window.location.href = '/';
			})
			.catch(function (error) {
				alert(error)
			});
	};

	return (
		<div>
			<form onSubmit={handleRegistration}>
				<label for='name'>Username</label>
				<input type='text' id='name' onChange={handleNameChange} />
				<br />
				<label for='email'>Email</label>
				<input type='email' id='email' onChange={handleEmailChange} />
				<br />
				<label for='password'>Password</label>
				<input type='password' id='password' onChange={handlePasswordChange} />
				<br />
				<button type='submit'>Submit</button>
			</form>
		</div>
	);
};

export default Register;
