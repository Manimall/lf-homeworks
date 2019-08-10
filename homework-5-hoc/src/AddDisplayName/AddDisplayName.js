import React, { Component } from 'react';

/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = (MockComponent) => {
	class withDisplayName extends Component {
		static displayName = `HOC${MockComponent.displayName || `Component`}`;

		render() {
			return(
				<MockComponent {...this.props}/>
			)
		}
	}


	return withDisplayName;
};
