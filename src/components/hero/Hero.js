import React, { Component } from 'react';
// eslint-disable-next-line import/named
import { setupScrollReveal } from '../../assets/js/main.js';

import ValoresForm from '../forms/ValoresForm';

class Hero extends Component {
	componentDidMount() {
		setupScrollReveal();
	}

	render() {
		const { title, content, illustration: Illustration } = this.props;

		return (
			<section className="hero">
				<div className="container">
					<div className="hero-inner">
						<div className="hero-copy">
							<div className="container-sm">
								<h1 className="hero-title h2-mobile mt-0 is-revealing">
									{title}
								</h1>
								<p className="hero-paragraph is-revealing">{content}</p>
							</div>

							<ValoresForm className="hero-form" />
						</div>

						<div className="hero-illustration">
							<Illustration />
						</div>
					</div>
				</div>
			</section>
		);
	}
}

export default Hero;
