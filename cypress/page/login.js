import locators from "../pageLocators/loginPage.json"
import webActionsObj from "../utility/webactions"
import webasssertObj from "../utility/webassert"
class loginPage{
    get header(){
        return cy.get(locators.heading_h1)
    }
    get username(){
        return cy.get(locators.userName_txt)
    }
    get password(){
        return cy.get(locators.password_txt)
    }
    get loginbtn(){
        return cy.get(locators.login_btn)
    }
    get errorSpan(){
        return cy.get(locators.errSpan)
    }
    assertHEader(value){
        webasssertObj.assertText(this.header,value)
    }
    typeUserName(value){
        webActionsObj.typeText(this.username,value)
    }
    typePassword(value){
        webActionsObj.typeText(this.password,value)
    }
    clickonLoginButton(){
        cy.intercept(Cypress.config().baseUrl+"/**").as('apicallLogin')
        webActionsObj.clickButton(this.loginbtn)
        cy.wait('@apicallLogin').then((res)=>{
            expect(res.state).to.eql('Complete')
        })
    }
    assertErrorSpan(value){
        webasssertObj.assertText(this.errorSpan,value)
    }
}
let loginPageObj=new loginPage()
export default loginPageObj