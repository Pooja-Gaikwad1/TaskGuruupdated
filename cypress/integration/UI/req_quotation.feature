Feature: Request Quotation

    @atc-03
    Scenario:Verify calculate Quotation
        Given I am on Request Quotation Page
        And I Fill up all details in form
        When I click on Calculate Button
        Then Percentage Text appear on UI

    @atc-04
    Scenario:verify SaveFunctionality
        And I click on Save Button
    
    @atc-05
    Scenario:verify reset quotation
        Given I am on Request Quotation Page
        And I Fill up all details in form
        And I click on reset button
        And I expect all inputbox should be empty
