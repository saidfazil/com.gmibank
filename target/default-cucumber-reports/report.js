$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US10manageCustomers.feature");
formatter.feature({
  "name": "Manage Customers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    }
  ]
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "City should be provided and cannot be left as blank US010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US010TC02"
    }
  ]
});
formatter.step({
  "name": "Click Save Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CityNegativeTestStepDef.clickSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See This field is required.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CityNegativeTestStepDef.seeThisFieldIsRequired()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:999:204:31ce:547b:1765:cae5:e904%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:52584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3ed7a591cf247167749ee9aa09a572fc\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027username\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName(InformationCheckStepDef.java:42)\n\tat ✽.Click UserName TextBox, Write Available UseName(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US10manageCustomers.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Country should be typed and cannot be blank US010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US010TC03"
    }
  ]
});
formatter.step({
  "name": "Select Country.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.selectCountry()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:999:204:31ce:547b:1765:cae5:e904%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:52584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3ed7a591cf247167749ee9aa09a572fc\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027username\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName(InformationCheckStepDef.java:42)\n\tat ✽.Click UserName TextBox, Write Available UseName(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US10manageCustomers.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "State should be provided as US state and cannot be blank US010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US010TC04"
    }
  ]
});
formatter.step({
  "name": "Write a State.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.writeAState()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:999:204:31ce:547b:1765:cae5:e904%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:52584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3ed7a591cf247167749ee9aa09a572fc\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027username\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName(InformationCheckStepDef.java:42)\n\tat ✽.Click UserName TextBox, Write Available UseName(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US10manageCustomers.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The date cannot be typed earlier, in the past, at the time of creation a customer US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US011TC05"
    }
  ]
});
formatter.step({
  "name": "See Date TextBox",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeDateTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:999:204:31ce:547b:1765:cae5:e904%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:52584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3ed7a591cf247167749ee9aa09a572fc\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027username\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName(InformationCheckStepDef.java:42)\n\tat ✽.Click UserName TextBox, Write Available UseName(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US10manageCustomers.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "The date should be created as month, day, year, hour and minute US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US011TC06"
    }
  ]
});
formatter.step({
  "name": "See Date Today",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeDateToday()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "Employee is Working On The Manage Customers.",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go GMI Bank Adress",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.goGMIBankAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Area",
  "keyword": "When "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInArea()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click, SignIn Entrace Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInEntraceButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click UserName TextBox, Write Available UseName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name\u003d\u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:999:204:31ce:547b:1765:cae5:e904%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:52584}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3ed7a591cf247167749ee9aa09a572fc\n*** Element info: {Using\u003dxpath, value\u003d//input[@name\u003d\u0027username\u0027]}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.sendKeys(Unknown Source)\n\tat stepdefinitions.InformationCheckStepDef.clickUserNameTextBoxWriteAvailableUseName(InformationCheckStepDef.java:42)\n\tat ✽.Click UserName TextBox, Write Available UseName(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US10manageCustomers.feature:8)\n",
  "status": "failed"
});
formatter.step({
  "name": "Click Password TextBox, Write Available Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickPasswordTextBoxWriteAvailablePassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SignIn Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSignInButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click My Operations Area",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickMyOperationsArea()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Manage Customers",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickManageCustomers()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Create A New Customer",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickCreateANewCustomer()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click SSN TextBox, Write Available SSN Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSSNTextBoxWriteAvailableSSNNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click Search Button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickSearchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can select Zelle Enrolled optionally and save it. US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@managecustomersUS10US11"
    },
    {
      "name": "@US011TC07"
    }
  ]
});
formatter.step({
  "name": "Click Zelle Check Box",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.clickZelleCheckBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
});