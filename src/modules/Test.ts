import { defineModule, useApp } from 'ovee.js';

export const TestModule = defineModule(() => {
	const { $on } = useApp();

	$on(
		'resize',
		() => {
			console.log(`new window size: ${window.innerWidth}x${window.innerHeight}`);
		},
		{ passive: true }
	);

	return {
		foo: () => {
			console.log('module foo');
		},
	};
});
