@US13
Feature: An Employee can create a new Account

  @US13TC01
  Scenario:User should create a description for the new account and it cannot be blank
    Given Go to gmibank.com home page
    And Click to User Account Menu and Click to Sign In
    And Enter the username with valid credentail
    And Enter the pasword with valid credentail
    And Click to Sign in button
    And Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account
    And Click to Descriptions TextBox
    And Click to Employee Dropdown
    Then Should be that message -This field is required.

  @US13TC02
  Scenario:User should provide a balance for the first time account creation as Dollar
    And Enter a number be dollar to Balance textbox
    Then User Shouldn't be error message

  @US13TC03
  Scenario:User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING
    Then User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING

  @US13TC04
  Scenario:Account status should be defined as ACTIVE, SUSPENDED or CLOSED
    Then Account status should be defined as ACTIVE, SUSPENDED or CLOSED

  @US13TC05
  Scenario:User can select an employee from the drop-down
    Then User can select an employee from the drop-down






