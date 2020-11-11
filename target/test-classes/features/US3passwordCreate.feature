@US03

Feature: Registration page should restrict password usage to a secure and high level passcode

  Background: User go to the GMi Bank home page (https://gmibank.com/)
    Given User go to the GMi Bank home page
    And Click on user button
    And You should navigate to registration page
    And Click on Password textbox

  @US03TC01
  Scenario: There should be at least 1 lowercase char for stronger password and see the level chart change accordingly
    And Enter a password with 1 lowercase letter of at least 7 characters
    And Color line must be orange or green
    And Click on password confirmation textbox
    Then Enter to second textbox with 1 lowercase letter of at least 7 characters

  @US03TC02
  Scenario: There should be at least 1 uppercase char and see the level  chart change accordingly
    And Enter a password with 1 uppercase letter of at least 7 characters
    And Color line must be orange or green
    And Click on password confirmation textbox
    Then Enter to second textbox with 1 uppercase letter of at least 7 characters

  @US03TC03
  Scenario: There should be at least 1 digit  and see the level  chart change accordingly
    And Enter a password with 1 digit of at least 7 characters
    And Color line must be orange or green
    And Click on password confirmation textbox
    Then Enter to second textbox with 1 digit of at least 7 characters

  @US03TC04
  Scenario: There should be at least 1 special char and see the level bar change accordingly
    And Enter a password with 1 special char of at least 7 characters
    And Color line must be orange or green
    And Click on password confirmation textbox
    Then Enter to second textbox with 1 special char of at least 7 characters

  @US03TC05
  Scenario: There should be at least 7 chars for a stronger password
    And Enter a password with 7 chars
    And Color line must be orange or green
    And Click on password confirmation textbox
    Then Enter to second textbox a password with 7 chars