import Popup from "./Popup.js";
export default class PopupWithImage extends Popup {
  constructor(popup, image) {
    super({ popup });
    this._image = image;
  }

  open(data) {
    const modalImage = this._popup.querySelector(".modal-box__image");
    const modalImageTitle = this._popup.querySelector(".modal-box__caption");
    const cardCap = data.name;
    const cardImg = data.link;
    modalImageTitle.textContent = cardCap;
    modalImage.src = cardImg;
    modalImage.alt = `Preview image for ${cardCap}`;
    super.open();
    return data;
  }
}
