$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/faculty.feature");
formatter.feature({
  "name": "Login Wadhwani",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FA_29 Temporary password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag54"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty Should recieve temporary password in mail",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should close the Browser",
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
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_29 Temporary password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag54"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyIsOnTheLearnwiseLoginPage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Faculty Should recieve temporary password in mail",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldRecieveTemporaryPasswordInMail()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "skipped"
});
});