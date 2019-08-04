import * as React from 'react';
import { useState } from 'react';

import { Message } from '../Message';
import './Chat.css';


const Chat = () => {
	const [messageState, setMessageState] = useState(``);
	const [formMessages, setFormMessages] = useState([]);

	const addMessages = (text) => {
		const newMessages = [...formMessages, { text }];
		setFormMessages(newMessages);
	};

	const sendMessageOnEnter = (e) => {
		e.preventDefault();
		if (!messageState) return;
		addMessages(messageState);
		setMessageState(``);
	};

	const changeInputMessage = (e) => {
		setMessageState(e.target.value)
	};

	const newMessages = formMessages.map((el, index) => {
		return <Message text={el} key={index}/>;
	});

	return (
		<div className="chat">
			<div className="message-list">
				<div className="messages">
					{newMessages}
				</div>
			</div>
			<form onSubmit={sendMessageOnEnter}>
				<input
					type="text"
					className="input-message"
					value = {messageState}
					onChange = {changeInputMessage}
				/>
			</form>
		</div>
	)
};

export { Chat }
