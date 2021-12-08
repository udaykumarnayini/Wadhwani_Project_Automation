$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/faculty.feature");
formatter.feature({
  "name": "Login Wadhwani",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FA_07 Verify Faculty should able to set password or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should  enter valid passkey\"\u003cpasskey\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should close the browser",
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
        "passkey",
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_07 Verify Faculty should able to set password or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag3"
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
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty01@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should  enter valid passkey\"884259\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterValidPasskey(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter password\"pass\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser1()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_08 Verify if Faculty can enter only Uppercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should  enter valid passkey\"\u003cpasskey\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter password\"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should close the browser",
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
        "passkey",
        "password"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_08 Verify if Faculty can enter only Uppercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag4"
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
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty01@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should  enter valid passkey\"884259\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterValidPasskey(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter password\"PASS\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser1()"
});
formatter.result({
  "status": "passed"
});
});