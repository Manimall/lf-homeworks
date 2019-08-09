import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  static renderHeader(Header) {
    return (
      <header className="header">
        <SectionTitle className="header__title">Header</SectionTitle>
        <div className="header__content">
          <Header />
        </div>
      </header>
    );
  }

  static renderFooter(Footer) {
    return (
      <footer className="footer">
        <SectionTitle className="header__title">Footer</SectionTitle>
        <Footer />
      </footer>
    );
  }

  render() {
    const { header, footer, children } = this.props;
    return (
      <Fragment>
        {header && Layout.renderHeader(header)}

        <main
          className={`main ${header ? 'main--with-header' : ''} ${
            footer ? 'main--with-footer' : ''
            }`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>

        {footer && Layout.renderFooter(footer)}
      </Fragment>
    );
  }
}

export default Layout;
