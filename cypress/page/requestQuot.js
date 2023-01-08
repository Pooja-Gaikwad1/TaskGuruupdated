import locators from "../pageLocators/reqQuot.json"
import webActionsObj from "../utility/webactions"
import webasssertObj from "../utility/webassert"

class reqQuote {
    get clcikRequQuot() {
        return cy.get(locators.reqQuotation_section)
    }
    get breakdowncover_dropdown() {
        return cy.get(locators.breakdowncover_dropdown)
    }
    get quotation_radio() {
        return cy.get(locators.quotation_radio)
    }
    get incident_input() {
        return cy.get(locators.incident_input)
    }
    get registrtion() {
        return cy.get(locators.registrtion)
    }
    get mileage() {
        return cy.get(locators.mileage)
    }
    get estimate_value() {
        return cy.get(locators.estimate_value)
    }
    get parking_location() {
        return cy.get(locators.parking_location)
    }
    get SOP_year() {
        return cy.get(locators.SOP_year)
    }
    get SOP_month() {
        return cy.get(locators.SOP_month)
    }
    get SOP_date() {
        return cy.get(locators.SOP_date)
    }
    get calculateButton() {
        return cy.get(locators.calculate_btn)
    }
    get calculatePremium() {
        return cy.get(locators.calculatePremium)
    }
    get resetbtn() {
        return cy.get(locators.resetbtn)
    }
    get savebtn() {
        return cy.get(locators.saveQTNbtn)
    }
    breakdowncoverDropdown(value) {
        webActionsObj.dropdown(this.breakdowncover_dropdown, value)
    }
    quotationRadio(value) {
        webActionsObj.checkbox(this.quotation_radio, value)
    }
    incidentInput(value) {
        webActionsObj.typeText(this.incident_input, value)
    }
    registrtionTxt(value) {
        webActionsObj.typeText(this.registrtion, value)
    }
    mileagetxt(value) {
        webActionsObj.typeText(this.mileage, value)
    }
    estimateValue(value) {
        webActionsObj.typeText(this.estimate_value, value)
    }
    parking_locationDrop(value) {
        webActionsObj.dropdown(this.parking_location, value)
    }
    SOP_yearDrop(value) {
        webActionsObj.dropdown(this.SOP_year, value)
    }
    SOP_monthdrop(value) {
        webActionsObj.dropdown(this.SOP_month, value)
    }
    SOP_dateDrop(value) {
        webActionsObj.dropdown(this.SOP_date, value)
    }
    calculateBtn() {
        webActionsObj.clickButtonforce(this.calculateButton)
    }
    clcikRequQuotE() {
        this.clcikRequQuot.scrollIntoView()
        webActionsObj.clickButton(this.clcikRequQuot)
    }
    calculatePremiumAssert() {
        webasssertObj.visible(this.calculatePremium)
    }
    clickresetbtn() {
        webActionsObj.clickButton(this.resetbtn)
    }
    assertEmptyFields() {
        webasssertObj.emptyTextBox(this.incident_input)
        webasssertObj.emptyTextBox(this.registrtion)
        webasssertObj.emptyTextBox(this.mileage)
        webasssertObj.emptyTextBox(this.estimate_value)
    }
    saveQTNbtn(id) {
        cy.intercept('https://demo.guru99.com/insurance/v1/new_quotation.php').as('savebtnapi')
        webActionsObj.clickButton(this.savebtn)
        cy.wait('@savebtnapi').then(function ({ response }) {
            return response.body.match(new RegExp('\[0-9]+'))[0]
        }).then(function (el) {
            id = { 'id': el }
            cy.writeFile('cypress/fixtures/id.json', id)
        })

    }
}
let reqQuotObj = new reqQuote()
export default reqQuotObj