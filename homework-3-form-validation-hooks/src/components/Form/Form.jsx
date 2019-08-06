import * as React from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg'
import { useFormValidation } from "./useFormValidation";
import { FIELDS, validateAuth } from "./validationRules";

const INITIAL_STATE = {
	[FIELDS.FIRST_NAME]: ``,
	[FIELDS.LAST_NAME]: ``,
	[FIELDS.PASSWORD]: ``,
};

const Form = () => {

	const {
		handleSubmit,
		handleBlur,
		handleChange,
		values,
		errors,
		isSubmitting,
		validationStatus,
	} = useFormValidation(INITIAL_STATE, validateAuth);

	const renderedLayout = () => {

		if (validationStatus) {
			return (
				<img src={img} alt="bond" width="235" height="307" className="t-bond-image"/>
			);
		} else {
			return (
				<form className="form"
							onSubmit={handleSubmit}
				>
					<h1>Введите свои данные, агент</h1>
					<p className="field">
						<label className="field__label"
									 htmlFor="firstName">
							<span className="field-label">Имя</span>
						</label>
						<input className="field__input field-input t-input-firstname"
									 type="text"
									 name="firstName"
									 value={values.firstName}
									 onChange={handleChange}
									 onBlur={handleBlur}
									 onFocus={handleChange}
						/>

						{errors.firstName &&
						<span className="field__error field-error t-error-firstname">
							{errors.firstName}
						</span>
						}
					</p>

					<p className="field">
						<label className="field__label"
									 htmlFor="lastName">
							<span className="field-label">Фамилия</span>
						</label>
						<input className="field__input field-input t-input-lastname"
									 type="text"
									 name="lastName"
									 value={values.lastName}
									 onChange={handleChange}
									 onBlur={handleBlur}
									 onFocus={handleChange}
						/>

						{errors.lastName &&
						<span className="field__error field-error t-error-lastname">
							{errors.lastName}
						</span>
						}
					</p>

					<p className="field">
						<label className="field__label"
									 htmlFor="password">
							<span className="field-label">Пароль</span>
						</label>
						<input className="field__input field-input t-input-password"
									 type="password"
									 name="password"
									 value={values.password}
									 onChange={handleChange}
									 onBlur={handleBlur}
									 onFocus={handleChange}
									 autoComplete="on"
						/>

						{errors.password &&
						<span className="field__error field-error t-error-password">
							{errors.password}
						</span>
						}
					</p>

					<div className="form__buttons">
						<input disabled={isSubmitting} type="submit" className="button t-submit" value="Проверить"/>
					</div>
				</form>
			)
		}
	};

	return (
		<div className="app-container">
			{renderedLayout()}
		</div>
	);
};

export { Form };
