$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/@US005signinLogin.feature");
formatter.feature({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US005"
    }
  ]
});
formatter.background({
  "name": "User is the GmiBank login page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "US005TC03 User wants to login with invalid username on Sign In.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.step({
  "name": "the user clicks on Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the wrong Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Username()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters the wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user clicks on Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Sign_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the error message on the screen is confirmed.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_screen_is_confirmed()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "skipped"
});
});