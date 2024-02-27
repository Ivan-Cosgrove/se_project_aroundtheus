export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    const profileName = document.querySelector(".profile__title");
    const profileDesc = document.querySelector(".profile__subtitle");
    this._name = profileName.textContent;
    this._description = profileDesc.textContent;
    const userData = { name: this._name, description: this._description };
    return userData;
  }

  setUserInfo(data) {
    const profileName = document.querySelector(".profile__title");
    const profileDesc = document.querySelector(".profile__subtitle");
    this._name = data.name; /* (formerly nameInput.value) */
    this._description = data.description; /* (formerly descInput.value) */
    const formData = { name: this._name, description: this._description };
    profileName.textContent = formData.name;
    profileDesc.textContent = formData.description;
  }
}
