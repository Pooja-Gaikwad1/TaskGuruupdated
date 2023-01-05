import {Given,And,When,Then} from "cypress-cucumber-preprocessor/steps"
import reqQuotObj from "../../../page/requestQuot"
let id
let testData
before(()=>{
    cy.fixture('requestQuot').then((data)=>{
        testData=data
    })
    cy.viewport(1920,1080)
})
Given("I am on Request Quotation Page",function(){
    cy.visit(Cypress.config().baseUrl+'/v1/header.php',{timeout:50000})
    reqQuotObj.clcikRequQuotE()
})
And("I Fill up all details in form",function(){
    reqQuotObj.breakdowncoverDropdown(testData.breakdowncover)
    reqQuotObj.quotationRadio(testData.checkvalue)
    reqQuotObj.incidentInput(testData.inccident)
    reqQuotObj.registrtionTxt(testData.registration)
    reqQuotObj.mileagetxt(testData.annual_mileage)
    reqQuotObj.estimateValue(testData.estimated_value)
    reqQuotObj.parking_locationDrop(testData.parking_location)
    reqQuotObj.SOP_yearDrop(testData.SOP_year)
    reqQuotObj.SOP_monthdrop(testData.SOP_month)
    reqQuotObj.SOP_dateDrop(testData.SOP_date)
})
When("I click on Calculate Button",function(){
    reqQuotObj.calculateBtn()
})
Then("Percentage Text appear on UI",function(){
    reqQuotObj.calculatePremiumAssert()
})
And('I click on reset button',()=>{
    reqQuotObj.clickresetbtn()

})
And('I expect all inputbox should be empty',()=>{
    reqQuotObj.assertEmptyFields()
})
And("I click on Save Button",()=>{
    reqQuotObj.saveQTNbtn(id)
    cy.log(id)
})