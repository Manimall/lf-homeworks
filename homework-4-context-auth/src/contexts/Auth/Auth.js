import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

const validAuthData = {
  email: `stu@dent.com`,
  password: 123,
};


class AuthProvider extends PureComponent {
  state = {
    email: ``,
    authorizeError: ``,
    isAuthorized: false,
  };

  getProviderValue = () => {
    return {
      ...this.state,
      authorize: this.authorize,
      logout: this.logout
    };
  };

  logout = () => {
    this.setState({
      isAuthorized: false
    });
  };

  authorize = (email, password) => {
    const {email: validEmail, password: validPassword} = validAuthData;
    if (email === validEmail && password === validPassword.toString()) {
      this.setState( {
        isAuthorized: true,
        authorizeError: ``,
        email
      });
    } else {
      this.setState({
        authorizeError: `Email или пароль введён не верно`
      });
    }
  };

  render() {
    const { children } = this.props;
    return <Provider value={this.getProviderValue()}>{children}</Provider>;
  }
}

const TestProvider = Provider;

export { AuthProvider, AuthConsumer, TestProvider };
