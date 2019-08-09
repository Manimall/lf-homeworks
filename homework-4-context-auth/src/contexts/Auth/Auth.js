import React, { PureComponent } from 'react';

const { Provider, Consumer: AuthConsumer } = React.createContext('');

class AuthProvider extends PureComponent {
  constructor(props) {
    super(props);
  }

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
    const {email: validEmail, password: validPassword} = this.props.validAuthData;
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
