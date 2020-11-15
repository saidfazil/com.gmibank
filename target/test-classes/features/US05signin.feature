
@US005
Feature: User cannot login with invalid username validating the error message
  @US005TC01
  Scenario:  User wants to login with invalid username on Sign In.
    Given user is on “https://gmibank.com/login” page.
    And the user clicks on Username.
    And the user enters the wrong Username
    And the user clicks on Password..
    And the user enters the correct Password.
    And the user clicks on Sign in .
    Then the error message on the screen is confirmed.

  @US005TC02
  Scenario:User wants to login with valid username , invalid password, at Login"
    Given user go to https://gmibank.com/login .
    And the user clickson Username.
    And the user enters the correct Username
    And the user clickson Password..
    And the user enters the wrong Password.
    And the user click on Sign in.
    Then the error message onthe screen is confirmed .

  @US005TC03
  Scenario:  User wants to login with invalid username and invalid password at Login
    Given user is on “https://gmipank.com/login” page.
    And the user click on Username.
    And the users enter wrong username
    And the user click on Password.
    And the user enters the wronk Password..
    And the user clic on sign in.
    Then the error mesage on the screeen is confirmed.
  @US005TC04
  Scenario:  User wants to login with invalid username or invalid password on Sign In.
    Given user is on “https://gmibank.com/login” page.
    And the user clikon Username.
    And the user enters the invalid Username
    And the user clics on Password..
    And the user enters the invalid Password.
    And the user clicon Sign in .
    And the error message on the screeen is confirmed.
    And If you get an error message, click the Forgot your password link.
    Then verify the message on the visited page
  @US005TC05
  Scenario:  User wants to login with invalid username or invalid password Sign In, Register a new account
    Given user is on “https://gmibank.com/login” page.
    And the user clicon username.
    And the user enters the wrong username
    And the user clcks on Password..
    And the user enter the wrong Password.
    And the user clics on Sign in .
    And the error message on the skreen is confirmed.
    And If you get an error message, click the You don't have an account yet? Register a new account
    Then verify the message onthe visited page
  @US005TC06
  Scenario: US005TC06 Error message on blank screen when user signing in login page
    Given user is on “https://gmibank.com/login” page.
    And the users cliks on Username.
    And the users enter the wrong Username
    And the users cliks on Password..
    And thee users enter thee wrong Password.
    And the users clikson Sign in .
    And the eror messaage onthe screeen is confirmed.
    And User clicks cancel after error message
    And If the user gets the error message, a bug has been found.



