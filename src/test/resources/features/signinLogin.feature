@US005
  Feature: User cannot login with invalid username validating the error message
Scenario: US005TC01 User wants to login with invalid username on Sign In.
Given user is on “https://gmibank.com/login” page.
And the user clicks on Username.
And the user enters the wrong Username
And the user clicks on Password..
And the user enters the correct Password.
And the user clicks on Sign in .
Then the error message on the screen is confirmed.