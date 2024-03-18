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
const api = new API({
  baseUrl: constants.config.baseUrl,
  headers: constants.config.headers,
});
let cardRenderer;
let cardArray;
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
});

const popupImage = new PopupWithImage(
  constants.popupWithImage,
  constants.popupImage
);
popupImage.setEventListeners();
const openPopupImage = (data) => {
  popupImage.open(data);
};

const deletePopup = new PopupWithForm(constants.deletePopup, (data) => {
  api.deleteCard(data._id, data).then();
});
deletePopup.setEventListeners();

const openDeletePopup = (data) => {
  deletePopup.open();
  constants.deleteID.value = data._id;
};

function sendLike(data) {
  // I put the alerts in as a little extra. I'm aware they don't work properly, but they're not part of the project, so I just commented them out.
  if (data.isLiked) {
    // alert(`You removed your like for ${data.name}`);
    api.removeLike(data._id, data);
  } else {
    // alert(`You liked ${data.name}`);
    api
      .likeCard(data._id, data)
      .then((cardArray = document.querySelectorAll(".card")))
      .then(() => {
        cardArray.forEach((card) => {
          if (card.id === data._id) {
            console.log(card);
          }
        });
      });
  }
}
api.getInitialCards().then((result) => {
  console.log(result);
});
// constants.cardList.forEach((card) => {
//   // constants.cardObject.name = card.name;
//   // constants.cardObject.link = card.link;
//   // constants.cardObject._id = card.id;
//   // constants.cardObject.isLiked = card.isLiked;
//   console.log(card);
// });
const userInfo = new UserInfo({
  name: constants.profileName,
  about: constants.profileDesc,
});
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  api
    .sendCard(data)
    .then(() => api.getInitialCards())
    .then((result) => {
      result.forEach((card) => {
        console.log(card);
      });
    });
});
cardModal.setEventListeners();
const avatarModal = new PopupWithForm(constants.changeAvatar, (data) => {
  api.updateProfilePicture(data).then(alert("Image sent to server"));
  // .then(() => api.getUserInfo())

  // .then((result) => (constants.avatar.src = result.avatar));
});
avatarModal.setEventListeners();

// Card Code

function createCard(card) {
  const initCard = new Card(
    card,
    "#card",
    openPopupImage,
    openDeletePopup,
    sendLike
  );
  return initCard.createCard();
}
// const deleteCard = api.deleteCard();
//Modal Box Code
const profileModal = new PopupWithForm(constants.profileModal, (data) => {
  api.updateUserInfo(data);
  constants.profileName.textContent = data.name;
  constants.profileDesc.textContent = data.about;
});
profileModal.setEventListeners();
constants.editButton.addEventListener("click", function () {
  profileModal.open();
  console.log(cardRenderer);
  const profileInfo = userInfo.getUserInfo();
  constants.nameInput.value = profileInfo.name;
  constants.descInput.value = profileInfo.about;
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
