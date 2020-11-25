@US19
Feature: System should allow Admin to create a new Account
  @US19TC01
    Scenario: Could not login to manage account with admin username and password.
    Given gmibank.com address goes
    And enter a clicks dropdown menu
    And sign in click
    And the username enters
    And the user password enters u
    And user clicks sign in button
    And click the `` My Operations '' drop-down menu at one click.
    And Managing Accounts is safe
    Then create new account



