$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/feature/faculty.feature");
formatter.feature({
  "name": "Login Wadhwani",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "FA_01,FA_24Login Functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter valid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should verify success message",
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
        "username"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_01,FA_24Login Functionality with valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag1"
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
  "name": "Faculty should enter valid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterValid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifySuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_05 Verify Faculty should able to enter valid passkey or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
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
        "passkey"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_05 Verify Faculty should able to enter valid passkey or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag2"
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
formatter.scenarioOutline({
  "name": "FA_09 Verify if Faculty can enter only Lowercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
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
  "name": "FA_09 Verify if Faculty can enter only Lowercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag5"
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
  "name": "FA_10 Verify if Faculty can enter the combination of lowecase and uppercase as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
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
        "PAss"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_10 Verify if Faculty can enter the combination of lowecase and uppercase as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag6"
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
  "name": "Faculty should enter password\"PAss\"",
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
  "name": "FA_11 Faculty can enter the combination of alphabets,special characters and digits as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
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
        "pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_11 Faculty can enter the combination of alphabets,special characters and digits as new password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag7"
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
  "name": "Faculty should enter password\"pass@123\"",
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
  "name": "FA_13 Faculty can enter the password in Confirm password textfield",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "pass@123",
        "pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_13 Faculty can enter the password in Confirm password textfield",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag8"
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
  "name": "Faculty should enter password\"pass@123\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter confirm Password\"pass@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
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
  "name": "FA_14 Faculty can enter only Uppercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "PASS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_14 Faculty can enter only Uppercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag9"
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
  "name": "Faculty should enter confirm Password\"PASS\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
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
  "name": "FA_15 Faculty can enter only lowerercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "pass",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_15 Faculty can enter only lowerercase letters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag10"
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
  "name": "Faculty should enter confirm Password\"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
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
  "name": "FA_16 Faculty can enter the combination of lowecase and uppercase as Confirm password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "PAss"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_16 Faculty can enter the combination of lowecase and uppercase as Confirm password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag11"
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
  "name": "Faculty should enter confirm Password\"PAss\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
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
  "name": "FA_17 Faculty can enter the combination of alphabets,special characters and digits as Confirm password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_17 Faculty can enter the combination of alphabets,special characters and digits as Confirm password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag12"
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
  "name": "Faculty should enter confirm Password\"Pass@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
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
  "name": "FA_18 Faculty can tick the I hereby accept EULA checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "PASS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_18 Faculty can tick the I hereby accept EULA checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag13"
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
  "name": "Faculty should enter confirm Password\"PASS\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheEulaCheckbox()"
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
  "name": "FA_19 Faculty is shown End user license Agreement page after clicking EULA hyperlink",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on END USER LICENSE AGREEMENT",
  "keyword": "And "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "PASS"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_19 Faculty is shown End user license Agreement page after clicking EULA hyperlink",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag14"
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
  "name": "Faculty should enter confirm Password\"PASS\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on END USER LICENSE AGREEMENT",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnENDUSERLICENSEAGREEMENT()"
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
  "name": "FA_21 error message is shown after clicking on sign in when new password and confirm password entered is different",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_21 error message is shown after clicking on sign in when new password and confirm password entered is different",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag15"
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
  "name": "Faculty should enter confirm Password\"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheEulaCheckbox()"
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
  "name": "FA_22 error message is shown after clicking on signin button when entered random password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "884259",
        "PASS",
        "pass123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_22 error message is shown after clicking on signin button when entered random password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag16"
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
  "name": "Faculty should enter confirm Password\"pass123\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheEulaCheckbox()"
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
  "name": "FA_06 Faculty should able to enter Invalid passkey or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "ram",
        "PASS",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_06 Faculty should able to enter Invalid passkey or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag17"
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
  "name": "Faculty should  enter valid passkey\"ram\"",
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
  "name": "Faculty should enter confirm Password\"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheEulaCheckbox()"
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
  "name": "FA_20 Sign in button is not enabled without entering any of the three fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "",
        "",
        ""
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_20 Sign in button is not enabled without entering any of the three fields",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag18"
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
  "name": "Faculty should  enter valid passkey\"\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterValidPasskey(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter password\"\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter confirm Password\"\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on signin Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the eula checkbox",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheEulaCheckbox()"
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
  "name": "Verify Faculty should able to enter invalid email id or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
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
        "username"
      ]
    },
    {
      "cells": [
        "qapital.faculty05@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Faculty should able to enter invalid email id or not.",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag19"
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
  "name": "Faculty enter the username\"qapital.faculty05@yopmail.com\"",
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
  "name": "FA_23 if sign in button is not enabled without ticking the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
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
  "name": "Faculty should enter confirm Password\"\u003cpassword2\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should click on signin Button is enabled or not",
  "keyword": "Then "
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
        "password",
        "password2"
      ]
    },
    {
      "cells": [
        "qapital.faculty01@yopmail.com",
        "ram",
        "PASS",
        "pass"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_23 if sign in button is not enabled without ticking the checkbox",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag20"
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
  "name": "Faculty should  enter valid passkey\"ram\"",
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
  "name": "Faculty should enter confirm Password\"pass\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterConfirmPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on signin Button is enabled or not",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSigninButtonIsEnabledOrNot()"
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
  "name": "FA_25 Login Functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should verify its enter success message",
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
        "username"
      ]
    },
    {
      "cells": [
        "qapital.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_25 Login Functionality with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag21"
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
  "name": "Faculty should enter invalid \"qapital.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its enter success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsEnterSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_2,FA_3,FA_26,FA_27Login Functionality with invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter the invalid password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its  success message",
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
        "qapital.faculty@yopmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_2,FA_3,FA_26,FA_27Login Functionality with invalid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag22"
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
  "name": "Faculty should enter invalid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter the invalid password\"1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterTheInvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its  success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_28 Signin Button is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter invalid \"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should enter the invalid password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click the Sign in Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty should verify its  success message",
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
        "qapital.faculty@yopmail.com",
        "1234"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_28 Signin Button is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag23"
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
  "name": "Faculty should enter invalid \"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterInvalid(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should enter the invalid password\"1234\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterTheInvalidPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click the Sign in Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickTheSignInButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its  success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessMessage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_29 Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty click the forgot password\"\u003cforgot password\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its successfully click",
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
        "username"
      ]
    },
    {
      "cells": [
        "qapital.faculty@yopmail.com"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_29 Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag24"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the forgot password\"\u003cforgot password\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheForgotPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_31 Signin button is click or not with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should verify its successfully click",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_31 Signin button is click or not with valid password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag25"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should verify its successfully click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldVerifyItsSuccessfullyClick()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_32, FA_33, FA_34Dashboard is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_32, FA_33, FA_34Dashboard is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag26"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_35 Index is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on index Button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_35 Index is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag27"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on index Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnIndexButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_36Resume is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on Resume Button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_36Resume is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag28"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Resume Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnResumeButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_37 course plan is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on course plan Button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_37 course plan is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag29"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on course plan Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnCoursePlanButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_38, FA_39 other course is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty should enter an valid email\"\u003cusername\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.step({
  "name": "Faculty enter the password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on other course Button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_38, FA_39 other course is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag30"
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
  "name": "Faculty should enter an valid email\"qapital.faculty@yopmail.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldEnterAnValidEmail(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click the next Button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterThePassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty click on signin button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickOnSigninButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on dashboard Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnDashboardButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on other course Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnOtherCourseButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_40, FA_41, FA_42, FA_43 Verify Faculty should able to click on start courses or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on course",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_40, FA_41, FA_42, FA_43 Verify Faculty should able to click on start courses or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag31"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on course",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_44 Click on create Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on courses",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_44 Click on create Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag32"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on courses",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnCourses()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_45 Entering Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on create batch",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_45 Entering Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag33"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on create batch",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnCreateBatch()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_46 Copy Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click Create BATCH",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_46 Copy Batch Details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag34"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click Create BATCH",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickCreateBATCH()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_47,FA_48,FA_49 Enter copy batch details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click Copy BATCH",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_47,FA_48,FA_49 Enter copy batch details",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag35"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click Copy BATCH",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickCopyBATCH()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_50Clicking on Start Course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag36"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should click on Start course",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_50Clicking on Start Course",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag36"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should click on Start course",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldClickOnStartCourse()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_51Changing Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag37"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "User should see the batch names in dropdown options",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_51Changing Batch",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag37"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should see the batch names in dropdown options",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.userShouldSeeTheBatchNamesInDropdownOptions()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_52,FA_53 Faculty should give mock test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag38"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "click on mock test",
  "keyword": "When "
});
formatter.step({
  "name": "click on play button",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_52,FA_53 Faculty should give mock test",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag38"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on mock test",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnMockTest()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click on play button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickOnPlayButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_54,FA_55,FA_56 Faculty should take Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag39"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on quizzes",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_54,FA_55,FA_56 Faculty should take Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag39"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on quizzes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_57,FA_58Faculty taking Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag40"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click Quizzes",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on take quizzes",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_57,FA_58Faculty taking Quizzes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag40"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click Quizzes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on take quizzes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnTakeQuizzes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_59,FA_61Faculty should view quizz results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag41"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should should take Quizz",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on view quizz Results",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_59,FA_61Faculty should view quizz results",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag41"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should should take Quizz",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldShouldTakeQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on view quizz Results",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnViewQuizzResults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_62,FA_63 Faculty should take quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag42"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should take quizz",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on submit",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_62,FA_63 Faculty should take quizz",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag42"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should take quizz",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldTakeQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_65Verify Faculty should view Practice Venture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag43"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th Practice Venture",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Practice Venture",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_65Verify Faculty should view Practice Venture",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag43"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th Practice Venture",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThPracticeVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Practice Venture",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnPracticeVenture()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_70-FA_76Verify Faculty should view PV Milestones",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag44"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th PV Milestones",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on PV Milestones",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_70-FA_76Verify Faculty should view PV Milestones",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag44"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th PV Milestones",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThPVMilestones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on PV Milestones",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnPVMilestones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_77 Verify Faculty should click on faculty notes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag45"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see th Faculty Notes",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Faculty Notes",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_77 Verify Faculty should click on faculty notes",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag45"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see th Faculty Notes",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeThFacultyNotes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Faculty Notes",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnFacultyNotes()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_78Verify Faculty should see the lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag46"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the lessons",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on lessons",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_78Verify Faculty should see the lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag46"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the lessons",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on lessons",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_92-FA_94Verify Faculty should click on report tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag47"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the report module",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on Report Module",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_92-FA_94Verify Faculty should click on report tab",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag47"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the report module",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheReportModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on Report Module",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnReportModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_95,FA_96Verify Faculty should click on Notification icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag48"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Notification icon",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_95,FA_96Verify Faculty should click on Notification icon",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag48"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Notification icon",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheNotificationIcon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_60 Faculty should take quizz again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag49"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should take quizz again",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should Re-attempt quizz",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_60 Faculty should take quizz again",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag49"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should take quizz again",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldTakeQuizzAgain()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should Re-attempt quizz",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldReAttemptQuizz()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in teaching mode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag50"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should click on START COURSe",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click on teaching",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in teaching mode",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag50"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on START COURSe",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnSTARTCOURSe()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click on teaching",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickOnTeaching()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_79Faculty should be in Manage Batches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag51"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Manage Batches",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_79Faculty should be in Manage Batches",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag51"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Manage Batches",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheManageBatches()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_87 Faculty should be in Run lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag52"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Run lessons",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_87 Faculty should be in Run lessons",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag52"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Run lessons",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheRunLessons()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Faculty should be in No Upcoming Module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag53"
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
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the No Upcoming Module",
  "keyword": "When "
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Faculty should be in No Upcoming Module",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag53"
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
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the No Upcoming Module",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheNoUpcomingModule()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_64 Faculty should save and submit quizz",
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
  "name": "Faculty enter the username\"\u003cusername\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "click the next button and enter password\"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.step({
  "name": "Faculty should see the Save and continue",
  "keyword": "When "
});
formatter.step({
  "name": "Faculty should click save and submit",
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
        "qapital.faculty@yopmail.com",
        "Pass@123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "FA_64 Faculty should save and submit quizz",
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
  "status": "passed"
});
formatter.step({
  "name": "Faculty enter the username\"qapital.faculty@yopmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyEnterTheUsername(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the next button and enter password\"Pass@123\"",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.clickTheNextButtonAndEnterPassword(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should see the Save and continue",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldSeeTheSaveAndContinue()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should click save and submit",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldClickSaveAndSubmit()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "FA_29 Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag55"
    }
  ]
});
formatter.step({
  "name": "Faculty is on the Learnwise Login Page",
  "keyword": "Given "
});
formatter.step({
  "name": "Faculty click the Next Button",
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
  "name": "FA_29 Forgot password is click or not",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@tag55"
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
  "name": "Faculty click the Next Button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyClickTheNextButton1()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Faculty should close the Browser",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinitionFaculty.facultyShouldCloseTheBrowser()"
});
formatter.result({
  "status": "passed"
});
});