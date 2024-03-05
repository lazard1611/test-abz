export default class TestServices {
    _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

    data = {
        success: true,
        token: "eyJpdiI6IjVlcVwvTU5obXJyV2J4bTRodkhwY05nPT0iLCJ2YWx1ZSI6ImVNZk5sejJ0ODFUUnMzVk5kUjdlcWhtUW91YW1YOU9sNGRzXC83UXdjV0VOVktxMFZFQ0FQMFJoRm5BUVU4aFhsbEFoaUN2UEppSEo5VWwrZzBwNDBqQT09IiwibWFjIjoiZTMzNDE0YzNjOGU4ZWFjYjg1YmUxMjNjM2MxZDRkZmI3ZGM2NTAxOTQ1NGViYjNmMzllMDcyMGRhZjNhNjdiNiJ9"

    }

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}` + `, received ${res.status}`)
        }
        return await res.json();
    }

    async getAllCardResource() {
        const res = await this.getResource(`users/`)
        return res.users;
    }

    getCardResource = (id) => {
        return this.getResource(`users/${id}`)
    }
}
