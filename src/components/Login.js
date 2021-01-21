import React, { useState } from 'react';
import axios from 'axios';

const Login = (params) => {
	const [userEmail, setEmail] = useState('');
	const [userPassword, setPassword] = useState('');

	const handleEmailChange = (event) => {
		setEmail(event.target.value);
	};

	const handlePasswordChange = (event) => {
		setPassword(event.target.value);
	};

	const handleLogin = (event) => {
		event.preventDefault();
		alert(userEmail + userPassword);
		axios
			.post('http://127.0.0.1:8000/api/login', {
				email: userEmail,
				password: userPassword,
			})

			.then((response) => {
				console.log(response);
				sessionStorage.setItem('token', response.data.token);
				sessionStorage.setItem('username', response.data.user.name);
				window.location.href = '/';
			});
	};

	return (
		<div>
			<form onSubmit={handleLogin}>
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

export default Login;
