const profileModal = document.querySelector("#edit-profile");
const cardModal = document.querySelector("#add-card");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const addButton = document.querySelector(".profile__buttons-add");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = profileModal.querySelector(".form__input_type_name");
const descInput = profileModal.querySelector(".form__input_type_description");

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
cardModalClose.addEventListener("click", function () {
  closeModal(cardModal);
});
addButton.addEventListener("click", function (evt) {
  openModal(cardModal);
});

/*
cardModal.addEventListener("submit", function formSubmit(evt) {
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  const inputList = [...cardModal.querySelectorAll(config.input)];
  const modalButton = cardModal.querySelector(config.submitButton);
  evt.preventDefault();
  addCard(getCardTemplate(cardData));
  clearInputs(cardForm);
  toggleSubmitButton(inputList, modalButton, config);
  closeModal(cardModal);
}); */
