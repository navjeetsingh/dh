import React from 'react';
import {
	GroupContainer,
	FormInputContainer,
	FormInputLabel,
} from './FormInput.styles.js';

const FormInput = ({ handleChange, label, ...props }) => (
	<GroupContainer>
		<FormInputContainer onChange={handleChange} {...props} />
		{label ? (
			<FormInputLabel>
				{label}
			</FormInputLabel>
		) : null}
	</GroupContainer>
);

export default FormInput;
