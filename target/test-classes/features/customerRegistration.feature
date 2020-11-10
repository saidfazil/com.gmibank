
@US02TC01
  Feature: US_002 Any field on the registration page should not be left blank

  Scenario: US02TC01 user must be registered in Registration tab with current data.
    Given user is on "http://gmibank.com/" page
    And user click on User button
    And user clicks Registration tab
    And click on SSN TextBox
    And user enters a valid SSN number
    And click on First Name TextBox
    And user enters a valid First Name
    And click on Last Name TextBox
    And user enters a valid Last Name
    And click on Address TextBox
    And user enters Valid Address
    And click on Mobile Phone Number TextBox
    And user enters a valid Mobile Phone Number
    And click on Username TextBox
    And user enters Valid Username
    And click on Email TextBox
    And user enters Valid Email
    And click on New password TextBox
    And user enters valid New password
    And Password strength level must be strong
    And click on New password confirmation TextBox
    And user enters valid New password confirmation
    And user clicks the Register button
    Then the user should see the message "Registration saved!"


  @US02TC02
  Feature: US_002 SSN number cannot be of any chars nor spec chars except "-"

  Scenario: US02TC02 user must enter valid data into SSN TextBox using "-" character.
    Given TC02 user is on "http://gmibank.com/" page
    And TC02 user click on User button
    And TC02 user clicks Registration tab
    And TC02 click on SSN TextBox
    And TC02 the user must type the character "-" when entering a number into the current SSN TextBox.
    Then TC02 the user should not see the text "Your SSN is invalid"

  @US02TC03
  Feature: US_002 Mobilephone number cannot be of any chars nor spec chars except "-"

  Scenario: US02TC03 user must enter valid data in Mobile Phone Number TextBox using "-" character.
    Given TC03 user is on "http://gmibank.com/" page
    And TC03 user click on User button
    And TC03 user clicks Registration tab
    And TC03 click on Mobile Phone Number TexttBox
    And TC03 user must type the character "-" when entering a number into the valid Mobile Phone Number TextBox
    Then TC03 the user should not see the text "Your mobile phone number is invalid".

  @US02TC04
  Feature: US_002 email id cannot be created without "@" sign and ".com" extension

  Scenario: US02TC04 user must enter valid data in Email TextBox using "@" character and ".com" expression
    Given TC04 user is on "http://gmibank.com/" page
    And TC04 user click on User button
    And TC04 user clicks Registration tab
    And TC04 click on Mobile Phone Number TextBox
    And TC04 the user is entering a valid Email TextBox. Email Must use " @ " character and ".com" expression in TextBox
    Then TC04 the user should not see the text "This field is invalid"
