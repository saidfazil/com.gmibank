$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US08ChangePassword.feature");
formatter.feature({
  "name": "Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US08"
    }
  ]
});
formatter.scenario({
  "name": "Change Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US08"
    },
    {
      "name": "@US08TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to home page link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.go_to_home_page_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_User_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_Sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_User_Account_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Current Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_Current_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the New Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_New_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check password availability",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.check_password_availability()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.ChangePasswordStepDef.check_password_availability(ChangePasswordStepDef.java:75)\r\n\tat ✽.check password availability(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US08ChangePassword.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the New Password Confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_New_Password_Confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Save in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_Save_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});