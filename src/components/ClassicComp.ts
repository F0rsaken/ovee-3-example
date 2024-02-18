import { defineComponent, onBeforeMount, onMounted } from 'ovee.js';

import { TestTemplate } from './TestTemplate';

export const ClassicComp = defineComponent((el, ctx) => {
	// you can use components as a composables
	const templateComponent = TestTemplate(el, ctx);

	onBeforeMount(() => {
		templateComponent.bummpCounter();
	});

	onMounted(() => {
		templateComponent.bummpCounter();
	});
});
