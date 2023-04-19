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

console.log(cardModal);
/* config.addModal.addEventListener("submit", (evt) =>
  toggleSubmitButton(config.addModal)
); */

const hideError = (formInput, inputPara, config) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.remove(config.errorClass);
  inputPara.classList.remove(config.inputErrorClass);
  errorText.textContent = "";
};
const showError = (formInput, inputPara, config) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.add(config.errorClass);
  inputPara.classList.add(config.inputErrorClass);
  errorText.textContent = inputPara.validationMessage;
};

const toggleInputErrors = (form, input) => {
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
function disableSubmit(button) {
  button.setAttribute("disabled", true);
  button.classList.add(config.inactiveButton);
}
function enableSubmit(button) {
  button.removeAttribute("disabled", false);
  button.classList.remove(config.inactiveButton);
}
const toggleSubmitButton = (inputList, buttonElement) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, true);
  } else {
    enableSubmit(buttonElement, true);
  }
};

const setEventListeners = (form) => {
  const inputs = [...form.querySelectorAll(config.input)];
  const button = form.querySelector(config.submitButton);
  inputs.forEach((input) => {
    // toggleSubmitButton(inputs, button);
    input.addEventListener("input", () => {
      toggleInputErrors(form, input);
      toggleSubmitButton(inputs, button);
    });
  });
};

const enableValidation = (config) => {
  const siteForms = [...document.querySelectorAll(config.form)];
  siteForms.forEach((form) => {
    setEventListeners(form);
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
  });
};
enableValidation(config);
