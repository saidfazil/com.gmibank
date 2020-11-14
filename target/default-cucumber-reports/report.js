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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca href\u003d\"javascript:void(0)\" class\u003d\"page-link\"\u003e...\u003c/a\u003e is not clickable at point (773, 226). Other element would receive the click: \u003cli class\u003d\"page-item disabled\"\u003e...\u003c/li\u003e\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-BILGISAYAR\u0027, ip: \u002710.255.29.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61392}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3e3e87d1e10e0376ef78b72b1c331c25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepdefinitions.ManageCostumerStepDef.goBackToManageCostumersPage(ManageCostumerStepDef.java:87)\r\n\tat ✽.go back to manage costumers page(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US12manageCostumer.feature:22)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "There should be Edit button where all customer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.thereShouldBeEditButtonWhereAllCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//*[contains(@href,\u00277393/edit\u0027)]\u0027 (tried for 2 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.Driver.waitForVisibility(Driver.java:126)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToEditButton(ManageCostumerStepDef.java:97)\r\n\tat ✽.Click to Edit button(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US12manageCostumer.feature:27)\r\nCaused by: org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//*[contains(@href,\u00277393/edit\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//*[contains(@href,\u00277393/edit\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d83.0.4103.106)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-BILGISAYAR\u0027, ip: \u002710.255.29.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61392}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3e3e87d1e10e0376ef78b72b1c331c25\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(@href,\u00277393/edit\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy18.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.Driver.waitForVisibility(Driver.java:126)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToEditButton(ManageCostumerStepDef.java:97)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "City textbox is updated",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.cityTextboxIsUpdated()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Save button in the Edit Page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToSaveButtonInTheEditPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The Edit portal can allow user to update the user info",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.theEditPortalCanAllowUserToUpdateTheUserInfo()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
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
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element \u003ca class\u003d\"btn btn-danger btn-sm\" href\u003d\"/tp-customer/7393/delete?page\u003d3\u0026amp;sort\u003did,asc\"\u003e...\u003c/a\u003e is not clickable at point (1278, 585). Other element would receive the click: \u003cdiv class\u003d\"back-to-top\" style\u003d\"\"\u003e...\u003c/div\u003e\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER-BILGISAYAR\u0027, ip: \u002710.255.29.54\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_251\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\user\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:61392}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3e3e87d1e10e0376ef78b72b1c331c25\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToDeleteButton(ManageCostumerStepDef.java:126)\r\n\tat ✽.Click to Delete button(file:///C:/Users/user/IdeaProjects/com.gmibank/src/test/resources/features/US12manageCostumer.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "seeing a message if the user is sure about deletion",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.seeingAMessageIfTheUserIsSureAboutDeletion()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can delete a customer",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.userCanDeleteACustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
});