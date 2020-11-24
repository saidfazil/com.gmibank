$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US23CountriesAndCustomersControl.feature");
formatter.feature({
  "name": "Read all countries",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US023"
    }
  ]
});
formatter.scenario({
  "name": "US023TC01 Read all countries",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US023"
    },
    {
      "name": "@US023TC01"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user provites the api ent point to set the response using \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user deserializes all countries to pojo",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user generates all countries data in correspondent files",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user validates data for all countries",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
formatter.scenario({
  "name": "US023TC02 verify all customer data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US023"
    },
    {
      "name": "@US023TC02"
    }
  ]
});
formatter.before({
  "status": "skipped"
});
formatter.step({
  "name": "user provites the api ent point to set the response using \"https://www.gmibank.com/api/tp-customers\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "Read all customer data provided",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the user verifies all the data",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "skipped"
});
});