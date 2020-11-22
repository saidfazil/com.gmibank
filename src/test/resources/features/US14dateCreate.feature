@US14

Feature: Date should be created on the time of account creation

  Background: User go to the GMi Bank home page (https://gmibank.com/)
    Given User go to the GMi Bank home page "https://gmibank.com/"
    And Click on user button
    And You should navigate to sign-in page
    And Enter the username with valid credentail
    And Enter the pasword with valid credentail
    And Click to My Operations menu and Click to Manage Costumers
    And Enter the user SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided

  @US14TC01
  Scenario: The date cannot be typed earlier, in the past, at the time of creation an account

    And Enter the date and time for the past provided
    And Click the save button
    Then There should be error message.

  @US14TC02
    And Enter the date and time with valid credential
    And Click the save button
    Then There should be succes message.

  @US14TC03
    And Click on the user box and select a user
    And Click the save button
    Then There should be succes message.

  @US14TC04
    And User can choose an account
    And Click the save button
    Then There should be succes message.

   @US14TC05
    And Click zelle check box
    And Click the save button
    Then There should be succes message.
