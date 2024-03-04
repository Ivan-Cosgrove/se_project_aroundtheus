export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      description: this._description.textContent,
    };
    return userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name; /* (formerly nameInput.value) */
    this._description.textContent =
      data.description; /* (formerly descInput.value) */
  }
}
