// console.log("debug-break");

import "./index.css";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import * as utilities from "../utility/utility.js";
import * as constants from "../utility/constants.js";
const popupImage = new PopupWithImage(
  constants.popupWithImage,
  constants.popupImage
);
popupImage.setEventListeners();
const openpopupImage = (data) => {
  popupImage.open(data);
};
const renderCard = (card) => {
  cardRenderer.addItem(createCard(card));
};
const cardRenderer = new Section(
  { items: constants.initialCards, renderer: renderCard },
  constants.cardList
);

cardRenderer.renderItems();

const userInfo = new UserInfo({
  name: constants.profileName,
  description: constants.profileDesc,
});
console.log(userInfo);
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  console.log(data);
  cardRenderer.addItem(createCard(data));
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(constants.profileModal, (data) => {
  userInfo.setUserInfo(data);
  constants.profileName.textContent = data.name;
  constants.profileDesc.textContent = data.description;
});
profileModal.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openpopupImage);
  return initCard.createCard();
}

//Modal Box Code

constants.editButton.addEventListener("click", function () {
  profileModal.open();
  const profileInfo = userInfo.getUserInfo();
  console.log("debug-break");
  console.log(profileInfo);
  constants.nameInput.value = profileInfo.name.textContent;
  constants.descInput.value = profileInfo.description.textContent;
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
