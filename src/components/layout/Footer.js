import React from 'react';

import NavLinks from './NavLinks';

export default function Footer() {
	return (
		<footer className="site-footer text-light">
			<div className="container">
				<div className="site-footer-inner">
					<NavLinks className="footer-links" />
					<div className="footer-copyright">
						&copy; 2018 Holly, all rights reserved
					</div>
				</div>
			</div>
		</footer>
	);
}
