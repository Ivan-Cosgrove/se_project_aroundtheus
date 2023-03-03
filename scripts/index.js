//Modal Box Code
const profileModal = document.querySelector(".modal-box");
const profileModalClose = profileModal.querySelector(
  ".modal-box__close-button"
);
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = document.querySelector(".form__input_type_name");
const descInput = document.querySelector(".form__input_type_description");

function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function toggleModal() {
  profileModal.classList.toggle("modal-box_opened");
}
editButton.addEventListener("click", function (evt) {
  fillProfileValues();
  toggleModal();
});
profileModalClose.addEventListener("click", function () {
  toggleModal();
});
function pullFormValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}
profileModal.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  pullFormValues();
  toggleModal();
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
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const cardName = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector(".card__image");
function getCardTemplate(data) {
  const cardCap = data.name;
  const cardImg = data.link;
  cardName.textContent = cardCap;
  cardImage.src = cardImg;
  cardImage.alt = cardCap;
  cardElement.cloneNode(true);
  return card;
}
function addCard() {
  cardList.append(cardElement);
}
for (let card of initialCards) {
  getCardTemplate(card);
  addCard();
}
