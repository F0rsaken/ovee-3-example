import { defineComponent, onMounted, onUnmounted, useSlots, useTemplate } from 'ovee.js';

export const OtherTemplate = defineComponent(() => {
	const slot = useSlots();

	useTemplate(() => (
		<div>
			<h3>Other Template heading</h3>

			<div>{slot('default')}</div>
		</div>
	));

	onMounted(() => {
		console.log('[OtherTemplate] mounted');
	});

	onUnmounted(() => {
		console.log('[OtherTemplate] unmounted');
	});
});
