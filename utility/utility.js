import Card from "../components/Card.js";
import { openModalImage } from "../pages/index.js";

const cardList = document.querySelector(".cards__list");
const profileModal = document.querySelector("#edit-profile");
const cardModal = document.querySelector("#add-card");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const addButton = document.querySelector(".profile__buttons-add");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = profileModal.querySelector(".form__input_type_name");
const descInput = profileModal.querySelector(".form__input_type_description");
const cardForm = cardModalClose.closest(".form");

export function openModal(modal) {
  document.addEventListener("keydown", closeWithEscape);
  modal.classList.add("modal-box_opened");
}
export function closeModal(modal) {
  document.removeEventListener("keydown", closeWithEscape);
  modal.classList.remove("modal-box_opened");
}
function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal-box_opened");
    closeModal(activeModal);
  }
}
function closeOnOutsideClick(modal) {
  if (modal.classList.contains("modal-box_opened")) {
    closeModal(modal);
  }
}
const toggleSubmitButton = (inputList, buttonElement) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, true);
  } else {
    enableSubmit(buttonElement, true);
  }
};
const editButton = document.querySelector(".profile__buttons-edit");
// export const profileModal = document.querySelector("#edit-profile");
function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function pullProfileValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}
const openEditModal = editButton.addEventListener("click", function (evt) {
  fillProfileValues();
  openModal(profileModal);
});
const closeEditModal = proModalClose.addEventListener("click", function () {
  closeModal(profileModal);
});
const submitEditModal = profileModal.addEventListener(
  "submit",
  function formSubmit(evt) {
    pullProfileValues();
    closeModal(profileModal);
  }
);
function setClickListeners() {
  const modals = Array.from(document.querySelectorAll(".modal-box"));
  modals.forEach((box) => {
    box.addEventListener("mousedown", (evt) => {
      closeOnOutsideClick(evt.target);
    });
  });
}
setClickListeners();
cardModalClose.addEventListener("click", function () {
  closeModal(cardModal);
});
addButton.addEventListener("click", function (evt) {
  openModal(cardModal);
});
function addCard(cardElement) {
  cardList.prepend(cardElement);
}
function clearInputs(form) {
  form.reset();
}

cardModal.addEventListener("submit", function formSubmit(evt) {
  const imgInput = cardModal.querySelector(".form__input_type_link");
  const titleInput = cardModal.querySelector(".form__input_type_title");
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  const card = new Card(cardData, "#card", openModalImage);
  evt.preventDefault();
  addCard(card.createCard());
  clearInputs(cardForm);
  closeModal(cardModal);
});
