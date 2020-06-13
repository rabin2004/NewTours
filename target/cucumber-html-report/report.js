$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:signIn.feature");
formatter.feature({
  "name": "Sign-in",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Sign-in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters valid \"\u003cusername\u003e\" and valid \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be land in my account page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "test123",
        "12345"
      ]
    },
    {
      "cells": [
        "test567",
        "5678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sign-in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "SiginTest.user_open_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test123\" and valid \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "SiginTest.user_enters_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be land in my account page",
  "keyword": "Then "
});
formatter.match({
  "location": "SiginTest.user_should_be_land_in_my_account_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027Welcome user\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50806}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 39f3df618d2f8757c20dea8711d52be0\n*** Element info: {Using\u003dname, value\u003dWelcome user}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat Pages.AccountPage.UserTitle(AccountPage.java:19)\r\n\tat StepDefination.SiginTest.user_should_be_land_in_my_account_page(SiginTest.java:41)\r\n\tat ✽.user should be land in my account page(file:signIn.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign-in with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "SiginTest.user_open_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters valid \"test567\" and valid \"5678\"",
  "keyword": "When "
});
formatter.match({
  "location": "SiginTest.user_enters_valid_username_and_valid_password(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be land in my account page",
  "keyword": "Then "
});
formatter.match({
  "location": "SiginTest.user_should_be_land_in_my_account_page()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"*[name\u003d\u0027Welcome user\u0027]\"}\n  (Session info: chrome\u003d83.0.4103.97)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027USER\u0027, ip: \u0027192.168.0.106\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_211\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.97, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\User\\AppData\\Local...}, goog:chromeOptions: {debuggerAddress: localhost:50875}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 194067d77c01557b1df0c222dc207351\n*** Element info: {Using\u003dname, value\u003dWelcome user}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByName(RemoteWebDriver.java:404)\r\n\tat org.openqa.selenium.By$ByName.findElement(By.java:284)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy16.getText(Unknown Source)\r\n\tat Pages.AccountPage.UserTitle(AccountPage.java:19)\r\n\tat StepDefination.SiginTest.user_should_be_land_in_my_account_page(SiginTest.java:41)\r\n\tat ✽.user should be land in my account page(file:signIn.feature:25)\r\n",
  "status": "failed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Sign-in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.step({
  "name": "user enters invalid \"\u003cinvalidUsername\u003e\" and invalid \"\u003cinvalidPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "invalidUsername",
        "invalidPassword"
      ]
    },
    {
      "cells": [
        "notest123",
        "12345"
      ]
    },
    {
      "cells": [
        "notest456",
        "5678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Sign-in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "SiginTest.user_open_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"notest123\" and invalid \"12345\"",
  "keyword": "When "
});
formatter.match({
  "location": "SiginTest.user_enters_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "SiginTest.user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Sign-in with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user open newtours website",
  "keyword": "Given "
});
formatter.match({
  "location": "SiginTest.user_open_newtours_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters invalid \"notest456\" and invalid \"5678\"",
  "keyword": "When "
});
formatter.match({
  "location": "SiginTest.user_enters_invalid_and_invalid(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should not be able to login",
  "keyword": "Then "
});
formatter.match({
  "location": "SiginTest.user_should_not_be_able_to_login()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});