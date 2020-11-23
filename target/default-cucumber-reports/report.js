$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US14dateCreate.feature");
formatter.feature({
  "name": "Date should be created on the time of account creation",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US14"
    }
  ]
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to the GMi Bank home page \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userGoToTheGMiBankHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the home page user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to sign-in page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.youShouldNavigateToSignInPage()"
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
  "name": "Click to My Operations menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToMyOperationsMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToSearchButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ishak-Mac.local\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/hd/6p641nnj0wb...}, goog:chromeOptions: {debuggerAddress: localhost:64425}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ddfc41c0570dd8005fde9dc94d227d79\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepdefinitions.DateCreateStepDef.clickToSearchButton(DateCreateStepDef.java:93)\n\tat ✽.Click to search Button(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US14dateCreate.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Middle initial provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheMiddleInitialProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Phone number provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterThePhoneNumberProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Zip Code provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheZipCodeProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheCityProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The date cannot be typed earlier, in the past, at the time of creation an account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@US14TC01"
    }
  ]
});
formatter.step({
  "name": "Enter the user 1 SSN number to SSN textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheUser1SSNNumber1ToSSNTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the date and time for the past provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheDateAndTimeForThePastProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickTheSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be error message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.thereShouldBeErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to the GMi Bank home page \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userGoToTheGMiBankHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the home page user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to sign-in page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.youShouldNavigateToSignInPage()"
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
  "name": "Click to My Operations menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToMyOperationsMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToSearchButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ishak-Mac.local\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/hd/6p641nnj0wb...}, goog:chromeOptions: {debuggerAddress: localhost:64555}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8fa28c80793556f247a3c5b6557990a4\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepdefinitions.DateCreateStepDef.clickToSearchButton(DateCreateStepDef.java:93)\n\tat ✽.Click to search Button(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US14dateCreate.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Middle initial provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheMiddleInitialProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Phone number provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterThePhoneNumberProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Zip Code provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheZipCodeProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheCityProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The date should be created as month, day, year, hour and minute",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@US14TC02"
    }
  ]
});
formatter.step({
  "name": "Enter the user 2 SSN number to SSN textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheUser2SSNNumber1ToSSNTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the date and time with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheDateAndTimeWithValidCredential()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickTheSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.thereShouldBeSuccesMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to the GMi Bank home page \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userGoToTheGMiBankHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the home page user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to sign-in page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.youShouldNavigateToSignInPage()"
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
  "name": "Click to My Operations menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToMyOperationsMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToSearchButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ishak-Mac.local\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/hd/6p641nnj0wb...}, goog:chromeOptions: {debuggerAddress: localhost:64678}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8dd7322d01c467e84356d1d9a980c5ab\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepdefinitions.DateCreateStepDef.clickToSearchButton(DateCreateStepDef.java:93)\n\tat ✽.Click to search Button(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US14dateCreate.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Middle initial provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheMiddleInitialProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Phone number provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterThePhoneNumberProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Zip Code provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheZipCodeProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheCityProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can choose a user from the registration and it cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@US14TC03"
    }
  ]
});
formatter.step({
  "name": "Enter the user 3 SSN number to SSN textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheUser3SSNNumber1ToSSNTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on the user box and select a user",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnTheUserBoxAndSelectAUser()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickTheSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.thereShouldBeSuccesMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to the GMi Bank home page \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userGoToTheGMiBankHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the home page user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to sign-in page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.youShouldNavigateToSignInPage()"
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
  "name": "Click to My Operations menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToMyOperationsMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToSearchButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ishak-Mac.local\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/hd/6p641nnj0wb...}, goog:chromeOptions: {debuggerAddress: localhost:64804}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4c049f05ba810d048bdcc3695600196f\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepdefinitions.DateCreateStepDef.clickToSearchButton(DateCreateStepDef.java:93)\n\tat ✽.Click to search Button(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US14dateCreate.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Middle initial provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheMiddleInitialProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Phone number provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterThePhoneNumberProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Zip Code provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheZipCodeProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheCityProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "There user can choose an account created on manage accounts",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@US14TC04"
    }
  ]
});
formatter.step({
  "name": "Enter the user 4 SSN number to SSN textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheUser4SSNNumber1ToSSNTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "User can choose an account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userCanChooseAnAccount()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickTheSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.thereShouldBeSuccesMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "User go to the GMi Bank home page (https://gmibank.com/)",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User go to the GMi Bank home page \"https://gmibank.com/\"",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.userGoToTheGMiBankHomePage(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on the home page user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to sign-in page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.youShouldNavigateToSignInPage()"
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
  "name": "Click to My Operations menu and Click to Manage Costumers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToMyOperationsMenuAndClickToManageCostumers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickToSearchButton()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//button[@class\u003d\u0027btn btn-secondary\u0027]\"}\n  (Session info: chrome\u003d87.0.4280.67)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027ishak-Mac.local\u0027, ip: \u0027192.168.1.49\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.13.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.67, chrome: {chromedriverVersion: 87.0.4280.20 (c99e81631faa0..., userDataDir: /var/folders/hd/6p641nnj0wb...}, goog:chromeOptions: {debuggerAddress: localhost:64932}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 1c8a8ff0e6f6fd34992fc96241cff472\n*** Element info: {Using\u003dxpath, value\u003d//button[@class\u003d\u0027btn btn-secondary\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat stepdefinitions.DateCreateStepDef.clickToSearchButton(DateCreateStepDef.java:93)\n\tat ✽.Click to search Button(file:///Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US14dateCreate.feature:12)\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the Middle initial provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheMiddleInitialProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Phone number provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterThePhoneNumberProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the Zip Code provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheZipCodeProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter the City provided",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheCityProvided()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can select Zelle Enrolled optionally and save it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US14"
    },
    {
      "name": "@US14TC05"
    }
  ]
});
formatter.step({
  "name": "Enter the user 5 SSN number to SSN textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.enterTheUser5SSNNumber1ToSSNTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click zelle check box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickZelleCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click the save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.clickTheSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.DateCreateStepDef.thereShouldBeSuccesMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
});