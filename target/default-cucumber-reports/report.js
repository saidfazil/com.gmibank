$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US02customerRegistrationNegatifTest.feature");
formatter.feature({
  "name": "US_002 Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US002"
    }
  ]
});
formatter.scenarioOutline({
  "name": "US02TC01 SSN Text Box Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.step({
  "name": "click on SSN TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a invalid SSN number \"\u003cSSNnumber\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "SSNnumber"
      ]
    },
    {
      "cells": [
        "123-567856"
      ]
    },
    {
      "cells": [
        "76856-9877"
      ]
    },
    {
      "cells": [
        "538474998"
      ]
    }
  ]
});
formatter.background({
  "name": "All custumer registration tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://gmibank.com/\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on User button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_click_on_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Registration tab",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_clicks_Registration_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC01 SSN Text Box Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.step({
  "name": "click on SSN TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_SSN_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid SSN number \"123-567856\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidSSNNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All custumer registration tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://gmibank.com/\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on User button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_click_on_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Registration tab",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_clicks_Registration_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC01 SSN Text Box Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.step({
  "name": "click on SSN TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_SSN_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid SSN number \"76856-9877\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidSSNNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All custumer registration tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on \"http://gmibank.com/\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on User button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_click_on_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks Registration tab",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_clicks_Registration_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC01 SSN Text Box Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.step({
  "name": "click on SSN TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_SSN_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid SSN number \"538474998\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidSSNNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});