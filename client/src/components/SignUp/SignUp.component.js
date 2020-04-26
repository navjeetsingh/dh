import React, { useState } from 'react';
import { connect } from 'react-redux';
import { SignUpContainer, SignUpTitle } from './SignUp.styles.js';
import FormInput from '../FormInput/FormInput.component.js';
import CustomButton from '../CustomButton/CustomButton.component.js';
import { signUpStart } from '../../redux/user/user.actions';

const SignUp = ({ signUpStart }) => {
	const [userCredentials, setUserCredentials] = useState({
		displayName: '',
		email: '',
		password: '',
		confirmPassword: '',
	});

	const { displayName, email, password, confirmPassword } = userCredentials;

	const handleChange = (event) => {
		const { value, name } = event.target;
		setUserCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}
		signUpStart({ displayName, email, password });
	};

	return (
		<SignUpContainer>
			<SignUpTitle>I do not have a account</SignUpTitle>
			<span>Sign up with your email and password</span>
			<form className="signUpForm" onSubmit={handleSubmit}>
				<FormInput
					type="text"
					name="displayName"
					value={displayName}
					label="Display Name"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="email"
					name="email"
					value={email}
					label="Email"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="password"
					value={password}
					label="Password"
					onChange={handleChange}
					required
				/>
				<FormInput
					type="password"
					name="confirmPassword"
					value={confirmPassword}
					label="Confirm Password"
					onChange={handleChange}
					required
				/>
				<CustomButton type="submit" value="Submit Form">
					Sign Up
				</CustomButton>
			</form>
		</SignUpContainer>
	);
};
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
