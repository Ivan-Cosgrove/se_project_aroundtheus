export default class Card {
  constructor({ name, link }, template) {
    this._name = name;
    this._link = link;
    this._template = template;
  }
  /* _viewImage() {
   if(this._cardElement.classList.contains('card__image') {

  }
  _openModalImage() {
    const imageModal = document.querySelector(".modal-box__image-container");
const imageModalClose = imageModal.querySelector(".modal-box__close-button");
   const modalImage = imageModal.querySelector(".modal-box__image");
const modalImageTitle = document.querySelector(".modal-box__caption")
    openModal();
    const cardCap = this._name;
    const cardImg = this._link;
    modalImageTitle.textContent = cardCap;
    modalImage.src = cardImg;
    modalImage.alt = `Preview image for ${cardCap}`;
  } */
  _toggleLike() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button_clicked");
  }
  _removeCard() {
    this._cardElement.remove();
  }
  _setEventListeners() {
    const cardLike = this._cardElement.querySelector(".card__button-like");
    const deleteButton = this._cardElement.querySelector(
      ".card__button-delete"
    );
    const fullImage = this._cardElement.querySelector(
      ".modal-box__image-container"
    );
    cardLike.addEventListener("click", () => {
      this._toggleLike();
    });
    deleteButton.addEventListener("click", () => {
      this._removeCard();
    });
  }

  createCard() {
    this._cardTemplate = document.querySelector("#card").content;
    this._cardElement = this._cardTemplate
      .querySelector(".card")
      .cloneNode(true);
    const cardName = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");
    const cardCap = this._name;
    const cardImg = this._link;
    cardName.textContent = cardCap;
    cardImage.src = cardImg;
    cardImage.alt = cardCap;

    this._setEventListeners();

    return this._cardElement;
  }
}
