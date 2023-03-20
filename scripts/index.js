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
const newCardArray = [];
const cardList = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card").content;
const cardModal = document.querySelector("#add-card");
const imgInput = cardModal.querySelector(".form__input_type_description");
const titleInput = cardModal.querySelector(".form__input_type_name");

function getCardTemplate(data) {
  const cardElement = cardTemplate.querySelector(".card").cloneNode(true);
  const cardName = cardElement.querySelector(".card__title");
  const cardImage = cardElement.querySelector(".card__image");
  const cardCap = data.name;
  const cardImg = data.link;
  cardName.textContent = cardCap;
  cardImage.src = cardImg;
  cardImage.alt = cardCap;
  return cardElement;
}
function addCard(cardElement) {
  cardList.append(cardElement);
}
initialCards.map((card) => {
  addCard(getCardTemplate(card));
  return initialCards;
});
const cardData = Object.create(initialCards);
function pullCardData() {
  cardData.link = imgInput;
  cardData.name = titleInput;
}
function addNewCard() {
  initialCards.unshift(cardData);
  addCard(initialCards);
}

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
  modalTitle.textContent = "Add Picture";
  nameInput.value = "";
  descInput.value = "";
  descInput.placeholder = "Image Link";
  openCardModal();
});

cardModal.addEventListener("submit", function formSubmit(evt) {
  evt.preventDefault();
  addNewCard();
  closeCardModal();
});
