import React, { Component } from 'react';

/*
  Напишите HOC который будет помимо компонента
  также принимать параметры которые он передаст
  в качестве пропов обёрнутому компоненту
*/

export const withGivenProps = (data) => MockComponent => {
	class withGivenProps extends Component {
		render() {
			return (
				<MockComponent {...data} {...this.props}/>
			)
		}
	}

	return withGivenProps;
};
