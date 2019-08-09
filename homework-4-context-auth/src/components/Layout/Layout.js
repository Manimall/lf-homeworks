import React, { Fragment, PureComponent } from 'react';
import SectionTitle from '../SectionTitle';
import './Layout.css';

class Layout extends PureComponent {

  renderHeader = () => {
    const {header: Header} = this.props;
    return (
      <header className="header">
        <Header/>
      </header>
    );
  };

  renderFooter = () => {
    const {footer: Footer} = this.props;
    return (
      <footer className="footer">
        <Footer />
      </footer>
    );
  };

  render() {
    const { header: Header, footer: Footer, children } = this.props;
    console.log(this.props);
    return (
      <Fragment>
        {Header && this.renderHeader()}

        <main
          className={`main ${Header ? 'main--with-header' : ''} ${
            Footer ? 'main--with-footer' : ''
            }`}
        >
          <SectionTitle className="main__title">Main</SectionTitle>
          {children}
        </main>

        {Footer && this.renderFooter()}
      </Fragment>
    );
  }
}

export default Layout;
