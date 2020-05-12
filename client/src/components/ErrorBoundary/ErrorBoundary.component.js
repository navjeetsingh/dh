import React, { Component } from 'react';

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
			return <div>Something went wrong</div>;
		}
		return children;
	}
}

export default ErrorBoundary;
