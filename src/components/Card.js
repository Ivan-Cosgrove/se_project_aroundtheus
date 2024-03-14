export default class Card {
  constructor({ name, link }, template, viewImage, handleDelete) {
    this.name = name;
    this.link = link;
    this._template = template;
    this._viewImage = viewImage;
    this._handleDelete = handleDelete;
  }

  _toggleLike() {
    this._cardElement
      .querySelector(".card__button-like")
      .classList.toggle("card__button_clicked");
  }
  _removeCard() {
    this._cardElement.remove();
    this._cardElement = null;
  }
  _setEventListeners() {
    const cardLike = this._cardElement.querySelector(".card__button-like");
    const deleteButton = this._cardElement.querySelector(
      ".card__button-delete"
    );
    const cardImage = this._cardElement.querySelector(".card__image");
    cardLike.addEventListener("click", () => {
      this._toggleLike();
    });
    deleteButton.addEventListener("click", () => {
      this._handleDelete(this);
      console.log(this._cardElement);
      return this._cardElement;
    });
    cardImage.addEventListener("click", () => {
      this._viewImage(this);
    });
  }

  createCard() {
    this._template = document.querySelector(this._template).content;
    this._cardElement = this._template.querySelector(".card").cloneNode(true);
    const cardName = this._cardElement.querySelector(".card__title");
    const cardImage = this._cardElement.querySelector(".card__image");
    const cardCap = this.name;
    const cardImg = this.link;
    cardName.textContent = cardCap;
    cardImage.src = cardImg;
    cardImage.alt = cardCap;

    this._setEventListeners();

    return this._cardElement;
  }
}
