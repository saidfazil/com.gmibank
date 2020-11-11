
Feature:US_002 SSN, Mobil Phone, Email Charecter Control test

  @US02TC02
  Scenario: US02TC02 user must enter valid data into SSN TextBox using "-" character.
    Given SSN user is on "http://gmibank.com/" page
    And SSN user click on User button
    And SSN user clicks Registration tab
    And SSN click on SSN TextBox
    And SSN the user must type the character "-" when entering a number into the current SSN TextBox.
    Then SSN the user should not see the text "Your SSN is invalid"


  @US02TC03
  Scenario: US02TC03 user must enter valid data in Mobile Phone Number TextBox using "-" character.
    Given MPhone user is on "http://gmibank.com/" page
    And MPhone user click on User button
    And MPhone user clicks Registration tab
    And MPhone click on Mobile Phone Number TexttBox
    And MPhone user must type the character "-" when entering a number into the valid Mobile Phone Number TextBox
    Then MPhone the user should not see the text "Your mobile phone number is invalid".

  @US02TC04
  Scenario: US02TC04 user must enter valid data in Email TextBox using "@" character and ".com" expression
    Given Email user is on "http://gmibank.com/" page
    And Email user click on User button
    And Email user clicks Registration tab
    And Email click on Email TextBox
    And Email the user is entering a valid Email TextBox. Email Must use " @ " character and ".com" expression in TextBox
    Then Email the user should not see the text "This field is invalid".