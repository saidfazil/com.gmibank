@US_002
@US02TC02

Feature: US_002 SSN number cannot be of any chars nor spec chars except "-"

  Scenario: US02TC02 user must enter valid data into SSN TextBox using "-" character.
    Given user is on "http://gmibank.com/" page
    And user click on User button
    And user clicks Registration tab
    And click on SSN TextBox
    And the user must type the character "-" when entering a number into the current SSN TextBox.
    Then the user should not see the text "Your SSN is invalid"