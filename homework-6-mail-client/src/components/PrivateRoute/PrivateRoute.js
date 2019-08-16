import React, { Component } from 'react';
import { withAuth } from '../../context/Auth';
import { Route, Redirect } from 'react-router-dom';
import  LoginForm from '../LoginForm'

class PrivateRoute extends Component {
	render() {
		const { isAuthorized, component: RouteComponent, ...rest } = this.props;
		return (
			<Route
				{...rest}
				render={routeProps =>
					isAuthorized ? (
						<RouteComponent {...routeProps}/>
					) : (
						<Redirect to="/login" component={LoginForm}/>
					)
				}
			/>
		);
	}
}

export default withAuth(PrivateRoute);

// Реализуйте приватный роут.
// Он должен проверять статус авторизации
// и перенаправлять пользователя на страницу логина,
// если тот не авторизован.
