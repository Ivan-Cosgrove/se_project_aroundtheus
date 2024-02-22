export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    const nameInput = document.querySelector(".form__input_type_name");
    const descInput = document.querySelector(".form__input_type_description");
    const profileName = document.querySelector(".profile__title");
    const profileDesc = document.querySelector(".profile__subtitle");
    this._name = profileName.textContent;
    this._description = profileDesc.textContent;
    const userData = { name: this._name, description: this._description };
    nameInput.value = userData.name;
    descInput.value = userData.description;
  }

  setUserInfo() {
    const profileName = document.querySelector(".profile__title");
    const profileDesc = document.querySelector(".profile__subtitle");
    const nameInput = document.querySelector(".form__input_type_name");
    const descInput = document.querySelector(".form__input_type_description");
    this._name = nameInput.value;
    this._description = descInput.value;
    const formData = { name: this._name, description: this._description };
    profileName.textContent = formData.name;
    profileDesc.textContent = formData.description;
  }
}
