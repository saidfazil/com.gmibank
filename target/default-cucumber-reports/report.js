$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/US19adminCreateNewAccount.feature");
formatter.feature({
  "name": "System should allow Admin to create a new Account",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@US19"
    }
  ]
});
formatter.scenario({
  "name": "The New Account.",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US19"
    },
    {
      "name": "@US19TC01"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "gmibank.com address goes",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.gmibank_com_address_goes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a clicks dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.enter_a_clicks_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the username enters i",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_username_enters_i()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user password enters u",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_user_password_enters_u()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the `` My Operations \u0027\u0027 drop-down menu at one click.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_the_My_Operations_drop_down_menu_at_one_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Managing Accounts is safe",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.managing_Accounts_is_safe()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "create a new Account and more",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.create_a_new_Account_and_more()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#jh\\-create\\-entity\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:14ba:3fb:5800:0:0:0:3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:61520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61022d60d9a7e9fd7aee2afb15bfbe55\n*** Element info: {Using\u003did, value\u003djh-create-entity}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat stepdefinitions.CreateNewAccountStepDef.create_a_new_Account_and_more(CreateNewAccountStepDef.java:60)\n\tat ✽.create a new Account and more(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US19adminCreateNewAccount.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "The User Descrition field is clicked but left blank.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_Descrition_field_is_clicked_but_left_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen the user enters a number in the \u0027Banalce\u0027 field",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_the_user_enters_a_number_in_the_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Account Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Account_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Account Status Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Account_Status_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen User Employee clicks dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_User_Employee_clicks_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Save button.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User should provide a balance for the first time account creation as Dollar",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US19"
    },
    {
      "name": "@US19TC02"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User sign out",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gmibank.com address goes",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.gmibank_com_address_goes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a clicks dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.enter_a_clicks_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the username enters i",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_username_enters_i()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user password enters u",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_user_password_enters_u()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the My Operations drop-down menu at one click.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_the_My_Operations_drop_down_menu_at_one_click()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Managing Accounts is safe",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.managing_Accounts_is_safe()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:14ba:3fb:5800:0:0:0:3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:61520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61022d60d9a7e9fd7aee2afb15bfbe55\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat stepdefinitions.CreateNewAccountStepDef.managing_Accounts_is_safe(CreateNewAccountStepDef.java:55)\n\tat ✽.Managing Accounts is safe(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US19adminCreateNewAccount.feature:32)\n",
  "status": "failed"
});
formatter.step({
  "name": "create a new Account and more",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.create_a_new_Account_and_more()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "The User Descrition field is clicked but left blank.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_Descrition_field_is_clicked_but_left_blank()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen the user enters a number in the \u0027Banalce\u0027 field",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_the_user_enters_a_number_in_the_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Account Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Account_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Account Status Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Account_Status_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen User Employee clicks dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_User_Employee_clicks_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "hen clicks Save button.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.hen_clicks_Save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US19"
    },
    {
      "name": "@US19TC03"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User sign out",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gmibank.com address goes",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.gmibank_com_address_goes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a clicks dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.enter_a_clicks_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the username enters i",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_username_enters_i()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user password enters u",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_user_password_enters_u()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \u0027My Operations\u0027 dropdown menu at one click.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_the_dropdown_menu_at_one_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Managing Accounts is safe",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.managing_Accounts_is_safe()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d86.0.4240.198)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:14ba:3fb:5800:0:0:0:3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:61520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61022d60d9a7e9fd7aee2afb15bfbe55\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat sun.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.lang.reflect.Method.invoke(Method.java:498)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat stepdefinitions.CreateNewAccountStepDef.managing_Accounts_is_safe(CreateNewAccountStepDef.java:55)\n\tat ✽.Managing Accounts is safe(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US19adminCreateNewAccount.feature:50)\n",
  "status": "failed"
});
formatter.step({
  "name": "create a new Account and more",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.create_a_new_Account_and_more()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Click User Account Status Type dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_User_Account_Status_Type_dropdown()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirms that the \"Checking\" option can be selected from the drop down select menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirms_that_the_option_can_be_selected_from_the_drop_down_select_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirms that the \"Saving\" option can be selected from the select menu that opens.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirms_that_the_option_can_be_selected_from_the_select_menu_that_opens(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "it verifies that the \"Credit_Card\" option is selectable from the select menu that opens.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.it_verifies_that_the_option_is_selectable_from_the_select_menu_that_opens(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirms that the \"Investing\" option can be selected from the opened seleck menu.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirms_that_the_option_can_be_selected_from_the_opened_seleck_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Account status should be defined as ACTIVE, SUSPENDED or CLOSED",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US19"
    },
    {
      "name": "@US19TC04"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User sign out",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gmibank.com address goes",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.gmibank_com_address_goes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a clicks dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.enter_a_clicks_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the username enters i",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_username_enters_i()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user password enters u",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_user_password_enters_u()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \u0027My Operations\u0027 droppdown menu at one click.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_the_droppdown_menu_at_one_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "An Account Type dropdown menu",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.an_Account_Type_dropdown_menu()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-account\\-accountType\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:14ba:3fb:5800:0:0:0:3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:61520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61022d60d9a7e9fd7aee2afb15bfbe55\n*** Element info: {Using\u003did, value\u003dtp-account-accountType}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat stepdefinitions.CreateNewAccountStepDef.an_Account_Type_dropdown_menu(CreateNewAccountStepDef.java:150)\n\tat ✽.An Account Type dropdown menu(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US19adminCreateNewAccount.feature:68)\n",
  "status": "failed"
});
formatter.step({
  "name": "confirms that the \"Suespended\" option is selectable from the select menu that opens.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirms_that_the_option_is_selectable_from_the_select_menu_that_opens(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "confirm that the \"Off\" option is selectable from the drop-down menu.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirm_that_the_option_is_selectable_from_the_drop_down_menu(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "User can select an employee from the drop-down",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@US19"
    },
    {
      "name": "@US19TC05"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "The User sign out",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_User_sign_out()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "gmibank.com address goes",
  "keyword": "Given "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.gmibank_com_address_goes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "enter a clicks dropdown menu",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.enter_a_clicks_dropdown_menu()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "sign in",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.sign_in()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the username enters i",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_username_enters_i()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user password enters u",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.the_user_password_enters_u()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the \u0027MyOperations\u0027 dropdown menu att one click.",
  "keyword": "And "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.click_the_dropdown_menu_att_one_click(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User Employee clicks dropdown",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.user_Employee_clicks_dropdown()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#tp\\-account\\-employee\"}\n  (Session info: chrome\u003d86.0.4240.198)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Air-MacBook-Air.local\u0027, ip: \u00272001:14ba:3fb:5800:0:0:0:3%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.6\u0027, java.version: \u00271.8.0_241\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 86.0.4240.198, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/t_/rz3t8_b5221...}, goog:chromeOptions: {debuggerAddress: localhost:61520}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 61022d60d9a7e9fd7aee2afb15bfbe55\n*** Element info: {Using\u003did, value\u003dtp-account-employee}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy17.click(Unknown Source)\n\tat stepdefinitions.CreateNewAccountStepDef.user_Employee_clicks_dropdown(CreateNewAccountStepDef.java:174)\n\tat ✽.User Employee clicks dropdown(file:///Users/air/IdeaProjects/com.gmibank/src/test/resources/features/US19adminCreateNewAccount.feature:83)\n",
  "status": "failed"
});
formatter.step({
  "name": "confirms that an employee can be selected from the select drop-down menu.",
  "keyword": "Then "
});
formatter.match({
  "location": "stepdefinitions.CreateNewAccountStepDef.confirms_that_an_employee_can_be_selected_from_the_select_drop_down_menu()"
});
formatter.result({
  "status": "skipped"
});
});