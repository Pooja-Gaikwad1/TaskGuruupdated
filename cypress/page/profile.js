
import locators from "../pageLocators/profile.json"
import webActionsObj from "../utility/webactions"
import webasssertObj from "../utility/webassert"

class profilePage {
    get profile_section() {
        return cy.get(locators.profile_section)
    }
    get title() {
        return cy.get(locators.title)
    }
    get firstName() {
        return cy.get(locators.firstName)
    }
    get surName() {
        return cy.get(locators.surName)
    }
    get phone() {
        return cy.get(locators.phone)
    }
    get DOB() {
        return cy.get(locators.DOB)
    }
    get lType() {
        return cy.get(locators.l_Type)
    }
    get lPeriod() {
        return cy.get(locators.l_Period)
    }
    get occupation() {
        return cy.get(locators.occupation)
    }
    get dHistory() {
        return cy.get(locators.driver_History)
    }
    get address_street() {
        return cy.get(locators.address)
    }
    clickProfileBtn() {
        webActionsObj.clickButtonforce(this.profile_section)
    }
    titleBox() {
        webasssertObj.filledTextBox(this.title)
    }
    firstNameBox() {
        webasssertObj.filledTextBox(this.firstName)
    }
    surNameBox() {
        webasssertObj.filledTextBox(this.surName)
    }
    phoneBox() {
        webasssertObj.filledTextBox(this.phone)
    }
    dobBox() {
        webasssertObj.filledTextBox(this.DOB)
    }
    licenceTypeBox() {
        webasssertObj.filledTextBox(this.lType)
    }
    licencePeriodBox() {
        webasssertObj.filledTextBox(this.lPeriod)
    }
    occupationBox() {
        webasssertObj.filledTextBox(this.occupation)
    }
    driverHistoryBox() {
        webasssertObj.filledTextBox(this.dHistory)
    }
    addressBox() {
        webasssertObj.filledTextBox(this.address_street)
    }

}
let profilePageObj = new profilePage()
export default profilePageObj