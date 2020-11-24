@US017

Feature: Admin all role activation

  Background: User common uses
    Scenario Outline: User common uses
    Given user is on "http://gmibank.com/" page.
    And user click on User Button
    And user click on Sign in menu
    And user enters "<username>" and "<password>"
    And user click on Sign in button
    And user click on the  Administration menu
    And user click on the User Management putton
      Examples:
      | username   |  password|
      | Selim      |  SelimA? |


  @US017TC01
  Scenario: US017TC01 Admin can activate a role as user
    Given user click on the Edit putton TCOne
    And user should be able to assign Role as User from Profiles dropdown
    And user click on the Save button
    Then Confirmation user message should be displayed

  @US017TC02
  Scenario: US017TC02 Admin can activate a role as employee
    Given user click on the Edit putton TCtwo
    And user should be able to assign Role as Employee from Profiles dropdown
    And user click on the Save button2
    Then Confirmation employee message should be displayed

  @US017TC03
  Scenario: US017TC03 Admin can activate a role as manager
    Given user click on the Edit putton TCthree
    And user should be able to assign Role as Maneger from Profiles dropdown
    And user click on the Save button3
    Then Confirmation manager message should be displayed

  @US017TC04
  Scenario: US017TC04 Admin can activate a role as admin
    Given user click on the Edit putton TCfour
    And user should be able to assign Role as Admin from Profiles dropdown
    And user click on the Save button4
    Then Confirmation admin message should be displayed

  @US017TC05
  Scenario: US017TC05 Admin can view all user info (admin, manager, employee and user)
    Given user click on the View putton
    Then user should be able to see the message User

  @US017TC06
  Scenario: US017TC06 Admin can edit all user info  (admin, manager, employee and user)
    Given user click on the Edit putton TCfive
    And user click on the Save button Edit
    Then user should be able to see the message Create or edit a user.

  @US017TC07
  Scenario: US017TC07 Admin can delete all user info (admin, manager, employee and user)

    Given user click on the Delete putton
    And user should be able to see the message Confirm delete operation.
    And user click on the Delete
    Then user should be able to see the confirmation message