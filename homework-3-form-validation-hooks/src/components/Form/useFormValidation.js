import * as React from 'react';

const useFormValidation = (initialState, validationFn) => {
	const [values, setValues] = React.useState(initialState);
	const [validationStatus, setValidationStatus] = React.useState(false);
	const [errors, setErrors] = React.useState({});
	const [isSubmitting, setSubmitting] = React.useState(false);

	React.useEffect(() => {
		if (isSubmitting) {
			const noErrors = Object.keys(errors).length === 0;
			if (noErrors) {
				console.log("authenticated!", values);
				setValidationStatus(true);
			} else {
				console.log(`smth gone wrong! Check Your data!`);
			}
			setSubmitting(false);
		}
	}, [errors]);

	const handleChange = (e) => {
		const {name, value} = e.target;
		setValues({
			...values,
			[name]: value,
		});
		setErrors({});
	};

	const handleBlur = () => {
		const blurErrors = validationFn(values);
		setErrors(blurErrors);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		setTimeout(() => {
			const validationErrors = validationFn(values);
			setErrors(validationErrors);
			setSubmitting(false);
		}, 1000);
		setSubmitting(true);
	};

	return {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
		validationStatus
	}
};

export { useFormValidation };