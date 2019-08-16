// Реализуйте компонент InboxList
// Он должен показывать список входящих писем.
// Используйте HOC withData из `/context/Data` чтобы получить данные.

// Этот компонент должен использовать MailList для отображения данных.

import React from 'react';
import MailList from '../MailList';
import { withData } from '../../context/Data';

const inboxList = ({data: { inbox }}) => {
	return (
		<MailList messages={inbox} type="inbox" />
	);
};

export default withData(inboxList);
