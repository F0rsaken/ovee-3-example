import gsap from 'gsap';
import { bind, Component, el, register } from 'ovee.js';

const offsetY = 0;
const scale = 1;

@register('main-view')
export class MainView extends Component {
    @el('.main__content')
    content: HTMLElement;

    on = false;
    setX: (a: number) => void;
	setY: (a: number) => void;
	setScaleX: (a: number) => void;
    setScaleY: (a: number) => void;

    init() {
        // this.setX = gsap.quickSetter(this.content, 'x', 'rem') as any;
	    // this.setY = gsap.quickSetter(this.content, 'y', 'rem') as any;
	    // this.setScaleX = gsap.quickSetter(this.content, 'scaleX') as any;
        // this.setScaleY = gsap.quickSetter(this.content, 'scaleY') as any;

        // this.doOff();
    }

    setScale(v: number) {
        this.setScaleX(v);
        this.setScaleY(v);
    }

    @bind('click', { target: 'button' })
    onClick() {
        // console.log('dupa')
        this.on = !this.on;
        const target = document.documentElement;
        // const target = document.body;

        if (this.on) {
            target.style.setProperty('overflow', 'hidden');
        } else {
            target.style.removeProperty('overflow');
        }
    }

    doOn() {
        // (TargetTO - Prev) * (1 - 1/s)
        const diff = [30 - 15, 0 - 0];
        const mul = scale - 1;
        const translateDiff = [diff[0] * mul, diff[1] * mul];

        this.setScale(scale);
        this.setX(translateDiff[0]);
        this.setY(offsetY * scale);
        gsap.set(this.content, { transformOrigin: '30rem 0' });
    }

    doOff() {
        this.setScale(scale);
        this.setX(0);
        this.setY(offsetY * scale);
        gsap.set(this.content, { transformOrigin: '15rem 0' });
    }
}
