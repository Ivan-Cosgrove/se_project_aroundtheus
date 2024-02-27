import Modal from "./Modal.js";
export default class FormModal extends Modal {
  constructor(modal, formSubmit) {
    super({ modal });
    this._modalForm = this._modal.querySelector(".form");
    this._formSubmit = formSubmit;
  }

  _getInputValues() {
    const inputs = this._modal.querySelectorAll(".form__input");
    const inputsObject = {};

    inputs.forEach(({ name, value }) => {
      inputsObject[name] = value;
    });
    console.log(inputsObject);
    return inputsObject;
  }

  close() {
    this._modalForm.reset();
    super.close();
  }

  setEventListeners() {
    this._modalForm.addEventListener("submit", (evt) => {
      evt.preventDefault();
      this._formSubmit(this._getInputValues());
      this.close();
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
