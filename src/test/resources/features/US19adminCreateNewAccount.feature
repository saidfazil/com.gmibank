@US19
Feature: System should allow Admin to create a new Account

  @US19TC01
    Scenario: The New Account.
    Given gmibank.com address goes
    And enter a clicks dropdown menu
    And sign in
    And the username enters i
    And the user password enters u
    And user clicks sign in button
    And click the `` My Operations '' drop-down menu at one click.
    And Managing Accounts is safe
    And create a new Account and more
    Then The User Descrition field is clicked but left blank.
    Then hen the user enters a number in the 'Banalce' field
    Then hen clicks Account Type dropdown
    Then hen clicks Account Status Type dropdown
    Then hen User Employee clicks dropdown
    Then hen clicks Save button.

  @US19TC02
  Scenario: User should provide a balance for the first time account creation as Dollar
    Given The User sign out
    Given gmibank.com address goes
    And enter a clicks dropdown menu
    And sign in
    And the username enters i
    And the user password enters u
    And user clicks sign in button
    And click the My Operations drop-down menu at one click.
    And Managing Accounts is safe
    And create a new Account and more
    Then The User Descrition field is clicked but left blank.
    Then hen the user enters a number in the 'Banalce' field
    Then hen clicks Account Type dropdown
    Then hen clicks Account Status Type dropdown
    Then hen User Employee clicks dropdown
    Then hen clicks Save button.
   @US19TC03
   Scenario: User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING
     Given The User sign out
     Given gmibank.com address goes
     And enter a clicks dropdown menu
     And sign in
     And the username enters i
     And the user password enters u
     And user clicks sign in button
     And click the 'My Operations' dropdown menu at one click.
     And Managing Accounts is safe
     And create a new Account and more
     Then Click User Account Status Type dropdown
     Then confirms that the "Checking" option can be selected from the drop down select menu
     Then confirms that the "Saving" option can be selected from the select menu that opens.
     Then it verifies that the "Credit_Card" option is selectable from the select menu that opens.
     Then confirms that the "Investing" option can be selected from the opened seleck menu.

     @US19TC04
     Scenario:Account status should be defined as ACTIVE, SUSPENDED or CLOSED
       Given The User sign out
       Given gmibank.com address goes
       And enter a clicks dropdown menu
       And sign in
       And the username enters i
       And the user password enters u
       And user clicks sign in button
       And click the 'My Operations' droppdown menu at one click.
       Then An Account Type dropdown menu
       Then confirms that the "Suespended" option is selectable from the select menu that opens.
       Then confirm that the "Off" option is selectable from the drop-down menu.


      @US19TC05
      Scenario: User can select an employee from the drop-down
    Given The User sign out
    Given gmibank.com address goes
    And enter a clicks dropdown menu
    And sign in
    And the username enters i
    And the user password enters u
    And user clicks sign in button
    And click the 'MyOperations' dropdown menu att one click.
    Then User Employee clicks dropdown
    Then confirms that an employee can be selected from the select drop-down menu.
















