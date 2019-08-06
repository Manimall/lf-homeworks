import * as React from 'react';
import './Form.css';

const FormField = (props) => {
	return (
		<p className="field">
			<label className="field__label"
						 htmlFor={props.name}>
				<span className="field-label">{props.label}</span>
			</label>
			<input className={`field__input field-input t-input-${props.name.toLowerCase()}`}
						 type={props.type}
						 name={props.name}
						 value={props.value}
						 onChange={props.handleInputChange}
			/>
			<span className={`field__error field-error t-error-${props.name.toLowerCase()}`}>
				{props.errorStatus && props.errorMessages}
			</span>
		</p>
	);
};

export { FormField }