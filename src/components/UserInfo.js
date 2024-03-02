export default class UserInfo {
  constructor({ name, description }) {
    this._name = name;
    this._description = description;
  }

  getUserInfo() {
    const userData = {
      name: this._name.value,
      description: this._description.value,
    };
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
