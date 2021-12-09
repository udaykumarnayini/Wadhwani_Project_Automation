package com.step;


import java.util.Random;
import java.util.concurrent.TimeUnit;


import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

import com.pom.LoginPom;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;




public class StepDefinitionFaculty{

    WebDriver driver;
    private static Logger Logger= LogManager.getLogger(StepDefinitionFaculty.class);

    LoginPom pom = new LoginPom();
    @Given("Faculty is on the Learnwise Login Page")
    public void facultyIsOnTheLearnwiseLoginPage() {
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.get("https://learnwise.wfglobal.org");
        Logger.info("LeaarnWise Faculty URL opened");

        driver.manage().window().maximize();
        Logger.info("Browser Maximized");
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);

    }
    @Then("Faculty click on chatbox")
    public void facultyClickOnChatbox() {
        LoginPom.chatBox(driver).click();
        Logger.info("Clicked on chatbox");

    }


    @When("Faculty should enter valid {string}")
    public void facultyShouldEnterValid(String string) {

        LoginPom.username(driver).sendKeys(string);
        Logger.info("Username entered");
    }

    @Then("Faculty should verify success message")
    public void facultyShouldVerifySuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
        Logger.info("verified");
    }
    @Then("Faculty should close the Browser")
    public void facultyShouldCloseTheBrowser() {
        driver.quit();
        Logger.info("Browser Closed");
    }

    @When("Faculty should enter invalid {string}")
    public void facultyShouldEnterInvalid(String string) {
        LoginPom.username(driver).sendKeys(string);
        Logger.info("username entered is invalid");
    }

    @Then("Faculty should verify its enter success message")
    public void facultyShouldVerifyItsEnterSuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
        Logger.info("verified");
    }
    @When("Faculty should click next Button")
    public void facultyShouldClickNextButton() {
        LoginPom.nextBtn(driver).click();
        Logger.info("next button clicked");
    }

    @Then("Faculty should enter the invalid password{string}")
    public void facultyShouldEnterTheInvalidPassword(String string) {
        LoginPom.facultyPassword(driver).click();
        Logger.info("Password entered");
    }
    @Then("Faculty should verify its  success message")
    public void facultyShouldVerifyItsSuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
        Logger.info("verified");
    }
    @Then("Faculty should click the Sign in Button")
    public void facultyShouldClickTheSignInButton() {
        LoginPom.facultySigninButton(driver).click();
        Logger.info("next Button clicked");
    }
    @When("Faculty should enter an valid email{string}")
    public void facultyShouldEnterAnValidEmail(String string) {
        LoginPom.username(driver).sendKeys(string);
        Logger.info("username entered");
    }

    @When("Faculty click the next Button")
    public void facultyClickTheNextButton() {
        LoginPom.nextBtn(driver).click();
        Logger.info("next Button clicked");
    }

    @Then("Faculty click the forgot password{string}")
    public void facultyClickTheForgotPassword(String string) {
        LoginPom.facultyforgotPAss(driver).click();
        Logger.info("Forgot password is Clicked");
    }

    @Then("Faculty should verify its successfully click")
    public void facultyShouldVerifyItsSuccessfullyClick() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
        Logger.info("verified");
    }
    @Then("Faculty enter the password{string}")
    public void facultyEnterThePassword(String string) {
        LoginPom.facultyPassword(driver).sendKeys(string);
        Logger.info("faculty password entered");
    }

    @Then("Faculty click on signin button")
    public void facultyClickOnSigninButton() throws InterruptedException {
        LoginPom.facultySigninButton(driver).click();
        Logger.info("signin button is clicked");
    }
    @Then("click on dashboard Button")
    public void clickOnDashboardButton() throws InterruptedException {
        LoginPom.dashboardButton(driver).click();
        Thread.sleep(5000);
        Logger.info("dashboard Button is clicked");
    }



    @Then("Faculty should click on index Button")
    public void facultyShouldClickOnIndexButton() throws InterruptedException {
        LoginPom.indexButton(driver).click();
        Logger.info("index button is clicked");

    }


    @Then("Faculty should click on Resume Button")
    public void facultyShouldClickOnResumeButton() throws InterruptedException {
        LoginPom.resumeButton(driver).click();
        Thread.sleep(5000);
        Logger.info("resume button is clicked");
    }


    @Then("Faculty should click on course plan Button")
    public void facultyShouldClickOnCoursePlanButton() throws InterruptedException {
        LoginPom.coursePlan(driver).click();
        Thread.sleep(10000);
        Logger.info("courseplan is clicked");
    }


    @Then("Faculty should click on other course Button")
    public void facultyShouldClickOnOtherCourseButton() {
        LoginPom.otherCourses(driver).click();
        Logger.info("other course button is clicked");
    }






    @And("Faculty enter the username{string}")
    public void facultyEnterTheUsername(String string) {

        LoginPom.username(driver).sendKeys(string);
        Logger.info("username entered");
    }
    @Then("click the next button and enter password{string}")
    public void clickTheNextButtonAndEnterPassword(String string) {
        LoginPom.nextBtn(driver).click();
        Logger.info("next button is clicked");
        LoginPom.facultyPassword(driver).sendKeys(string);
        Logger.info("faculty password entered");
        LoginPom.signin(driver).click();
        Logger.info("signin button clicked");

    }

    @When("User should click on course")
    public void userShouldClickOnCourse() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button clicked");
        Thread.sleep(2000);
        System.out.println("Clicking On Course Module");
    }







    //	Tag13


    @When("User should click on courses")
    public void userShouldClickOnCourses() throws Exception {

        LoginPom.courses(driver).click();
        Logger.info("courses button clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourse(driver).click();
        Logger.info("Foundational course button is clicked");
        LoginPom.createnewbatch(driver).click();
        Logger.info("Create new batch is clicked");

        Thread.sleep(2000);
    }



//	//	Tag14

    @When("click on create batch")
    public void clickOnCreateBatch() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourse(driver).click();
        Logger.info("Foundational course button is clicked");
        LoginPom.createnewbatch(driver).click();
        Logger.info("Create new batch is clicked");


        Thread.sleep(5000);
        LoginPom.batchName(driver).sendKeys("Batch111");
        Logger.info("batchname is entered");
        LoginPom.batchNumbers(driver).sendKeys("12");
        Logger.info("batchnumber is entered");
        Thread.sleep(5000);
        LoginPom.createbatchButton(driver).click();
        Logger.info("create batch button is clicked");
    }




    //	Tag15



    @When("User should click Create BATCH")
    public void userShouldClickCreateBATCH() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);

        LoginPom.foundationalcourse(driver).click();
        Logger.info("Foundational course button is clicked");
        LoginPom.copyBatch(driver).click();
        Logger.info("copy batch button is clicked");
        Thread.sleep(3000);
    }



    //	Tag16


    @When("User should click Copy BATCH")
    public void userShouldClickCopyBATCH() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourse(driver).click();
        Logger.info("Foundational course button is clicked");
        LoginPom.copyBatch(driver).click();
        Logger.info("copy batch button is clicked");
        LoginPom.batchName(driver).sendKeys("Batch200");
        Logger.info("batchname is entered");

        Thread.sleep(2000);

    }
//	Tag17


    @When("User should click on Start course")
    public void userShouldClickOnStartCourse() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("Foundational course button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("ok button is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("Preparation mode button is clicked");
        Thread.sleep(3000);
    }



    //Tag18


    @When("User should see the batch names in dropdown options")
    public void userShouldSeeTheBatchNamesInDropdownOptions() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("Foundational course start button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");
        LoginPom.userbatchSwitch(driver).click();
        Logger.info("userbatchSwitch button is clicked");

        Thread.sleep(2000);


    }


    //Tag19


    @When("click on mock test")
    public void clickOnMockTest() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("Foundational course start button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");


        JavascriptExecutor js=(JavascriptExecutor)driver;

        WebElement MockTest=LoginPom.mockTest(driver);
        js.executeScript("arguments[0].scrollIntoView();",MockTest);
        LoginPom.mockTest(driver).click();
        Logger.info("mock test button is clicked");
        Thread.sleep(3000);

    }

    @Then("click on play button")
    public void clickOnPlayButton() throws Exception {
        LoginPom.coursestartgreter(driver).click();
        Logger.info("coursestartgreter button is clicked");

        Thread.sleep(3000);

        System.out.println("Clicking On Mock Test");
    }

    //Tag20


    @When("Faculty should click on quizzes")
    public void facultyShouldClickOnQuizzes() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("Foundational course start button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");

        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes button is clicked");

    }
//Tag21


    @When("Faculty should click Quizzes")
    public void facultyShouldClickQuizzes() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("Foundational course start button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");


        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes button is clicked");

    }

    @Then("Faculty should click on take quizzes")
    public void facultyShouldClickOnTakeQuizzes() throws InterruptedException {
        LoginPom.facultytakequizzes(driver).click();
        Logger.info("facultytakequizzes button is clicked");


        System.out.println("Faculty should click on take quizzes");
        Thread.sleep(3000);
    }


    //Tag22


    @When("Faculty should should take Quizz")
    public void facultyShouldShouldTakeQuizz() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationModeButton is clicked");
        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes button is clicked");
    }

    @Then("Faculty should click on view quizz Results")
    public void facultyShouldClickOnViewQuizzResults() throws Exception {



        LoginPom.viewquizzeresult(driver).click();
        Logger.info("viewquizzeresult button is clicked");
        System.out.println("Faculty should click on view quizz Results");
        Thread.sleep(3000);
    }


    //Tag23

    @When("Faculty should see th Practice Venture")
    public void facultyShouldSeeThPracticeVenture() throws InterruptedException {
        LoginPom.courses(driver).click();
        Logger.info("cousrses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        Thread.sleep(3000);
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode is clicked");
        Thread.sleep(3000);
    }

    @Then("Faculty should click on Practice Venture")
    public void facultyShouldClickOnPracticeVenture() throws Exception {
        Thread.sleep(2000);
        LoginPom.facultypracticeventure(driver).click();
        Logger.info("facultypracticeventure is clicked");
        System.out.println("Faculty should click on Practice Venture");
        Thread.sleep(3000);
    }

    //	Tag24

    @When("Faculty should see th PV Milestones")
    public void facultyShouldSeeThPVMilestones() throws InterruptedException {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info(" preparationMode is clicked");
    }
    @Then("Faculty should click on PV Milestones")
    public void facultyShouldClickOnPVMilestones() {
        LoginPom.facultypracticeventure(driver).click();
        Logger.info("facultypracticeventure is clicked");
        System.out.println("Faculty should click on PV Milestones");
    }


    //Tag25


    @When("Faculty should take quizz")
    public void facultyShouldTakeQuizz() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info(" preparationMode is clicked");
        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes button is clicked");
        LoginPom.facultytakequizzes(driver).click();
        Logger.info("facultytakequizzes button is clicked");
        LoginPom.quizzessubmit(driver).click();
        Logger.info("quizzessubmit button is clicked");
    }

    @Then("Faculty should click on submit")
    public void facultyShouldClickOnSubmit() {
        LoginPom.quizzesyesbutton(driver).click();
        Logger.info("quizzesyesbutton is clicked");
        System.out.println("Faculty should click on submit");
    }

    //	Tag26

    @When("Faculty should take quizz again")
    public void facultyShouldTakeQuizzAgain() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info(" preparationMode is clicked");
        Thread.sleep(3000);

        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes button is clicked");
        LoginPom.facultytakequizzes(driver).click();
        Logger.info("facultytakequizzes button is clicked");

    }

    @Then("Faculty should Re-attempt quizz")
    public void facultyShouldReAttemptQuizz() {
        LoginPom.quizzesyedittries(driver).click();
        Logger.info("quizzesyedittries button is clicked");

        LoginPom.quizzessubmit(driver).click();
        Logger.info(" quizzessubmitbutton is clicked");
        System.out.println("Faculty should Re-attempt quizz");
    }


    //Tag27


    @When("Faculty should see the report module")
    public void facultyShouldSeeTheReportModule() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(2000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton  is clicked");

        Thread.sleep(3000);
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationModeButton is clicked");


    }


    @Then("Faculty should click on Report Module")
    public void facultyShouldClickOnReportModule() throws Exception {
        LoginPom.reports(driver).click();
        Logger.info("reports is clicked");

        Thread.sleep(3000);

        System.out.println("Faculty should click on Report Module");

    }


    //Tag28


    @When("Faculty should see the Notification icon")
    public void facultyShouldSeeTheNotificationIcon() throws InterruptedException {
        LoginPom.notificationIcon(driver).click();
        Logger.info("notificationIcon is clicked");
        Thread.sleep(3000);
    }
//Tag29


    @When("Faculty should see th Faculty Notes")
    public void facultyShouldSeeThFacultyNotes() throws InterruptedException {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        Thread.sleep(2000);
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");
    }

    @Then("Faculty should click on Faculty Notes")
    public void facultyShouldClickOnFacultyNotes() throws Exception {
        LoginPom.facultyNotes(driver).click();
        Logger.info("facultyNotes button is clicked");
        Thread.sleep(2000);

        System.out.println("Faculty should click on Faculty Notes");


    }
    //Tag30


    @When("Faculty should see the lessons")
    public void facultyShouldSeeTheLessons() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        Thread.sleep(10000);
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode button is clicked");
        LoginPom.facultyNotes(driver).click();
        Logger.info("facultyNotes button is clicked");
        Thread.sleep(2000);
    }

    @Then("Faculty should click on lessons")
    public void facultyShouldClickOnLessons() {
        LoginPom.facultyLessons(driver).click();
        Logger.info("facultylessons is clicked");

        System.out.println("Faculty should click on lessons");
    }

    //tag31


    @When("Faculty should click on START COURSe")
    public void facultyShouldClickOnSTARTCOURSe() throws InterruptedException {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(3000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
    }

    @Then("Faculty should click on teaching")
    public void facultyShouldClickOnTeaching() throws Exception {
        LoginPom.teachingMode(driver).click();
        Logger.info("teachingmode button is clicked");
        Thread.sleep(2000);

        System.out.println("Faculty should click on teaching");
    }
//Tag32

    @When("Faculty should see the Manage Batches")
    public void facultyShouldSeeTheManageBatches() throws InterruptedException {

        LoginPom.manageBatchesButton(driver).click();
        Logger.info("manageBatchesButton is clicked");
        Thread.sleep(4000);
    }


    @Then("Faculty should click onedit symbol Manage Batches")
    public void facultyShouldClickOneditSymbolManageBatches() {
        System.out.println("Faculty should click onedit symbol Manage Batches");

    }

    //	Tag34


    @When("Faculty should see the Chat box")
    public void facultyShouldSeeTheChatBox() throws InterruptedException {
        LoginPom.manageBatches(driver).click();
        Logger.info("manageBatchesButton is clicked");

        driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);


    }

    @Then("Faculty should click on Chat box")
    public void facultyShouldClickOnChatBox() {
        System.out.println("Faculty should click on Chat box");

    }

    //	tag35

    @When("Faculty should see the Manage Students")
    public void facultyShouldSeeTheManageStudents() throws InterruptedException {
        WebDriverWait wait = new WebDriverWait(driver, 100);
        wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//a[contains(text(),'MANAGE BATCHES')]"))).click();

        LoginPom.manageBatches(driver).click();
        Logger.info("manageBatchesButton is clicked");

        LoginPom.activeBatches(driver).click();
        Logger.info("activeBatchesButton is clicked");

    }


    //	tag36


    @When("Faculty should see the Run lessons")
    public void facultyShouldSeeTheRunLessons() throws InterruptedException {
        LoginPom.manageBatches(driver).click();
        Logger.info("manageBatchesButton is clicked");

        LoginPom.activeBatches(driver).click();
        Logger.info("activeBatchesButton is clicked");

    }



    //	Tag37


    @When("Faculty should see the No Upcoming Module")
    public void facultyShouldSeeTheNoUpcomingModule() throws Exception {
        LoginPom.manageBatches(driver).click();
        Logger.info("manageBatchesButton is clicked");

        LoginPom.activeBatches(driver).click();
        Logger.info("activeBatchesButton is clicked");

    }




    //	Tag42


    @When("Faculty should see the Save and continue")
    public void facultyShouldSeeTheSaveAndContinue() throws Exception {
        LoginPom.courses(driver).click();
        Logger.info("courses button is clicked");
        Thread.sleep(5000);
        LoginPom.foundationalcourseStartButton(driver).click();
        Logger.info("foundationalcourseStartButton button is clicked");
        LoginPom.startcourseOkButton(driver).click();
        Logger.info("startcourseOkButton is clicked");
        LoginPom.preparationMode(driver).click();
        Logger.info("preparationMode is clicked");
        Thread.sleep(3000);
        LoginPom.facultyquizzes(driver).click();
        Logger.info("facultyquizzes is clicked");
    }

    @Then("Faculty should click save and submit")
    public void facultyShouldClickSaveAndSubmit() throws InterruptedException {
        LoginPom.facultytakequizzes(driver).click();
        Logger.info("facultytakequizzes is clicked");
        LoginPom.editSubmit(driver).click();
        Logger.info("editSubmitbutton is clicked");
        LoginPom.buttonSubmit(driver).click();
        Logger.info("buttonSubmit is clicked");
        LoginPom.saveButton(driver).click();
        Logger.info("saveButton is clicked");
        System.out.println("save and submit");
        driver.quit();
        Logger.info("browser closed");
    }
    @Then("Faculty should  enter valid passkey{string}")
    public void facultyShouldEnterValidPasskey(String string) {
        LoginPom.facultyPasskey(driver).sendKeys(string);
        Logger.info("facultyPasskey is entered");
    }
    @When("Faculty should enter password{string}")
    public void facultyShouldEnterPassword(String string) {
        LoginPom.facultynewPassword(driver).sendKeys(string);
        Logger.info("facultynewPassword is entered");
    }

    @When("Faculty should enter confirm Password{string}")
    public void facultyShouldEnterConfirmPassword(String string) {
        LoginPom.facultyconfirmPassword(driver).sendKeys(string);
        Logger.info("facultyconfirmPassword is entered");
    }
    @Then("Faculty click the eula checkbox")

    public void facultyClickTheEulaCheckbox() {
        LoginPom.facultyEulacheckbox(driver).click();
        Logger.info("facultyEulacheckbox is clicked");
    }
    @Then("Faculty should click on signin Button")
    public void facultyShouldClickOnSigninButton() {
        LoginPom.facultySigninButton(driver).click();
        Logger.info("facultySigninButton is clicked");
    }
    @Then("Faculty should click on signin Button is enabled or not")
    public void facultyShouldClickOnSigninButtonIsEnabledOrNot() {

        LoginPom.facultySigninButton(driver).isEnabled();
        Logger.info("facultySigninButton is Enabled");
        System.out.println("not enable");
    }
    @When("Faculty should click on END USER LICENSE AGREEMENT")
    public void facultyShouldClickOnENDUSERLICENSEAGREEMENT() {
        pom.endUserlicence(driver).click();
        Logger.info("endUserlicence is clicked");
    }

    @Then("Faculty should close the browser")
    public void facultyShouldCloseTheBrowser1() {
        driver.quit();
        Logger.info("browser closed");
    }

    @Given("faculty should be on yopmail mail home page")
    public void faculty_should_be_on_yopmail_mail_home_page() {

        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();

        Logger.info("url is entered");
        driver.get("https://yopmail.com/");
        driver.manage().window().maximize();
        Logger.info("Browser is maximised");
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);

    }

    @When("faculty enter mail id{string}")
    public void faculty_enter_mail_id(String string) {

        LoginPom.yopMailinput(driver).sendKeys("qapital.faculty11@yopmail.com");;
        Logger.info("mail id is entered");
    }

    @Then("faculty should click on next arrow button")
    public void faculty_should_click_on_next_arrow_button() {

        LoginPom.yopMailrefresh(driver).click();
        Logger.info("yopMailrefresh button is clicked");
    }

    @Then("Faculty should copy temparory password")
    public void faculty_should_copy_temparory_password() {
        String t = "Email : qapital.faculty11@yopmail.com";

        if ( driver.getPageSource().contains("Email : qapital.faculty11@yopmail.com")){
            System.out.println("Text: " + t + " is present. ");
        } else {
            System.out.println("Text: " + t + " is not present. ");
        }

    }
    @Then("Faculty click the Next Button")
    public void facultyClickTheNextButton1() throws InterruptedException {

        WebElement Email=LoginPom.username(driver);
        Email.click();
        Logger.info("email id is clicked");


        Email.sendKeys("qapital.faculty11@yopmail.com");
        Logger.info("email id is entered");
        String NewMail= Email.getAttribute("value");
        System.out.println(NewMail);
        LoginPom.nextBtn(driver).click();
        Logger.info("next button is clicked");
        LoginPom.facultyPasskey(driver).sendKeys("865986");
        Logger.info("facultyPasskey is entered");
        LoginPom.facultynewPassword(driver).sendKeys("pass");
        Logger.info("facultynewPassword is entered");

        LoginPom.facultyconfirmPassword(driver).sendKeys("pass");
        Logger.info("facultyconfirmPassword is entered");

        LoginPom.facultySigninButton(driver).click();
        Logger.info("faculty signin button is clicked");
        driver.get("https://yopmail.com/en/");
        LoginPom.YOP_Login(driver).sendKeys(NewMail);
        Logger.info("YOP_Login is entered");

        LoginPom.VerifyYOP_Mail(driver).click();
        Logger.info("YOP_Mail is verified");

        Thread.sleep(3000);

        driver.switchTo().frame("ifmail");
        Logger.info("switch to iframe");
        String t = "Email : qapital.faculty11@yopmail.com";

        if ( driver.getPageSource().contains("Email : qapital.faculty11@yopmail.com")){
            System.out.println("Text: " + t + " is present. ");
        } else {
            System.out.println("Text: " + t + " is not present. ");
        }
    }

}
