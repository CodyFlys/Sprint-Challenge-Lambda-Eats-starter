describe('My First Test', function () {
    it ('Tests for all working functions required per test', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.input_name').type("NAME")
        cy.get('[type="checkbox"]').check().should('be.checked')
    })

    it ('ensures submit button is working and clicks it so the data can posted.', function () {
        cy.visit('http://localhost:3000/pizza')
        cy.get('.submit').click().should("not.be.disabled")
    })
})