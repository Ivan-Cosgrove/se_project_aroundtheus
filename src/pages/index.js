// console.log("debug-break");

import "./index.css";
import Card from "../components/Card.js";
import FormModal from "../components/FormModal.js";
import FormValidator from "../components/FormValidator.js";
import ImageModal from "../components/ImageModal.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import * as utilities from "../utility/utility.js";
import * as constants from "../utility/constants.js";
const modalImage = new ImageModal(constants.imageModal, constants.modalImage);
const openModalImage = (data) => {
  modalImage.open(data);
};
const renderCard = (card) => {
  cardRenderer.addItem(createCard(card));
};
const cardRenderer = new Section(
  { items: constants.initialCards, renderer: renderCard },
  constants.cardList
);

cardRenderer.renderItems();

const userInfo = new UserInfo(constants.profileName, constants.profileDesc);

const cardForm = new FormModal(constants.cardModal, (data) => {
  cardRenderer.addItem(createCard(data));
});
cardForm.setEventListeners();

const profileForm = new FormModal(constants.profileModal, () => {
  userInfo.setUserInfo();
});
profileForm.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openModalImage);
  return initCard.createCard();
}

//Modal Box Code

constants.editButton.addEventListener("click", function () {
  profileForm.open();
  userInfo.getUserInfo();
  validateEditModal.toggleSubmitButton();
});

constants.addButton.addEventListener("click", function () {
  cardForm.open();
  validateAddModal.toggleSubmitButton();
});
const validateEditModal = new FormValidator(
  constants.config,
  constants.profileModal
);
validateEditModal.enableValidation();

export const validateAddModal = new FormValidator(
  constants.config,
  constants.cardModal
);
validateAddModal.enableValidation();
