import Modal from "./Modal.js";
export default class ImageModal extends Modal {
  constructor(modal, image) {
    super({ modal });
    this._image = image;
  }

  open(data) {
    const modalImage = this._modal.querySelector(".modal-box__image");
    const modalImageTitle = this._modal.querySelector(".modal-box__caption");
    const cardCap = data.name;
    const cardImg = data.link;
    modalImageTitle.textContent = cardCap;
    modalImage.src = cardImg;
    modalImage.alt = `Preview image for ${cardCap}`;
    super.open();
  }
}
