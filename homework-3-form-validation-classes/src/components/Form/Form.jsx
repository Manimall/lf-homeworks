import * as React from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg'


const notValidFieldsInfo = {
	[`firstName`]: `Имя указано не верно`,
	[`lastName`]: `Фамилия указана не верно`,
	[`password`]: `Пароль указан не верно`
};

const emptyFields = {
	[`firstName`]: `Нужно указать имя`,
	[`lastName`]: `Нужно указать фамилию`,
	[`password`]: `Нужно указать пароль`
};


class Form extends React.Component {
	constructor(props) {
		super(props)
	};

	errorMessages = {
		firstName: null,
		lastName: null,
		password: null,
	};

	state = {
		userInfo: {
			firstName: ``,
			lastName: ``,
			password: ``,
		},

		validationStatus: false,
		errorStatus: false
	};

	handleInputChange = (e) => {
		const {name, value} = e.target;
		this.setState({
			userInfo: {
				[name]: value
			},
			errorStatus: false
		});
	};

	checkFieldValidity = (field) => {
		if (this.state.userInfo[field].length === 0) {
			this.errorMessages[field] = emptyFields[field];
			this.setState({
				errorStatus: true
			});
		}
		else if (this.props.data[field].toLowerCase() !== this.state.userInfo[field].toLowerCase()) {
			this.errorMessages[field] = notValidFieldsInfo[field];
			this.setState({
				errorStatus: true
			});
		}
		else {
			this.setState({
				errorStatus: false,
				validationStatus: true
			});
		}
	};


	handleSubmit = (e) => {
		e.preventDefault();

		Object.keys(this.state.userInfo).forEach((stateKey) => {
			this.checkFieldValidity(stateKey);
		});
	};

	renderedLayout = () => {
		const { lastName, firstName, password, validationStatus , errorStatus } = this.state;

		if (validationStatus) {
			return (
				<img src={img} alt="bond" width="235" height="307" className="t-bond-image"/>
			);
		} else {
			return (
				<form className="form"
							onSubmit={this.handleSubmit}
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
									 value={firstName}
									 onChange={this.handleInputChange}
						/>

						<span className="field__error field-error t-error-firstname">{errorStatus && this.errorMessages.firstName}</span>
					</p>

					<p className="field">
						<label className="field__label"
									 htmlFor="lastName">
							<span className="field-label">Фамилия</span>
						</label>
						<input className="field__input field-input t-input-lastname"
									 type="text"
									 name="lastName"
									 value={lastName}
									 onChange={this.handleInputChange}
						/>
						<span className="field__error field-error t-error-lastname">{errorStatus && this.errorMessages.lastName}</span>
					</p>

					<p className="field">
						<label className="field__label"
									 htmlFor="password">
							<span className="field-label">Пароль</span>
						</label>
						<input className="field__input field-input t-input-password"
									 type="password"
									 name="password"
									 value={password}
									 onChange={this.handleInputChange}
						/>
						<span className="field__error field-error t-error-password">{errorStatus && this.errorMessages.password}</span>
					</p>

					<div className="form__buttons">
						<input type="submit" className="button t-submit" value="Проверить"/>
					</div>
				</form>
			)
		}
	};

	render() {
		return (
			<div className="app-container">
				{this.renderedLayout()}
			</div>
		);
	}
}

export { Form }
