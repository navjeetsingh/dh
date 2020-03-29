import React, { Component } from 'react';
import FormInput from '../FormInput/FormInput.component.js'
import './SignIn.styles.scss';

class SignIn extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: ''
		};
	}

	handleChange = event => {
		const { value, name } = event.target;
		this.setState({ [name]: value });
	};

	handleSubmit = event => {
		event.preventDefault();
		this.setState({
			email: '',
			password: ''
		});
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="SignIn">
				<h2>I already have an account</h2>
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
					<input type="submit" value="Submit Form" />
				</form>
			</div>
		);
	}
}

export default SignIn;
