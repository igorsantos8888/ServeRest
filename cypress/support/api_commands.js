Cypress.Commands.add('login', user => {
    cy.request({
        method: 'POST',
        url: '/login',
        body: {
            email: user.userEmail,
            password: user.userPassword,
        }
    })
})


Cypress.Commands.add('api_getAllProducts', () => {
    cy.request({
        method: 'GET',
        url: '/produtos'
    })
})