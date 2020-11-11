$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US02characterControl.feature");
formatter.feature({
  "name": "US_002 SSN, Mobil Phone, Email Charecter Control test",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "SSN user is on \"http://gmibank.com/\" page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_user_is_on_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SSN user click on User button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_user_click_on_User_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SSN user clicks Registration tab",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_user_clicks_Registration_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SSN click on SSN TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_click_on_SSN_TextBox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SSN the user must type the character \"-\" when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_the_user_must_type_the_character_when_entering_a_number_into_the_current_SSN_TextBox(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "SSN the user should not see the text \"Your SSN is invalid\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationStepDef.SSN_the_user_should_not_see_the_text(java.lang.String)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your SSN is invalid\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.193)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027BA-MacBook.local\u0027, ip: \u00272a01:e35:2e56:e070:21f6:8205:d408:2c57%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.193, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/5v/ws8hntyn367...}, goog:chromeOptions: {debuggerAddress: localhost:55071}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c5b0b31c1b92d360238adb45e5a7d3ec\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your SSN is invalid\u0027)]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\n\tat stepdefinitions.CostumerRegistrationStepDef.SSN_the_user_should_not_see_the_text(CostumerRegistrationStepDef.java:198)\n\tat ✽.SSN the user should not see the text \"Your SSN is invalid\"(file:///Users/buse/IdeaProjects/com.gmibank/src/test/resources/features/US02characterControl.feature:11)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
});