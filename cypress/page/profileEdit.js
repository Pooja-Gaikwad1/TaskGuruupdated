import locators from "../pageLocators/profileEdit.json"
import webActionsObj from "../utility/webactions"
import webasssertObj from "../utility/webassert"

class profileEditPage {
    get edit_Profile() {
        return cy.get(locators.edit_Profile)
    }
    get userSurname() {
        return cy.get(locators.userSurname)
    }
    get user_Firstname() {
        return cy.get(locators.user_Firstname)
    }
    get phone() {
        return cy.get(locators.phone)
    }
    get city() {
        return cy.get(locators.city)
    }
    get country() {
        return cy.get(locators.country)
    }
    get postCode() {
        return cy.get(locators.postCode)
    }
    get updateUserBtn() {
        return cy.get(locators.updateUserBtn)
    }

    clickEditProfileBtn() {
        webActionsObj.clickButtonforce(this.edit_Profile)
    }
    userSurnameValue(value) {
        webActionsObj.typeText(this.userSurname, value)
    }
    userFirstnameValue(value) {
        webActionsObj.typeText(this.user_Firstname, value)
    }
    phoneValue(value) {
        webActionsObj.typeText(this.phone, value)
    }
    cityValue(value) {
        webActionsObj.typeText(this.city, value)
    }
    countryValue(value) {
        webActionsObj.typeText(this.country, value)
    }
    postCodeValue(value) {
        webActionsObj.typeText(this.postCode, value)
    }
    clickUpdateProfileBtn() {
        webActionsObj.clickButtonforce(this.updateUserBtn)
    }
    UpdateProfileBtnVisibility() {
        webasssertObj.notVisible(this.updateUserBtn)
    }
    
}
let profileEditPageObj = new profileEditPage()
export default profileEditPageObj