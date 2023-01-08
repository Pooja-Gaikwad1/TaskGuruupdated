Feature: profile Page

    # On profile webpage there is no any profile data visible so this scenario getting failed
    # because fields are empty
    @atc-08
    Scenario: Verify profile page
        Given I am on profile Page
        And I see user title on the Page
        And I see user firstName on the Page
        And I see user surName on the Page
        And I see user phone on the Page
        And I see user DOB on the Page
        And I see user licence type on the Page
        And I see user licence period on the Page
        And I see user occupation on the Page
        And I see user driver history on the Page
        And I see user address on the Page
