$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US12manageCostumer.feature");
formatter.feature({
  "name": "An Employee can manage Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US12"
    }
  ]
});
formatter.scenario({
  "name": "All customers should show up on manage customers module populating the account information of the customer",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US12"
    },
    {
      "name": "@US12TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.goToGmibankComHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account Menu and Click to Sign In",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToUserAccountMenuAndClickToSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.enterTheUsernameWithValidCredentail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the pasword with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.enterThePaswordWithValidCredentail()"
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
  "name": "Click to My Operations drop down menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToMyOperationsDropDownMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click to last page button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToLastPageButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "A customer should show up at total nine head on account information of the customer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.aCustomerShouldShowUpAtTotalNineHeadOnAccountInformationOfTheCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a View option where customer can be navigated to all customer info and see edit button there",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US12"
    },
    {
      "name": "@US12TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click to View button.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToViewButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Edit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.thereShouldBeEditButton()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an Edit button where all customer information can be populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US12"
    },
    {
      "name": "@US12TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "go back to manage costumers page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.goBackToManageCostumersPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be Edit button where all customer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.thereShouldBeEditButtonWhereAllCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be Edit button where all customerThe Edit portal can allow user to create or update the user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US12"
    },
    {
      "name": "@US12TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click to Edit button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToEditButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "City textbox is updated",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.cityTextboxIsUpdated()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Save button in the Edit Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToSaveButtonInTheEditPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The Edit portal can allow user to update the user info",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.theEditPortalCanAllowUserToUpdateTheUserInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can delete a customer, but seeing a message if the user is sure about deletion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US12"
    },
    {
      "name": "@US12TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Confirming that a customer is registered with ID number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.confirmingThatACustomerIsRegisteredWithIDNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToDeleteButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "seeing a message if the user is sure about deletion",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.seeingAMessageIfTheUserIsSureAboutDeletion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User can delete a customer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.userCanDeleteACustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});