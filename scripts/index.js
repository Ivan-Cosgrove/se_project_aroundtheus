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
const imgInput = cardModal.querySelector(".form__input_type_description");
const titleInput = cardModal.querySelector(".form__input_type_name");
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

const modal = document.querySelector(".modal-box");
const proModalClose = profileModal.querySelector(".modal-box__close-button");
const cardModalClose = cardModal.querySelector(".modal-box__close-button");
const editButton = document.querySelector(".profile__buttons-edit");
const profileName = document.querySelector(".profile__title");
const profileDesc = document.querySelector(".profile__subtitle");
const nameInput = profileModal.querySelector(".form__input_type_name");
const descInput = profileModal.querySelector(".form__input_type_description");
const body = document.querySelector(".body");
const profilePara = document.querySelector(".profile__paragraph");
const profile = document.querySelector(".profile");

function fillProfileValues() {
  nameInput.value = profileName.textContent;
  descInput.value = profileDesc.textContent;
}
function openProfileModal() {
  profileModal.classList.add("modal-box_opened");
}
function closeProfileModal() {
  profileModal.classList.remove("modal-box_opened");
}
function openCardModal() {
  cardModal.classList.add("modal-box_opened");
}
function closeCardModal() {
  cardModal.classList.remove("modal-box_opened");
}

editButton.addEventListener("click", function (evt) {
  modalTitle.textContent = "Edit Profile";
  fillProfileValues();
  openProfileModal();
});
proModalClose.addEventListener("click", function () {
  closeProfileModal();
});
function pullProfileValues() {
  profileName.textContent = nameInput.value;
  profileDesc.textContent = descInput.value;
}
profileModal.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  pullProfileValues();
  closeProfileModal();
});

const addButton = document.querySelector(".profile__buttons-add");
const modalTitle = document.querySelector(".form__title");

cardModalClose.addEventListener("click", function () {
  closeCardModal();
});

addButton.addEventListener("click", function (evt) {
  openCardModal();
});

cardModal.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  const cardCap = titleInput.value;
  const cardImg = imgInput.value;
  const cardData = { name: cardCap, link: cardImg };
  addCard(getCardTemplate(cardData));
  closeCardModal();
});
const imageModalClose = imageModal.querySelector(".modal-box__close-button");
const imageModal = document.querySelector(".modal-box__image-container");
const imageModalBox = imageModal.closest(".modal-box");
const modalImage = imageModal.querySelector(".modal-box__image");
const modalImageTitle = document.querySelector(".modal-box__caption");
function openModalImage(data) {
  imageModalBox.classList.add("modal-box_opened");
  const cardCap = data.name;
  const cardImg = data.link;
  modalImageTitle.textContent = cardCap;
  modalImage.src = cardImg;
  modalImage.alt = cardCap;
  return imageModal;
}
