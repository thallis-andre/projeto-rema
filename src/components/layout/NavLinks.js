import React from 'react';
import { NavLink } from 'react-router-dom';
import classnames from 'classnames';

export default function NavLinks({ className }) {
	const links = [{ text: 'About Us', href: '/about' }];

	return (
		<ul className={classnames('list-reset', className)}>
			{links.map(({ text, href }) => (
				<li key={text}>
					<NavLink to={href} activeClassName="is-active">
						{text}
					</NavLink>
				</li>
			))}
		</ul>
	);
}
