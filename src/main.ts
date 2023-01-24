import '~/styles/style.css';
import '~/styles/main.scss';
import './jsx';

import { App } from 'ovee.js';

import components from './components';

console.log('keke');

const root = document.getElementById('app');
const app = new App({
	components,
});

app.run(root as any);
