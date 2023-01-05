Feature: Retrive Quotation and Logout

    @atc-06
    Scenario:verify retrive quotation
        Given I am on retrive location Page
        And I enter Quotation id
        When I click on retrive quotation button
        Then I expect details should be visible

    @atc-07
    Scenario:verify logout functionality
        Given I am on retrive location Page
        And I click on logout button
        Then I expect login button should be visible