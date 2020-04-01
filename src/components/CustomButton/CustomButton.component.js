import React from 'react'
import './CustomButton.styles.scss';

const CustomButton = ({children, isGoogleSignIn, ...props}) => (
  <button className={`${isGoogleSignIn ? 'googleSignIn' : ''} CustomButton`}
  {...props}>
    {children}
  </button>
)

export default CustomButton;