$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("CreateAccount.feature");
formatter.feature({
  "line": 1,
  "name": "Create Account Test",
  "description": "As a user I should able to create account successfully",
  "id": "create-account-test",
  "keyword": "Feature"
});
formatter.before({
  "duration": 8938114700,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShoppingCartSteps.iAmInHomePage()"
});
formatter.result({
  "duration": 148276900,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "User should create account successfully",
  "description": "",
  "id": "create-account-test;user-should-create-account-successfully",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I click On \"Sign in\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I enter \"Email\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I click on create account button",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User enters following user details",
  "rows": [
    {
      "cells": [
        "firstName",
        "lastName",
        "eMail",
        "password",
        "days",
        "month",
        "year",
        "FirstNm",
        "LastNm",
        "Company",
        "Address",
        "City",
        "State",
        "ZipCode",
        "Country",
        "MobilePhone",
        "Alias"
      ],
      "line": 14
    },
    {
      "cells": [
        "Dimple",
        "Patel",
        "dimple123@gmail.com",
        "java123",
        "26",
        "11",
        "1983",
        "Dimple",
        "Patel",
        "Glenwood",
        "419 Street",
        "London",
        "New York",
        "12456",
        "United States",
        "0795468578",
        "419 Street"
      ],
      "line": 15
    }
  ],
  "keyword": "When "
});
formatter.step({
  "line": 16,
  "name": "clicks register button",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "I should be able to see account name \"Dimple patel\" on top right",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "verify the text",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "Sign in",
      "offset": 12
    }
  ],
  "location": "AccountSteps.iClickOn(String)"
});
formatter.result({
  "duration": 1025650900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Email",
      "offset": 9
    }
  ],
  "location": "AccountSteps.iEnter(String)"
});
formatter.result({
  "duration": 527822500,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.iClickOnCreateAccountButton()"
});
formatter.result({
  "duration": 114296600,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.userEntersFollowingUserDetails(DataTable)"
});
formatter.result({
  "duration": 4785723800,
  "status": "passed"
});
formatter.match({
  "location": "AccountSteps.clicksRegisterButton()"
});
formatter.result({
  "duration": 1325900700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Dimple patel",
      "offset": 38
    }
  ],
  "location": "AccountSteps.iShouldBeAbleToSeeAccountNameOnTopRight(String)"
});
formatter.result({
  "duration": 20044097900,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#my\\-account\"}\n  (Session info: chrome\u003d96.0.4664.110)\nFor documentation on this error, please visit: https://selenium.dev/exceptions/#no_such_element\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [a5f5e1437ed809755263a2230c39cb4e, findElement {using\u003did, value\u003dmy-account}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62197}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62197/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: a5f5e1437ed809755263a2230c39cb4e\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.ElementLocation$ElementFinder$2.findElement(ElementLocation.java:162)\r\n\tat org.openqa.selenium.remote.ElementLocation.findElement(ElementLocation.java:60)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:383)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:375)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:70)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:39)\r\n\tat com.sun.proxy.$Proxy23.getText(Unknown Source)\r\n\tat com.automationpractice.pages.HomePage.verifyMyName(HomePage.java:74)\r\n\tat com.automationpractice.cucumber.steps.AccountSteps.iShouldBeAbleToSeeAccountNameOnTopRight(AccountSteps.java:85)\r\n\tat ✽.Then I should be able to see account name \"Dimple patel\" on top right(CreateAccount.feature:17)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "AccountSteps.verifyTheText()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 203827800,
  "status": "passed"
});
formatter.uri("FindStore.feature");
formatter.feature({
  "line": 2,
  "name": "Find Store On Map",
  "description": "As a user I want to browse store on map and take screenshot for future reference",
  "id": "find-store-on-map",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "duration": 3678074800,
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d96.0.4664.110)\nBuild info: version: \u00274.0.0\u0027, revision: \u00273a21814679\u0027\nSystem info: host: \u0027PARAM397HP\u0027, ip: \u0027192.168.0.8\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_121\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [2e45b67ead408a4d20b4e93128eb98a7, get {url\u003dhttp://automationpractice.com/index.php}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 96.0.4664.110, chrome: {chromedriverVersion: 96.0.4664.45 (76e4c1bb2ab46..., userDataDir: C:\\Users\\jpate\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:62249}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), se:cdp: ws://localhost:62249/devtoo..., se:cdpVersion: 96.0.4664.110, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:virtualAuthenticators: true}\nSession ID: 2e45b67ead408a4d20b4e93128eb98a7\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\r\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:164)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:139)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:559)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:328)\r\n\tat com.automationpractice.drivermanager.ManageDriver.selectBrowser(ManageDriver.java:47)\r\n\tat com.automationpractice.cucumber.Hooks.setUp(Hooks.java:19)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.lang.reflect.Method.invoke(Method.java:498)\r\n\tat cucumber.runtime.Utils$1.call(Utils.java:40)\r\n\tat cucumber.runtime.Timeout.timeout(Timeout.java:16)\r\n\tat cucumber.runtime.Utils.invoke(Utils.java:34)\r\n\tat cucumber.runtime.java.JavaHookDefinition.execute(JavaHookDefinition.java:60)\r\n\tat cucumber.runtime.Runtime.runHookIfTagsMatch(Runtime.java:224)\r\n\tat cucumber.runtime.Runtime.runHooks(Runtime.java:212)\r\n\tat cucumber.runtime.Runtime.runBeforeHooks(Runtime.java:202)\r\n\tat cucumber.runtime.model.CucumberScenario.run(CucumberScenario.java:40)\r\n\tat cucumber.runtime.junit.ExecutionUnitRunner.run(ExecutionUnitRunner.java:102)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:63)\r\n\tat cucumber.runtime.junit.FeatureRunner.runChild(FeatureRunner.java:18)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.runtime.junit.FeatureRunner.run(FeatureRunner.java:70)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:95)\r\n\tat cucumber.api.junit.Cucumber.runChild(Cucumber.java:38)\r\n\tat org.junit.runners.ParentRunner$3.run(ParentRunner.java:238)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:63)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:236)\r\n\tat org.junit.runners.ParentRunner.access$000(ParentRunner.java:53)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:229)\r\n\tat org.junit.internal.runners.statements.RunAfters.evaluate(RunAfters.java:27)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:309)\r\n\tat cucumber.api.junit.Cucumber.run(Cucumber.java:100)\r\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:160)\r\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:69)\r\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\r\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:235)\r\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:54)\r\n",
  "status": "failed"
});
formatter.background({
  "line": 5,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 6,
  "name": "I am in home page",
  "keyword": "Given "
});
formatter.match({
  "location": "ShoppingCartSteps.iAmInHomePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "line": 8,
  "name": "Verify user able to browse the store on map",
  "description": "",
  "id": "find-store-on-map;verify-user-able-to-browse-the-store-on-map",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 9,
  "name": "I select On \"Our stores\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on OK button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "I scroll on map",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I click On zoomOut",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "I take screenshot",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Our stores",
      "offset": 13
    }
  ],
  "location": "OurStoreSteps.iSelectOn(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OurStoreSteps.iClickOnOKButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OurStoreSteps.iScrollOnMap()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OurStoreSteps.iClickOnZoomOut()"
});
formatter.result({
  "status": "skipped"
});
formatter.match({
  "location": "OurStoreSteps.iTakeScreenshot()"
});
formatter.result({
  "status": "skipped"
});
