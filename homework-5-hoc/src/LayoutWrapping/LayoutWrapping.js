import React, { Component } from 'react';

/*
  Напишите HOC, который обернёт компонент в `div`,
  со стилем 'position: absolute'
*/

export const wrapWithAbsolutePosition = (MockComponent) => {
	return class wrapWithAbsolutePosition extends Component {
		render() {
			return (
				<div style={{position: `absolute`}}>
					<MockComponent {...this.props}/>
				</div>
			)
		}
	}
};
