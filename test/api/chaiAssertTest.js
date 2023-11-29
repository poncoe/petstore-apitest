const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')
const DATA = require('../../data/userData.js')

describe('Post Request Hewan', () => {
    const response = request(baseUrl())
        .post('/user')
        .send(DATA.CREATE_USER_DATA)

    it('response status 200', async () => {
        //cek response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        //expect dalam body response terdapat value 'message
        expect((await response).body).to.haveOwnProperty('message')
    })

    //reporting in mochawesome
    // using : npx mocha --spec test/api/chaiAssertTest.js --reporter mochawesome
})