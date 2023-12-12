import {
	defineComponent,
	onBeforeMount,
	onMounted,
	useAttribute,
	useDataAttr,
	useElementRef,
	useProp,
	useQuerySelector,
} from 'ovee.js';

export const MainView = defineComponent(() => {
	console.log('-> setup');

	const id = useAttribute('id');
	const dataTest = useDataAttr('test');
	const heading = useQuerySelector<HTMLHeadingElement>('h1');
	const pRef = useElementRef('p');
	const clientWidth = useProp('clientWidth');

	onBeforeMount(() => {
		console.log('-> before mount');
		console.log('--- id', id.value);
		console.log('--- data-test', dataTest.value);
		console.log('--- heading', heading.value);
		console.log('--- p', pRef.value);
		console.log('--- clientWidth', clientWidth.value);
	});

	onMounted(() => {
		console.log('-> on mounted');
		id.value = 'new-id';
		dataTest.value = 'test';
		console.log('--- id', id.value);
		console.log('--- data-test', dataTest.value);
		console.log('--- heading', heading.value);
		console.log('--- p', pRef.value);
		console.log('--- clientWidth', clientWidth.value);
	});
});
