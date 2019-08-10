import React, {Fragment, PureComponent} from 'react';
import { AuthConsumer } from '../../contexts/Auth';
import './Footer.css';
import SectionTitle from "../SectionTitle";

class Footer extends PureComponent {
  render() {
    return (
      <Fragment>
        <SectionTitle className="header__title">Footer</SectionTitle>
        <AuthConsumer>
          {({isAuthorized, email}) => (
            isAuthorized ? (
              <p className="footer-message t-footer">Вы вошли как {email}</p>
            ) : (
              <p className="footer-message t-footer">Вы гость в этой системе</p>
            )
          )}
        </AuthConsumer>
      </Fragment>
    )
  }
}

export default Footer;
