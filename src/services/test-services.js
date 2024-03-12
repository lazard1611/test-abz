export default class TestServices {
    _apiBase = 'https://frontend-test-assignment-api.abz.agency/api/v1/';

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);
        if(!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return await res.json();
    }

    async getPageResource(page, count) {
        const res = await this.getResource(`users?page=${page}&count=${count}`)
        return res;
    }

    async getToken() {
        const res = await this.getResource('token/')
        return res;
    }

    async getPositionResource() {
        const res = await this.getResource('positions')
        return res.positions;
    }

    async submitForm(data, token) {
        const response = await fetch(`${this._apiBase}users`, {
            method: 'POST',
            headers: {
                'Token': token,
            },
            body: data,
        });

        if (!response.ok) {
            throw new Error(`Could not submit form, received ${response.status}`);
        }

        return await response.json();
    }

}
