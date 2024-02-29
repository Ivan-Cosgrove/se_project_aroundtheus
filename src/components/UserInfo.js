export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
    this._title = document.querySelector(".profile__title");
    this._subtitle = document.querySelector(".profile__subtitle");
  }

  getUserInfo() {
    this._name = this._title.textContent;
    this._description = this._subtitle.textContent;
    const userData = { name: this._name, description: this._description };
    return userData;
  }

  setUserInfo(data) {
    this._name = data.name; /* (formerly nameInput.value) */
    this._description = data.description; /* (formerly descInput.value) */
    const formData = { name: this._name, description: this._description };
    this._title.textContent = formData.name;
    this._subtitle.textContent = formData.description;
  }
}
