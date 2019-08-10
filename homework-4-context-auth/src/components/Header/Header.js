import React, {Fragment, PureComponent} from 'react';
import './Header.css';
import { AuthConsumer } from '../../contexts/Auth';
import SectionTitle from "../SectionTitle";

class Header extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
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
        </div>
      </Fragment>
    );
  }
}

export default Header;
