import { defineComponent, useTemplate } from 'ovee.js';

export const TestTemplate = defineComponent(() => {
	useTemplate(() => <p>Custom test template</p>);
});
