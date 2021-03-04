describe('All API tests', () => {

    Cypress.config('baseUrl', 'https://reqres.in/api')

    it('GET 1', () => {

        cy.request('GET', '/users?page=2')
            .then((response) => {
                expect(response).to.have.property('status', 200);
                expect(response.status).to.equal(200);
                expect(response.body).not.to.be.null;
                expect(response.body).to.have.property('page',2);
                expect(response.body.data).to.have.length(6)
            })
    })

    it('GET 2', () => {
        cy.request('GET', '/users?page=2').as('user_list');

        cy.get('@user_list')
        .should((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('page',2);
            expect(response.body.data).to.have.length(6)
        })

    })

    it('GET 3', () => {

        cy.request({
            'method' : 'GET',
            'url' : '/users?page=2',
            // headers: {
            //     '' : ''
            // },
            // auth: {


            // }
        })
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
            expect(response.body).to.have.property('page',2);
            expect(response.body.data).to.have.length(6)
        })
    })


    it('POST 1', () => {

        cy.request({
            'method' : 'POST',
            'url' : '/users',
            body: {
                "name": "Raghav",
                "job": "Teacher"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status', 201);
            expect(response.status).to.equal(201);
            expect(response.body).not.to.be.null;
        })
    })


    it('PUT 1', () => {

        cy.request({
            'method' : 'PUT',
            'url' : '/users/2',
            body: {
                "name": "John",
                "job": "Engineer"
            }
        })
        .then((response) => {
            expect(response).to.have.property('status', 200);
            expect(response.status).to.equal(200);
            expect(response.body).not.to.be.null;
        })
    })



    it('DELETE 1', () => {

        cy.request({
            'method' : 'DELETE',
            'url' : '/users/2'
        })
        .then((response) => {
            expect(response).to.have.property('status', 204);
            expect(response.status).to.equal(204);
            expect(response.body).not.to.be.null;
        })
    })

})