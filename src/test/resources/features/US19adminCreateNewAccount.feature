@US19
Feature: System should allow Admin to create a new Account
  Background:
    Given gmibank.com address goes
    And enter a clicks dropdown menu
    And sign in click
    And the username enters
    And the user password enters u
    And user clicks sign in button
    And click the `` My Operations '' drop-down menu at one click.
    And Managing Accounts is safe

  @US19TC01
    Scenario: The New Account.

   Then create new account



  @US19TC02
  Scenario: User should provide a balance for the first time account creation as Dollar
    Then create new account

   @US19TC03
   Scenario: User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING
     Then create new account



     @US19TC04
     Scenario:Account status should be defined as ACTIVE, SUSPENDED or CLOSED
       Then create new account




      @US19TC05
      Scenario: User can select an employee from the drop-down
        Then create new account

    Then User Employee clicks dropdown

















