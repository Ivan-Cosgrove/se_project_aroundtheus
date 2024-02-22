export default class Modal {
  constructor({ modal }) {
    this._modal = modal;
  }

  _closeWithEscape(evt) {
    if (evt.key === "Escape" || evt.key === "5") {
      this.close();
    }
  }

  open() {
    document.addEventListener("keydown", (evt) => {
      this._closeWithEscape(evt);
    });
    this._modal.classList.add("modal-box_opened");
  }

  close() {
    document.removeEventListener("keydown", (evt) => {
      this._closeWithEscape(evt);
    });
    this._modal.classList.remove("modal-box_opened");
  }

  setEventListeners() {
    const button = this._modal.querySelector(".modal-box__close-button");
    button.addEventListener("click", () => this.close());
    this._modal.addEventListener("click", (evt) => {
      if (evt.target.classList.contains("modal-box_opened")) {
        this.close();
      }
    });
  }
}
