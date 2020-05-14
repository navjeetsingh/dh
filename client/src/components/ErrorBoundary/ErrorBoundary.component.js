import React, { Component } from 'react';
import {
	ErrorImageOverlay,
	ErrorImageContainer,
	ErrorImageText,
} from './ErrorBoundary.styles';
class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = {
			hasError: false,
		};
	}
	static getDerivedStatFromError(error) {
		//process the error
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		console.log(error);
	}

	render() {
		const { hasError } = this.state;
		const { children } = this.props;
		if (hasError) {
			return (
				<ErrorImageOverlay>
					<ErrorImageContainer imageUrl="https://i.imgur.com/lKJiT77.png" />
					<ErrorImageText>Sorry Bacardi ate your page...</ErrorImageText>
				</ErrorImageOverlay>
			);
		}
		return children;
	}
}

export default ErrorBoundary;
