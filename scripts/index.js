//Cards Code
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

const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content;
const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
const cardModal = document.querySelector("#add-card");
const imgInput = cardModal.querySelector(".form__input_type_link");
const titleInput = cardModal.querySelector(".form__input_type_title");
const cardName = cardElement.querySelector(".card__title");
const cardImage = cardElement.querySelector(".card__image");

function getCardTemplate(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
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
  });
  cardImage.addEventListener("click", () => {
    openModalImage(data);
  });
  return cardElement;
}

function addCard(cardElement) {
  cardList.prepend(cardElement);
}

initialCards.reverse().forEach((card) => {
  addCard(getCardTemplate(card));
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
function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function openModal(modal) {
  modal.classList.add("modal-box_opened");
}
function closeModal(modal) {
  modal.classList.remove("modal-box_opened");
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
  evt.preventDefault();
  pullProfileValues();
  closeModal(profileModal);
});

const addButton = document.querySelector(".profile__buttons-add");

cardModalClose.addEventListener("click", function () {
  closeModal(cardModal);
});

addButton.addEventListener("click", function (evt) {
  openModal(cardModal);
});
function clearInputs(form) {
  form.reset();
}

cardModal.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  addCard(getCardTemplate(cardData));
  clearInputs(cardForm);
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
  modalImage.alt = cardCap;
}

imageModalClose.addEventListener("click", () => {
  closeModal(imageModalBox);
});
