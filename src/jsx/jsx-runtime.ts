export const jsxs = jsx;

type Child = string | Fiber;
type Children = Child | Child[];

interface Props {
	children?: Children;
	[k: string]: any;
}

interface FiberProps {
	children?: Fiber[];
	[k: string]: any;
}

interface Fiber {
	type: string | FiberFactory;
	props: FiberProps;
}

type FiberFactory = () => Fiber;

const TEXT_FIBER = 'TEXT_FIBER';

export function jsx(tag: string | FiberFactory, _props: Props = {}): Fiber {
	const props = { ..._props } as FiberProps;

	if (_props.children) {
		props.children = translateChildren(_props.children);
	}

	return {
		type: tag,
		props,
	};
}

function translateChildren(children: Children): Fiber[] {
	if (Array.isArray(children)) {
		return children.map(c => translateChild(c));
	}

	return [translateChild(children)];
}

function translateChild(child: Child): Fiber {
	if (typeof child === 'string') {
		return createTextFiber(child);
	}

	return child;
}

function createTextFiber(text: string): Fiber {
	return {
		type: TEXT_FIBER,
		props: {
			nodeValue: text,
		},
	};
}

const isAtrribute = (key: string) => key !== 'children';

export function render(fiber: Fiber, target?: Node | null) {
	if (!target) return;

	const node = createNode(fiber);

	if (!node) return;

	target.appendChild(node);
}

function createNode(fiber: Fiber): Node | undefined {
	// TODO: ładniejszy sposób na to
	if (typeof fiber.type === 'function') {
		fiber = fiber.type();
	}

	if (typeof fiber.type !== 'string') {
		// TODO: handle fragments
		console.log('WTF MAN?! Nie ma jeszcze fragmentów :c');
		return;
	}

	const node =
		fiber.type === TEXT_FIBER
			? document.createTextNode(fiber.props.nodeValue)
			: document.createElement(fiber.type);

	// NOTE: should we map to properties or attributes?
	Object.keys(fiber.props)
		.filter(isAtrribute)
		.forEach(name => {
			(node as any)[name] = fiber.props[name];
		});

	fiber.props.children?.forEach(f => render(f, node));

	return node;
}
