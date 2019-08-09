import React, { PureComponent } from 'react';
import './Header.css';
import { AuthConsumer } from '../../contexts/Auth';

class Header extends PureComponent {
  render() {
    return (
      <AuthConsumer>
        {({ isAuthorized, email, logout }) => (
          isAuthorized ? (
              <div className="header-menu">
                <p className="header-menu__email header-email t-header-email">
                  {email}
                </p>
                <button
                  className="header-menu__button t-logout button"
                  onClick={logout}>
                  Выйти
                </button>
              </div>
            )
            : null
        )}
      </AuthConsumer>
    );
  }
}

export default Header;
