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
let cardSection;
let cardArray;
api
  .getUserInfo()
  .then((result) => {
    userInfo.setUserInfo(result);
    // constants.avatar.src = result.avatar;
  })
  .catch((error) => {
    alert(`Request to server for user info failed. ${error}`);
  });
const loadCards = () => {
  api
    .getInitialCards()
    .then((result) => {
      const renderCard = (card) => {
        cardSection.addItem(createCard(card));
      };
      cardSection = new Section(
        { items: result, renderer: renderCard },
        constants.cardList
      );
      cardSection.renderItems();
    })
    .catch((error) => {
      alert(`Request to server for saved cards failed. ${error}`);
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
      const card = document.getElementById(data._id);
      card.remove();
      deletePopup.close();
    })
    .catch((error) => {
      alert(`Request to server to remove card failed. ${error}`);
    })
    .finally(() => {
      deletePopup.submitButton.textContent = "Delete Card";
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
      .then((result) => {
        data.isLiked = result.isLiked;
      })
      .catch((error) => {
        alert(`Request to server to update like failed. ${error}`);
      });
  } else {
    api
      .likeCard(data._id, data)
      .then((result) => {
        data.isLiked = result.isLiked;
      })
      .catch((error) => {
        alert(`Request to server to update like failed. ${error}`);
      });
  }
}

const userInfo = new UserInfo({
  name: constants.profileName,
  about: constants.profileDesc,
  avatar: constants.avatar,
});
const cardModal = new PopupWithForm(constants.cardModal, (data) => {
  cardModal.renderLoading(true);
  api
    .sendCard(data)

    .then((result) => {
      cardSection.addItem(createCard(result));

      cardModal.close();
    })
    .catch((error) => {
      alert(`Request to server to add card failed. ${error}`);
    })
    .finally(() => {
      cardModal.renderLoading(false, "Create");
    });
});

cardModal.setEventListeners();
const avatarModal = new PopupWithForm(constants.changeAvatar, (data) => {
  api
    .updateProfilePicture(data)
    .then((result) => {
      constants.avatar.src = result.avatar;

      avatarModal.close();
      avatarModal.submitButton.textContent = "Change Picture";
    })
    .catch(error);
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
  api.updateUserInfo(data).then((result) => {
    console.log(result);
  });
  // constants.profileName.textContent = data.name;
  // constants.profileDesc.textContent = data.about;
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
