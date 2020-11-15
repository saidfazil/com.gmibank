$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US02customerRegistrationNegatifTest.feature");
formatter.feature({
  "name": "US_002 Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US02TC01AllTest"
    },
    {
      "name": "@US02TC01"
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
  "name": "US02TC01 user must be registered in Registration tab with current data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02TC01AllTest"
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
  "name": "user enters a invalid SSN number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidSSNNumber()"
});
formatter.result({
  "status": "passed"
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
  "name": "user enters a invalid First Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidFirstName()"
});
formatter.result({
  "status": "passed"
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
  "name": "user enters a invalid Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidLastName()"
});
formatter.result({
  "status": "passed"
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
  "name": "user enters invalid Address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidAddress()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your Address is required\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BA-MacBook.local\u0027, ip: \u00272a01:e35:2e56:e070:48aa:3e9f:53d6:9c61%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.16\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/5v/ws8hntyn367...}, goog:chromeOptions: {debuggerAddress: localhost:53644}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: db7963e7d6cacfb579483c1a256240ea\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your Address is required\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidAddress(CostumerRegistrationNegatifTestStepDef.java:92)\n\tat ✽.user enters invalid Address(file:///Users/buse/IdeaProjects/com.gmibank/src/test/resources/features/US02customerRegistrationNegatifTest.feature:18)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "name": "US02TC01 Part2 user must be registered in Registration tab with current data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02TC01AllTest"
    },
    {
      "name": "@US02TC01"
    },
    {
      "name": "@US02TC01_A"
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
  "name": "user enters a invalid Mobile Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilePhoneNumber()"
});
formatter.result({
  "status": "passed"
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
  "name": "user enters invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidUsername()"
});
formatter.result({
  "status": "passed"
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
  "name": "user on null Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullEmailTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidEmail()"
});
formatter.result({
  "status": "passed"
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
  "name": "user on null New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullNewPasswordTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword()"
});
formatter.result({
  "status": "passed"
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
  "name": "user on null New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullNewPasswordConfirmationTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation()"
});
formatter.result({
  "status": "passed"
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
});