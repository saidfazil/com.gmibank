@US02
Feature:US_002 SSN, Mobil Phone, Email Charecter Control test
  Background: All character tests common links

    Given user is on "http://gmibank.com/" page
    And user click on User button
    And user clicks Registration tab

  @US02TC02
  Scenario: US02TC02 user must enter valid data into SSN TextBox using "-" character.

    And new click on SSN TextBox
    And the user must type the character "-" when entering a number into the current SSN TextBox.
    Then ssn the user should not see the text "Your SSN is invalid"


  @US02TC03
  Scenario: US02TC03 user must enter valid data in Mobile Phone Number TextBox using "-" character.

    And new click on Mobile Phone Number TexttBox
    And user must type the character "-" when entering a number into the valid Mobile Phone Number TextBox
    Then mobil the user should not see the text "Your mobile phone number is invalid".

  @US02TC04
  Scenario: US02TC04 user must enter valid data in Email TextBox using "@" character and ".com" expression

    And new click on Email TextBox
    And the user is entering a valid Email TextBox. Email Must use " @ " character and ".com" expression in TextBox
    Then email the user should not see the text "This field is invalid".