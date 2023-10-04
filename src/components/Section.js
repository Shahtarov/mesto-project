export default class Section {
	constructor({ items, renderer }, containerSelector) {
		this.items = items;
		this.renderer = renderer;
		this.container = containerSelector;
	}

	addItem(item) {
		this.container.prepend(item);
	}

	render(items) {
		// console.log(items);
		items.forEach((item) => {
			this.renderer(item);
		});
	}
}
