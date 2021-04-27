import React from 'react';
import Layout from '../layouts/index';
import Hero from '../components/hero/Hero';
import HeroIllustration from '../components/hero/HeroIllustration';

export default function IndexPage() {
	return (
		<Layout>
			<Hero
				title="Resistência dos materiais"
				content="Entre com os dados necessários para calcular a estrutura."
				illustration={HeroIllustration}
			/>
		</Layout>
	);
}
