import {
	defineComponent,
	onBeforeMount,
	onMounted,
	useAttribute,
	useDataAttr,
	useElementRef,
	useModule,
	useProp,
	useQuerySelector,
} from 'ovee.js';

import { TestModule } from '@/modules/Test';

export const MainView = defineComponent<HTMLElement>(() => {
	console.log('[setup] MainView');
	const id = useAttribute('id');
	const dataTest = useDataAttr('test');
	const heading = useQuerySelector<HTMLHeadingElement>('h1');
	const pRef = useElementRef('p');
	const clientWidth = useProp('clientWidth');
	const testModule = useModule(TestModule);

	testModule.foo();

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
