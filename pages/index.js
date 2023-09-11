// console.log("debug-break");

import Card from "../components/Card.js";
import FormValidator from "../components/FormValidator.js";
import * as utilities from "../utility/utility.js";
import { closeModal } from "../utility/utility.js";
import { openModal } from "../utility/utility.js";
import { closeOnOutsideClick } from "../utility/utility.js";

export const config = {
  // IDs
  addModal: "#add-card",
  // Selectors
  form: ".form",
  input: ".form__input",
  submitButton: ".form__button",
  // Classes
  inactiveButton: "form__button_disabled",
  inputError: "form__input_invalid",
  error: "form__error_visible",
};
// Card Code
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const cardModal = document.querySelector("#add-card");
const imgInput = cardModal.querySelector(".form__input_type_link");
const titleInput = cardModal.querySelector(".form__input_type_title");
const cardName = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector(".card__image");

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

function createCard(card) {
  const initCard = new Card(card, "#card", openModalImage);
  return initCard.createCard();
}

function addCard(cardElement) {
  cardList.prepend(cardElement);
}

initialCards.reverse().forEach((card) => {
  const cardElement = createCard(card);
  addCard(cardElement);
});

function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function pullProfileValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}

function setClickListeners() {
  const modals = Array.from(document.querySelectorAll(".modal-box"));
  modals.forEach((box) => {
    box.addEventListener("mousedown", (evt) => {
      closeOnOutsideClick(evt.target);
    });
  });
}
setClickListeners();

function clearInputs(form) {
  form.reset();
}

cardModal.addEventListener("submit", function formSubmit(evt) {
  const imgInput = cardModal.querySelector(".form__input_type_link");
  const titleInput = cardModal.querySelector(".form__input_type_title");
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  const card = new Card(cardData, "#card", openModalImage);
  evt.preventDefault();
  addCard(card.createCard());
  clearInputs(cardForm);
  closeModal(cardModal);
});

//Modal Box Code
const profileModal = document.querySelector("#edit-profile");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = profileModal.querySelector(".form__input_type_name");
const descInput = profileModal.querySelector(".form__input_type_description");
const cardForm = cardModalClose.closest(".form");
const addButton = document.querySelector(".profile__buttons-add");
const cardInfo = document.querySelector("#card-info");
const proSubmit = profileModal.querySelector(".form__button");
const cardSubmit = cardModal.querySelector(".form__button");
const cardInput = cardModal.querySelector(".form__input_type_title");
const cardDescInput = cardModal.querySelector(".form__input_type_link");

const imageModal = document.querySelector(".modal-box__image-container");
const imageModalClose = imageModal.querySelector(".modal-box__close-button");
const imageModalBox = imageModal.closest(".modal-box");
const modalImage = imageModal.querySelector(".modal-box__image");
const modalImageTitle = document.querySelector(".modal-box__caption");
export function openModalImage(data) {
  openModal(imageModalBox);
  const cardCap = data._name;
  const cardImg = data._link;
  modalImageTitle.textContent = cardCap;
  modalImage.src = cardImg;
  modalImage.alt = `Preview image for ${cardCap}`;
}
editButton.addEventListener("click", function (evt) {
  fillProfileValues();
  validateEditModal.toggleSubmitButton();
  openModal(profileModal);
});
proModalClose.addEventListener("click", function () {
  closeModal(profileModal);
});
imageModalClose.addEventListener("click", () => {
  closeModal(imageModalBox);
});
profileModal.addEventListener("submit", function formSubmit(evt) {
  pullProfileValues();
  closeModal(profileModal);
});
cardModalClose.addEventListener("click", function () {
  closeModal(cardModal);
});
addButton.addEventListener("click", function (evt) {
  openModal(cardModal);
  validateAddModal.toggleSubmitButton();
});
const validateEditModal = new FormValidator(config, profileModal);
validateEditModal.enableValidation();

export const validateAddModal = new FormValidator(config, cardModal);
validateAddModal.enableValidation();
