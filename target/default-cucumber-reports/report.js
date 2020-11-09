$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/date.feature");
formatter.feature({
  "name": "The date cannot be typed earlier, in the past, at the time of creation a customer US011",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US011TC05"
    }
  ]
});
formatter.scenario({
  "name": "Date Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US011TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Date TextBox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeDateTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});