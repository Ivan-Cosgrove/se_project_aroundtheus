// console.log("debug-break");

import Card from "../components/Card.js";
import Validation from "../components/FormValidator.js";
import * as utilities from "../utility/utility.js";
import { closeModal } from "../utility/utility.js";
import { openModal } from "../utility/utility.js";

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

imageModalClose.addEventListener("click", () => {
  closeModal(imageModalBox);
});

const validateEditModal = new Validation(config, profileModal);
validateEditModal.enableValidation();

const validateAddModal = new Validation(config, cardModal);
validateAddModal.enableValidation();

// const siteForms = document.querySelectorAll(".form");

// siteForms.forEach((form) => {
//   const validation = new Validation(config, form);
//   validation.enableValidation();
// });
