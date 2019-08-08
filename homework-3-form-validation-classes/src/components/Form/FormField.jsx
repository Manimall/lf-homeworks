import * as React from 'react';
import './Form.css';

const FormField = (props) => {
	const {name, label, type, value, errorStatus, errorMessages, handleInputChange} = props;
	const clazz = name.toLowerCase();

	return (
		<p className="field">
			<label className="field__label"
						 htmlFor={name}>
				<span className="field-label">{label}</span>
			</label>
			<input className={`field__input field-input t-input-${clazz}`}
						 type={type}
						 name={name}
						 value={value}
						 onChange={handleInputChange}
			/>
			<span className={`field__error field-error t-error-${clazz}`}>
				{errorStatus && errorMessages}
			</span>
		</p>
	);
};

export { FormField }