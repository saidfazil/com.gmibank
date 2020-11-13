$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US06userSettings.feature");
formatter.feature({
  "name": "User info segment (User Settings) should be editable on Homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US06"
    }
  ]
});
formatter.scenario({
  "name": "There should be user info being populated when navigating to user info \"firstname, lastname email and language\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@US06TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"https://gmibank.com/\" link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.goToLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterTheUsernameWithValidCredentails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterThePasswordWithValidCredentails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that First Name is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatFirstNameIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Last Name is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLastNameIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Email is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatEmailIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be 2 languages available \"English and Turkish\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@US06TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Language dropdown is have English.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveEnglish()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Language dropdown is have Türkçe.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveTürkçe()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update firstname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@US06TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to First Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update lastname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@US06TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update email id adding \"@\" sign and \".com\" extension",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@US06TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Email is contain mailContains",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatEmailIsContain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Save button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Assert that visible text saveAlertText.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatVisibleTextSaveAlertText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});