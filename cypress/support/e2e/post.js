describe('Petstore API Inventory Testing', () => {
    it('add item - POST', () => {
        let body = {
            "id" : 0,
            "username" : Cypress.env('username'),
            "firstName" : "Arief", 
            "lastName" : "Wardhana",
            "email" : "poncoe@coedotz.com",
            "password" : Cypress.env('password'),
            "phone" : "17045",
            "userStatus" : 0
        }
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200);
        })
    })
})