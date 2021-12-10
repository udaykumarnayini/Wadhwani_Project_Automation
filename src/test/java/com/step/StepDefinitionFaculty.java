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


    @When("Faculty should enter valid username {string}")
    public void facultyShouldEnterValidUsername(String string) {
        LoginPom.username(driver).sendKeys(string);

    }

    @Then("Faculty should verify success message")
    public void facultyShouldVerifySuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));

    }
    @Then("Faculty should close the Browser")
    public void facultyShouldCloseTheBrowser() {
        driver.quit();
    }

    @When("Faculty should enter invalid {string}")
    public void facultyShouldEnterInvalid(String string) {
        LoginPom.username(driver).sendKeys(string);
    }

    @Then("Faculty should verify its enter success message")
    public void facultyShouldVerifyItsEnterSuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));

    }
    @When("Faculty should click next Button")
    public void facultyShouldClickNextButton() {
        LoginPom.nextBtn(driver).click();
    }

    @Then("Faculty should enter the invalid password{string}")
    public void facultyShouldEnterTheInvalidPassword(String string) {
        LoginPom.facultyPassword(driver).click();
    }

    @Then("Faculty should verify its  success message")
    public void facultyShouldVerifyItsSuccessMessage() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
    }
    @Then("Faculty should click the Sign in Button")
    public void facultyShouldClickTheSignInButton() {
        LoginPom.facultySigninButton(driver).click();
    }
    @When("Faculty should enter an valid email{string}")
    public void facultyShouldEnterAnValidEmail(String string) {
        LoginPom.username(driver).sendKeys(string);
    }

    @When("Faculty click the next Button")
    public void facultyClickTheNextButton() {
        LoginPom.nextBtn(driver).click();
    }

    @Then("Faculty click the forgot password{string}")
    public void facultyClickTheForgotPassword(String string) {
        LoginPom.facultyforgotPAss(driver).click();
    }

    @Then("Faculty should verify its successfully click")
    public void facultyShouldVerifyItsSuccessfullyClick() {
        String Expectedtest ="PLATFORM FEATURES";
        String actualtext = LoginPom.actualText(driver).getText();
        System.out.println(actualtext);
        Assert.assertTrue("get accept", Expectedtest.equals(actualtext));
    }
    @Then("Faculty enter the password{string}")
    public void facultyEnterThePassword(String string) {
        LoginPom.facultyPassword(driver).sendKeys(string);
    }

    @Then("Faculty click on signin button")
    public void facultyClickOnSigninButton() throws InterruptedException {
        LoginPom.facultySigninButton(driver).click();

    }
    @Then("click on dashboard Button")
    public void clickOnDashboardButton() throws InterruptedException {
        LoginPom.dashboardButton(driver).click();
        Thread.sleep(5000);
    }
    @Then("Faculty should click on index Button")
    public void facultyShouldClickOnIndexButton() throws InterruptedException {
        LoginPom.indexButton(driver).click();
        }

    @Then("Faculty should click on Resume Button")
    public void facultyShouldClickOnResumeButton() throws InterruptedException {
        LoginPom.resumeButton(driver).click();
        Thread.sleep(5000);
    }


    @Then("Faculty should click on course plan Button")
    public void facultyShouldClickOnCoursePlanButton() throws InterruptedException {
        LoginPom.coursePlan(driver).click();
        Thread.sleep(10000);
    }


    @Then("Faculty should click on other course Button")
    public void facultyShouldClickOnOtherCourseButton() {
        LoginPom.otherCourses(driver).click();
    }
    @And("Faculty enter the username{string}")
    public void facultyEnterTheUsername(String string) {
    	LoginPom.username(driver).sendKeys(string);

    }

    @Then("click the next button and enter password{string}")
    public void clickTheNextButtonAndEnterPassword(String string) {
        LoginPom.nextBtn(driver).click();
        LoginPom.facultyPassword(driver).sendKeys(string);
        LoginPom.signin(driver).click();
    }

    @When("User should click on course")
    public void userShouldClickOnCourse() throws Exception {
        LoginPom.courses(driver).click();
        Thread.sleep(2000);
        System.out.println("Clicking On Course Module");
    }
    @When("Faculty should click on courses")
    public void facultyShouldClickOnCourses()  throws Exception {
    	LoginPom.courses(driver).click();
        Thread.sleep(5000);
    }
        @Then("Faculty should click on foundationalcourse")
        public void facultyShouldClickOnFoundationalcourse() {
        LoginPom.foundationalcourse(driver).click();
        }
        @Then("Faculty should click on createnewbatch")
        public void facultyShouldClickOnCreatenewbatch() throws InterruptedException {
        LoginPom.createnewbatch(driver).click();
        Thread.sleep(2000);
    }
        @Then("Faculty should enter batch name {string}")
        public void facultyShouldEnterBatchName(String string) {
        LoginPom.batchName(driver).sendKeys(string);;
        }
        @Then("Faculty should enter batch number{string}")
        public void facultyShouldEnterBatchNumber(String string) throws InterruptedException {
        LoginPom.batchNumbers(driver).sendKeys(string);;
        Thread.sleep(5000);
        }
        @Then("Faculty should click on create batch")
        public void facultyShouldClickOnCreateBatch() {
        LoginPom.createbatchButton(driver).click();
        }
        @Then("Faculty should click on copybatch")
        public void facultyShouldClickOnCopybatch() throws InterruptedException {
        LoginPom.copyBatch(driver).click();
        Thread.sleep(3000);
       }
        @Then("Faculty should click on foundationalcourseStart Button")
        public void facultyShouldClickOnFoundationalcourseStartButton() {
        LoginPom.foundationalcourseStartButton(driver).click();
        }
        @Then("Faculty should click on startcourseOk Button")
        public void facultyShouldClickOnStartcourseOkButton() {
        LoginPom.startcourseOkButton(driver).click();
        }
        @Then("Faculty should click on Preparation Mode Button")
        public void facultyShouldClickOnPreparationModeButton() throws InterruptedException {
        LoginPom.preparationMode(driver).click();
        Thread.sleep(3000);
       }
        @Then("Faculty should click on user batch switch")
        public void facultyShouldClickOnUserBatchSwitch() throws InterruptedException {
        LoginPom.userbatchSwitch(driver).click();
        Thread.sleep(2000);
        }
        @When("Faculty click on mock test")
        public void facultyClickOnMockTest() throws InterruptedException {
        JavascriptExecutor js=(JavascriptExecutor)driver;
        WebElement MockTest=LoginPom.mockTest(driver);
        js.executeScript("arguments[0].scrollIntoView();",MockTest);
        LoginPom.mockTest(driver).click();
        Thread.sleep(3000);
        }
        @Then("Faculty click on play button")
        public void facultyClickOnPlayButton()  throws Exception {
        LoginPom.coursestartgreter(driver).click();
        Thread.sleep(3000);
        System.out.println("Clicking On Mock Test");
    }

    @When("Faculty should click on quizzes")
    public void facultyShouldClickOnQuizzes() throws Exception {
       LoginPom.facultyquizzes(driver).click();
        }
    @When("Faculty should click Quizzes")
    public void facultyShouldClickQuizzes() throws Exception {
       LoginPom.facultyquizzes(driver).click();
       }

    @Then("Faculty should click on take quizzes")
    public void facultyShouldClickOnTakeQuizzes() throws InterruptedException {
        LoginPom.facultytakequizzes(driver).click();
        System.out.println("Faculty should click on take quizzes");
        Thread.sleep(3000);
    }
   

    @Then("Faculty should click on view quizz Results")
    public void facultyShouldClickOnViewQuizzResults() throws Exception {
    	LoginPom.viewquizzeresult(driver).click();
        System.out.println("Faculty should click on view quizz Results");
        Thread.sleep(3000);
    }
    @When("Faculty should see the practice venture")
    public void facultyShouldSeeThePracticeVenture()  throws InterruptedException {
        LoginPom.facultypracticeventure(driver).isDisplayed();
        }

    @Then("Faculty should click on Practice Venture")
    public void facultyShouldClickOnPracticeVenture() throws Exception {
        Thread.sleep(2000);
        LoginPom.facultypracticeventure(driver).click();
        System.out.println("Faculty should click on Practice Venture");
        Thread.sleep(3000);
    }
    @When("Faculty should see th PV Milestones")
    public void facultyShouldSeeThPVMilestones() throws InterruptedException {
       LoginPom.facultypvmilestone(driver).isDisplayed();
    }

    @Then("Faculty should click on PV Milestones")
    public void facultyShouldClickOnPVMilestones() {
        LoginPom.facultypvmilestone(driver).click();
       System.out.println("Faculty should click on PV Milestones");
    }
    

    @Then("Faculty should click on submit")
    public void facultyShouldClickOnSubmit() {
    	 LoginPom.quizzessubmit(driver).click();
    }
   @Then("Faculty should click on yes Button")
    public void facultyShouldClickOnYesButton() {
        LoginPom.quizzesyesbutton(driver).click();
        System.out.println("Faculty should click on yes");
    }

   @Then("Faculty should click on quizzesyedittries")
   public void facultyShouldClickOnQuizzesyedittries() {
        LoginPom.quizzesyedittries(driver).click();
   }
   @Then("Faculty should click on submit Button")
   public void facultyShouldClickOnSubmitButton() {
        LoginPom.quizzessubmit(driver).click();
        System.out.println("Faculty should Re-attempt quizz");
        }
   
    @Then("Faculty should click on Report Module")
    public void facultyShouldClickOnReportModule() throws Exception {
        LoginPom.reports(driver).click();
        Thread.sleep(3000);
        System.out.println("Faculty should click on Report Module");
        }
    @When("Faculty should click on Notification icon")
    public void facultyShouldClickOnNotificationIcon() throws InterruptedException {
        LoginPom.notificationIcon(driver).click();
        Thread.sleep(3000);
        }

    @Then("Faculty should click on Faculty Notes")
    public void facultyShouldClickOnFacultyNotes() throws Exception {
        LoginPom.facultyNotes(driver).click();
        Thread.sleep(2000);
        System.out.println("Faculty should click on Faculty Notes");
    }
    

    @Then("Faculty should click on lessons")
    public void facultyShouldClickOnLessons() {
        LoginPom.facultyLessons(driver).click();
        System.out.println("Faculty should click on lessons");
    }

  

    @Then("Faculty should click on teaching")
    public void facultyShouldClickOnTeaching() throws Exception {
        LoginPom.teachingMode(driver).click();
        Thread.sleep(2000);
        System.out.println("Faculty should click on teaching");
    }
    @When("Faculty should click on Manage Batches")
    public void facultyShouldClickOnManageBatches() {
        LoginPom.manageBatches(driver).click();
    }

    @When("Faculty should click on manage batches and active batches")
    public void facultyShouldClickOnManageBatchesAndActiveBatches()  throws Exception {
        LoginPom.manageBatches(driver).click();
        LoginPom.activeBatches(driver).click();

    }
    @Then("Faculty should click on editsubmit")
    public void facultyShouldClickOnEditsubmit() {
    	LoginPom.editSubmit(driver).click();
    }
    @Then("Faculty should click on buttonsubmit")
    public void facultyShouldClickOnButtonsubmit() {
    LoginPom.buttonSubmit(driver).click();
    }
    @Then("Faculty should click save and submit")
    public void facultyShouldClickSaveAndSubmit() throws InterruptedException {
        LoginPom.saveButton(driver).click();
        System.out.println("save and submit");
        driver.quit();
    }
    @Then("Faculty should  enter valid passkey{string}")
    public void facultyShouldEnterValidPasskey(String string) {
        LoginPom.facultyPasskey(driver).sendKeys(string);;
    }
    @When("Faculty should enter password{string}")
    public void facultyShouldEnterPassword(String string) {
        LoginPom.facultynewPassword(driver).sendKeys(string);
    }

    @When("Faculty should enter confirm Password{string}")
    public void facultyShouldEnterConfirmPassword(String string) {
        LoginPom.facultyconfirmPassword(driver).sendKeys(string);

    }
    @Then("Faculty click the eula checkbox")

    public void facultyClickTheEulaCheckbox() {
        LoginPom.facultyEulacheckbox(driver).click();
    }
    @Then("Faculty should click on signin Button")
    public void facultyShouldClickOnSigninButton() {
        LoginPom.facultySigninButton(driver).click();
    }
    @Then("Faculty should click on signin Button is enabled or not")
    public void facultyShouldClickOnSigninButtonIsEnabledOrNot() {

        LoginPom.facultySigninButton(driver).isEnabled();

        System.out.println("not enable");
    }
    @When("Faculty should click on END USER LICENSE AGREEMENT")
    public void facultyShouldClickOnENDUSERLICENSEAGREEMENT() {
        pom.endUserlicence(driver).click();
    }

    @Then("Faculty should close the browser")
    public void facultyShouldCloseTheBrowser1() {
        driver.quit();
    }
    @Then("Faculty Should recieve temporary password in mail")
    public void facultyShouldRecieveTemporaryPasswordInMail()  throws InterruptedException {

        WebElement Email=LoginPom.username(driver);
        Email.click();
        Email.sendKeys("qapital.faculty11@yopmail.com");
        String NewMail= Email.getAttribute("value");
        System.out.println(NewMail);
        LoginPom.nextBtn(driver).click();
        LoginPom.facultyPasskey(driver).sendKeys("865986");
        LoginPom.facultynewPassword(driver).sendKeys("pass");
        LoginPom.facultyconfirmPassword(driver).sendKeys("pass");
        LoginPom.facultySigninButton(driver).click();
        driver.get("https://yopmail.com/en/");
        LoginPom.YOP_Login(driver).sendKeys(NewMail);
        LoginPom.VerifyYOP_Mail(driver).click();
        Thread.sleep(3000);
        driver.switchTo().frame("ifmail");
        String t = "Email : qapital.faculty11@yopmail.com";
        if ( driver.getPageSource().contains("Email : qapital.faculty11@yopmail.com")){
            System.out.println("Text: " + t + " is present. ");
        } else {
            System.out.println("Text: " + t + " is not present. ");
        }
    }
}
