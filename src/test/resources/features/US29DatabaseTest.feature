@US29

Feature: Validate all data performing database testing using the port and following credentials
  Background:
    Given The user connects to the JDBC with the admin and password given to her

  @US29TC01
  Scenario: All users' info (user, employee, manager and admin) should be retrieved by database and validated
    Then All users' info (user, employee, manager and admin) should be retrieved by database and validated

  @US29TC02
  Scenario: All countries' info should be retrieved by database and validated
    Then All countries' info should be retrieved by database and validated

  @US29TC03
  Scenario: All states should related to USA should be  retrieved by database and validated
    Then All states should related to USA should be  retrieved by database and validated
