import React from 'react';
import './CustomButton.styles.scss';

const CustomButton = ({ children, isGoogleSignIn, inverted, ...props }) => (
	<button
		className={`${inverted ? 'inverted' : ''} ${
			isGoogleSignIn ? 'googleSignIn' : ''
		} CustomButton`}
		{...props}
	>
		{children}
	</button>
);

export default CustomButton;
