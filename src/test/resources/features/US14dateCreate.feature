@US14

Feature: Date should be created on the time of account creation

  Background: User go to the GMi Bank home page (https://gmibank.com/)
    Given User go to the GMi Bank home page "https://gmibank.com/"
    And Click on the home page user button
    And You should navigate to sign-in page
    And Enter the username with valid credentail
    And Enter the pasword with valid credentail
    And Click to My Operations menu and Click to Manage Costumers
    And Click the create a new customer button



  @US14TC01
  Scenario: The date cannot be typed earlier, in the past, at the time of creation an account

    And Enter the user 1 SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided
    And Enter the date and time for the past provided
    And Click the save button
    Then There should be error message.

  @US14TC02
    Scenario: The date should be created as month, day, year, hour and minute

    And Enter the user 2 SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided
    And Enter the date and time with valid credential
    And Click the save button
    Then There should be succes message.

  @US14TC03
    Scenario: User can choose a user from the registration and it cannot be blank

    And Enter the user 3 SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided
    And Click on the user box and select a user
    And Click the save button
    Then There should be succes message.

  @US14TC04
    Scenario: There user can choose an account created on manage accounts

    And Enter the user 4 SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided
    And User can choose an account
    And Click the save button
    Then There should be succes message.

  @US14TC05
    Scenario: User can select Zelle Enrolled optionally and save it

    And Enter the user 5 SSN number to SSN textbox
    And Click to search Button
    And Enter the Middle initial provided
    And Enter the Phone number provided
    And Enter the Zip Code provided
    And Enter the City provided
    And Click zelle check box
    And Click the save button
    Then There should be succes message.
