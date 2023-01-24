import { JsxComponent, profile } from '@/components/JsxComponent';

import { render } from './jsx-runtime';

// ["@babel/plugin-transform-react-jsx", { "runtime": "automatic" }]

render(profile, document.querySelector('#main'));
console.log(JsxComponent);
console.log(profile);
