import React, { useReducer } from "react";

/*
    Напишите компонент с двуми инпутами и кнопкой

    Если инпуты заполнены - при нажатии на кнопку показывается сообщение об успехе

    У сообщения об успехе должно быть поле data-testid='success'
    Сообжение должно содержать текст "Вы вошли"

    Email инпут должен иметь поле data-testid='input-email'
    Password инпут должен иметь поле data-testid='input-password'
    Кнопка логина должна иметь поле data-testid='submit'

    ##  Дополнительное задание:

    У вас получится несколько useState.
    В качестве дополнительной тренировки попробуйте использовать useReducer
    вместо нескольких useState

    Прочитайте документацию:
    https://reactjs.org/docs/hooks-reference.html#usereducer
*/




const initialState = {
	values: {},
	success: false,
};


const validationReducer = (state, action) => {
	switch (action.type) {
		case `change`: {
			const values = {...state.values, ...action.payload };
			return {
				...state,
				values,
			};
		}
		case `success`: {
			return {...state, success: true}
		}
		case `submit`:
			return { ...state, submitted: true };
		default: {
			throw new Error('Unexpected action');
		}
	}
};


const useValidation = () => {
	const [state, dispatch] = useReducer(
		validationReducer,
		initialState
	);

	const validateFields = () => {
		for (let value in state.values) {
			if (value) dispatch({ type: `success`});
		}
	};

	return {
		success: state.success,
		submitted: state.submitted,
		getFormProps: () => ({
			onSubmit: e => {
				e.preventDefault();
				dispatch({ type: 'submit' });
				validateFields();
			},
		}),
		getFieldProps: fieldName => ({
			onChange: e => {
				const { value } = e.target;
				dispatch({
					type: `change`,
					payload: { [fieldName]: value },
				});
			},
			name: fieldName,
			value: state.values[fieldName] || '',
			[`data-testid`]: `${fieldName}-input`
		}),
	};
};

export const Form = () => {
	const { getFieldProps, getFormProps, success } = useValidation(fields => ({
		fields: {
			email: {
				isRequired: { message: 'Please fill out a username' },
				initialValue: '',
			},
			password: {
				isRequired: { message: 'Please fill out a password' },
			},
		},
		onSubmit: state => {
			console.log('submitted', state);
		},
	}));

	return (
		<form {...getFormProps()}>
			<div>
				<label>
					Email
					<br />
					<input
						type="email"
						autoComplete="smth@mail.ru"
						{...getFieldProps('email')} />
				</label>
			</div>
			<div>
				<label>
					Password
					<br />
					<input
						type="password"
						autoComplete="current-password"
						{...getFieldProps('password')}
					/>
				</label>
			</div>
			<button type="submit" data-testid='submit'>Submit my form</button>
			{success && <p data-testid='success-message'>Вы вошли</p>}
		</form>
	);
};





