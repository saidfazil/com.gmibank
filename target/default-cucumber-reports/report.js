$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US02characterControl.feature");
formatter.feature({
  "name": "US_002 SSN, Mobil Phone, Email Charecter Control test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    }
  ]
});
formatter.background({
  "name": "All character tests common links",
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
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "new click on SSN TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.new_click_on_SSN_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "the user must type the character \"-\" when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.the_user_must_type_the_character_when_entering_a_number_into_the_current_SSN_TextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "ssn the user should not see the text \"Your SSN is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.ssn_the_user_should_not_see_the_text(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All character tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_click_on_User_button()"
});
formatter.result({
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
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All character tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
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
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All character tests common links",
  "description": "",
  "keyword": "Background"
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
  "name": "US02TC03 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC03"
    }
  ]
});
formatter.step({
  "name": "new click on Mobile Phone Number TexttBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.newClickOnMobilePhoneNumberTexttBox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "user must type the character \"-\" when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "mobil the user should not see the text \"Your mobile phone number is invalid\".",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.mobiltheUserShouldNotSeeTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All character tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user click on User button",
  "keyword": "And "
});
formatter.background({
  "name": "All character tests common links",
  "description": "",
  "keyword": "Background"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "All character tests common links",
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
  "name": "US02TC04 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@US02TC04"
    }
  ]
});
formatter.step({
  "name": "new click on Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.new_click_on_Email_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user is entering a valid Email TextBox. Email Must use \" @ \" character and \".com\" expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndExpressionInTextBox(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "email the user should not see the text \"This field is invalid\".",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.EmailTheUserShouldNotSeeTheText(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click on User button",
  "keyword": "And "
});
});