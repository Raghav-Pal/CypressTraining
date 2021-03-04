import { LoginPage } from '../pages/login_page'

before(function(){
    cy.log(' I am outside all describe blocks ')
})

describe('All login tests', function () {

    let loginPage = new LoginPage()

    beforeEach(function(){
        loginPage.navigate('https://trytestingthis.netlify.app/')
    })

    it.only('login test - valid creds', () => {
        loginPage.loginWithValidCredentials('test', 'test')
    })

    it('login test - invalid creds', () => {
        loginPage.loginWithInvalidCredentials('abc', '123')
    })

})
