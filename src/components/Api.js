// "https://around-api.en.tripleten-services.com/v1/"

export default class API {
  constructor(options) {
    this._options = options;
  }

  getInitialCards() {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      headers: {
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  getUserInfo() {
    return fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      headers: {
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
      },
    }).then((res) => {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Error: ${res.status}`);
    });
  }

  submitUserInfo(data) {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "POST",
      headers: {
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
      },
    }).then(JSON.stringify(data));
  }

  updateUserInfo(data) {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me", {
      method: "PATCH",
      headers: {
        "content-type": "application/JSON",
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
      },
      body: JSON.stringify(data),
    });
  }

  updateProfilePicture(data) {
    fetch("https://around-api.en.tripleten-services.com/v1/users/me/avatar", {
      method: "PATCH",
      headers: {
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
        "content-type": "application/JSON",
      },
      body: JSON.stringify(data),
    });
  }

  sendCard(data) {
    return fetch("https://around-api.en.tripleten-services.com/v1/cards", {
      method: "POST",
      headers: {
        "content-type": "application/JSON",
        authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
      },
      body: JSON.stringify(data),
    });
  }

  deleteCard(cardID) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/:${cardID}`,
      {
        method: "DELETE",
        headers: {
          authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
        },
        body: JSON.stringify(cardID),
      }
    );
  }

  likeCard(cardID) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/:${cardID}/likes`,
      {
        headers: {
          authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
        },
      }
    );
  }

  removeLike(cardID) {
    return fetch(
      `https://around-api.en.tripleten-services.com/v1/cards/:${cardID}/likes`,
      {
        method: "DELETE",
        headers: {
          authorization: "eb144407-9d56-4c39-8eac-7fa32452a67f",
        },
      }
    );
  }
}
