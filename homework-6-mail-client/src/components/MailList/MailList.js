// Изучите файл `/cypress/integration/homework.spec.js`, чтобы понять,
// какие классы должен использовать компонент.


import React from "react"
import { Link } from "react-router-dom";
import styles from './MailList.module.css'

const MailList = ({messages, type}) => {
	return (
		<div className={`${styles.container} t-${type}-list`}>
			{
				messages.map(mail => (
					<Link
						key={mail.id}
						to={`/app/${type}/${mail.id}`}
						className={styles.link}
					>
						{mail.body.substring(0, 50)}
					</Link>
				))
			}
		</div>
	);
};

export default MailList;
