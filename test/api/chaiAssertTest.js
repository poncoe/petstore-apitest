const { expect } = require('chai')
const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Hewan', () => {
    const response = request(baseUrl())
        .post('/user')
        .send({
            "id": 17045,
            "username": "coedotz",
            "firstName": "Arief",
            "lastName": "Wardhana",
            "email": "poncoe@coedotz.com",
            "password": "P@ssw0rd123",
            "phone": "17045",
            "userStatus": 1
        })

    it('response status 200', async () => {
        //cek response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () => {
        //expect dalam body response terdapat value 'message
        expect((await response).body).to.haveOwnProperty('message')
    })

    //reporting in mochawesome
})