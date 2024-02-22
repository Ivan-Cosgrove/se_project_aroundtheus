export default class Section {
  constructor({ items, renderer }, cardBin) {
    this._renderedItems = items;
    this._renderer = renderer;
    this.cardBin = cardBin;
  }

  renderItems() {
    this._renderedItems.forEach((item) => {
      this._renderer(item);
    });
  }

  addItem(element) {
    this.cardBin.append(element);
  }
}
