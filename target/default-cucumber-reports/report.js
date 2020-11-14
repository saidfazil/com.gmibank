$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US13manageAccounts.feature");
formatter.feature({
  "name": "An Employee can create a new Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US13"
    }
  ]
});
formatter.scenario({
  "name": "User should create a description for the new account and it cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US13"
    },
    {
      "name": "@US13TC01"
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
  "name": "Click to User Account drop down menu and Click to Sign In",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToUserAccountDropDownMenuAndClickToSignIn()"
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
  "name": "Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.clickToMyOperationsDropDownMenuAndClickToManageAccountsThenClickToCreateNewAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Descriptions TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.clickToDescriptionsTextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Employee Dropdown",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.clickToEmployeeDropdown()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Should be that message -This field is required.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.shouldBeThatMessageThisFieldIsRequired()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide a balance for the first time account creation as Dollar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US13"
    },
    {
      "name": "@US13TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter a number be dollar to Balance textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.enterANumberBeDollarToBalanceTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Shouldn\u0027t be error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.userShouldnTBeErrorMessage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"(//div[@class\u003d\u0027invalid-feedback\u0027])[2]\"}\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-BILGISAYAR\u0027, ip: \u0027192.168.43.39\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:54836}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 140ca2a01b43e4170de71e670437ec30\n*** Element info: {Using\u003dxpath, value\u003d(//div[@class\u003d\u0027invalid-feedback\u0027])[2]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.ManageAccountsStepdefs.userShouldnTBeErrorMessage(ManageAccountsStepdefs.java:49)\r\n\tat ✽.User Shouldn\u0027t be error message(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US13manageAccounts.feature:19)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US13"
    },
    {
      "name": "@US13TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.userCanSelectAnAccountTypeAsCHECKINGSAVINGCREDIT_CARDOrINVESTING()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account status should be defined as ACTIVE, SUSPENDED or CLOSED",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US13"
    },
    {
      "name": "@US13TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Account status should be defined as ACTIVE, SUSPENDED or CLOSED",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.accountStatusShouldBeDefinedAsACTIVESUSPENDEDOrCLOSED()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.ManageAccountsStepdefs.accountStatusShouldBeDefinedAsACTIVESUSPENDEDOrCLOSED(ManageAccountsStepdefs.java:73)\r\n\tat ✽.Account status should be defined as ACTIVE, SUSPENDED or CLOSED(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US13manageAccounts.feature:27)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can select an employee from the drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US13"
    },
    {
      "name": "@US13TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User can select an employee from the drop-down",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.userCanSelectAnEmployeeFromTheDropDown()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.ManageAccountsStepdefs.userCanSelectAnEmployeeFromTheDropDown(ManageAccountsStepdefs.java:85)\r\n\tat ✽.User can select an employee from the drop-down(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US13manageAccounts.feature:31)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});