import * as React from 'react';
import './Form.css';
import img from './assets/bond_approve.jpg'
import { FormField } from './FormField';

const errorTexts = {
	firstName: {
		invalid: `Имя указано не верно`,
		required: `Нужно указать имя`
	},
	lastName: {
		invalid: `Фамилия указана не верно`,
		required: `Нужно указать фамилию`
	},
	password: {
		invalid: `Пароль указан не верно`,
		required: `Нужно указать пароль`
	}
};

const labels = [`Имя`, `Фамилия`, `Пароль`];
const types = [`text`, `text`, `password`];

const inputs = [
	{},
	{},
	{},
];

const newInputs = inputs.reduce((acc, el, i) => {
	return [...acc,
		{
			...el,
			label: labels[i],
			type: types[i],
			name: Object.keys(errorTexts)[i]
		}
	];
}, []);


class Form extends React.Component {
	state = {

		userInfo: {
			firstName: ``,
			lastName: ``,
			password: ``,
		},

		validationStatus: false,
		errorStatus: false
	};

	errorMessages = {};

	handleInputChange = (e) => {
		const {name, value} = e.target;
		this.setState(prevState => ({
			userInfo: {
				...prevState.userInfo,
				[name]: value
			},
		}));
		this.errorMessages = {};
	};

	checkFieldValidity = (field) => {
		if (this.state.userInfo[field].length === 0) {
			this.errorMessages[field] = errorTexts[field].required;
		}
		else if (this.props.validateValues[field].toLowerCase() !== this.state.userInfo[field].toLowerCase()) {
			this.errorMessages[field] = errorTexts[field].invalid;
		}
	};

	handleSubmit = (e) => {
		e.preventDefault();

		Object.keys(this.state.userInfo).forEach((stateKey) => {
			this.checkFieldValidity(stateKey);
		});

		const noErrors = Object.keys(this.errorMessages).length === 0;
		if (noErrors) {
			this.setState({
				validationStatus: true,
			});
		} else {
			this.setState({
				errorStatus: true,
			});
		}
	};


	renderedLayout = () => {
		const { userInfo, validationStatus, errorStatus } = this.state;

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

					{newInputs.map((inputField, index) => (
						<FormField
							key={index}
							type={inputField.type}
							label={inputField.label}
							name={inputField.name}
							value={userInfo[inputField.name]}
							htmlFor={inputField.name}
							handleInputChange={this.handleInputChange}
							errorStatus={errorStatus}
							errorMessages={this.errorMessages[inputField.name]}
						/>
					))}

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
