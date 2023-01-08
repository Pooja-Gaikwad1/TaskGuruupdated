import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import profilePageObj from "../../../page/profile"

before(()=>{
    
    cy.viewport(1920,1080)
})
Given("I am on profile Page",function(){
    cy.visit(Cypress.config().baseUrl+'/v1/header.php',{timeout:50000})
    profilePageObj.clickProfileBtn()
})

And ("I see user title on the Page",()=>{
    profilePageObj.titleBox()
})
And ("I see user firstName on the Page",()=>{
    profilePageObj.firstNameBox()
})
And ("I see user surName on the Page",()=>{
    profilePageObj.surNameBox()
})
And ("I see user phone on the Page",()=>{
    profilePageObj.phoneBox()
})
And ("I see user DOB on the Page",()=>{
    profilePageObj.dobBox()
})
And ("I see user licence type on the Page",()=>{
    profilePageObj.licenceTypeBox()
})
And ("I see user licence period on the Page",()=>{
    profilePageObj.licencePeriodBox()
})
And ("I see user occupation on the Page",()=>{
    profilePageObj.occupationBox()
})
And ("I see user driver history on the Page",()=>{
    profilePageObj.driverHistoryBox()
})
And ("I see user address on the Page",()=>{
    profilePageObj.addressBox()
})
