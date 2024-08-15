import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popup, formSubmit) {
    super({ popup });
    this._popupForm = this._popup.querySelector(".form");
    this._formSubmit = formSubmit;
    this._submitButton = this._popupForm.querySelector(".form__button");
    this._submitButtonText = this._submitButton.textContent;
  }

  renderLoading(isLoading, restoredText) {
    if (isLoading) {
      this._submitButton.textContent = "Saving...";
    } else {
      this._submitButton.textContent = restoredText;
    }
  }

  _getInputValues() {
    const inputs = this._popup.querySelectorAll(".form__input");
    const inputsObject = {};

    inputs.forEach(({ name, value }) => {
      inputsObject[name] = value;
    });
    return inputsObject;
  }

  close() {
    this._popupForm.reset();
    super.close();
  }

  setEventListeners() {
    this._popupForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
    });
    super.setEventListeners();
  }
}

/*
  name: "Yosemite Valley",
  link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
data{ 
"Yosemite Valley": "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg"
}*/
