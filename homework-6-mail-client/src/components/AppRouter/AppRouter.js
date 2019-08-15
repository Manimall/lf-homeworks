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
import Home from '../Home';
import InboxList from '../InboxList';
import OutboxList from '../OutboxList';
import InboxMail from '../InboxMail';
import OutboxMail from '../OutboxMail';

import styles from './AppRouter.module.css';


const pathPart = `/app`;

const AppRouter = (props) => {
	console.log(props);

	const home = () => (
		<>
			<h3 className={styles.title}>Home</h3>
			<Home />
		</>
	);

	const inboxList = () => (
		<>
			<h3 className={styles.title}>Inbox</h3>
			<InboxList />
		</>
	);

	const inboxMail = () => (
		<>
			<h3 className={styles.title}>InboxMail</h3>
			<InboxMail />;
		</>
	);

	const outboxList = () => (
		<>
			<h3 className={styles.title}>Outbox</h3>
			<OutboxList />
		</>
	);

	const outboxMail = () => (
		<>
			<h3 className={styles.title}>OutboxMail</h3>
			<OutboxMail />
		</>
	);

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
							<NavLink className={`${styles.link} t-link-inbox`} activeClassName='active' to="/app/inbox">
								Inbox
							</NavLink>
						</li>
						<li className={styles.navElement}>
							<NavLink className={`${styles.link} t-link-outbox`} activeClassName='active' to="/app/outbox">
								Outbox
							</NavLink>
						</li>
					</ul>
				</nav>

				<div className={styles.content}>
					<Switch>
						<Route path={pathPart} exact component={home} />
						<Route path={`${pathPart}/inbox`} exact component={inboxList} />
						<Route path={`${pathPart}/outbox`} exact component={outboxList} />
						<Route path={`${pathPart}/inbox/:id`} component={inboxMail} />
						<Route path={`${pathPart}/outbox/id`} component={outboxMail} />
					</Switch>
				</div>

			</div>
		</div>
	)
};

export default AppRouter;
