export default class UserInfo {
  constructor({ name, about, avatar }) {
    this._name = name;
    this._about = about;
    this._avatar = avatar;
  }

  getUserInfo() {
    const userData = {
      name: this._name.textContent,
      about: this._about.textContent,
      avatar: this._avatar.textContent,
    };
    return userData;
  }

  setUserInfo(data) {
    this._name.textContent = data.name; /* (formerly nameInput.value) */
    this._about.textContent = data.about; /* (formerly descInput.value) */
    this._avatar.src = data.avatar;
  }
}
