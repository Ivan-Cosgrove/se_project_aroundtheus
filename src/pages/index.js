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
modalImage.setEventListeners();
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

const cardModal = new FormModal(constants.cardModal, (data) => {
  console.log(data);
  cardRenderer.addItem(createCard(data));
});
cardModal.setEventListeners();

const profileModal = new FormModal(constants.profileModal, () => {
  userInfo.setUserInfo({
    name: constants.nameInput.value,
    description: constants.descInput.value,
  });
});
profileModal.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openModalImage);
  return initCard.createCard();
}

//Modal Box Code

constants.editButton.addEventListener("click", function () {
  profileModal.open();
  userInfo.getUserInfo();
  const name = userInfo.getUserInfo().name;
  const desc = userInfo.getUserInfo().description;
  constants.nameInput.value = name;
  constants.descInput.value = desc;
  validateEditModal.toggleSubmitButton();
});

constants.addButton.addEventListener("click", function () {
  cardModal.open();
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
