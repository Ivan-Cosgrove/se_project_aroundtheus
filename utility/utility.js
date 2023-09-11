const cardList = document.querySelector(".cards__list");
const profileModal = document.querySelector("#edit-profile");
const cardModal = document.querySelector("#add-card");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");

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
export function closeWithEscape(evt) {
  if (evt.key === "Escape") {
    const activeModal = document.querySelector(".modal-box_opened");
    closeModal(activeModal);
  }
}
export function closeOnOutsideClick(modal) {
  if (modal.classList.contains("modal-box_opened")) {
    closeModal(modal);
  }
}
