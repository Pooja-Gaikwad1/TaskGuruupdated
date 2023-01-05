Feature: Login Page

    Feature Description
@atc-01
Scenario: Verify login failure Functionality
    Given I visit Login Page
    And I Enter invalid email ID
    And I Enter Password
    When I click on Login Button
    Then error message should be displayed

@atc-02
Scenario: Verify login Success Functionality
    Given I visit Login Page
    And I Enter email ID
    And I Enter Password
    When I click on Login Button
    Then I am on Dashboard Page
