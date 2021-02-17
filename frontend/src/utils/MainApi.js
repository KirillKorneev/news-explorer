import { setToken, getToken } from './token.js';

class MainApi {
    constructor({baseURL, headers}) { 
        this.baseURL = baseURL;
        this.headers = headers;
    }

    register(email, name, password) {
        console.log('hi');
        return fetch(`${this.baseURL}/signup`, {
            method: 'POST',
            headers: {
                ...this.headers
            },
            body: JSON.stringify({ email, password, name })
        })
        .then((res) => {
            return res.json();
        })
        .then((res) => {
            console.log(res);
            return res;
        });
    }

    authorize(email, password) {
        console.log({ email, password });
        return fetch(`${this.baseURL}/signin`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
        .then((res) => {
            console.log(res);
            return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
        });
    }

    getContent(token) {
        return fetch(`${this.baseURL}/users/me`, {
            methid: 'GET',
            headers: {
                ...this.headers,
                'Authorization': `Bearer ${token}`
            }
        })
        .then((res) => {
            return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
        });
    }

}

export const mainApi = new MainApi({
    baseURL: `http://localhost:3000`,
    headers: {
        'Content-Type': 'application/json'
    }
})
