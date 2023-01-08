import { Given, And, When, Then } from 'cypress-cucumber-preprocessor/steps'
import loginPageObj from "../../../page/login"
import webasssertObj from "../../../utility/webassert"
let cred
before(() => {
    cy.fixture('loginData').then((data) => {
        cred = data
    })
})

Given("I visit Login Page", () => {
    cy.visit(Cypress.config().baseUrl + "/v1/index.php")
})

And("I Enter invalid email ID", () => {
    loginPageObj.typeUserName(cred.invalid.emailID)
})

And("I Enter email ID", function () {
    loginPageObj.typeUserName(cred.valid.emailID)
})

And("I Enter Password", () => {
    loginPageObj.typePassword(cred.valid.password)
})

When("I click on Login Button", () => {
    loginPageObj.clickonLoginButton()
})

Then("error message should be displayed", () => {
    loginPageObj.assertErrorSpan(cred.invalid.errSpan)
})

Then('I am on Dashboard Page', () => {
    webasssertObj.assertUrl('header')
})