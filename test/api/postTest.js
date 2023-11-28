const request = require('supertest')
const baseUrl = require('../../env')

describe('Post Request Hewan', () => {
    it('Berhasil membuat user', async () => {
        const response = request(baseUrl())
        .post('/user')
        .send({
            "id" : 17045,
            "username" : "coedotz",
            "firstName" : "Arief",
            "lastName" : "Wardhana",
            "email" : "poncoe@coedotz.com",
            "password" : "P@ssw0rd123",
            "phone" : "17045",
            "userStatus" : 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})