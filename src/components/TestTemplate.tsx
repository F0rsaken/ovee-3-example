import { defineComponent, ref, useComponent, useTemplate } from 'ovee.js';

export const TestTemplate = defineComponent(() => {
	// get component internal context options
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { on, off, app, element, emit, name, options } = useComponent();
	const counter = ref(0);

	useTemplate(() => <p>Custom test template! Current counter value: {counter.value}</p>);

	return {
		bummpCounter: () => counter.value++,
	};
});
