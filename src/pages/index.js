// console.log("debug-break");

import "./index.css";
import API from "../components/Api.js";
import Card from "../components/Card.js";
import PopupWithForm from "../components/PopupWithForm.js";
import FormValidator from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import * as utilities from "../utility/utility.js";
import * as constants from "../utility/constants.js";
const api = new API(constants.config);
let cardRenderer;
api.getUserInfo().then((result) => {
  userInfo.setUserInfo(result);
});
api.getInitialCards().then((result) => {
  const renderCard = (card) => {
    cardRenderer.addItem(createCard(card));
  };

  cardRenderer = new Section(
    { items: result, renderer: renderCard },
    constants.cardList
  );
  cardRenderer.renderItems();
});

const popupImage = new PopupWithImage(
  constants.popupWithImage,
  constants.popupImage
);

popupImage.setEventListeners();
const openPopupImage = (data) => {
  popupImage.open(data);
};

const userInfo = new UserInfo({
  name: constants.profileName,
  about: constants.profileDesc,
});
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  cardRenderer.addItem(createCard(data));
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(constants.profileModal, (data) => {
  console.log(data);
  api.updateUserInfo(data);
});
profileModal.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openPopupImage);
  return initCard.createCard();
}

//Modal Box Code

constants.editButton.addEventListener("click", function () {
  profileModal.open();
  const profileInfo = userInfo.getUserInfo();
  constants.nameInput.value = profileInfo.name;
  constants.descInput.value = profileInfo.about;
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
