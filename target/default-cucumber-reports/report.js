$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US01userRegister.feature");
formatter.feature({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "name": "There should be a valid SSN respecting the \"-\" where necessary, it should be 9 digits long",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to gmibank.com home page us01",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.goToHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account menu and Click to Register",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_to_User_Account_menu_and_Click_to_Register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the SSN with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_SSN_with_valid_credential()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on first name box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_first_name_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "There should be a valid SSN respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_SSN_respecting()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the First Name with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_First_Name_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027firstname\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49679}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2b0fe8e3440b7127b889b8405c9d52f1\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027firstname\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_First_Name_with_valid_credential(UserRegistrationStepDef.java:54)\r\n\tat ✽.Enter the First Name with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on last name box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_last_name_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_name_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be a valid last name that contains chars and cannot be blank",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Last Name with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_Last_Name_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027lastname\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49696}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4b3555eba24c24ddf282be4dec64bfde\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027lastname\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_Last_Name_with_valid_credential(UserRegistrationStepDef.java:76)\r\n\tat ✽.Enter the Last Name with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:23)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Address box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_Address_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid last name respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_last_name_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded1.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "We can provide chars and digits to describe a valid address along with zip code",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_Address()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027address\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49711}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 48b151de6069a721d758949b840a90a0\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027address\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_Address(UserRegistrationStepDef.java:96)\r\n\tat ✽.Enter the Address(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:29)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on mobile phone number box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_mobile_phone_number_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid address respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_address_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded2.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User should provide 10 digit-long mobilephone number as a required field respecting the \"-\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Mobile Phone Number with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_Mobile_Phone_Number_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027mobilephone\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49737}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b356f5d7bcede3a0f3f90b8a08e2d84d\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027mobilephone\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_Mobile_Phone_Number_with_valid_credential(UserRegistrationStepDef.java:112)\r\n\tat ✽.Enter the Mobile Phone Number with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:36)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on username box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_username_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid mobile phone number respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_mobile_phone_number_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded3.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User cannot use just digits for username, but can use any chars and digits along with them and of any length",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC06"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the valid username with valid credentail",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_username_with_valid_credentail()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027username\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49752}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6f6345ce64e03a7ae70569e2b8a6fc14\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027username\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_username_with_valid_credentail(UserRegistrationStepDef.java:133)\r\n\tat ✽.Enter the valid username with valid credentail(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:42)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on email box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_email_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid username respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_username_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded4.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "We should provide a valid email format that contains \"@\", \".com\" extensions",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC07"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the e-mail with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_e_mail_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027email\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49767}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0cd50fea04163934389e2e97d026f358\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027email\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_e_mail_with_valid_credential(UserRegistrationStepDef.java:154)\r\n\tat ✽.Enter the e-mail with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:48)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on new password box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_new_password_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid email respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_email_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded5.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Password is required to be at least 4 characters",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC08"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the new password with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_new_password_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027firstPassword\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49782}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 922398cbadbe2a878086c57e2c53d727\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027firstPassword\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_new_password_with_valid_credential(UserRegistrationStepDef.java:175)\r\n\tat ✽.Enter the new password with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:55)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on new password confirmation box",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_new_password_confirmation_box()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "There should be a valid password respecting",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_a_valid_password_respecting()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded6.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Password confirmation entry should be same with password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC09"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Enter the same password with valid credential",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.enter_the_same_password_with_valid_credential()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//input[@name \u003d \u0027secondPassword\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49797}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 17fb28bc107f64520817da9fcba444f9\n*** Element info: {Using\u003dxpath, value\u003d//input[@name \u003d \u0027secondPassword\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.enter_the_same_password_with_valid_credential(UserRegistrationStepDef.java:196)\r\n\tat ✽.Enter the same password with valid credential(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:62)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on new password box02",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_on_new_password_box02()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "entry should be same with password",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.entry_should_be_same_with_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded7.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "System should allow any user to register with valid credentials validating the success message",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US01"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US01TC10"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Click to Register button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.click_to_Register_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#register\\-submit\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49812}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 4f2f70f34a9fed502ba50f6b6d18a65e\n*** Element info: {Using\u003did, value\u003dregister-submit}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.submit(Unknown Source)\r\n\tat stepdefinitions.UserRegistrationStepDef.click_to_Register_button(UserRegistrationStepDef.java:217)\r\n\tat ✽.Click to Register button(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US01userRegister.feature:70)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "There should be Succes message.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserRegistrationStepDef.there_should_be_Succes_message()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded8.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US02characterControl.feature");
formatter.feature({
  "name": "US_002 SSN, Mobil Phone, Email Charecter Control test",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.background({
  "name": "All character tests common links",
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
  "name": "US02TC02 user must enter valid data into SSN TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US02TC02"
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
  "name": "the user must type the character \"-\" when entering a number into the current SSN TextBox.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.the_user_must_type_the_character_when_entering_a_number_into_the_current_SSN_TextBox(java.lang.String)"
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
  "name": "All character tests common links",
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
  "name": "US02TC03 user must enter valid data in Mobile Phone Number TextBox using \"-\" character.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US02TC03"
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
  "name": "user must type the character \"-\" when entering a number into the valid Mobile Phone Number TextBox",
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
  "name": "All character tests common links",
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
  "name": "US02TC04 user must enter valid data in Email TextBox using \"@\" character and \".com\" expression",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US02_CharecterTest"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US02TC04"
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
  "name": "the user is entering a valid Email TextBox. Email Must use \" @ \" character and \".com\" expression in TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndExpressionInTextBox(java.lang.String,java.lang.String)"
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
formatter.uri("file:src/test/resources/features/US02customerRegistrationNegatifTest.feature");
formatter.feature({
  "name": "US_002 Any field on the registration page should not be left blank",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US_002"
    },
    {
      "name": "@US02TC01"
    }
  ]
});
formatter.scenario({
  "name": "US02TC01 user must be registered in Registration tab with current data.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US_002"
    },
    {
      "name": "@US02TC01"
    }
  ]
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//*[contains(text(),\u0027Your Address is required\u0027)]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:49904}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d90a3958dad3c44adea4e0a73506fa0e\n*** Element info: {Using\u003dxpath, value\u003d//*[contains(text(),\u0027Your Address is required\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidAddress(CostumerRegistrationNegatifTestStepDef.java:88)\r\n\tat ✽.user enters invalid Address(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US02customerRegistrationNegatifTest.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "click on Mobile Phone Number TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Mobile_Phone_Number_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters a invalid Mobile Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersAInvalidMobilePhoneNumber()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Username TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Username_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidUsername()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_Email_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user on null Email TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullEmailTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidEmail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user on null New password TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullNewPasswordTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid New password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPassword()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Password strength level must be strong",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.password_strength_level_must_be_strong()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click on New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.click_on_New_password_confirmation_TextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user on null New password confirmation TextBox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userOnNullNewPasswordConfirmationTextBox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user enters invalid New password confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.userEntersInvalidNewPasswordConfirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user clicks the Register button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CostumerRegistrationNegatifTestStepDef.user_clicks_the_Register_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded9.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US03passwordCreate.feature");
formatter.feature({
  "name": "Registration page should restrict password usage to a secure and high level passcode",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
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
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 lowercase char for stronger password and see the level chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US03TC01"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 lowercase letter of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithLowercaseLetterOfAtLeastCharacters(PasswordCreateStepDef.java:47)\r\n\tat ✽.Enter a password with 1 lowercase letter of at least 7 characters(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US03passwordCreate.feature:13)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to second textbox with 1 lowercase letter of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithLowercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded10.png", null);
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
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 uppercase char and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US03TC02"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 uppercase letter of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithUppercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithUppercaseLetterOfAtLeastCharacters(PasswordCreateStepDef.java:65)\r\n\tat ✽.Enter a password with 1 uppercase letter of at least 7 characters(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US03passwordCreate.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to second textbox with 1 uppercase letter of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithUppercaseLetterOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded11.png", null);
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
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 digit  and see the level  chart change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US03TC03"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 digit of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithDigitOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithDigitOfAtLeastCharacters(PasswordCreateStepDef.java:81)\r\n\tat ✽.Enter a password with 1 digit of at least 7 characters(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US03passwordCreate.feature:27)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to second textbox with 1 digit of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithDigitOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded12.png", null);
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
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 1 special char and see the level bar change accordingly",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US03TC04"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 1 special char of at least 7 characters",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithSpecialCharOfAtLeastCharacters()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertTrue(Assert.java:53)\r\n\tat stepdefinitions.PasswordCreateStepDef.enterAPasswordWithSpecialCharOfAtLeastCharacters(PasswordCreateStepDef.java:98)\r\n\tat ✽.Enter a password with 1 special char of at least 7 characters(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US03passwordCreate.feature:34)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Enter to second textbox with 1 special char of at least 7 characters",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxWithSpecialCharOfAtLeastCharacters()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded13.png", null);
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
  "name": "User go to the GMi Bank home page",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.userGoToTheGMiBankHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on user button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnUserButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "You should navigate to registration page",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.youShouldNavigateToRegistrationPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on Password textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be at least 7 chars for a stronger password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US03"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US03TC05"
    }
  ]
});
formatter.step({
  "name": "Enter a password with 7 chars",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterAPasswordWithChars()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Color line must be yellow or green",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.colorLineMustBeYelloweOrGreen()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click on password confirmation textbox",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.clickOnPasswordConfirmationTextbox()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter to second textbox a password with 7 chars",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.PasswordCreateStepDef.enterToSecondTextboxAPasswordWithChars()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US05signin.feature");
formatter.feature({
  "name": "User cannot login with invalid username validating the error message",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    }
  ]
});
formatter.scenario({
  "name": "User wants to login with invalid username on Sign In.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the correct Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_correct_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicks on Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicks_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the screen is confirmed.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_screen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with valid username , invalid password, at Login\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user go to https://gmibank.com/login .",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_go_to_https_gmibank_com_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clickson Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clickson_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the correct Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_correct_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clickson Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clickson_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Sign in.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_click_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message onthe screen is confirmed .",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_onthe_screen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username and invalid password at Login",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmipank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmipank_com_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_click_on_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the users enter wrong username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_users_enter_wrong_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click on Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_click_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wronk Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wronk_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clic on sign in.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clic_on_sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error mesage on the screeen is confirmed.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_mesage_on_the_screeen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username or invalid password on Sign In.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clikon Username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clikon_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid Username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_invalid_Username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clics on Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clics_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the invalid Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_invalid_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicon Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicon_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the screeen is confirmed.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_screeen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If you get an error message, click the Forgot your password link.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.if_you_get_an_error_message_click_the_Forgot_your_password_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message on the visited page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.verify_the_message_on_the_visited_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User wants to login with invalid username or invalid password Sign In, Register a new account",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US005"
    },
    {
      "name": "@US005TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is on “https://gmibank.com/login” page.",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.user_is_on_https_gmibank_com_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clicon username.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clicon_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters the wrong username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enters_the_wrong_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clcks on Password..",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clcks_on_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enter the wrong Password.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_enter_the_wrong_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user clics on Sign in .",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_user_clics_on_Sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the error message on the skreen is confirmed.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.the_error_message_on_the_skreen_is_confirmed()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "If you get an error message, click the You don\u0027t have an account yet? Register a new account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.if_you_get_an_error_message_click_the_You_don_t_have_an_account_yet_Register_a_new_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "verify the message onthe visited page",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.SignInStepDef.verify_the_message_onthe_visited_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US06userSettings.feature");
formatter.feature({
  "name": "User info segment (User Settings) should be editable on Homepage",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "name": "There should be user info being populated when navigating to user info \"firstname, lastname email and language\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US06TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"https://gmibank.com/\" link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.goToLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterTheUsernameWithValidCredentails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterThePasswordWithValidCredentails()"
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
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that First Name is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatFirstNameIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Last Name is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLastNameIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Email is not empty.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatEmailIsNotEmpty()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be 2 languages available \"English and Turkish\"",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US06TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Language dropdown is have English.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveEnglish()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//option[.\u003d\u0027English\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ed97ace808fdb8eb255f04051c228615\n*** Element info: {Using\u003dxpath, value\u003d//option[.\u003d\u0027English\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveEnglish(UserSettingsStepDef.java:63)\r\n\tat ✽.Assert that Language dropdown is have English.(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US06userSettings.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert that Language dropdown is have Türkçe.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveTürkçe()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded14.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update firstname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US06TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to First Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToFirstName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027firstName\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50212}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 8592fd1a45e2b6d209a0e4423d4fd27a\n*** Element info: {Using\u003dname, value\u003dfirstName}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.clear(Unknown Source)\r\n\tat stepdefinitions.UserSettingsStepDef.updateToFirstName(UserSettingsStepDef.java:73)\r\n\tat ✽.Update to First Name(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US06userSettings.feature:25)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded15.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update lastname",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US06TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToLastName()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027lastName\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50227}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 16029a080ac9c3b1efac3b3982ee7f46\n*** Element info: {Using\u003dname, value\u003dlastName}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.clear(Unknown Source)\r\n\tat stepdefinitions.UserSettingsStepDef.updateToLastName(UserSettingsStepDef.java:84)\r\n\tat ✽.Update to Last Name(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US06userSettings.feature:29)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded16.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an option to update email id adding \"@\" sign and \".com\" extension",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US06"
    },
    {
      "name": "@smoketest"
    },
    {
      "name": "@US06TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Update to Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToEmail()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#email\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50242}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9d199ba3018e12689d54ea688a272d80\n*** Element info: {Using\u003did, value\u003demail}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.clear(Unknown Source)\r\n\tat stepdefinitions.UserSettingsStepDef.updateToEmail(UserSettingsStepDef.java:90)\r\n\tat ✽.Update to Email(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US06userSettings.feature:33)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert that Email is contain mailContains",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatEmailIsContain()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToSaveButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Assert that visible text saveAlertText.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatVisibleTextSaveAlertText()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded17.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US07invalidMailandLang.feature");
formatter.feature({
  "name": "System should not allow to make updates with invalid credentials.",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US07"
    }
  ]
});
formatter.scenario({
  "name": "Email id cannot contain just digits or chars without \"@\" sign or \".com\" extension",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US07"
    },
    {
      "name": "@US07TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to \"https://gmibank.com/\" link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.goToLink(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToSignIn()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterTheUsernameWithValidCredentails()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password with valid credentails",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.enterThePasswordWithValidCredentails()"
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
  "name": "Click to User drop down menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserDropDownMenu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User info",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToUserInfo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Update to Email with invalid credential without special characters.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.updateToEmailWithInvalidCredentialWithoutSpecialCharacters()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Save button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.clickToSaveButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Assert that visible text invalidField.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatVisibleTextInvalidField()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should not be an option of any other language other than English or Turkish",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US07"
    },
    {
      "name": "@US07TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Assert that Language dropdown is have English.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveEnglish()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//option[.\u003d\u0027English\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50283}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c0d9fda471a3e781cd55f4243c367d6c\n*** Element info: {Using\u003dxpath, value\u003d//option[.\u003d\u0027English\u0027]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getText(Unknown Source)\r\n\tat stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveEnglish(UserSettingsStepDef.java:63)\r\n\tat ✽.Assert that Language dropdown is have English.(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US07invalidMailandLang.feature:20)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Assert that Language dropdown is have Türkçe.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsHaveTürkçe()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Assert that Language dropdown is not have other languages",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.UserSettingsStepDef.assertThatLanguageDropdownIsNotHaveThIndex()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded18.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US08ChangePassword.feature");
formatter.feature({
  "name": "Password segment on Homepage should be editable",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US08"
    }
  ]
});
formatter.scenario({
  "name": "Change Password",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US08"
    },
    {
      "name": "@US08TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "Go to home page link",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.go_to_home_page_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_User_Account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the username",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_username()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to Sign",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_Sign()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click to User Account Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_User_Account_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the Current Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_Current_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Enter the New Password",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_New_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "check password availability",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.check_password_availability()"
});
formatter.result({
  "error_message": "java.lang.AssertionError\r\n\tat org.junit.Assert.fail(Assert.java:87)\r\n\tat org.junit.Assert.assertTrue(Assert.java:42)\r\n\tat org.junit.Assert.assertFalse(Assert.java:65)\r\n\tat org.junit.Assert.assertFalse(Assert.java:75)\r\n\tat stepdefinitions.ChangePasswordStepDef.check_password_availability(ChangePasswordStepDef.java:75)\r\n\tat ✽.check password availability(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US08ChangePassword.feature:14)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Enter the New Password Confirmation",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.enter_the_New_Password_Confirmation()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click to Save in button",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ChangePasswordStepDef.click_to_Save_in_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded19.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US09searchSsnNumber.feature");
formatter.feature({
  "name": "User can search for a new applicant by their SSN and see all their registration info populated US009",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US009TC01"
    }
  ]
});
formatter.scenario({
  "name": "User Information Ceheck Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US009TC01"
    }
  ]
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
formatter.step({
  "name": "See First Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Last Name",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Mail Adress",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.InformationCheckStepDef.seeMailAdress()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US10manageCustomers.feature");
formatter.feature({
  "name": "Manage Customers",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
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
      "name": "@smoketest"
    },
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
  "name": "Country should be typed and cannot be blank US010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "name": "State should be provided as US state and cannot be blank US010",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "name": "The date cannot be typed earlier, in the past, at the time of creation a customer US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "name": "The date should be created as month, day, year, hour and minute US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "name": "User can select Zelle Enrolled optionally and save it. US011",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US11customer.feature");
formatter.feature({
  "name": "User can choose a user from the registration and it cannot be blank US011",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US011TC08"
    }
  ]
});
formatter.scenario({
  "name": "User Information Control Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US011TC08"
    }
  ]
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
  "name": "Click First ID",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.clickFirstID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See FirstName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeFirstName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See LastName",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeLastName()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Middle Initial",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeMiddleInitial()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Email",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeEmail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Mobile Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeMobilePhoneNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Phone Number",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seePhoneNumber()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Zip Code",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeZipCode()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Address",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeAddress()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See City",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeCity()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See SSN",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeSSN()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Create Date",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeCreateDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Zelle Enrolled",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeZelleEnrolled()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Country",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeCountry()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See User",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeUser()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Account",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeAccount()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See All Titles",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CustomerStepDef.seeAllTitles()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US11manageAccountChoose.feature");
formatter.feature({
  "name": "There user can choose an account created on manage accounts US011",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US011TC09"
    }
  ]
});
formatter.scenario({
  "name": "Nanage Account Test",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
    {
      "name": "@US011TC09"
    }
  ]
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
  "name": "Click Manage Accounts",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.clickManageAccounts()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Click FirstID",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.clickFirstID()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Description",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeDescription()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Balance",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeBalance()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Account Type",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeAccountType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Account Status Type",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeAccountStatusType()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See CreateDate",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeCreateDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See ClosedDate",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeClosedDate()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "See Employee",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.AccountChooseStepDef.seeEmployee()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US12manageCostumer.feature");
formatter.feature({
  "name": "An Employee can manage Customer",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
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
      "name": "@smoketest"
    },
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
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[text()\u003d\u0027View\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50581}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 9f43d719c29921d95de16857ef0ca5d0\n*** Element info: {Using\u003dxpath, value\u003d//span[text()\u003d\u0027View\u0027]}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToViewButton(ManageCostumerStepDef.java:69)\r\n\tat ✽.Click to View button.(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US12manageCostumer.feature:18)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "There should be Edit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.thereShouldBeEditButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded20.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be an Edit button where all customer information can be populated",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"»»\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50596}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: c31e64a6e6c5b9b795fd2a6cc4d54c70\n*** Element info: {Using\u003dlink text, value\u003d»»}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.click(Unknown Source)\r\n\tat stepdefinitions.ManageCostumerStepDef.goBackToManageCostumersPage(ManageCostumerStepDef.java:81)\r\n\tat ✽.go back to manage costumers page(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US12manageCostumer.feature:23)\r\n",
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
formatter.embedding("image/png", "embedded21.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "There should be Edit button where all customerThe Edit portal can allow user to create or update the user info",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.TimeoutException: Expected condition failed: waiting for visibility of Proxy element for: DefaultElementLocator \u0027By.xpath: (//*[contains(@href,\u00277393/edit\u0027)]\u0027 (tried for 2 second(s) with 500 milliseconds interval)\r\n\tat org.openqa.selenium.support.ui.WebDriverWait.timeoutException(WebDriverWait.java:95)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:272)\r\n\tat utilities.Driver.waitForVisibility(Driver.java:129)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToEditButton(ManageCostumerStepDef.java:91)\r\n\tat ✽.Click to Edit button(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US12manageCostumer.feature:28)\r\nCaused by: org.openqa.selenium.InvalidSelectorException: invalid selector: Unable to locate an element with the xpath expression (//*[contains(@href,\u00277393/edit\u0027)] because of the following error:\nSyntaxError: Failed to execute \u0027evaluate\u0027 on \u0027Document\u0027: The string \u0027(//*[contains(@href,\u00277393/edit\u0027)]\u0027 is not a valid XPath expression.\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/invalid_selector_exception.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50615}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 82b203755e14a58110fcdc74a0f4abfb\n*** Element info: {Using\u003dxpath, value\u003d(//*[contains(@href,\u00277393/edit\u0027)]}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.elementIfVisible(ExpectedConditions.java:314)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions.access$000(ExpectedConditions.java:43)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:300)\r\n\tat org.openqa.selenium.support.ui.ExpectedConditions$10.apply(ExpectedConditions.java:297)\r\n\tat org.openqa.selenium.support.ui.FluentWait.until(FluentWait.java:249)\r\n\tat utilities.Driver.waitForVisibility(Driver.java:129)\r\n\tat stepdefinitions.ManageCostumerStepDef.clickToEditButton(ManageCostumerStepDef.java:91)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
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
formatter.embedding("image/png", "embedded22.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can delete a customer, but seeing a message if the user is sure about deletion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"link text\",\"selector\":\"7393\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50630}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 5d598eef9a09722e37117227015c8f0d\n*** Element info: {Using\u003dlink text, value\u003d7393}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByLinkText(RemoteWebDriver.java:380)\r\n\tat org.openqa.selenium.By$ByLinkText.findElement(By.java:220)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.isDisplayed(Unknown Source)\r\n\tat stepdefinitions.ManageCostumerStepDef.confirmingThatACustomerIsRegisteredWithIDNumber(ManageCostumerStepDef.java:114)\r\n\tat ✽.Confirming that a customer is registered with ID number(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US12manageCostumer.feature:35)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "Click to Delete button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.ManageCostumerStepDef.clickToDeleteButton()"
});
formatter.result({
  "status": "skipped"
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
formatter.embedding("image/png", "embedded23.png", null);
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/resources/features/US13manageAccounts.feature");
formatter.feature({
  "name": "An Employee can create a new Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    },
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
      "name": "@smoketest"
    },
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
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-account\\-balance\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50672}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 69eba33a4fae93f5ed677f5ef3d1fe59\n*** Element info: {Using\u003did, value\u003dtp-account-balance}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.sendKeys(Unknown Source)\r\n\tat stepdefinitions.ManageAccountsStepdefs.enterANumberBeDollarToBalanceTextbox(ManageAccountsStepdefs.java:43)\r\n\tat ✽.Enter a number be dollar to Balance textbox(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US13manageAccounts.feature:19)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "User Shouldn\u0027t be error message",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.ManageAccountsStepdefs.userShouldnTBeErrorMessage()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded24.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027accountType\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50687}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 2f0be2870b7994228853fae764f871b6\n*** Element info: {Using\u003dname, value\u003daccountType}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat stepdefinitions.ManageAccountsStepdefs.userCanSelectAnAccountTypeAsCHECKINGSAVINGCREDIT_CARDOrINVESTING(ManageAccountsStepdefs.java:55)\r\n\tat ✽.User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US13manageAccounts.feature:24)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded25.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Account status should be defined as ACTIVE, SUSPENDED or CLOSED",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027accountStatusType\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50702}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 6235e42362b97013a6a4957fe3094667\n*** Element info: {Using\u003dname, value\u003daccountStatusType}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getTagName(Unknown Source)\r\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:45)\r\n\tat stepdefinitions.ManageAccountsStepdefs.accountStatusShouldBeDefinedAsACTIVESUSPENDEDOrCLOSED(ManageAccountsStepdefs.java:67)\r\n\tat ✽.Account status should be defined as ACTIVE, SUSPENDED or CLOSED(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US13manageAccounts.feature:28)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded26.png", null);
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "User can select an employee from the drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    },
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
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027accountStatusType\u0027]\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-D24GNPG\u0027, ip: \u0027192.168.1.45\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.9\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: C:\\Users\\Efekan\\AppData\\Loc...}, goog:chromeOptions: {debuggerAddress: localhost:50722}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: fa76cb3ddf2fdcc788a7ab512b8bb42f\n*** Element info: {Using\u003dname, value\u003daccountStatusType}\r\n\tat jdk.internal.reflect.GeneratedConstructorAccessor21.newInstance(Unknown Source)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy20.getWrappedElement(Unknown Source)\r\n\tat org.openqa.selenium.remote.internal.WebElementToJsonConverter.apply(WebElementToJsonConverter.java:50)\r\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\r\n\tat java.base/java.util.Spliterators$ArraySpliterator.forEachRemaining(Spliterators.java:948)\r\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:484)\r\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\r\n\tat java.base/java.util.stream.ReduceOps$ReduceOp.evaluateSequential(ReduceOps.java:913)\r\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\r\n\tat java.base/java.util.stream.ReferencePipeline.collect(ReferencePipeline.java:578)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.executeScript(RemoteWebDriver.java:484)\r\n\tat utilities.Driver.scrollToElement(Driver.java:281)\r\n\tat stepdefinitions.ManageAccountsStepdefs.userCanSelectAnEmployeeFromTheDropDown(ManageAccountsStepdefs.java:81)\r\n\tat ✽.User can select an employee from the drop-down(file:///C:/Users/Efekan/git/com.gmibank/src/test/resources/features/US13manageAccounts.feature:32)\r\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded27.png", null);
formatter.after({
  "status": "passed"
});
});