
class NewsApi {
    constructor({baseURL, headers}) { 
        this.baseURL = baseURL;
        this.headers = headers;
    }

    getItems(keyword) { 
        return fetch(`${this.baseURL}/top-headlines?country=us&category=${keyword}&apiKey=587d698641bf47fb8bb5ac9e28e58a88`, {
            headers: {
                ...this.headers
            }
        })
        .then(res => {
            if(res.ok) {
                return res.json();
            }
            return Promise.reject(`Ошибка: ${res.status}`);
        });
    }

}

export const newsApi = new NewsApi({
    baseURL: `https://nomoreparties.co/news/v2`,
    headers: {
        'Content-Type': 'application/json'
    }
})
