@US005
  Feature: User cannot login with invalid username validating the error message
    Background: User is the GmiBank login page
      Given user is on “https://gmibank.com/login” page.
@US005TC01
  Scenario: US005TC01 User wants to login with invalid username on Sign In.

    And the user clicks on Username.
    And the user enters the wrong Username
    And the user clicks on Password..
    And the user enters the correct Password.
    And the user clicks on Sign in .
    Then the error message on the screen is confirmed.
    @US005TC02
    Scenario: US005TC02 User wants to login with invalid username on Sign In.

      And the user clicks on Username.
      And the user enters the correct Username
      And the user clicks on Password..
      And the user enters the wrong Password.
      And the user clicks on Sign in .
      Then the error message on the screen is confirmed.
@US005TC03
    Scenario: US005TC03 User wants to login with invalid username on Sign In.
      And the user clicks on Username.
      And the user enters the wrong Username
      And the user clicks on Password..
      And the user enters the wrong Password.
      And the user clicks on Sign in .
      Then the error message on the screen is confirmed.