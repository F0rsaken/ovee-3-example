import { defineModule, onDestroy, onInit, useApp } from 'ovee.js';

export const TestModule = defineModule(() => {
	const app = useApp();

	app.$on(
		'resize',
		() => {
			console.log(`new window size: ${window.innerWidth}x${window.innerHeight}`);
		},
		{ passive: true }
	);

	onInit(() => {
		console.log('[TestModule] onInit');
	});

	onDestroy(() => {
		console.log('[TestModule] onDestroy');
	});

	return {
		foo: () => {
			console.log('module foo');
		},
	};
});
