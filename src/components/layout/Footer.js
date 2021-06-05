import React from 'react';

import NavLinks from './NavLinks';

export default function Footer() {
	return (
		<footer className="site-footer text-light">
			<div className="container">
				<div className="site-footer-inner">
					<NavLinks className="footer-links" />
					<div className="footer-copyright">
						&copy; Thallis André, Ian Chaves e Amanda Miranda
					</div>
				</div>
			</div>
		</footer>
	);
}
