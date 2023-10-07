export default class Section {
	constructor({ items, renderer }, containerSelector) {
		this.items = items;
		this.renderer = renderer;
		this.container = containerSelector;
	}

	addItemPrepend(item) {
		this.container.prepend(item);
	}

	addItemAppend(item) {
		this.container.append(item);
	}

	render(items) {
		items.forEach((item) => {
			this.renderer(item);
		});
	}
}
