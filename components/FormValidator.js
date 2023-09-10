// console.log("debug");

export default class FormValidator {
  constructor(config, form) {
    this._config = config;
    this._form = form;
  }

  _hideError(input) {
    const errorText = this._form.querySelector(`.${input.id}-error`);
    errorText.classList.remove(this._config.error);
    input.classList.remove(this._config.inputError);
    errorText.textContent = "";
  }

  _showError(input) {
    const errorText = this._form.querySelector(`.${input.id}-error`);
    errorText.classList.add(this._config.error);
    input.classList.add(this._config.inputError);
    errorText.textContent = input.validationMessage;
  }
  _toggleInputErrors(input) {
    // continue the idea with arguments
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }
  _disableSubmit() {
    console.log("debug-disable");
    const button = this._form.querySelector(this._config.submitButton);
    button.setAttribute("disabled", true);
    button.classList.add(this._config.inactiveButton);
  }

  _enableSubmit() {
    console.log("debug-enable");
    const button = this._form.querySelector(this._config.submitButton);
    button.removeAttribute("disabled");
    button.classList.remove(this._config.inactiveButton);
  }

  _checkForInvalidInput() {
    const inputList = [...this._form.querySelectorAll(this._config.input)];
    return inputList.some((input) => {
      return !input.validity.valid;
    });
  }

  toggleSubmitButton() {
    if (this._checkForInvalidInput()) {
      this._disableSubmit();
    } else {
      this._enableSubmit();
    }
  }

  _setEventListeners() {
    const inputs = [...this._form.querySelectorAll(this._config.input)];

    inputs.forEach((input) => {
      addEventListener("input", () => {
        console.log("debug");
        this._toggleInputErrors(input);
        this.toggleSubmitButton();
      });
    });
  }

  enableValidation() {
    this._setEventListeners();
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  }
}

/* 
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

const hideError = (formInput, input, config) => {
  const errorText = formInput.querySelector(`.${input.id}-error`);
  errorText.classList.remove(config.error);
  input.classList.remove(config.inputError);
  errorText.textContent = "";
};
const showError = (formInput, input, config) => {
  const errorText = formInput.querySelector(`.${input.id}-error`);
  errorText.classList.add(config.error);
  input.classList.add(config.inputError);
  errorText.textContent = input.validationMessage;
};

const toggleInputErrors = (form, input, config) => {
  if (input.validity.valid) {
    hideError(form, input, config);
  } else {
    showError(form, input, config);
  }
};

const checkForInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
function disableSubmit(button, config) {
  button.setAttribute("disabled", true);
  button.classList.add(config.inactiveButton);
}
function enableSubmit(button, config) {
  button.removeAttribute("disabled");
  button.classList.remove(config.inactiveButton);
}
const toggleSubmitButton = (inputList, buttonElement, config) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, config);
  } else {
    enableSubmit(buttonElement, config);
  }
};

const setEventListeners = (form, config) => {
  const inputs = [...form.querySelectorAll(config.input)];
  const button = form.querySelector(config.submitButton);
  toggleSubmitButton(inputs, button, config);
  inputs.forEach((input) => {
    input.addEventListener("input", () => {
      toggleInputErrors(form, input, config);
      toggleSubmitButton(inputs, button, config);
    });
  });
};

const enableValidation = (config) => {
  const siteForms = [...document.querySelectorAll(config.form)];
  siteForms.forEach((form) => {
    setEventListeners(form, config);
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  });
};
enableValidation(config); */
