export default class Card {
  constructor(
    { name, link, _id, isLiked },
    template,
    viewImage,
    handleDelete,
    sendLike
  ) {
    this.name = name;
    this.link = link;
    this._id = _id;
    this.isLiked = isLiked;
    this._template = template;
    this._viewImage = viewImage;
    this._handleDelete = handleDelete;
    this._sendLike = sendLike;
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
      this._sendLike(this);
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
    const cardID = this._id;
    cardName.textContent = cardCap;
    cardImage.src = cardImg;
    cardImage.alt = cardCap;
    this._cardElement.id = cardID;
    this._cardElement.isLiked = this.isLiked;
    if (this._cardElement.isLiked) {
      this._cardElement
        .querySelector(".card__button-like")
        .classList.add("card__button_clicked");
    } else {
      this._cardElement
        .querySelector(".card__button-like")
        .classList.remove("card__button_clicked");
    }

    this._setEventListeners();

    return this._cardElement;
  }
}
