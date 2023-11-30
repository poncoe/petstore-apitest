describe('Petstore API Inventory Testing', () => {
    it('add item - POST', () => {
        let body = {
            "id" : 0,
            "username" : "coedotz",
            "firstName" : "Arief", 
            "lastName" : "Wardhana",
            "email" : "poncoe@coedotz.com",
            "password" : "P@ssw0rd123",
            "phone" : "17045",
            "userStatus" : 0
        }
        cy.request('POST', '/user', body).as('createUser');
        cy.get('@createUser').then(createUser => {
            expect(createUser.status).to.eq(200);
        })
    })
})