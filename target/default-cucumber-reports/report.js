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
formatter.scenarioOutline({
  "name": "US02TC02 First Name TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "click on First Name TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a invalid First Name \"\u003cFirst Name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "First Name"
      ]
    },
    {
      "cells": [
        ""
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
  "name": "US02TC02 First Name TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.step({
  "name": "click on First Name TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_First_Name_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid First Name \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidFirstName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC03 Last Name TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC03"
    }
  ]
});
formatter.step({
  "name": "click on Last Name TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a invalid Last Name \"\u003cLast Name\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Last Name"
      ]
    },
    {
      "cells": [
        ""
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
  "name": "US02TC03 Last Name TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC03"
    }
  ]
});
formatter.step({
  "name": "click on Last Name TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Last_Name_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Last Name \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidLastName(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC04 Address TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC04"
    }
  ]
});
formatter.step({
  "name": "click on Address TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid Address \"\u003cAddress\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Address"
      ]
    },
    {
      "cells": [
        ""
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
  "name": "US02TC04 Address TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC04"
    }
  ]
});
formatter.step({
  "name": "click on Address TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Address_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid Address \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidAddress(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your Address is required\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BA-MacBook.local\u0027, ip: \u00272a01:e35:2e56:e070:7cc3:17b:f350:4adb%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/5v/ws8hntyn367...}, goog:chromeOptions: {debuggerAddress: localhost:58007}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6872ff4999bd0610ab180aade417954f\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your Address is required\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidAddress(CostumerRegistrationNegatifTestStepDef.java:97)\n\tat ✽.user enters invalid Address \"\"(file:///Users/buse/IdeaProjects/com.gmibank/src/test/resources/features/US02customerRegistrationNegatifTest.feature:39)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"\u003cMobile Phone Number\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Mobile Phone Number"
      ]
    },
    {
      "cells": [
        ""
      ]
    },
    {
      "cells": [
        "5673938393"
      ]
    },
    {
      "cells": [
        "567-3938393"
      ]
    },
    {
      "cells": [
        "567393-3938"
      ]
    },
    {
      "cells": [
        "567-393-3938"
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
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilPhoneNumber(java.lang.String)"
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
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"5673938393\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilPhoneNumber(java.lang.String)"
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
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"567-3938393\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilPhoneNumber(java.lang.String)"
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
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"567393-3938\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilPhoneNumber(java.lang.String)"
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
  "name": "US02TC05 Mobile Phone Number TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC05"
    }
  ]
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters a invalid Mobil Phone Number \"567-393-3938\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilPhoneNumber(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC06 Username TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC06"
    }
  ]
});
formatter.step({
  "name": "click on Username TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid username \"\u003cUsername\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username"
      ]
    },
    {
      "cells": [
        ""
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
  "name": "US02TC06 Username TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC06"
    }
  ]
});
formatter.step({
  "name": "click on Username TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Username_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid username \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidUsername(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC07 Email TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC07"
    }
  ]
});
formatter.step({
  "name": "click on Email TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid Email \"\u003cEmail\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email"
      ]
    },
    {
      "cells": [
        "haldili@"
      ]
    },
    {
      "cells": [
        "haldili.com"
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
  "name": "US02TC07 Email TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC07"
    }
  ]
});
formatter.step({
  "name": "click on Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Email_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid Email \"haldili@\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidEmail(java.lang.String)"
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
  "name": "US02TC07 Email TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC07"
    }
  ]
});
formatter.step({
  "name": "click on Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Email_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid Email \"haldili.com\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidEmail(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC08 New password TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC08"
    }
  ]
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid New password \"\u003cNew password\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "New password"
      ]
    },
    {
      "cells": [
        ""
      ]
    },
    {
      "cells": [
        "123"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "12"
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
  "name": "US02TC08 New password TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC08"
    }
  ]
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword(java.lang.String)"
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
  "name": "US02TC08 New password TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC08"
    }
  ]
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password \"123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword(java.lang.String)"
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
  "name": "US02TC08 New password TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC08"
    }
  ]
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword(java.lang.String)"
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
  "name": "US02TC08 New password TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC08"
    }
  ]
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password \"12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword(java.lang.String)"
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
  "name": "US02TC09 Password strength level must be strong test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC09"
    }
  ]
});
formatter.step({
  "name": "Password strength level must be strong",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.password_strength_level_must_be_strong()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC010 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC010"
    }
  ]
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "user enters invalid New password confirmation \"\u003cNew password confirmation\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "New password confirmation"
      ]
    },
    {
      "cells": [
        ""
      ]
    },
    {
      "cells": [
        "123"
      ]
    },
    {
      "cells": [
        "1"
      ]
    },
    {
      "cells": [
        "12"
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
  "name": "US02TC010 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC010"
    }
  ]
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_confirmation_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password confirmation \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation(java.lang.String)"
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
  "name": "US02TC010 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC010"
    }
  ]
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_confirmation_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password confirmation \"123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation(java.lang.String)"
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
  "name": "US02TC010 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC010"
    }
  ]
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_confirmation_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password confirmation \"1\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation(java.lang.String)"
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
  "name": "US02TC010 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC010"
    }
  ]
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_confirmation_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password confirmation \"12\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation(java.lang.String)"
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
  "name": "US02TC011 New password confirmation TextBox Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC011"
    }
  ]
});
formatter.step({
  "name": "user clicks the Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_clicks_the_Register_button()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "US02TC012 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC012"
    }
  ]
});
formatter.step({
  "name": "new click on SSN TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "the user must type the character \"\u003cTire\u003e\" - when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.step({
  "name": "ssn the user should not see the text \"Your SSN is invalid\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Tire"
      ]
    },
    {
      "cells": [
        "876-765423"
      ]
    },
    {
      "cells": [
        "60045-2347"
      ]
    },
    {
      "cells": [
        "129876450"
      ]
    },
    {
      "cells": [
        "456-55-7896"
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
  "name": "US02TC012 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC012"
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
formatter.step({
  "name": "the user must type the character \"876-765423\" - when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserMustTypeTheCharacterWhenEnteringANumberIntoTheCurrentSSNTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC012 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC012"
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
formatter.step({
  "name": "the user must type the character \"60045-2347\" - when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserMustTypeTheCharacterWhenEnteringANumberIntoTheCurrentSSNTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC012 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC012"
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
formatter.step({
  "name": "the user must type the character \"129876450\" - when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserMustTypeTheCharacterWhenEnteringANumberIntoTheCurrentSSNTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC012 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC012"
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
formatter.step({
  "name": "the user must type the character \"456-55-7896\" - when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserMustTypeTheCharacterWhenEnteringANumberIntoTheCurrentSSNTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
formatter.scenarioOutline({
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC013"
    }
  ]
});
formatter.step({
  "name": "new click on Mobile Phone Number TexttBox",
  "keyword": "And "
});
formatter.step({
  "name": "user must type the\"\u003cTire\u003e\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "mobil the user should not see the text \"Your mobile phone number is invalid\".",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Tire"
      ]
    },
    {
      "cells": [
        "980678-4554"
      ]
    },
    {
      "cells": [
        "980-6784554"
      ]
    },
    {
      "cells": [
        "9806784554"
      ]
    },
    {
      "cells": [
        "98-678-4554"
      ]
    },
    {
      "cells": [
        "980-67-4554"
      ]
    },
    {
      "cells": [
        "980-678-4554"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"980678-4554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"980-6784554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"9806784554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"98-678-4554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"980-67-4554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
  "name": "US02TC013 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC013"
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
formatter.step({
  "name": "user must type the\"980-678-4554\" character - when entering a number into the valid Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
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
formatter.scenarioOutline({
  "name": "US02TC014 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US02TC014"
    }
  ]
});
formatter.step({
  "name": "new click on Email TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "the user is entering a valid Email TextBox Email Must use\"\u003cemail charecter\u003e\" @  character and .com expression in TextBox",
  "keyword": "And "
});
formatter.step({
  "name": "email the user should not see the text \"This field is invalid\".",
  "keyword": "Then "
});
formatter.examples({
  "name": "Test data for data tables",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "email charecter"
      ]
    },
    {
      "cells": [
        "celin_45gmail.com"
      ]
    },
    {
      "cells": [
        "celin_45@gmail"
      ]
    },
    {
      "cells": [
        "celin_45mail"
      ]
    },
    {
      "cells": [
        "celin_45@gmail.com"
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
  "name": "US02TC014 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC014"
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
  "name": "the user is entering a valid Email TextBox Email Must use\"celin_45gmail.com\" @  character and .com expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndComExpressionInTextBox(java.lang.String)"
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
  "name": "US02TC014 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC014"
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
  "name": "the user is entering a valid Email TextBox Email Must use\"celin_45@gmail\" @  character and .com expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndComExpressionInTextBox(java.lang.String)"
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
  "name": "US02TC014 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC014"
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
  "name": "the user is entering a valid Email TextBox Email Must use\"celin_45mail\" @  character and .com expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndComExpressionInTextBox(java.lang.String)"
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
  "name": "US02TC014 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@US002"
    },
    {
      "name": "@US02TC014"
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
  "name": "the user is entering a valid Email TextBox Email Must use\"celin_45@gmail.com\" @  character and .com expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndComExpressionInTextBox(java.lang.String)"
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
formatter.after({
  "status": "passed"
});
});