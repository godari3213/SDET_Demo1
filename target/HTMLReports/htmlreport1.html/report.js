$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:Features/demo.feature");
formatter.feature({
  "name": "Sample",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Sample product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "application is opened",
  "keyword": "Given "
});
formatter.match({
  "location": "DefineSteps.application_is_opened()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user brought mobile for 40",
  "keyword": "When "
});
formatter.match({
  "location": "DefineSteps.user_brought_mobile_for(Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Get pet details by ID from Online swagger pet Store",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@GetUser"
    }
  ]
});
formatter.step({
  "name": "The API is UP and running at \"https://petstore.swagger.io/\"",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "user sending Get Req \"v2/pet/222\"",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the response status code is 200",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "the response body must have \"message\" as \"available\"",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});