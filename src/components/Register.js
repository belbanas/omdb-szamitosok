import React, { useState } from 'react';
import axios from 'axios';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

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
				alert(error);
			});
	};

	return (
		<Form onSubmit={handleRegistration}>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Username</Form.Label>
				<Form.Control
					onChange={handleNameChange}
					type='text'
					placeholder='Username'
				/>
			</Form.Group>
			<Form.Group controlId='formBasicEmail'>
				<Form.Label>Email address</Form.Label>
				<Form.Control
					onChange={handleEmailChange}
					type='email'
					placeholder='Enter email'
				/>
				<Form.Text className='text-muted'>
					We'll never share your email with anyone else.
				</Form.Text>
			</Form.Group>

			<Form.Group controlId='formBasicPassword'>
				<Form.Label>Password</Form.Label>
				<Form.Control
					onChange={handlePasswordChange}
					type='password'
					placeholder='Password'
				/>
			</Form.Group>
			<Button variant='primary' type='submit'>
				Submit
			</Button>
		</Form>
	);
};

export default Register;
