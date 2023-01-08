import locators from "../pageLocators/retQuote.json"
import webActionsObj from "../utility/webactions"
import webasssertObj from "../utility/webassert"

class ret {
    get ret_quote_section() {
        return cy.get(locators.ret_quote_section)
    }
    get retbtn() {
        return cy.get(locators.retbtn)
    }
    get reqQuotNumberTxt() {
        return cy.get(locators.retinputbox)
    }
    get retTable() {
        return cy.get(locators.ret_table)
    }
    get logoutBtn() {
        return cy.get(locators.logoutbtn)
    }
    get loginBtn() {
        return cy.get(locators.login_btn)
    }
    clickLogoutbtn() {
        webActionsObj.clickButton(this.logoutBtn)
    }
    assertLoginbtn() {
        webasssertObj.visible(this.loginBtn)
    }
    returnQuoteSec() {
        webActionsObj.clickButton(this.ret_quote_section)
    }
    reqQuotNumber(value) {
        webActionsObj.typeText(this.reqQuotNumberTxt, value)
    }
    retrivebtn() {
        webActionsObj.clickButton(this.retbtn)
    }
    assertRet() {
        webasssertObj.visible(this.retTable)
    }
}

let retriveobj = new ret()
export default retriveobj