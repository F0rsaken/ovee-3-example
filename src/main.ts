import '~/styles/style.css';
import '~/styles/main.scss';

import { createApp } from 'ovee.js';

import components from './components';
import modules from './modules';

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion
const root = document.getElementById('app')!;
const app = createApp().components(components).useMany(modules);

app.run(root);
