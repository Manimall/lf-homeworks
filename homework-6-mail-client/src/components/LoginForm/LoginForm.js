// Реализуйте компонент формы логина.
// Используйте `/contexts/Auth` для получения метода authorize
// и статуса isAuthorized.

// Когда пользователь авторизован - перенаправьте его на роут /app

import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { withAuth } from "../../context/Auth";
import styles from './LoginForm.module.css';


const Form = (props) => {
	const { authError, authorize} = props;

	const [inputValue, setInputValue] = useState({});
	const { email, password } = inputValue;

	const handleChange = ({target: { value, name } }) => {
		const userData = {
			...inputValue,
			[name]: value,
		};
		setInputValue(userData);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		authorize(email, password);
	};

	return (
		<div className={styles.bg}>
			<form className={`${styles.form} t-form`}
						onSubmit={handleSubmit}>
				<p>
					<label htmlFor="email"><
						span className={styles.labelText}>Почта</span>
					</label>
					<input
						type="text"
						name="email"
						className={`${styles.input} t-input-email`}
						value={email}
						onChange={handleChange}
					/>
				</p>
				<p>
					<label htmlFor="password">
						<span className={styles.labelText}>Пароль</span>
					</label>
					<input
						type="password"
						name="password"
						className={`${styles.input} t-input-password`}
						autoComplete="on"
						value={password}
						onChange={handleChange}
					/>
				</p>

				{authError && <p className={styles.error}>{authError}</p>}

				<div className={styles.buttons}>
					<button className={`${styles.button} t-login`}>Войти</button>
				</div>
			</form>
		</div>
	);
};

const LoginForm = (props) => {
	const { isAuthorized, authError, authorize} = props;

	return isAuthorized ? (
		<Redirect to="app" />
	) : (
		<Form authError={authError} authorize={authorize}/>
	);
};

export default withAuth(LoginForm);
