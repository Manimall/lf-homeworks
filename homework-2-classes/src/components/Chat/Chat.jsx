import * as React from 'react';

import Message from '../Message';
import './Chat.css';

class Chat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			messages: [],
			messageInput: ``,
		};
		this.myRef = React.createRef();
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

	handleScroll = () => {
		if (this.myRef.current) {
			const messagesList = this.myRef.current;
			messagesList.scrollTo({
				top: messagesList.scrollHeight,
				behavior: `smooth`,
			});
		}
	};

	componentDidUpdate() {
		if(this.state.messages.length) {
			this.handleScroll();
		}
	};

	render() {
		const newMessages = this.state.messages.map((el, index) => {
			return <Message text={el.text} key={index}/>;
		});

		return (
			<div className="chat">
				<div
					className="message-list"
					ref={this.myRef}
				>
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
