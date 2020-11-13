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
formatter.before({
  "status": "passed"
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
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters(PasswordCreateStepDef.java:47)\n\tat ✽.Enter a password with 1 lowercase letter of at least 7 characters(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature:13)\n",
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
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "name": "There should be at least 1 uppercase char and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@US03TC02"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 uppercase letter of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithUppercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithUppercaseLetterOfAtLeastCharacters(PasswordCreateStepDef.java:65)\n\tat ✽.Enter a password with 1 uppercase letter of at least 7 characters(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature:20)\n",
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
  "name": "Enter to second textbox with 1 uppercase letter of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithUppercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "name": "There should be at least 1 digit  and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@US03TC03"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 digit of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithDigitOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithDigitOfAtLeastCharacters(PasswordCreateStepDef.java:81)\n\tat ✽.Enter a password with 1 digit of at least 7 characters(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature:27)\n",
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
  "name": "Enter to second textbox with 1 digit of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithDigitOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "name": "There should be at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@US03TC04"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 special char of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithSpecialCharOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\n\tat org.junit.Assert.fail(Assert.java:87)\n\tat org.junit.Assert.assertTrue(Assert.java:42)\n\tat org.junit.Assert.assertTrue(Assert.java:53)\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithSpecialCharOfAtLeastCharacters(PasswordCreateStepDef.java:98)\n\tat ✽.Enter a password with 1 special char of at least 7 characters(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature:34)\n",
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
  "name": "Enter to second textbox with 1 special char of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithSpecialCharOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
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
  "name": "There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@US03TC05"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 7 chars",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithChars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter to second textbox a password with 7 chars",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxAPasswordWithChars()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});