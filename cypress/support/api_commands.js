const accessToken = `Bearer ${Cypress.env('access_token')}`

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

Cypress.Commands.add('api_postAllProducts', product => {
    cy.request({
        method: 'POST',
        url: '/produtos',
        body: {
            nome: product.nome,
            preco: product.preco,
            descricao: product.descricao,
            quantidade: product.quantidade,
        },
        headers: { Authorization: accessToken },
    })
})

Cypress.Commands.add('api_SearchProcuct', product => {
    cy.api_postAllProducts(product)
        .then(res => {
            cy.request({
                method: 'GET',
                url: `/produtos/${res.body._id}`,
                body: {
                    headers: { Authorization: accessToken },
                }
            })
        })
})