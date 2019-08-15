import React, { PureComponent } from 'react';
import { withData } from '../../context/Data';
import Mail from '../Mail';

class InboxMail extends PureComponent {
  render() {
    const {history, match, location} = this.props;
    console.log(history, match, location);

    const {
      match: {
        params: { id }
      },
      data
    } = this.props;
    console.log(id);

    const mail = data.inbox.find(mail => mail.id === id);

    return <Mail {...mail} />;
  }
}

export default withData(InboxMail);
