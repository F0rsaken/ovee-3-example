import { bind, Component, el, register } from 'ovee.js';

@register('test-video')
export class TestVideo extends Component {
	lastVolume = 0;

	@el('video')
	video!: HTMLVideoElement;

	@bind('click', { target: '.test-video__play' })
	onPlay() {
		const { currentTime, paused, ended } = this.video;

		if (currentTime > 0 && !paused && !ended) {
			this.video.pause();
		} else {
			if (ended) {
				this.video.currentTime = 0;
			}

			this.video.play();
		}
	}

	@bind('click', { target: '.test-video__mute' })
	onMute() {
		if (this.video.volume > 0) {
			this.lastVolume = this.video.volume;
			this.video.volume = 0;
		} else {
			this.video.volume = this.lastVolume;
		}

		// this.video.muted = !this.video.muted;
	}
}
