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
  constants.avatar.src = result.avatar;
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
  console.log(result);
});

// const avatarModal = new PopupWithForm(constants.changeAvatar, (data) => {
// api.updateProfilePicture(data);
// });
const popupImage = new PopupWithImage(
  constants.popupWithImage,
  constants.popupImage
);

const validateDeleteModal = new FormValidator(
  constants.config,
  constants.deletePopup
);
const deletePopup = new PopupWithForm(constants.deletePopup, (data) => {
  // api.deleteCard(data);
});
deletePopup.setEventListeners();
popupImage.setEventListeners();
const openPopupImage = (data) => {
  popupImage.open(data);
};

const openDeletePopup = () => {
  deletePopup.open();
};

const userInfo = new UserInfo({
  name: constants.profileName,
  about: constants.profileDesc,
});
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  api.sendCard(data);
});
cardModal.setEventListeners();

const profileModal = new PopupWithForm(constants.profileModal, (data) => {
  api.updateUserInfo(data);
});
profileModal.setEventListeners();
const avatarModal = new PopupWithForm(constants.changeAvatar, (data) => {
  console.log(data);
  api.updateProfilePicture(data);
});
avatarModal.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(card, "#card", openPopupImage, openDeletePopup);
  return initCard.createCard();
}
// const deleteCard = api.deleteCard();
//Modal Box Code

constants.editButton.addEventListener("click", function () {
  profileModal.open();
  const profileInfo = userInfo.getUserInfo();
  constants.nameInput.value = profileInfo.name;
  constants.descInput.value = profileInfo.about;
  console.log(profileModal);
  validateEditModal.toggleSubmitButton();
});

const validateAvatarModal = new FormValidator(
  constants.config,
  constants.changeAvatar
);
validateAvatarModal.enableValidation();

constants.changeAvatarButton.addEventListener("click", () => {
  avatarModal.open();
  validateAvatarModal.toggleSubmitButton();
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

document.addEventListener("click", (evt) => {
  console.log(evt.target);
});
