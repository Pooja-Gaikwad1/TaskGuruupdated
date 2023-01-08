import { Given, And, When, Then } from "cypress-cucumber-preprocessor/steps"
import retriveobj from "../../../page/ret"
let quotId
before(() => {
    cy.fixture('id').then((data) => {
        quotId = data
    })
})

Given("I am on retrive location Page", () => {
    cy.visit(Cypress.config().baseUrl + '/v1/header.php', { timeout: 50000 })
    retriveobj.returnQuoteSec()
})

And("I enter Quotation id", () => {
    retriveobj.reqQuotNumber(quotId.id)
})

When("I click on retrive quotation button", () => {
    retriveobj.retrivebtn()
})

Then("I expect details should be visible", () => {
    retriveobj.assertRet()
})

And('I click on logout button', () => {
    retriveobj.clickLogoutbtn()
})

Then('I expect login button should be visible', () => {
    retriveobj.assertLoginbtn()
})