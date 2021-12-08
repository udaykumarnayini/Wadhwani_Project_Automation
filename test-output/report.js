$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/student.feature");
formatter.feature({
  "name": "Login cucumber",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "LW_TC_08_09 Verify new user is able to register and able to verify their mail id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "student should login with Random Mail Id and should verify that mail",
  "keyword": "When "
});
formatter.step({
  "name": "Student should close the browser",
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
        "",
        "pass"
      ]
    },
    {
      "cells": [
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "LW_TC_08_09 Verify new user is able to register and able to verify their mail id",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
    }
  ]
});
formatter.step({
  "name": "Student is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionStudent.studentIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "student should login with Random Mail Id and should verify that mail",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldLoginWithRandomMailIdAndShouldVerifyThatMail()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Student should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionStudent.studentShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
});