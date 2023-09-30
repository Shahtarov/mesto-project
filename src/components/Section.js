export default class Section {
	constructor({ renderer }, containerSelector) {
		// this.items = items;
		this.renderer = renderer;
		this.container = document.querySelector(containerSelector);
	}

	addItem(item) {
		this.container.prepend(item);
	}

	render() {
		items.forEach((item) => {
			this.renderer(item);
		});
	}
}
