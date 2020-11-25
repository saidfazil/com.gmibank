@US06
Feature:User info segment (User Settings) should be editable on Homepage
  Background:
    Given Go to "http://gmibank.com/" link
    And Click to User drop down menu
    And Click to Sign in
    And Enter the username with valid credentials
    And Enter the password with valid credentials
    And Click to Sign in button
    And Click to User drop down menu
    And Click to User info

  @US06TC01
  Scenario: There should be user info being populated when navigating to user info "firstName, lastName email and language"
    And Assert that First Name is not empty.
    And Assert that Last Name is not empty.
    And Assert that Email is not empty.

  @US06TC02
  Scenario: There should be 2 languages available "English and Turkish"
    And Assert that Language dropdown is have English.
    And Assert that Language dropdown is have Turkish.

  @US06TC03
  Scenario: There should be an option to update firstName
    And Update to First Name

  @US06TC04
  Scenario: There should be an option to update lastName
    And Update to Last Name

  @US06TC05
  Scenario: There should be an option to update email id adding "@" sign and ".com" extension
    And Update to Email
    And Assert that Email is contain mailContains
    And Click to Save button
    Then Assert that visible text saveAlertText.