$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/passwordCreate.feature");
formatter.feature({
  "name": "Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@first"
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
      "name": "@first"
    },
    {
      "name": "@US03TC01"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 lowercase letter of at least 4 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be orange or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeOrangeOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the red massage under the box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.thenIShouldNotSeeTheRedMassageUnderTheBox()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@first"
    },
    {
      "name": "@US03TC02"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 uppercase letter of at least 4 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithUppercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be orange or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeOrangeOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the red massage under the box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.thenIShouldNotSeeTheRedMassageUnderTheBox()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@first"
    },
    {
      "name": "@US03TC03"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 digit of at least 4 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithDigitOfAtLeastCharacters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be orange or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeOrangeOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the red massage under the box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.thenIShouldNotSeeTheRedMassageUnderTheBox()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@first"
    },
    {
      "name": "@US03TC04"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 special char of at least 4 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithSpecialCharOfAtLeastCharacters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be orange or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeOrangeOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the red massage under the box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.thenIShouldNotSeeTheRedMassageUnderTheBox()"
});
formatter.result({
  "status": "passed"
});
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
      "name": "@first"
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
  "name": "Color line must be orange or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeOrangeOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I should not see the red massage under the box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.thenIShouldNotSeeTheRedMassageUnderTheBox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});