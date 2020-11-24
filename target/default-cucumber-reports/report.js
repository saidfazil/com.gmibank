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
  "status": "passed"
});
formatter.step({
  "name": "user provites the api ent point to set the response using countries \"https://www.gmibank.com/api/tp-countries\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.user_provites_the_api_ent_point_to_set_the_response_using_countries(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user deserializes all countries to pojo",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.user_deserializes_all_countries_to_pojo()"
});
formatter.result({
  "error_message": "java.lang.NullPointerException\n\tat stepdefinitions.US23CountriesAndCustomersApiStepDef.user_deserializes_all_countries_to_pojo(US23CountriesAndCustomersApiStepDef.java:51)\n\tat ✽.user deserializes all countries to pojo(file:///Users/buse/IdeaProjects/com.gmibank/src/test/resources/features/US23CountriesAndCustomersControl.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "user generates all countries data in correspondent files",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.user_generates_all_countries_data_in_correspondent_files()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user validates data for all countries",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.user_validates_data_for_all_countries()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});