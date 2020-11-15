@US02TC01AllTest
@US02TC01
  Feature: US_002 Any field on the registration page should not be left blank
    Background: All custumer registration tests common links
      Given user is on "http://gmibank.com/" page
      And user click on User button
      And user clicks Registration tab

  Scenario: US02TC01 user must be registered in Registration tab with current data.

    And click on SSN TextBox
    And user enters a invalid SSN number
    And click on First Name TextBox
    And user enters a invalid First Name
    And click on Last Name TextBox
    And user enters a invalid Last Name
    And click on Address TextBox
    And user enters invalid Address

  @US02TC01_A
  Scenario: US02TC01 Part2 user must be registered in Registration tab with current data.

    And click on Mobile Phone Number TextBox
    And user enters a invalid Mobile Phone Number
    And click on Username TextBox
    And user enters invalid Username
    And click on Email TextBox
    And user on null Email TextBox
    And user enters invalid Email
    And click on New password TextBox
    And user on null New password TextBox
    And user enters invalid New password
    And Password strength level must be strong
    And click on New password confirmation TextBox
    And user on null New password confirmation TextBox
    And user enters invalid New password confirmation
    Then user clicks the Register button




