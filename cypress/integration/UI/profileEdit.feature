Feature: Edit profile Page

    # On profile webpage there is no any profile data visible so this scenario getting failed
    # because fields are empty
    @atc-09
    Scenario: Verify  Edit profile page
        Given I am on edit profile Page
        And I enter updating user details
        And click on update user button
        Then update user button should be not visible