import React from 'react';
import { SpinnerOverlay, SpinnerContainer } from './WithSpinner.styles.js';

const WithSpinner = (WrappedComponent) => {
	const Spinner = ({ isLoading, ...props }) => {
		return isLoading ? (
			<SpinnerOverlay>
				<SpinnerContainer />
			</SpinnerOverlay>
		) : (
			<WrappedComponent {...props} />
		);
	};
	return Spinner;
};

export default WithSpinner;
