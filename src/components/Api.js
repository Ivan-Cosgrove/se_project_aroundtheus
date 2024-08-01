// "https://around-api.en.tripleten-services.com/v1/"

export default class API {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch(`${this._options.baseUrl}/cards`, {
      headers: this._options.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  submitUserInfo(data) {
    fetch(`${this._options.baseUrl}/users/me`, {
      headers: this._options.headers,
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  updateUserInfo(data) {
    fetch(`${this._options.baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  updateProfilePicture(data) {
    return fetch(`${this._options.baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  sendCard(data) {
    return fetch(`${this._options.baseUrl}/cards`, {
      method: "POST",
      headers: this._options.headers,
      body: JSON.stringify(data),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  deleteCard(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}`, {
      method: "DELETE",
      headers: this._options.headers,
      body: JSON.stringify(card),
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  likeCard(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}/likes`, {
      method: "PUT",
      headers: this._options.headers,
      body: JSON.stringify(card),
    });
  }

  removeLike(cardID, card) {
    return fetch(`${this._options.baseUrl}/cards/${cardID}/likes`, {
      method: "DELETE",
      headers: this._options.headers,
      body: JSON.stringify(card),
    });
  }
}
