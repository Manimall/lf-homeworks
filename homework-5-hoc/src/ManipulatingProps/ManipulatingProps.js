import React, { Component } from 'react';
import {getLoggedInUser} from '../utils'

/*
  Манипуляция пропами

  Первый HOC который нужно написать - enchancer.
  
  Он будет принимать проп loading и в зависимости
  от его значения показывать прелоадер,
  или обёрнутый компонент
*/

const LoadingSpinner = () => <div>Loading...</div>;

export const withLoading = (MockComponent) => {
	return class withLoading extends Component {
		render() {
			const {loading} = this.props;
			return loading ?
				<LoadingSpinner/>
				: <MockComponent {...this.props} />;
		}
	}
};

/*
  Следующий HOC - injector, его особенность в том,
  что он не даёт перезаписать проп, который передаёт
  в оборачиваемый компонент

  Нужно написать HOC, который передаст авторизованного
  пользователя через проп user

  Чтобы получить текущего пользователя - используйте
  метод `getLoggedInUser` из `utils`

  const user = getLoggedInUser()
*/


export const addLoggedInUser = (MockComponent) => {
	return class addLoggedInUser extends Component {
		render() {
			const user = getLoggedInUser();
			return <MockComponent {...this.props} user={user} />;
		}
	}
};

/*
  Помимо добавления новых пропов можно модифицировать те,
  что уже были переданы в компонент

  Мы будем передавать во WrappedComponent список книг
  [{title: "Harry Potter", author: "J. K. Rowling"}, ...]

  Ваша задача написать HOC, который перехватит prop books,
  отсортирует по названиям по алфавиту
  и передаст в обёрнутый компонент
*/

export const withSort = (MockComponent) => {
	return class withSort extends Component {
		sortBooksByTitle = (arr) => arr.sort((a,b) => a.title - b.title);
		render() {
			const {books} = this.props;
			return <MockComponent books={this.sortBooksByTitle(books)} {...this.props} />
		}
	}
};
