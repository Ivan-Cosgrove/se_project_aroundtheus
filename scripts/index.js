const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];

const modalBox = document.querySelector(".modal-box");
const modalBoxOpen = document.querySelector(".modal-box_opened");
const modalClose = document.querySelector(".modal-box__button");
const editButton = document.querySelector(".profile__buttons-edit");

editButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBox.classList.add("modalBoxOpen");
});
modalClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  modalBox.classList.remove("modalBoxOpen");
});
