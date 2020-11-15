@US07
Feature:System should not allow to make updates with invalid credentials.
  @US07TC01
  Scenario: Email id cannot contain just digits or chars without "@" sign or ".com" extension
    Given Go to "https://gmibank.com/" link
    And Click to User drop down menu
    And Click to Sign in
    And Enter the username with valid credentails
    And Enter the password with valid credentails
    And Click to Sign in button
    And Click to User drop down menu
    And Click to User info
    And Update to Email with invalid credential without special characters.
    And Click to Save button
    Then Assert that visible text invalidField.

  @US07TC02
  Scenario: There should not be an option of any other language other than English or Turkish
    And Assert that Language dropdown is have English.
    And Assert that Language dropdown is have Türkçe.
    And Assert that Language dropdown is not have other languages

