import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form';
import './index.css';

const finalValues = {
	[`firstName`]: `James`,
	[`lastName`]: `Bond`,
	[`password`]: `007`
};

ReactDOM.render(<Form data={finalValues}/>, document.getElementById('root'));
