//Modal Box Code
const modalBox = document.querySelector(".modal-box");
const modalBoxOpen = document.querySelector(".modal-box_opened");
const modalClose = document.querySelector(".modal-box__button");
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameValue = document.querySelector(".form__input_type_name");
const descValue = document.querySelector(".form__input_type_description");

editButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  nameValue.value = profileName.textContent;
  descValue.value = profileDesc.textContent;
  modalBox.classList.toggle("modal-box_opened");
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBox.classList.toggle("modal-box_opened");
});
modalBox.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameValue.value;
  profileDesc.textContent = descValue.value;
  modalBox.classList.toggle("modal-box_opened");
});

//Cards Code
const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

function getCardTemplate(data) {
  const cardList = document.querySelector(".cards__list");
  const cardTemplate = document.querySelector("#card").content;
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  let cardName = cardElement.querySelector(".card__title");
  let cardImage = cardElement.querySelector(".card__image");
  let cardCap = data.name;
  let cardImg = data.link;
  cardName.textContent = cardCap;
  cardImage.src = cardImg;
  cardImage.alt = cardCap;
  cardList.append(cardElement);
}
for (let card of initialCards) {
  getCardTemplate(card);
}
