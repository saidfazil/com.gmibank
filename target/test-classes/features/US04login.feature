
@GMIBANKUS04
Feature: TC04_user logins with valid credentials

  Scenario: GMIbank Sign Up
    Given user is on the gmibanklogin page.
    When user clicks login button
    And user signin buton.
    And user enters valid username.
    And Puser enters  valid password.
    And user clicks signin button.

    Then verify login is successfulli