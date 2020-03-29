import React from 'react'
import './CustomButton.styles.scss';

const CustomButton = ({children, props}) => (
  <button className="CustomButton" {...props}>
    {children}
  </button>
)

export default CustomButton;