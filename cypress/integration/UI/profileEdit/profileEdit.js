import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import profileEditPageObj from "../../../page/profileEdit"

let updateTestData
before(()=>{
    cy.fixture('profileEdit').then((data)=>{
        updateTestData=data
    })
    cy.viewport(1920,1080)
})
Given("I am on edit profile Page",()=>{
    cy.visit(Cypress.config().baseUrl+'/v1/header.php',{timeout:50000})
    profileEditPageObj.clickEditProfileBtn()
})

And("I enter updating user details",()=>{
    profileEditPageObj.userSurnameValue(updateTestData.userSurname)
    profileEditPageObj.userFirstnameValue(updateTestData.user_Firstname)
    profileEditPageObj.phoneValue(updateTestData.phone)
    profileEditPageObj.cityValue(updateTestData.city)
    profileEditPageObj.countryValue(updateTestData.country)
    profileEditPageObj.postCodeValue(updateTestData.postCode)

})

And ("click on update user button",()=>{
    profileEditPageObj.clickUpdateProfileBtn()
})

Then ("update user button should be not visible",()=>{
    profileEditPageObj.UpdateProfileBtnVisibility()
})
