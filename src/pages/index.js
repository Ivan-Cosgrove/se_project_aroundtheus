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
const loadCards = () => {
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
};

loadCards();
const popupImage = new PopupWithImage(
  constants.popupWithImage,
  constants.popupImage
);
popupImage.setEventListeners();
const openPopupImage = (data) => {
  popupImage.open(data);
};

const deletePopup = new PopupWithForm(constants.deletePopup, (data) => {
  api
    .deleteCard(data._id, data)
    .then(() => {
      deletePopup.submitButton.textContent = "Delete Card";
      cardArray = document.querySelectorAll(".card");
      cardArray.forEach((card) => {
        if (card.id === data._id) {
          card.remove();
        }
      });
      deletePopup.close();
    })
    .catch((error) => {
      alert(`Request to server failed. ${error}`);
    });
});
deletePopup.setEventListeners();

const openDeletePopup = (data) => {
  deletePopup.open();
  constants.deleteID.value = data._id;
};

function sendLike(data) {
  if (data.isLiked) {
    api
      .removeLike(data._id, data)
      .then((data.isLiked = false))
      .then(alert(`Like for "${data.name}" removed`));
  } else {
    api
      .likeCard(data._id, data)
      .then((data.isLiked = true))
      .then(alert(`Like for "${data.name}" added`));
  }
}

const userInfo = new UserInfo({
  name: constants.profileName,
  about: constants.profileDesc,
});
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  api
    .sendCard(data)

    .then((result) => {
      cardRenderer.addItem(createCard(result));
      cardModal.submitButton.textContent = "Create";
      cardModal.close();
    });
});

cardModal.setEventListeners();
const avatarModal = new PopupWithForm(constants.changeAvatar, (data) => {
  api.updateProfilePicture(data).then((result) => {
    constants.avatar.src = result.avatar;

    avatarModal.close();
    avatarModal.submitButton.textContent = "Change Picture";
  });
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

//Modal Box Code
const profileModal = new PopupWithForm(constants.profileModal, (data) => {
  api.updateUserInfo(data);
  constants.profileName.textContent = data.name;
  constants.profileDesc.textContent = data.about;
  profileModal.close();
});
profileModal.setEventListeners();
constants.editButton.addEventListener("click", function () {
  profileModal.open();
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

const validateAddModal = new FormValidator(
  constants.config,
  constants.cardModal
);
validateAddModal.enableValidation();
