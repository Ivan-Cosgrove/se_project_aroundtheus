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

function getCardTemplate(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCap = data.name;
  const cardImg = data.link;
  cardName.textContent = cardCap;
  cardImage.src = cardImg;
  cardImage.alt = cardCap;
  return cardElement;
}
function addCard(cardElement) {
  cardList.append(cardElement);
}
initialCards.forEach((card) => {
  addCard(getCardTemplate(card));
});

//Modal Box Code
const modalTemplate = document.querySelector("#modal-box").content;
const modal = modalTemplate.querySelector(".modal-box").cloneNode(true);
const modalClose = modal.querySelector(".modal-box__close-button");
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = modal.querySelector(".form__input_type_name");
const descInput = modal.querySelector(".form__input_type_description");
const body = document.querySelector(".body");
const profilePara = document.querySelector(".profile__paragraph");

function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function openModal() {
  modal.classList.add("modal-box_opened");
}
function closeModal() {
  modal.classList.remove("modal-box_opened");
}
editButton.after(modal);
editButton.addEventListener("click", function (evt) {
  modalTitle.textContent = "Edit Profile";
  fillProfileValues();
  openModal();
});
modalClose.addEventListener("click", function () {
  closeModal();
});
function pullProfileValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}
modal.addEventListener("submit", function formSubmit(evt) {
  if ((modal.parentElement = profilePara)) {
    evt.preventDefault();
    pullProfileValues();
    closeModal();
  } else {
    evt.preventDefault();
  }
});

const addButton = document.querySelector(".profile__buttons-add");
const modalTitle = document.querySelector(".form__title");

cardList.append(modal);

addButton.addEventListener("click", function (evt) {
  modalTitle.textContent = "Add Picture";
  nameInput.value = "";
  descInput.value = "";
  descInput.placeholder = "Image Link";
  openModal();
});

modal.addEventListener("submit", function formSubmit(evt) {
  if ((modal.parentElement = cardList)) {
    evt.preventDefault();
    closeModal();
  } else {
    evt.preventDefault();
  }
});
