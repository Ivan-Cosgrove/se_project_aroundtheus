export const profileModal = document.querySelector("#edit-profile");
export const profileName = document.querySelector(".profile__title");
export const profileDesc = document.querySelector(".profile__subtitle");
export const cardModal = document.querySelector("#add-card");
export const cardList = document.querySelector(".cards__list");
export const editButton = document.querySelector(".profile__buttons-edit");
export const addButton = document.querySelector(".profile__buttons-add");
export const popupWithImage = document.querySelector("#display-image");
export const popupImage = popupWithImage.querySelector(".modal-box__image");
export const nameInput = document.querySelector(".form__input_type_name");
export const descInput = document.querySelector(
  ".form__input_type_description"
);
export const avatar = document.querySelector(".profile__image");
export const changeAvatar = document.querySelector("#change-avatar");
export const changeAvatarButton = document.querySelector(
  ".profile__buttons-image-edit"
);
export const deletePopup = document.querySelector("#delete-modal");
export const deleteName = document.querySelector("#delete-name");
export const deleteLink = document.querySelector("#delete-link");
export const deleteID = document.querySelector("#delete-id");

export const initialCards = [
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

export const config = {
  // IDs
  editModal: "#edit-profile",
  addModal: "#add-card",
  changeAvatar: "#change-avatar",
  // Selectors
  name: ".profile__title",
  description: ".profile__subtitle",
  form: ".form",
  input: ".form__input",
  submitButton: ".form__button",
  // Classes
  inactiveButton: "form__button_disabled",
  inputError: "form__input_invalid",
  error: "form__error_visible",
  // API Options
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
    "content-type": "application/JSON",
  },
};

export const cardObject = {
  name: "",
  link: "",
  isLiked: false,
  _id: "",
};