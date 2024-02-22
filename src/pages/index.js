// console.log("debug-break");

import "./index.css";
import Card from "../components/Card.js";
import FormModal from "../components/FormModal.js";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import ImageModal from "../components/ImageModal.js";
import * as utilities from "../utility/utility.js";
import { closeModal } from "../utility/utility.js";
import { openModal } from "../utility/utility.js";
import { closeOnOutsideClick } from "../utility/utility.js";
import { initialCards } from "../utility/constants.js";
import { config } from "../utility/constants.js";

const profileModal = document.querySelector("#edit-profile");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const cardModal = document.querySelector("#add-card");
const cardList = document.querySelector(".cards__list");
const renderCards = () => addCard(createCard(initialCards));
const firstCards = new Section({ initialCards, renderCards }, cardList);

const userInfo = new UserInfo(profileName, profileDesc);

const cardForm = new FormModal(cardModal, (data) => {
  addCard(createCard(data));
});
cardForm.setEventListeners();

const profileForm = new FormModal(profileModal, () => {
  userInfo.setUserInfo();
});
profileForm.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openModalImage);
  return initCard.createCard();
}

function addCard(cardElement) {
  cardList.prepend(cardElement);
}

// initialCards.reverse().forEach((card) => {
//   const cardElement = createCard(card);
//   addCard(cardElement);
// });

// function fillProfileValues() {
//   nameInput.value = profileName.textContent;
//   descInput.value = profileDesc.textContent;
// }
// function pullProfileValues() {
//   profileName.textContent = nameInput.value;
//   profileDesc.textContent = descInput.value;
// }

// function setClickListeners() {
//   const modals = Array.from(document.querySelectorAll(".modal-box"));
//   modals.forEach((box) => {
//     box.addEventListener("mousedown", (evt) => {
//       closeOnOutsideClick(evt.target);
//     });
//   });
// }
// setClickListeners();

// function clearInputs(form) {
//   form.reset();
// }

cardModal.addEventListener("submit", function formSubmit(evt) {
  //   const imgInput = cardModal.querySelector(".form__input_type_link");
  //   const titleInput = cardModal.querySelector(".form__input_type_title");
  //   const cardCap = titleInput.value;
  //   const cardImg = imgInput.value;
  //   const cardData = { name: cardCap, link: cardImg };
  //   addCard(createCard(cardData));
  //   clearInputs(cardModalForm);
  //   closeModal(cardModal);
});

//Modal Box Code

// const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const editButton = document.querySelector(".profile__buttons-edit");

// const nameInput = profileModal.querySelector(".form__input_type_name");
// const descInput = profileModal.querySelector(".form__input_type_description");
const cardModalForm = cardModalClose.closest(".form");
const addButton = document.querySelector(".profile__buttons-add");

const imageModal = document.querySelector(".modal-box__image-container");
const imageModalClose = imageModal.querySelector(".modal-box__close-button");
const imageModalBox = imageModal.closest(".modal-box");
const modalImage = imageModal.querySelector(".modal-box__image");
const modalImageTitle = document.querySelector(".modal-box__caption");

// const formModal = new FormModal(profileModal, (data) => {
//   console.log("debug-break");
//   console.log(data);
// });

// formModal.setEventListeners();

export function openModalImage(data) {
  openModal(imageModalBox);
  const cardCap = data.name;
  const cardImg = data.link;
  modalImageTitle.textContent = cardCap;
  modalImage.src = cardImg;
  modalImage.alt = `Preview image for ${cardCap}`;
}
editButton.addEventListener("click", function (evt) {
  profileForm.open();
  userInfo.getUserInfo();
  validateEditModal.toggleSubmitButton();
});
const modalCloseButtons = document.querySelectorAll(".modal-box__close-button");
modalCloseButtons.forEach((button) => {
  const modal = button.closest(".modal-box");
  button.addEventListener("click", () => closeModal(modal));
});

// profileModal.addEventListener("submit", function formSubmit(evt) {
//   fillProfileValues();
//   // userInfo.setUserInfo();
//   closeModal(profileModal);
// });
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
