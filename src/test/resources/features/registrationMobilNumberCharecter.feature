@US_002
@US02TC03
Feature: US_002 Mobilephone number cannot be of any chars nor spec chars except "-"

  Scenario: US02TC03 user must enter valid data in Mobile Phone Number TextBox using "-" character.
  Given user is on "http://gmibank.com/" page
  And user click on User button
  And user clicks Registration tab
  And click on Mobile Phone Number TexttBox
  And user must type the character "-" when entering a number into the valid Mobile Phone Number TextBox
  Then the user should not see the text "Your mobile phone number is invalid".