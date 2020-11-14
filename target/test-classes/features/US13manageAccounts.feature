@US13
Feature: An Employee can create a new Account

  @US13TC01
  Scenario:User should create a description for the new account and it cannot be blank
    Given Go to gmibank.com home page
    And Click to User Account drop down menu and Click to Sign In
    And Enter the username with valid credentail
    And Enter the pasword with valid credentail
    And Click to Sign in button
    And Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account
    And Don't enter a text to descriptions and fill other all informations
    And Click to Save button in the createAccount Page
    Then Should be that message -This field is required.
    And  Enter a text to Descriptions TextBox
    Then Shouldn't be error message

  @US13TC02
  Scenario:User should provide a balance for the first time account creation as Dollar
    And Click to Create New Account
    And Enter a text to descriptions textbox
    And Enter a number be dollar to Balance textbox
    Then User should provide a balance for the first time account creation as Dollar





