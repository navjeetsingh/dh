import React, { useState } from 'react';
import { connect } from 'react-redux';
import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './SignIn.styles.js';
import FormInput from '../FormInput/FormInput.component.js';
import CustomButton from '../CustomButton/CustomButton.component.js';
import {
	googleSignInStart,
	emailSignInStart,
} from '../../redux/user/user.actions';

const SignIn = ({ emailSignInStart, googleSignInStart }) => {
	const [userCredentials, setCredentials] = useState({
		email: '',
		password: '',
	});
	const { email, password } = userCredentials;
	const handleChange = (event) => {
		const { value, name } = event.target;
		setCredentials({ ...userCredentials, [name]: value });
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		emailSignInStart(email, password);
	};
	
	return (
		<SignInContainer>
			<SignInTitle>I already have an account</SignInTitle>
			<span>Sign in with your email and password</span>
			<form onSubmit={handleSubmit}>
				<FormInput
					name="email"
					type="email"
					value={email}
					handleChange={handleChange}
					label="Email"
					required
				/>
				<FormInput
					name="password"
					type="password"
					value={password}
					label="Password"
					handleChange={handleChange}
					required
				/>
				<ButtonsBarContainer>
					<CustomButton type="submit" value="Submit Form">
						Sign in
					</CustomButton>
					<CustomButton
						type="button"
						onClick={googleSignInStart}
						isGoogleSignIn
					>
						Sign in with Google
					</CustomButton>
				</ButtonsBarContainer>
			</form>
		</SignInContainer>
	);
};

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
	emailSignInStart: (email, password) =>
		dispatch(emailSignInStart({ email, password })),
});

export default connect(null, mapDispatchToProps)(SignIn);
