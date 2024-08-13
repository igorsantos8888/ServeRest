import { faker } from '@faker-js/faker'

describe('api_getAllProducts', () => {
   /*  beforeEach(() => cy.login()) */

    it('successfully', () => {
        const product = {
            nome: `nome-item-${faker.person.fullName()}`,
            preco: 3,
            descricao: `descricao-item-${faker.person.fullName()}`,
            quantidade: faker.number.int(3)
        }

        console.log(product)

        cy.api_postAllProducts(product)
            .then(res => {
                expect(res.status).to.equal(201)
            })
    })
})


