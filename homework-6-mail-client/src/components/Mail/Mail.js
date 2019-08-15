// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.

import React from 'react';
import styles from './Mail.module.css'

const Mail = (props) => {
	const { from, to, body } = props;
	return (
		<div className={styles.container}>
			{to && <p className="t-mail-to">
				To:
				<b>{to}</b>
			</p>
			}

			{from && <p className="t-mail-to">
				From:
				<b>{from}</b>
			</p>
			}

			<p className="t-mail-body" >{body}</p>
		</div>
	)
};

export default Mail;
