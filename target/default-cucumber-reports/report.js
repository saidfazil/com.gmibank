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
  "name": "User wants to login with invalid username on Sign In.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the correct Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_correct_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_clicks_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the screen is confirmed.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_screen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with valid username , invalid password, at Login\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the correct Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_correct_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on Sign in.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_click_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message onthe screen is confirmed .",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_onthe_screen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username and invalid password at Login",
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users enter wrong username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_enter_wrong_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wronk Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wronk_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clic on sign in.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_clic_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error mesage on the screeen is confirmed.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_mesage_on_the_screeen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username or invalid password on Sign In.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_invalid_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_invalid_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicon Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_clicon_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the screeen is confirmed.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_screeen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If you get an error message, click the Forgot your password link.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.if_you_get_an_error_message_click_the_Forgot_your_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message on the visited page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.verify_the_message_on_the_visited_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username or invalid password Sign In, Register a new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter the wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enter_the_wrong_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clics on Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_clics_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the skreen is confirmed.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_skreen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If you get an error message, click the You don\u0027t have an account yet? Register a new account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.if_you_get_an_error_message_click_the_You_don_t_have_an_account_yet_Register_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message onthe visited page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.verify_the_message_onthe_visited_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "name": "user is on “https://gmibank.com/login”.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login()"
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
  "name": "users clikson Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.users_clikson_Sign_in()"
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertFalse(Assert.java:65)\n\tat org.junit.Assert.assertFalse(Assert.java:75)\n\tat stepdefinitions.SignInStepDef.if_the_user_gets_the_error_message_a_bug_has_been_found(SignInStepDef.java:211)\n\tat ✽.If the user gets the error message, a bug has been found.(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US05signin.feature:56)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});