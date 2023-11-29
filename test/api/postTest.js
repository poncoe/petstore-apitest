const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Hewan', () => {
    it('Berhasil membuat user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)
        console.log((await response).status)
        console.log((await response).body)
    })
})