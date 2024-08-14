// "https://around-api.en.tripleten-services.com/v1/"

export default class API {
  constructor(options) {
    this._options = options;
  }

  _checkResponse(res) {
    if (res.ok) {
      return res.json();
    }
    return Promise.reject(`Error: ${res.status}`);
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    }).then(this._checkResponse);
  }

  submitUserInfo(data) {
    fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  updateUserInfo(data) {
    fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  updateProfilePicture(data) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  sendCard(data) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then(this._checkResponse);
  }

  deleteCard(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._options.headers,
      body: JSON.stringify(card),
    }).then(this._checkResponse);
  }

  likeCard(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._options.headers,
      body: JSON.stringify(card),
    }).then(this._checkResponse);
  }

  removeLike(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._options.headers,
      body: JSON.stringify(card),
    }).then(this._checkResponse);
  }
}
