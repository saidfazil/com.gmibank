@smoketest
@US08
  Feature: Password segment on Homepage should be editable
    @US08TC01
      Scenario: Change Password
    Given  Go to home page link
      And Click to User Account
      And Enter the username
      And Enter the password
      And Click to Sign
      And Click to User Account Password
      And Enter the Current Password
      And Enter the New Password
      And check password availability
      And Enter the New Password Confirmation
      Then Click to Save in button