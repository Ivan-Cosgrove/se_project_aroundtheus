import Card from "../components/Card.js";
import Validation from "../components/Validation.js";
import * as utilities from "../utility/utility.js";
utilities;
const config = {
  // IDs
  addModal: "#add-card",
  // Selectors
  form: ".form",
  input: ".form__input",
  submitButton: ".form__button",
  // Classes
  inactiveButton: "form__button_disabled",
  inputError: "form__input_invalid",
  error: "form__error_visible",
};
// const validationClass = new Validation(
//   config,
//   document.querySelector(config.form)
// );
// validationClass.enableValidation();
//Cards Code
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const cardModal = document.querySelector("#add-card");
const imgInput = cardModal.querySelector(".form__input_type_link");
const titleInput = cardModal.querySelector(".form__input_type_title");
const cardName = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector(".card__image");

const initialCards = [
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

function getCardTemplate(data) {
  /*  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCap = data.name;
  const cardImg = data.link;
  cardName.textContent = cardCap;
  cardImage.src = cardImg;
  cardImage.alt = cardCap;
    const cardLike = cardElement.querySelector(".card__button-like");
  const deleteButton = cardElement.querySelector(".card__button-delete");
  cardLike.addEventListener("click", function () {
    cardLike.classList.toggle("card__button_clicked");
  }); 
  deleteButton.addEventListener("click", () => {
    const card = deleteButton.closest(".card");
    card.remove();
  });*/
  cardImage.addEventListener("click", () => {
    openModalImage(data);
  });
  return cardElement;
}

function addCard(cardElement) {
  cardList.prepend(cardElement);
}

initialCards.reverse().forEach((card) => {
  const cardElement = new Card(card, "#card");
  addCard(cardElement.createCard());
});

//Modal Box Code
const profileModal = document.querySelector("#edit-profile");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = profileModal.querySelector(".form__input_type_name");
const descInput = profileModal.querySelector(".form__input_type_description");
const cardForm = cardModalClose.closest(".form");
const cardInfo = document.querySelector("#card-info");
const proSubmit = profileModal.querySelector(".form__button");
const cardSubmit = cardModal.querySelector(".form__button");
const cardInput = cardModal.querySelector(".form__input_type_title");
const cardDescInput = cardModal.querySelector(".form__input_type_link");

/*  function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
} */
/*
function openModal(modal) {
  document.addEventListener("keydown", closeWithEscape);
  modal.classList.add("modal-box_opened");
}
function closeModal(modal) {
  document.removeEventListener("keydown", closeWithEscape);
  modal.classList.remove("modal-box_opened");
}
function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal-box_opened");
    closeModal(activeModal);
  }
}
  editButton.addEventListener("click", function (evt) {
   fillProfileValues();
  openModal(profileModal);
}); 
proModalClose.addEventListener("click", function () {
  closeModal(profileModal);
});
function pullProfileValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}
profileModal.addEventListener("submit", function formSubmit(evt) {
  pullProfileValues();
  closeModal(profileModal);
});
function closeOnOutsideClick(modal) {
  if (modal.classList.contains("modal-box_opened")) {
    closeModal(modal);
  }
}

const setClickListeners = () => {
  const modals = Array.from(document.querySelectorAll(".modal-box"));
  modals.forEach((box) => {
    box.addEventListener("mousedown", (evt) => {
      closeOnOutsideClick(evt.target);
    });
  });
};
utilities.setClickListeners;
const addButton = document.querySelector(".profile__buttons-add");

cardModalClose.addEventListener("click", function () {
  closeModal(cardModal);
});

addButton.addEventListener("click", function (evt) {
  openModal(cardModal);
});
*/
function clearInputs(form) {
  form.reset();
}
const toggleSubmitButton = (inputList, buttonElement) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, true);
  } else {
    enableSubmit(buttonElement, true);
  }
};
cardModal.addEventListener("submit", function formSubmit(evt) {
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  const inputList = [...cardModal.querySelectorAll(config.input)];
  const modalButton = cardModal.querySelector(config.submitButton);
  evt.preventDefault();
  addCard(getCardTemplate(cardData));
  clearInputs(cardForm);
  toggleSubmitButton(inputList, modalButton);
  closeModal(cardModal);
});

const imageModal = document.querySelector(".modal-box__image-container");
const imageModalClose = imageModal.querySelector(".modal-box__close-button");
const imageModalBox = imageModal.closest(".modal-box");
const modalImage = imageModal.querySelector(".modal-box__image");
const modalImageTitle = document.querySelector(".modal-box__caption");
function openModalImage(data) {
  openModal(imageModalBox);
  const cardCap = data.name;
  const cardImg = data.link;
  modalImageTitle.textContent = cardCap;
  modalImage.src = cardImg;
  modalImage.alt = `Preview image for ${cardCap}`;
}

imageModalClose.addEventListener("click", () => {
  closeModal(imageModalBox);
});

const siteForms = document.querySelectorAll(".form");

siteForms.forEach((form) => {
  const validation = new Validation(config, form);
  validation.enableValidation();
});

/*Validation Code <--------------------
const hideError = (formInput, inputPara) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.remove("form__error_visible");
  inputPara.classList.remove("form__input_invalid");
  errorText.textContent = "";
};
const showError = (formInput, inputPara, error) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.add("form__error_visible");
  inputPara.classList.add("form__input_invalid");
  errorText.textContent = error;
};

const toggleInputErrors = (form, input) => {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input, input.validationMessage);
  }
};

const checkForInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
function disableSubmit(button) {
  button.setAttribute("disabled", true);
  button.classList.add("form__button_disabled");
}
function enableSubmit(button) {
  button.removeAttribute("disabled", false);
  button.classList.remove("form__button_disabled");
}
const toggleSubmitButton = (inputList, buttonElement) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, true);
  } else {
    enableSubmit(buttonElement, true);
  }
};

const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(".form__input")];
  const button = form.querySelector(".form__button");
  inputs.forEach((input) => {
    toggleSubmitButton(inputs, button);
    input.addEventListener("input", () => {
      toggleInputErrors(form, input);
      toggleSubmitButton(inputs, button);
    });
  });
};

const validateInputs = () => {
  const siteForms = Array.from(document.querySelectorAll(".form"));
  siteForms.forEach((form) => {
    setEventListeners(form);
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const fieldsets = Array.from(form.querySelectorAll(".form__fieldset"));
    fieldsets.forEach((set) => {
      setEventListeners(set);
    });
  });
};

 enabling validation by calling enableValidation()
 pass all the settings on call


enableValidation(config); */
