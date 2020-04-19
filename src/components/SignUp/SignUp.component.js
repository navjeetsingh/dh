import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SignUpContainer, SignUpTitle } from './SignUp.styles.js';
import FormInput from '../FormInput/FormInput.component.js';
import CustomButton from '../CustomButton/CustomButton.component.js';
import { signUpStart } from '../../redux/user/user.actions';

class SignUp extends Component {
	constructor(props) {
		super(props);
		this.state = {
			displayName: '',
			email: '',
			password: '',
			confirmPassword: '',
		};
	}

	handleChange = (event) => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = async (event) => {
		event.preventDefault();
		const { displayName, email, password, confirmPassword } = this.state;
		const {signUpStart} = this.props
		if (password !== confirmPassword) {
			alert('passwords do not match');
			return;
		}
		signUpStart({displayName, email, password,})
	};
	render() {
		const { displayName, email, password, confirmPassword } = this.state;
		return (
			<SignUpContainer>
				<SignUpTitle>I do not have a account</SignUpTitle>
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
			</SignUpContainer>
		);
	}
}
const mapDispatchToProps = (dispatch) => ({
	signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null,mapDispatchToProps)(SignUp);
