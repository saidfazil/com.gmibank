$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US23CountriesAndCustomersControl.feature");
formatter.feature({
  "name": "Read all countries",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US023AllTest"
    }
  ]
});
formatter.scenarioOutline({
  "name": "US023TC02 verify all customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US023TC02"
    }
  ]
});
formatter.step({
  "name": "user provites the api ent point to set the response using customers \"https://www.gmibank.com/api/tp-customers\" creates customer using \"\u003cidJson\u003e\" \"\u003cfirstNameJson\u003e\" \"\u003clastNameJson\u003e\"\"\u003cmiddleInitial\u003e\" \"\u003cemail\u003e \"\"\u003cmobilePhoneNumber\u003e\"\"\u003cphoneNumber\u003e \"\"\u003czipCode\u003e\"\"\u003caddress\u003e \"\"\u003ccity\u003e\"\"\u003cssn\u003e \"\"\u003ccreateDate\u003e\"\"\u003ccountry\u003e\"\"\u003cstate\u003e \"\"\u003cuser\u003e\"",
  "keyword": "Given "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "idJson",
        "firstNameJson",
        "lastNameJson",
        "middleInitial",
        "email",
        "mobilePhoneNumber",
        "phoneNumber",
        "zipCode",
        "address",
        "city",
        "ssn",
        "createDate",
        "country",
        "state",
        "user"
      ]
    },
    {
      "cells": [
        "76853",
        "Selim1",
        "Asd",
        "sa",
        "sakal@gmail.com",
        "678-987-1234",
        "678-987-1234",
        "45100",
        "rue de orleans",
        "Orleans",
        "456-78-4321",
        "2020-11-23",
        "France",
        "Centre",
        "selim45"
      ]
    },
    {
      "cells": [
        "54273",
        "Selim2",
        "Asdfg",
        "Slm",
        "sakal2@gmail.com",
        "678-987-1237",
        "678-987-1237",
        "45100",
        "rue de orleans",
        "Orleans",
        "456-78-4322",
        "2020-11-23",
        "France",
        "Centre",
        "selim45"
      ]
    }
  ]
});
formatter.scenario({
  "name": "US023TC02 verify all customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US023AllTest"
    },
    {
      "name": "@US023TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user provites the api ent point to set the response using customers \"https://www.gmibank.com/api/tp-customers\" creates customer using \"76853\" \"Selim1\" \"Asd\"\"sa\" \"sakal@gmail.com \"\"678-987-1234\"\"678-987-1234 \"\"45100\"\"rue de orleans \"\"Orleans\"\"456-78-4321 \"\"2020-11-23\"\"France\"\"Centre \"\"selim45\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.userProvitesTheApiEntPointToSetTheResponseUsingCustomersCreatesCustomerUsing(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "US023TC02 verify all customer data",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US023AllTest"
    },
    {
      "name": "@US023TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user provites the api ent point to set the response using customers \"https://www.gmibank.com/api/tp-customers\" creates customer using \"54273\" \"Selim2\" \"Asdfg\"\"Slm\" \"sakal2@gmail.com \"\"678-987-1237\"\"678-987-1237 \"\"45100\"\"rue de orleans \"\"Orleans\"\"456-78-4322 \"\"2020-11-23\"\"France\"\"Centre \"\"selim45\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.US23CountriesAndCustomersApiStepDef.userProvitesTheApiEntPointToSetTheResponseUsingCustomersCreatesCustomerUsing(java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});