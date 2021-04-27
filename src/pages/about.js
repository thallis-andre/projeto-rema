import React from 'react';
import Layout from '../layouts/index';

export default function AboutPage() {
	return (
		<Layout>
			<article className="entry">
				<div className="container">
					<div className="entry-inner">
						<div className="entry-content">
							<div className="container-sm">
								<header className="entry-header">
									<h1 className="entry-title">Sobre nós</h1>
								</header>

								<div className="entry-body">
									<p>Falar do grupo</p>
									<hr />
									<hr />
								</div>
							</div>
						</div>
						<div className="entry-media">
							<img src="https://placehold.it/420x640" alt="" />
						</div>
					</div>
				</div>
			</article>
		</Layout>
	);
}
