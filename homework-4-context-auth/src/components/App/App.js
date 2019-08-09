import React, { PureComponent } from 'react';
import Layout from '../Layout';
import Footer from '../Footer';
import Header from '../Header';
import LoginForm from '../LoginForm';
import Congratulations from '../Congratulations';
import { AuthProvider, AuthConsumer } from '../../contexts/Auth';

const validAuthData = {
  email: `stu@dent.com`,
  password: 123,
};

class App extends PureComponent {
  render() {
    return (
      <AuthProvider validAuthData={validAuthData}>
        <Layout header={Header} footer={Footer}>
          <AuthConsumer>
            {({ isAuthorized, authorize, authorizeError }) =>
              isAuthorized ? (
                <Congratulations />
              ) : (
                <LoginForm
                  authorize={authorize}
                  authorizeError={authorizeError}
                />
              )
            }
          </AuthConsumer>
        </Layout>
      </AuthProvider>
    );
  }
}

export default App;
