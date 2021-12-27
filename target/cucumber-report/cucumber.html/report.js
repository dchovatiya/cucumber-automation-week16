$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("FindStore.feature");
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
  "duration": 14164736700,
  "status": "passed"
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
  "duration": 223252000,
  "status": "passed"
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
  "duration": 7750876700,
  "status": "passed"
});
formatter.match({
  "location": "OurStoreSteps.iClickOnOKButton()"
});
formatter.result({
  "duration": 88849500,
  "status": "passed"
});
formatter.match({
  "location": "OurStoreSteps.iScrollOnMap()"
});
formatter.result({
  "duration": 2873763200,
  "status": "passed"
});
formatter.match({
  "location": "OurStoreSteps.iClickOnZoomOut()"
});
formatter.result({
  "duration": 213272100,
  "status": "passed"
});
formatter.match({
  "location": "OurStoreSteps.iTakeScreenshot()"
});
formatter.result({
  "duration": 514288200,
  "status": "passed"
});
formatter.after({
  "duration": 2420304900,
  "status": "passed"
});
});