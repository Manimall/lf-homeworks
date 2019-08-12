import React, { Component } from 'react';
import { load, save } from '../../localstorage';

const withLocalstorage = (localStorageKey, data) => (WrappedComponent) => {
	class withLocalstorage extends Component {
		static displayName = `HOC${WrappedComponent.displayName || WrappedComponent.name}`;

		state = {
			newData: []
		};

		loadData = () => {
			return load(localStorageKey) || data;
		};

		saveData = (data) => {
			save(localStorageKey, data);
			this.setState({
				newData: load(localStorageKey)
			});
		};

		render() {
			const {forwardedRef, ...props} = this.props;
			return (
				<WrappedComponent
					{...props}
					ref={forwardedRef}
					savedData={this.loadData()}
					saveData={this.saveData}
				/>
			)
		}

	}

	return withLocalstorage;
};

export default withLocalstorage;
