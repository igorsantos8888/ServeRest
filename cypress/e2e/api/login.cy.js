describe('login', () => {
    it('successfully', () => {
        const userEmail = Cypress.env('user_email')
        const userPassword = Cypress.env('user_password')

        const user = {
            userEmail: userEmail,
            userPassword: userPassword
        }
        cy.login(user)
            .then(res => {
                expect(res.status).to.equal(200)
            })
        console.log(user)
    })

})
