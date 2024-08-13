describe('api_getAllProducts', () => {

    it('successfully', () => {
       cy.api_getAllProducts()
            .then(res => {
                expect(res.status).to.equal(200)
                console.log(res)
            })
    })
})
