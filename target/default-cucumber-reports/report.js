$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US03passwordCreate.feature");
formatter.feature({
  "name": "Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03"
    }
  ]
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.step({
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@US03TC01"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 lowercase letter of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters(PasswordCreateStepDef.java:40)\n\tat ✽.Enter a password with 1 lowercase letter of at least 7 characters(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to second textbox with 1 lowercase letter of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithLowercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
});