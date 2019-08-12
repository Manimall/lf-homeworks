import React, { PureComponent } from 'react';
import Card from '../Card';
import './Todo.css';
import withLocalstorage from '../../HOCs/withLocalstorage';

class Todo extends PureComponent {
  state = {
    inputValue: ``,
		isComplete: false
  };

  getId() {
    const { savedData } = this.props;
    const biggest = savedData.reduce((acc, el) => Math.max(acc, el.id), 0);
    return biggest + 1;
  }

  handleChange = ({target: { value } }) => {
  	this.setState({
			inputValue: value
		});
	};

	createNewRecord = () => {
		const id = this.getId();
		const { saveData, savedData } = this.props;
		const { inputValue } = this.state;

		if (inputValue === ``) return;

		this.setState({
			inputValue: ``
		});

		saveData([{id, text: inputValue, isComplete: false}, ...savedData]);
	};

  createNewRecordByEnter = ({ key }) => {
		(key === `Enter`) && this.createNewRecord()
	};

  toggleRecordComplete = ({target: {dataset: { todoId }}}) => {
  	const id = Number(todoId);
  	const { saveData, savedData } = this.props;

  	saveData(savedData.map((item) => {
  		return (item.id === id) ?
				{...item, isComplete: !item.isComplete}
				: item;
		}));
	};

  renderEmptyRecord() {
  	const { inputValue } = this.state;
    return (
    	<div className="todo-item todo-item-new">
				<input
					type="text"
					className="todo-input t-input"
					placeholder="Введите задачу"
					value={inputValue}
					onChange={this.handleChange}
					onKeyPress={this.createNewRecordByEnter}
				/>
				<span
					onClick={this.createNewRecord}
					className="plus t-plus">
          +
        </span>
			</div>
		)
  }

  renderRecord = record => {
  	return (
			<div
				key={record.id}
				className="todo-item t-todo"
			>
				<p className="todo-item__text">
					{record.text}
				</p>
				<span
					className="todo-item__flag t-todo-complete-flag"
					data-todo-id={record.id}
					onClick={this.toggleRecordComplete}
				>
          [{record.isComplete ? 'x' : '  '}]
        </span>
			</div>
		);
  };

	render() {
		const { savedData } = this.props;
		return (
			<Card title={`Список дел`}>
				<ul className="todo t-todo-list">
					{this.renderEmptyRecord()}
					{savedData.map(this.renderRecord)}
				</ul>
			</Card>
		);
	}
}

export default withLocalstorage('todo-app', [])(Todo);
