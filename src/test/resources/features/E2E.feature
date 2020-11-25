@E2E

Feature: A description

  Scenario Outline: User registers with valid credentials validating

    Given Go to gmibank.com home page us01
    And Click to User Account menu and Click to Register
    And Enter the SSN "<SSN Number>" with valid credential
    And Click on first name box
    And Enter the name "<First Name>" with valid credential
    And click on last name box
    And Enter the last name "<Last Name>" with valid credential
    And click on Address box
    And Enter the Address "<Address>" with valid credential
    And click on mobile phone number box
    And Enter the GSM "<Mobile Phone Number>" with valid credential
    And click on username box
    And Enter the valid username "<username>" with valid credentail
    And click on email box
    And Enter the e-mail "<email>" with valid credential
    And click on new password box
    And Enter the new "<password>" with valid credential
    And click on new password confirmation box
    And Enter the same password "<password2>" with valid credential
    And click on new password box02
    And Click to Register button

    Examples: Test data for E2E Testing

      |SSN Number | First Name| Last Name| Address         | Mobile Phone Number| username             | email                   | password  | password2 |
      |111-11-5687| GlobalTeam| SDET & QA| All World       | 999-999-9999       | GlobalTeamCustomer111| globalteam111@gmail.com | Global.123| Global.123|

  Scenario Outline: Employee creates the new account for the customer
    Given Go to gmibank.com home page
    And Click to User Account Menu and Click to Sign In
    And Enter the username with valid credentail
    And Enter the pasword with valid credentail
    And Click to Sign in button
    And Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account
    And Enter a "<descriptions>"  with valid credentailto Descriptions textBox
    And Enter a number "<dollar>" to Balance textbox
    And User select an account "<type>"
    And User select an account status as ACTIVE
    And Click to Employee Dropdown
    And Click to Save button in the create a new account page

    Examples:
      | descriptions                | dollar | type     |
      | GlobalTeam Checking Accoun1 | 50000  | CHECKING |
      | GlobalTeam Saving Accoun1   | 10000  | SAVING   |
