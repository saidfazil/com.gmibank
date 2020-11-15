$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US05signin.feature");
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
formatter.scenario({
  "name": "US005TC06 Error message on blank screen when user signing in login page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC06"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users cliks on Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_cliks_on_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users enter the wrong Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_enter_the_wrong_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users cliks on Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_cliks_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "thee users enter thee wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.thee_users_enter_thee_wrong_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users clikson Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_clikson_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the eror messaage onthe screeen is confirmed.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_eror_messaage_onthe_screeen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks cancel after error message",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_clicks_cancel_after_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If the user gets the error message, a bug has been found.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.if_the_user_gets_the_error_message_a_bug_has_been_found()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat stepdefinitions.SignInStepDef.if_the_user_gets_the_error_message_a_bug_has_been_found(SignInStepDef.java:271)\n\tat ✽.If the user gets the error message, a bug has been found.(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US05signin.feature:65)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});