const config = {
  form: ".form",
  input: ".form__input",
  submitButton: ".form__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "form__input_invalid",
  errorClass: "form__error_visible",
};

const hideError = (formInput, inputPara) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.remove("form__error_visible");
  inputPara.classList.remove("form__input_invalid");
  errorText.textContent = "";
};
const showError = (formInput, inputPara, config) => {
  const errorText = formInput.querySelector(`.${inputPara.id}-error`);
  errorText.classList.add(config.errorClass);
  inputPara.classList.add(config.inputErrorClass);
  errorText.textContent = error;
};

const toggleInputErrors = (form, input) => {
  if (input.validity.valid) {
    hideError(form, input);
  } else {
    showError(form, input, input.validationMessage);
  }
};

const checkForInvalidInput = (inputList) => {
  return inputList.some((input) => {
    return !input.validity.valid;
  });
};
function disableSubmit(button) {
  button.setAttribute("disabled", true);
  button.classList.add("form__button_disabled");
}
function enableSubmit(button) {
  button.removeAttribute("disabled", false);
  button.classList.remove("form__button_disabled");
}
const toggleSubmitButton = (inputList, buttonElement) => {
  if (checkForInvalidInput(inputList)) {
    disableSubmit(buttonElement, true);
  } else {
    enableSubmit(buttonElement, true);
  }
};

const setEventListeners = (form, config) => {
  const inputs = Array.from(form.querySelectorAll(config.input));
  const button = form.querySelector(".form__button");
  inputs.forEach((input) => {
    toggleSubmitButton(inputs, button);
    input.addEventListener("input", () => {
      toggleInputErrors(form, input);
      toggleSubmitButton(inputs, button);
    });
  });
};

const validateInputs = (config) => {
  const siteForms = Array.from(document.querySelectorAll(config.form));
  siteForms.forEach((form) => {
    setEventListeners(form);
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    const fieldsets = Array.from(form.querySelectorAll(".form__fieldset"));
    fieldsets.forEach((set) => {
      setEventListeners(set);
    });
  });
};
