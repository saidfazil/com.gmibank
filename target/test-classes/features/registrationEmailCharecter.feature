@US_002
@US02TC04

Feature: US_002 email id cannot be created without "@" sign and ".com" extension

  Scenario: US02TC04 user must enter valid data in Email TextBox using "@" character and ".com" expression
  Given user is on "http://gmibank.com/" page
  And user click on User button
  And user clicks Registration tab
  And click on Mobile Phone Number TextBox
  And the user is entering a valid Mobile Phone Number TextBox. Email Must use "" @ "" character and "" .com "" expression in TextBox "
  Then the user should not see the text "This field is invalid"