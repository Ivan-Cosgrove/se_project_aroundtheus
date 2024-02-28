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
    if (input.validity.valid) {
      this._hideError(input);
    } else {
      this._showError(input);
    }
  }
  _disableSubmit() {
    const button = this._form.querySelector(this._config.submitButton);
    button.setAttribute("disabled", true);
    button.classList.add(this._config.inactiveButton);
  }

  _enableSubmit() {
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
      input.addEventListener("input", () => {
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
