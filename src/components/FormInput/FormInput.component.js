import React from 'react';
import './FormInput.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => (
	<div className="group">
		<input
			className="FormInput"
			onChange={handleChange}
			{...props}
		/>
		{label ? (
			<label
				className={`${props.value.length ? 'shrink' : ''} FormInput-label`}
			>
				{label}
			</label>
		) : null}
	</div>
);

export default FormInput;
