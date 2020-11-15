@US08
  Feature: Password segment on Homepage should be editable
    @US08TC01
      Scenario: Change Password
    Given  Go to home page link
      And to User Account drob down menu and Click to Sign In
      And Enter the username with valid credentail
      And Enter the password with valid credentail
      And Click to Sign in button
      And Click to User Account drop down menu and Click to Password
      And Enter the Current Password width credentail
      And Enter the New Password
      And check password availability
      And Enter the New Password Confirmation
      Then Click to Save in button

