import eslint from '@nabla/vite-plugin-eslint';
import path from 'path';
import { defineConfig } from 'vite';
import babel from 'vite-plugin-babel';

export default defineConfig({
	plugins: [eslint(), babel({ filter: /(\.(jsx?|tsx))$/ })],

	resolve: {
		alias: {
			// pre-configured aliases, change them freely!
			'~': __dirname,
			'@': path.resolve(__dirname, 'src'),
		},
	},

	build: {
		manifest: true,
	},
});
