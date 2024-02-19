import { defineComponent, ref, useComponent, useTemplate } from 'ovee.js';

import { OtherTemplate } from './OtherTemplate';

export const TestTemplate = defineComponent(() => {
	console.log('[setup] TestTemplate');
	// get component internal context options
	// eslint-disable-next-line @typescript-eslint/no-unused-vars
	const { on, off, app, element, emit, name, options } = useComponent();
	const counter = ref(0);

	useTemplate(() => {
		return (
			<>
				<p>Custom test template! Current counter value: {counter.value}</p>

				<button class="test-template__button" type="button" onClick={() => counter.value++}>
					add +1
				</button>

				<OtherTemplate.jsx key={counter.value}>
					{{
						default: () => `Counter value from object slot: ${counter.value}`,
					}}
				</OtherTemplate.jsx>

				{/* if there is only default slot, we can pass only a function */}
				<OtherTemplate.jsx>
					{() => `Counter value from function slot: ${counter.value}`}
				</OtherTemplate.jsx>
			</>
		);
	});

	return {
		bummpCounter: () => counter.value++,
	};
});
