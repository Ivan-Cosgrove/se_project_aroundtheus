export default class Popup {
  constructor({ popup }) {
    this._popup = popup;
  }

  _handleEscClose = (evt) => {
    if (evt.key === "Escape") {
      this.close();
    }
  };

  open() {
    document.addEventListener("keydown", this._handleEscClose);
    this._popup.classList.add("modal-box_opened");
  }

  close() {
    document.removeEventListener("keydown", this._handleEscClose);
    this._popup.classList.remove("modal-box_opened");
  }

  setEventListeners() {
    const button = this._popup.querySelector(".modal-box__close-button");
    button.addEventListener("click", () => {
      this.close();
    });
    this._popup.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal-box_opened")) {
        this.close();
      }
    });
  }
}
