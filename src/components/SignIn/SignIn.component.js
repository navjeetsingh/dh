import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
	SignInContainer,
	SignInTitle,
	ButtonsBarContainer,
} from './SignIn.styles.js';
import FormInput from '../FormInput/FormInput.component.js';
import CustomButton from '../CustomButton/CustomButton.component.js';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';
import { googleSignInStart } from '../../redux/user/user.actions';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
		};
	}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();

		const { email, password } = this.state;
		try {
			await auth.signInWithEmailAndPassword(email, password);
			this.setState({
				email: '',
				password: '',
			});
		} catch (error) {
			console.log(error);
		}
	};

	render() {
		const { email, password } = this.state;
		const { googleSignInStart } = this.props;
		return (
			<SignInContainer>
				<SignInTitle>I already have an account</SignInTitle>
				<span>Sign in with your email and password</span>
				<form onSubmit={this.handleSubmit}>
					<FormInput
						name="email"
						type="email"
						value={email}
						handleChange={this.handleChange}
						label="Email"
						required
					/>
					<FormInput
						name="password"
						type="password"
						value={password}
						label="Password"
						handleChange={this.handleChange}
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
	}
}

const mapDispatchToProps = (dispatch) => ({
	googleSignInStart: () => dispatch(googleSignInStart()),
});

export default connect(null, mapDispatchToProps)(SignIn);
