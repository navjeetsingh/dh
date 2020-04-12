import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component.js';
import CustomButton from '../CustomButton/CustomButton.component.js';
import {
	auth,
	createUserProfileDocument
} from '../../firebase/firebase.utils.js';
import './SignUp.styles.scss';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: ''
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async event => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}
		try {
			const { user } = await auth.createUserWithEmailAndPassword(
				email,
				password
			);
			await createUserProfileDocument(user, { displayName });
			this.setState({
				displayName: '',
				email: '',
				password: '',
				confirmPassword: ''
			});
		} catch (error) {
			console.log(error);
		}
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<div className="SignUp">
				<h2 className="title">I do not have a account</h2>
				<span>Sign up with your email and password</span>
				<form className="signUpForm" onSubmit={this.handleSubmit}>
					<FormInput
						type="text"
						name="displayName"
						value={displayName}
						label="Display Name"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="email"
						name="email"
						value={email}
						label="Email"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="password"
						value={password}
						label="Password"
						onChange={this.handleChange}
						required
					/>
					<FormInput
						type="password"
						name="confirmPassword"
						value={confirmPassword}
						label="Confirm Password"
						onChange={this.handleChange}
						required
					/>
					<CustomButton type="submit" value="Submit Form">
						Sign Up
					</CustomButton>
				</form>
			</div>
		);
	}
}

export default SignUp;
