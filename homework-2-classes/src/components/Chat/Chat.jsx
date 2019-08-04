import * as React from 'react';

import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			messageInput: ``
		};
	}

	sendMessageOnEnter = (e) => {
		if (e.key === `Enter` && this.state.messageInput !== ``) {
			this.setState(prevState => {
				return {
					messages: [...prevState.messages, {text: prevState.messageInput}],
					messageInput: ``
				};
			});
		}
	};

	changeInputMessage = (e) => {
		this.setState({
			messageInput: e.target.value
		});
	};

	render() {
		const newMessages = this.state.messages.map((el, index) => {
			return <Message text={el.text} key={index}/>;
		});

		return (
			<div className="chat">
				<div className="message-list">
					<div className="messages">
						{newMessages}
					</div>
				</div>

				<input
					type="text"
					className="input-message"
					value={this.state.messageInput}
					onChange={this.changeInputMessage}
					onKeyPress={this.sendMessageOnEnter}
				/>
			</div>
		);
	}
}

export { Chat }
