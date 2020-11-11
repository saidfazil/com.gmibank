Feature:User info segment (User Settings) should be editable on Homepage
  @US06TC01
  Scenario: There should be user info being populated when navigating to user info "firstname, lastname email and language"
    Given Go to "https://gmibank.com/" link
    And Click to User drop down menu
    And Click to Sign in
    And Enter the username with valid credentails
    And Enter the password with valid credentails
    And Click to Sign in button
    And Click to User drop down menu
    And Click to User info
    And Assert that First Name is not empty.
    And Assert that Last Name is not empty.
    And Assert that Email is not empty.

  @US06TC02
  Scenario: There should be 2 languages available "English and Turkish"
    And Assert that Language dropdown is have English.
    And Assert that Language dropdown is have Türkçe.

  @US06TC03
  Scenario: There should be an option to update firstname
    And Update to First Name
    And Click to Save button
    Then Assert that visible text saveAlertText.









