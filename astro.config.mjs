// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://tuo-username.github.io',
  	base: '/nome-del-repository',
	integrations: [
		starlight({
			title: 'ESP32 Universal IR Engine',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Introduzione',
					link: '/',
				},
				{
					label: 'Versioni del Progetto',
					items: [
								{ label: 'v1.0 - Standard TV Controller', link: 'version-1' },
								{ label: 'v2.0 - Multi-Button RAW', link: 'version-2' },
								{ label: 'v3.0 - High-Payload AC', link: 'version-3' },					
							],
				},
			],
		}),
	],
});

