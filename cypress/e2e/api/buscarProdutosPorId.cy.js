import { faker } from '@faker-js/faker'

describe('api_SearchProcuct', () => {

    const product = {
        nome: `nome-item-${faker.person.fullName()}`,
        preco: 5,
        descricao: `descricao-item-${faker.person.fullName()}`,
        quantidade: faker.number.int(3)
    }


    beforeEach(() => cy.api_getAllProducts(product))

    it('successfully', () => {
        cy.api_SearchProcuct(product)
            .then(res => {
                expect(res.status).to.equal(200)
            })
    })
})
