// Реализуйте роутер приложения.
// Здесь должны быть обьявлены роуты,
// которые будут доступны авторизованному пользователю.
// - Home
// - InboxList
// - InboxMail
// - OutboxList
// - OutboxMail

// Так же в этом файле обьявите лейаут,
// используйте стили из AppRouter.module.css


import React from "react";
import { NavLink, Switch, Route } from 'react-router-dom';
import HomePage from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

import styles from './AppRouter.module.css';


const ComponentsTitle = {
	[`/app`]: `Home`,
	[`/app/inbox`]: `Inbox`,
	[`/app/outbox`]: `Outbox`,
};

const AppRouter = (props) => {
	const { match, location } = props;

	const renderTitle = () => {
		let title = ``;
		Object.keys(ComponentsTitle).find(el => {
			if (location.pathname.includes(el)) {
				title = ComponentsTitle[el];
			}
		});

		return <h3 className={styles.title}>{title}</h3>
	};

	return (
		<div className={styles.wrapper}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					<ul className={`${styles.navList} t-nav-list`}>
						<li className={styles.navElement}>
							<NavLink className={`${styles.link} t-link-home`} activeClassName='active' exact aria-current="page" to="/app">
								Home
							</NavLink>
						</li>
						<li className={styles.navElement}>
							<NavLink className={`${styles.link} t-link-inbox`} activeClassName='active' exact to="/app/inbox">
								Inbox
							</NavLink>
						</li>
						<li className={styles.navElement}>
							<NavLink className={`${styles.link} t-link-outbox`} activeClassName='active' exact to="/app/outbox">
								Outbox
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className={styles.content}>

					{renderTitle()}

					<Switch>
						<Route path={match.url} exact component={HomePage} />
						<Route path={`${match.url}/inbox`} exact component={InboxList} />
						<Route path={`${match.url}/outbox`} exact component={OutboxList} />
						<Route path={`${match.url}/inbox/:id`} component={InboxMail} />
						<Route path={`${match.url}/outbox/:id`} component={OutboxMail} />
					</Switch>
				</div>

			</div>
		</div>
	)
};

export default AppRouter;
