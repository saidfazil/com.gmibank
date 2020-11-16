@US01
@smoketest
Feature:  System should allow any user to register with valid credentials validating the success message

  @US01TC01
  Scenario: There should be a valid SSN respecting the "-" where necessary, it should be 9 digits long

    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register
    And Enter the SSN with valid credential
    And Click on first name box
    Then There should be a valid SSN respecting


  @US01TC02
  Scenario: There should be a valid name that contains chars and cannot be blank
    And Enter the First Name with valid credential
    And click on last name box
    Then There should be a valid name respecting

  @US01TC03
  Scenario: There should be a valid last name that contains chars and cannot be blank
    And Enter the Last Name with valid credential
    And click on Address box
    Then There should be a valid last name respecting

  @US01TC04
  Scenario: We can provide chars and digits to describe a valid address along with zip code
    And Enter the Address
    And click on mobile phone number box
    Then There should be a valid address respecting

  @US01TC05
  Scenario: User should provide 10 digit-long mobilephone number as a required field respecting the "-"

    And Enter the Mobile Phone Number with valid credential
    And click on username box
    Then There should be a valid mobile phone number respecting

  @US01TC06
  Scenario: User cannot use just digits for username, but can use any chars and digits along with them and of any length
    And Enter the valid username with valid credentail
    And click on email box
    Then There should be a valid username respecting

  @US01TC07
  Scenario: We should provide a valid email format that contains "@", ".com" extensions
    And Enter the e-mail with valid credential
    And click on new password box
    Then There should be a valid email respecting

  @US01TC08
  Scenario:  Password is required to be at least 4 characters

    And Enter the new password with valid credential
    And click on new password confirmation box
    Then There should be a valid password respecting

  @US01TC09
  Scenario: Password confirmation entry should be same with password

    And Enter the same password with valid credential
    And click on new password box02
    Then entry should be same with password


  @US01TC10

  Scenario:  System should allow any user to register with valid credentials validating the success message
    And Click to Register button
    Then There should be Succes message.

