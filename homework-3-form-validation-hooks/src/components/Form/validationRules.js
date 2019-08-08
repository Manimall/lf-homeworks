const FIELDS = {
	FIRST_NAME: 'firstName',
	LAST_NAME: 'lastName',
	PASSWORD: 'password'
};

const notValidFieldsInfo = {
	[FIELDS.FIRST_NAME]: `Имя указано не верно`,
	[FIELDS.LAST_NAME]: `Фамилия указана не верно`,
	[FIELDS.PASSWORD]: `Пароль указан не верно`
};

const emptyFields = {
	[FIELDS.FIRST_NAME]: `Нужно указать имя`,
	[FIELDS.LAST_NAME]: `Нужно указать фамилию`,
	[FIELDS.PASSWORD]: `Нужно указать пароль`
};

const finalValues = {
	[FIELDS.FIRST_NAME]: `James`,
	[FIELDS.LAST_NAME]: `Bond`,
	[FIELDS.PASSWORD]: `007`
};

const checkValidity = (field, values, errors) => {
	if (values[field].trim() === ``) {
		errors[field] = emptyFields[field];
	} else if (values[field].toLowerCase() !== finalValues[field].toLowerCase()) {
		errors[field] = notValidFieldsInfo[field];
	}
};

const validateAuth = (values) => {
	let errors = {};
	Object.keys(values).forEach(value => checkValidity(value, values, errors));

	return errors;
};

export { FIELDS, validateAuth };
