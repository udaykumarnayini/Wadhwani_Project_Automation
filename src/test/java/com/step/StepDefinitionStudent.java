package com.step;

import java.util.ArrayList;
import java.util.Random;
import java.util.concurrent.TimeUnit;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import com.pom.LoginPom;
import com.pom.LoginPomStudent;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;
import org.openqa.selenium.interactions.Actions;

public class StepDefinitionStudent {
    LoginPomStudent log=new LoginPomStudent();
    static WebDriver driver;

    private static org.apache.logging.log4j.Logger Logger= LogManager.getLogger(StepDefinitionStudent.class);


    @Given("Student is on the Learnwise Login Page")
    public void studentIsOnTheLearnwiseLoginPage() {
        WebDriverManager.chromedriver().setup();
        driver=new ChromeDriver();
        driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");
        Logger.info("Learnwise Student URL opened");
        driver.manage().window().maximize();
        driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);

    }

    @When("Student should enter valid {string}")
    public void studentShouldEnterValid(String string) throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.UserName(driver).sendKeys(string);
        Logger.info("Entered UserName");
        Thread.sleep(1000);
        System.out.println("Entering Mail Id");

    }
    @Then("Student should verify Next Button is enabled or not")
    public void studentShouldVerifyNextButtonIsEnabledOrNot() throws InterruptedException {
        WebElement NXT_Btn= LoginPomStudent.NextBtn(driver);
        Thread.sleep(2000);
        if(NXT_Btn.isEnabled()) {
            LoginPomStudent.NextBtn(driver).click();
            Logger.info(" Able to click on next button  ");
            driver.quit();
        }
        else {
            Logger.info(" Not  Able to click on next button ");
            driver.quit();
        }

    }
    @Then("Student should click Next Button")
    public void studentShouldClickNextButton() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.NextBtn(driver).click();
        Logger.info(" licked on Next button     ");
        Thread.sleep(1000);
    }
    @Then("Student should able to enter password {string}")
    public void studentShouldAbleToEnterPassword(String string) throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.Enter_Password(driver).sendKeys(string);
        Logger.info(" Entered password ");
        System.out.println("Entered password");
    }
    @Then("Student should able to enter confirm password {string}")
    public void studentShouldAbleToEnterConfirmPassword(String string) throws InterruptedException {
        LoginPomStudent.Confirm_Password(driver).sendKeys(string);
        Logger.info("  Entered to confirm password    ");
        Thread.sleep(1000);

    }
    @Then("Student should click on checkbox")
    public void studentShouldClickOnCheckBox() throws InterruptedException {
        LoginPomStudent.ClickOnAccept(driver).click();
        Logger.info(" Clicked on Accept     ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_checkBox(driver).click();
        Logger.info("  Clicked on check box    ");
        Thread.sleep(1000);

    }
    @Then("Studen should verify sign in button is disabled")
    public void studentShouldVerifySignInButton() throws InterruptedException {

        if(LoginPomStudent.signInButton(driver).isDisplayed() && LoginPomStudent.signInButton(driver).isEnabled() )
        {
            LoginPomStudent.signInButton(driver).click();
            Logger.info("  Clicked on SignIn    ");

            if(LoginPomStudent.signInButton(driver).isDisplayed())
            {
                System.out.println("Sign in button is not clickable");
                Logger.info("Sign in button is not clickable");
            }
        }
        else {
            System.out.println("Not able to click on SignIn Btn");
            Logger.info("Not able to click on SignIn Btn");
        }
    }
    @When("Student should able to enter valid password {string}")
    public void studentShouldAbleToEnterValidPassword(String string) throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.Enter_PassKey(driver).sendKeys(string);
        Logger.info("  Entered password    ");

    }
    @And("Student should click on signIn")
    public void studentShouldClickOnSignIn() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_SignIn(driver).click();
        Logger.info(" Clicked on signIn");
        Thread.sleep(2000);
    }
    @Then("Student should able to click on Hamburger")
    public void studentShouldAbleToClickOnHamburger() throws Exception {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Hamburger(driver).click();
        Logger.info("  Clicked on Hamburger ");
        Thread.sleep(1000);
    }
    @Then("Student should click on start or resume button")
    public void studentShouldClickOnStartOrResumeButton() throws Exception {
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_StartOrResume(driver).click();
        Logger.info(" Clicked on Start or Resume   ");
        Thread.sleep(1000);
    }
    @Then("Student should click on Course Module")
    public void studentShouldClickOnCourseModule() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on Courses  ");
    }
    @Then("Student should see Join Course is enabled or not")
    public void studentShouldSeeJoinCourseIsEnabledOrNot() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("  Clicked on Courses    ");
        System.out.println("join Course module ");
        Thread.sleep(3000);
        WebElement Join_Btn=log.ClickOn_Join(driver);

        if(Join_Btn.isEnabled()) {
            LoginPomStudent.ClickOn_Join(driver).click();
            Logger.info(" Able to click on join     ");
            driver.quit();
        }
        else {
            Logger.info(" Not Able to click on join ");
            driver.quit();
        }

    }
    @When("Student should enter Batch id{string}")
    public void studentShouldEnterBatchId(String string) throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on Courses     ");
        Thread.sleep(1000);
        LoginPomStudent.Enter_BatchId(driver).sendKeys(string);
        Logger.info(" Entered batch Id     ");
        Thread.sleep(1000);
    }
    @Then("Student should click on Join Course")
    public void studentShouldClickOnJoinCourse() throws Exception {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Join(driver).click();
        Logger.info("  Clicked to join course    ");
    }
    @Then("Student should click o Batch Name")
    public void studentShouldClickOBatchName() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on courses   ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info(" Clicked on BatchName  ");

    }
    @Then("Student should click on Chat Icon")
    public void studentShouldClickOnChatIcon() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on courses     ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_ChatIcon(driver).click();
        Logger.info("  Clicked on Chat icon    ");
        Thread.sleep(1000);
    }
    @Then("Student should click on Quizzes")
    public void studentShouldClickOnQuizzes() throws InterruptedException {
        LoginPomStudent.ClickOn_StartOrResume(driver).click();
        Logger.info("Clicked on Start or resume      ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_Quizzes(driver).click();
        Logger.info(" Clicked on Quizzes     ");
        Thread.sleep(1000);
    }
    @Then("student is able to create to the new venture group without providing the mandatory details")
    public void studentIsAbleToCreateToTheNewVentureGroupWithoutProvidingTheMandatoryDetails() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on Courses   ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on Batch Name ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info("  Clicked on Practice venture    ");
        Thread.sleep(1000);
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info(" Clicked on create venture     ");
        Thread.sleep(1000);


        WebElement Create_Btn= LoginPomStudent.Create_VentureGroup(driver);
        if(Create_Btn.isEnabled()) {
            Thread.sleep(1000);
            LoginPomStudent.Click_Create_Venture(driver).click();
            Logger.info("Clicked on Create Venture ");
            driver.quit();
        }

    }
    @When("Student should click courses")
    public void studentShouldClickCourses() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on Batch Name ");
    }
    @Then("Student should click on Practice ventures")
    public void studentShouldClickOnPracticeVentures() throws InterruptedException {
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info(" Clicked on Practice Venture");
        Thread.sleep(1000);
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info(" Clicked on Create Venture Group");
        Thread.sleep(1000);
        LoginPomStudent.VentureGroup_Name(driver).sendKeys("Mohan");
        Logger.info(" Entered Venture Group Name  ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Name(driver).sendKeys("kumar");
        Logger.info(" Entered Venture Name");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Description(driver).sendKeys("Welcome All");
        Logger.info("  Entered venture description    ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Industry(driver).click();
        Logger.info(" Clicked to see Venture Industry options   ");
        Thread.sleep(1000);
        LoginPomStudent.Select_Venture_Industry(driver).click();
        Logger.info(" Selecting Venture Industry ");
        Thread.sleep(1000);
        LoginPomStudent.Click_Create_Venture(driver).click();
        Logger.info("  Clicked on Create Venture    ");
        Thread.sleep(1000);

    }
    @Then("student should click on create group")
    public void studentShouldClickOnCreateGroup() throws Exception {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_DeleteIcon(driver).click();
        Logger.info("  Clicked on delete icon    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_YesToDeleteIcon(driver).click();
        Logger.info("Clicked on Yes To Delete");
        Thread.sleep(1000);

    }
    @Then("Student should click on PV Milestones")
    public void studentShouldClickOnPVMilestones() throws Exception {
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info(" Clicked on PV-Milestones ");
        Thread.sleep(1000);
        LoginPomStudent.PV_Milestones_assesment(driver).click();
        Logger.info(" Clicked on PV-Milestones Assesment   ");
        Thread.sleep(1000);
        LoginPomStudent.Re_Submit_Btn(driver).click();
        Logger.info(" Clicked on Re-submit Button     ");

    }
    @Then("Student should Click on profile")
    public void studentShouldClickOnProfile() throws Exception {
        LoginPomStudent.ClickOn_StudentProfile(driver).click();
        Logger.info("  Clicked on Student profile    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_Profile(driver).click();
        Logger.info("  Clicked on profile to edit details    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_EditIcon(driver).click();
        Logger.info("  Clicked on Edit Icon to edit    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_EditFirstName(driver).click();
        Logger.info("  Clicked on First name    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_EditEmail(driver).click();
        Logger.info("    Clicked on Email  ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_Edit_InstitueCode(driver).click();
        Logger.info(" Clicked on Institue code     ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_Edit_ChangePassword(driver).click();
        Logger.info(" Clicked on Change password     ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_Edit_Cancel(driver).click();
        Logger.info("   Clicked on cancel button   ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_EditIcon(driver).click();
        Logger.info(" Clicked on edit icon to edit     ");
        LoginPomStudent.ClickOn_Edit_SaveChanges(driver).click();
        Logger.info(" Clicked on save changes after editing     ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_2ndStudentLogout(driver).click();
        Logger.info("  Clicked on profile to logout    ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_StudentLogout(driver).click();
        Logger.info(" Clicked to Logout     ");
        Thread.sleep(5000);
    }
    @Then("Student should Click on Notification icon")
    public void studentShouldClickOnNotificationIcon() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Notifications(driver).click();
        Logger.info("Clicked on Notifications ");
        Thread.sleep(1000);
    }
    @Then("Student should view Notifications")
    public void studentShouldViewNotifications() {
        LoginPomStudent.ClickOn_Notifications(driver).click();
        Logger.info("Clicked on Notifications ");
    }
    @Then("Student should Click on Reports")
    public void studentShouldClickOnReports() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info(" Clicked on Batch Name");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Reports(driver).click();
        Logger.info("Clicked on Reports");
        Thread.sleep(1000);

    }

    @Then("Student should view Reports")
    public void studentShouldViewReports() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info(" Clicked on Batch Name");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Reports(driver).click();
        Logger.info("Clicked on Reports");
        Thread.sleep(1000);
    }
    @Then("Student should view Download quizz report")
    public void studentShouldViewDownloadQuizzReport() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on Batch Name");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Reports(driver).click();
        Logger.info("Clicked on Reports");
        Thread.sleep(1000);
    }
    @Then("Student should Download quizz report")
    public void studentShouldDownloadQuizzReport() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info(" Clicked on Courses");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on Batch Name ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Reports(driver).click();
        Logger.info(" Clicked on Reports");
        Thread.sleep(1000);
        LoginPomStudent.Download_QuizzReport(driver).click();
        Logger.info("Clicked on Download QuizzReport ");
        Thread.sleep(1000);
    }
    @Then("Student should view final assesment report")
    public void studentShouldViewFinalAssesmentReport() throws Exception {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on Batch Name ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Reports(driver).click();
        Logger.info("Clicked on Reports");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_AssesmentReports(driver).click();
        Logger.info("Clicked on Assesment Reports");
    }
    @Then("Student should able Click on Submit Button")
    public void studentShouldAbleClickOnSubmitButton() throws InterruptedException {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses ");
        Thread.sleep(1000);
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info(" Clicked on Batch Name");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info(" Clicked on PV-Milestones ");
        Thread.sleep(1000);
        LoginPomStudent.PV_Milestones_assesment(driver).click();
        Logger.info(" Clicked on PV-Milestones Assesment     ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_ReSubmit_Assesment(driver).click();
        Logger.info(" Clicked On Resubmit assesment     ");
    }
    @When("student should login with Random Mail Id and should verify that mail")
    public void studentShouldLoginWithRandomMailIdAndShouldVerifyThatMail() throws InterruptedException {
        WebElement Email=LoginPomStudent.UserName(driver);
        Email.click();


        Random randomGenerator = new Random();
        int randomInt = randomGenerator.nextInt(1000);
        Email.sendKeys("Student"+ randomInt +"123Saq@yopmail.com");
        String NewMail= Email.getAttribute("value");
        Logger.info(" Taking Random Mail Id's");
        System.out.println(NewMail);

        LoginPomStudent.NextBtn(driver).click();
        Logger.info("  Clicked on Next Button    ");

        LoginPomStudent.ClickOn_InstituteCode(driver).sendKeys("FCV16529");
        Logger.info(" Entered Institute Code ");

        LoginPomStudent.ReType_EmailId(driver).sendKeys(NewMail);
        Logger.info("Re-Typing Random Email Id   ");

        LoginPomStudent.Enter_Password(driver).sendKeys("pass");
        Logger.info(" Entered password      ");

        LoginPomStudent.Confirm_Password(driver).sendKeys("pass");
        Logger.info(" Entered confirm password     ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOnAccept(driver).click();
        Logger.info("  Clicked on accept button    ");
        Thread.sleep(1000);

        LoginPomStudent.Click_On_DropDown_To_seeLanguage_Options(driver).click();
        Logger.info("  Clicked to see Language Options");
        Thread.sleep(1000);

        LoginPomStudent.SelectLanguage_Option_Registration(driver).click();
        Logger.info("  Selected language option    ");

        LoginPomStudent.ClickOn_checkBox(driver).click();
        Logger.info("  Clicked on check box    ");

        LoginPomStudent.signInButton(driver).click();
        Logger.info("  Clicked on signIn button    ");
        Thread.sleep(3000);

        driver.get("https://yopmail.com/en/");
        LoginPomStudent.YOP_Login(driver).sendKeys(NewMail);
        Logger.info("  Verifying Yop mail id    ");
        LoginPomStudent.VerifyYOP_Mail(driver).click();
        Logger.info("  Verifyed Yop Mail Id   ");
        Thread.sleep(3000);

        driver.switchTo().frame("ifmail");
        WebElement element = LoginPomStudent.Verify_YopMailId(driver);
        element.click();

        Thread.sleep(1000);


        ArrayList<String> switchTabs= new ArrayList<String> (driver.getWindowHandles());

        driver.switchTo().window(switchTabs.get(0));


        driver.get("https://learnwise.wfglobal.org/#/IN/en/home/login");

        LoginPomStudent.UserName(driver).sendKeys(NewMail);
        Logger.info("   Entered Username   ");
        LoginPomStudent.NextBtn(driver).click();
        Logger.info("  Clicked on Next button    ");
        LoginPomStudent.Enter_PassKey(driver).sendKeys("pass");
        Logger.info("  Engtered password    ");
        LoginPomStudent.ClickOn_SignIn(driver).click();
        Logger.info("    Clicked on signIn  ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_Reg_Submit1(driver).click();
        Logger.info("Clicked on submit1 ");
        Thread.sleep(2000);

        LoginPomStudent.ClickOn_Reg_Submit2(driver).click();
        Logger.info("  Clicked on submit2    ");

        Thread.sleep(2000);
        LoginPomStudent.Enter_Reg_Name(driver).sendKeys("Mohit");
        Logger.info("   Entered name to register   ");


        Thread.sleep(2000);
        LoginPomStudent.Enter_Reg_Number(driver).sendKeys("9988776654");
        Logger.info("  Entered Registration number    ");
        Thread.sleep(2000);

        LoginPomStudent.ClickOnAccept(driver).click();
        Logger.info("  Clicked on accept    ");
        Thread.sleep(1000);

        LoginPomStudent.ClickOn_NextBtn_Reg(driver).click();
        Logger.info("  Clicked on Next Button    ");
        Thread.sleep(2000);

        LoginPomStudent.Enter_GraduationYear(driver).sendKeys("2023");
        Logger.info("  Entered Graduation Year    ");
        Thread.sleep(2000);

        LoginPomStudent.Select_Gender(driver).click();
        Logger.info("   Selected gender   ");
        Thread.sleep(2000);

        LoginPomStudent.Select_Stream(driver).click();
        Logger.info(" Clicked to see options for selecting stream     ");
        Thread.sleep(2000);

        LoginPomStudent.Select_StreamOption(driver).click();
        Logger.info("  Selected stream for registration    ");
        Thread.sleep(2000);


        LoginPomStudent.ClickOn_Submit3(driver).click();
        Logger.info(" Clicked on submit3     ");
        Thread.sleep(2000);

        LoginPomStudent.ClickOn_2ndStudentLogout(driver).click();
        Logger.info(" Student clicked on his profile     ");
        Thread.sleep(2000);
        LoginPomStudent.ClickOn_2ndStudentLogout_Option(driver).click();
        Logger.info(" Student has logout from his profile     ");


    }
    @Then("Student should edit Batch Id")
    public void studentShouldEditBatchId() throws InterruptedException {
        Thread.sleep(5000);
        LoginPomStudent.ClickOn_Edit_Batch(driver).click();
        Logger.info(" Clicked on edit icon ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Edit_Batch_Name(driver).sendKeys("1");
        Logger.info("   Clicked on edit icon to edit batch name    ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Yes_Edit_Batch_Name(driver).click();
        Logger.info(" Clicked yes to edit batch name      ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_SaveChanges(driver).click();
        Logger.info("  Clicked on save changes    ");
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_DeleteIcon(driver).click();
        Logger.info(" Clicked on Delete icon     ");
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_YesToDeleteIcon(driver).click();
        Logger.info("Clicked Yes To Delete");
        Thread.sleep(1000);
    }
    @Then("Student should create Practice venture group")
    public void studentShouldCreatePracticeVentureGroup() throws InterruptedException {
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info("Clicked On Practice-Venture");
        Thread.sleep(1000);
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info("Clicked to Create VentureGroup      ");
        Thread.sleep(1000);
        LoginPomStudent.VentureGroup_Name(driver).sendKeys("Mohan");
        Logger.info(" Entered Venture Group Name     ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Name(driver).sendKeys("kumar");
        Logger.info("      ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Description(driver).sendKeys("Welcome All");
        Logger.info(" Entered venture description     ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Industry(driver).click();
        Logger.info("Viewed Venture Industry options      ");
        Thread.sleep(1000);
        LoginPomStudent.Select_Venture_Industry(driver).click();
        Logger.info("Selected Venture Industry ");
        Thread.sleep(1000);
        LoginPomStudent.Click_Create_Venture(driver).click();
        Logger.info("Clicked to Create Venture button");
    }
    @Then("Student click on PV milestones Button")
    public void studentClickOnPVMilestonesButton() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info("Clicked On PV-Milestones");
    }
    @Then("Student click on any assignment")
    public void studentClickOnAnyAssignment() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.Click_Any_Assignment(driver).click();
        Logger.info("Clicked on one Assignment");
    }
    @Then("Student click on view submission")
    public void studentClickOnViewSubmission() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_view_submission(driver).click();
        Logger.info("Clicked On view-submission ");

    }
    @Then("Student click milestone {int}")
    public void studentClickMilestone(Integer int1) throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Milestone_Number(driver).click();
        Logger.info("Clicked on PV-Milestones Number ");
    }
    @Then("Student click on view submit")
    public void studentClickOnViewSubmit() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.PV_Milestones_assesment(driver).click();
        Logger.info("Clicked on PV-Milestones Assesment");
    }
    @Then("Student click on attempt button")
    public void studentClickOnAttemptButton() {
        JavascriptExecutor js=(JavascriptExecutor)driver;
        WebElement Submit=LoginPomStudent.ClickOn_Edit_Submit(driver);
        js.executeScript("arguments[0].click()",Submit);

    }
    @Then("click on pvmilestones tab and check whether the student is able to view the assignments.")
    public void clickOnPvmilestonesTabAndCheckWhetherTheStudentIsAbleToViewTheAssignments() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_PVmilestones(driver).click();
        Logger.info("Clicked On PV-milestones ");
    }
    @Then("clik on view details button")
    public void clikOnViewDetailsButton() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_DetailsButton(driver).click();
        Logger.info("Clicked On Details Button");
    }
    @Then("click on viewsubmission  button in the selected pv milestone assignment.")
    public void clickOnViewsubmissionButtonInTheSelectedPvMilestoneAssignment() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_ViewsubmissionButton(driver).click();
        Logger.info("Clicked On View-submission Button ");

    }
    @Then("click on resubmit button.")
    public void clickOnResubmitButton() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Resubmit_Button(driver).click();
        Logger.info("Clicked on Resubmit Button ");

    }
    @And("student should click on submit")
    public void student_should_click_on_submit() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Submit_Button(driver).click();
        Logger.info("Clicked on Submit Button");
    }
    @And("student should click on close icon")
    public void student_should_click_on_close_icon() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_CloseIcon(driver).click();
        Logger.info("Clicked on Close Icon ");
    }
    @And("student should click on back button")
    public void student_should_click_on_back_button() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Back_Button(driver).click();
        Logger.info("Clicked on Back Button");
    }
    @And("student should click on mile stone")
    public void student_should_click_on_mile_stone() throws InterruptedException {
        Thread.sleep(1000);
        LoginPomStudent.ClickOn_Milestone(driver).click();
        Logger.info("Clicked on PV-Milestones");
    }

    @Then("Student should able Click on Back Button")
    public void studentShouldAbleClickOnBackButton() {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on BatchName");
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info(" Clicked on PV-Milestones ");
        LoginPomStudent.PV_Milestones_assesment(driver).click();
        Logger.info("Clicked on PV-Milestones Assesment");
        LoginPomStudent.ClickOn_Back_Btn(driver).click();
        Logger.info("Clicked on Back Button   ");
    }
    @Then("Student should able Click any PV_Milestone")
    public void studentShouldAbleClickAnyPV_Milestone() {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on BatchName");
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info(" Clicked on PV-Milestones");
        LoginPomStudent.ClickOn_PV_Milestone_Number(driver).click();
        Logger.info("Clicked on PV-Milestones Number ");
    }
    @Then("Student should able to check status")
    public void studentShouldAbleToCheckStatus() {
        LoginPomStudent.ClickOn_Courses(driver).click();
        Logger.info("Clicked on Courses");
        LoginPomStudent.Clicking_On_BatchName(driver).click();
        Logger.info("Clicked on BatchName ");
        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info("Clicked on PV-Milestones");
        LoginPomStudent.PV_Milestones_assesment(driver).click();
        Logger.info("Clicked on PV-Milestones Assesment");
    }
    @Then("student should click on cancel group")
    public void studentShouldClickOnCancelGroup() throws InterruptedException {
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info(" Clicked on Practice Venture");
        Thread.sleep(3000);
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info(" Clicked on Create venture group     ");
        Thread.sleep(3000);
        LoginPomStudent.VentureGroup_Name(driver).sendKeys("Mohan");
        Logger.info(" Entered  venture group name      ");
        Thread.sleep(3000);
        LoginPomStudent.Venture_Name(driver).sendKeys("kumar");
        Logger.info(" Entered  venture name   ");
        Thread.sleep(3000);
        LoginPomStudent.Venture_Description(driver).sendKeys("Welcome All");
        Logger.info(" Entering venture description     ");
        Thread.sleep(3000);
        LoginPomStudent.Venture_Industry(driver).click();
        Logger.info("   clicked to see venture industry options   ");
        Thread.sleep(3000);
        LoginPomStudent.Select_Venture_Industry(driver).click();
        Logger.info(" Clicked to select venture industry     ");
        Thread.sleep(1000);
        log.ClickOn_Edit_Cancel(driver).click();
        Logger.info("Clicking On cancel   ");
    }
    @Then("student should click create group")
    public void studentShouldClickCreateGroup() throws InterruptedException {
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info("Clicking On Practice Venture ");
        Thread.sleep(1000);
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info(" Clicking to create venture     ");
        Thread.sleep(1000);
        LoginPomStudent.VentureGroup_Name(driver).sendKeys("Mohan");
        Logger.info("  Entered venture group name    ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Name(driver).sendKeys("kumar");
        Logger.info(" Entered venture name  ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Description(driver).sendKeys("Welcome All");
        Logger.info("  Entered venture description    ");
        Thread.sleep(1000);


        WebElement Create_Btn=LoginPomStudent.Create_VentureGroup(driver);
        if(Create_Btn.isEnabled()) {
            LoginPomStudent.Click_Create_Venture(driver).click();
            Logger.info(" Able to click on Create Venture     ");
            driver.quit();
        }
        else {
            Logger.info(" Not Able to click on Create Venture   ");
            Thread.sleep(3000);
            driver.quit();
        }
    }
    @Then("Student should click Resume Button")
    public void studentShouldClickResumeButton() throws InterruptedException {
        LoginPomStudent.ClickOn_StartOrResume(driver).click();
        Logger.info(" Clicking on start or resume     ");
        Thread.sleep(2000);
    }

    @Then("Student should delete the venture")
    public void studentShouldDeleteTheVenture() throws InterruptedException {

        LoginPomStudent.Delete_VentureMember(driver).click();
        Logger.info(" Clicked on delete icon to delete venture member     ");
        Thread.sleep(1000);

        LoginPomStudent.ClickOn_yesToDelete_venturegroup(driver).click();
        Logger.info("  Clicked yes to delete  to delete venture member    ");
        Thread.sleep(1000);
        LoginPomStudent.Delete_VentureMemberGroup(driver).click();
        Logger.info("  Clicked on delete icon to delete venture group    ");

        Thread.sleep(1000);
        LoginPomStudent.Click_ToDelete_VentureMemberGroup(driver).click();
        Logger.info("Clicked yes To Delete Venture Member Group");


    }
    @Then("Student should click View venture members")
    public void studentShouldClickViewVentureMembers() throws InterruptedException {

        LoginPomStudent.View_VentureMembers(driver).click();
        Logger.info(" Viewed Venture Members ");
        Thread.sleep(1000);
    }

    @Then("Student should logout from that profile")
    public void studentShouldLogoutFromThatProfile() throws InterruptedException {
        Thread.sleep(3000);

        LoginPomStudent.ClickOn_2ndStudentLogout(driver).click();
        Logger.info("Clicking on student profile");
        Thread.sleep(2000);
        LoginPomStudent.ClickOn_2ndStudentLogout_Option(driver).click();
        Logger.info(" Clicking on Logout Option ");
        Thread.sleep(1000);
    }

    @Then("Student should select group name")
    public void studentShouldSelectGroupName() throws InterruptedException {

        LoginPomStudent.Click_DropDown_SelectJoinGroup(driver).click();
        Logger.info(" Options to Select group name ");
        Thread.sleep(1000);
        LoginPomStudent.Select_Join_GroupName(driver).click();
        Logger.info(" Selecting join group name ");
        Thread.sleep(1000);
        LoginPomStudent.Join_Btn(driver).click();
        Logger.info(" Clicked on Join Button ");
        Thread.sleep(1000);
    }

    @Then("Student should click on Join_group")
    public void studentShouldClickOnJoin_group() {
        LoginPomStudent.Click_JoinGroup(driver).click();
        Logger.info(" Clicked to Join Group     ");
    }
    @Then("Student should logout from his profile")
    public void studentShouldLogoutFromHisProfile() throws InterruptedException {
        Thread.sleep(2000);
        LoginPomStudent.Click_Profile_forLogOutOption(driver).click();
        Logger.info(" Clicking Student-Profile to see LogOut Option    ");
        Thread.sleep(3000);
        LoginPomStudent.Click_StudentProfile_forLogOut(driver).click();
        Logger.info("  Clicking Student-Profile for LogOut    ");
        Thread.sleep(1000);
    }
    @Then("Student should fill mandatory fields and click on create")
    public void studentShouldFillMandatoryFieldsAndClickOnCreate() throws InterruptedException {
        LoginPomStudent.VentureGroup_Name(driver).sendKeys("Gb");
        Logger.info("Entering Venture Group-Name ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Name(driver).sendKeys("Mohan");
        Logger.info(" Entering Venture-Name     ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Description(driver).sendKeys("Welcome");
        Logger.info(" Entering Venture-Description    ");
        Thread.sleep(1000);
        LoginPomStudent.Venture_Industry(driver).click();
        Logger.info(" Clicking to see Venture-Industry Options");
        Thread.sleep(1000);
        LoginPomStudent.Select_Venture_Industry(driver).click();
        Logger.info("Selecting Venture-Industry ");
        Thread.sleep(1000);
        LoginPomStudent.Click_Create_Venture(driver).click();
        Logger.info("  Clicked to Create Venture    ");
        Thread.sleep(1000);
    }

    @Then("Student should click on create_group")
    public void studentShouldClickOnCreate_group() throws InterruptedException {
        LoginPomStudent.Create_VentureGroup(driver).click();
        Logger.info("Clicking on create venture group");
        Thread.sleep(2000);
    }

    @Then("Student should click on Practice venture tab")
    public void studentShouldClickOnPracticeVentureTab() throws InterruptedException {
        LoginPomStudent.ClickOn_PracticeVenture(driver).click();
        Logger.info("Clicking on Practice venture tab");
        Thread.sleep(2000);

    }
    @Then("Student should close the browser")
    public void studentShouldCloseTheBrowser() throws InterruptedException {
        Thread.sleep(5000);
        Logger.info(" Closing the Browser ");
        driver.quit();
    }


    @Then("Student should click on resume or start button")
    public void studentShouldClickOnResumeOrStartButton() throws InterruptedException {
        Thread.sleep(3000);
        LoginPomStudent.ClickOn_StartOrResume(driver).click();
        Logger.info(" Clicking on Start Or Resume");
        Thread.sleep(1000);
    }






    @Then("click on pvmilestones tab")
    public void clickOnPvmilestonesTab() {

        LoginPomStudent.ClickOn_PVmilestones(driver).click();
        Logger.info("Clicking on PV milestones");
    }
    @Then("click on resubmit button")
    public void clickOnResubmitButton1() {

        LoginPomStudent.ClickOn_resubmit_Button(driver).click();
        Logger.info("Clicking on Resubmit Button ");
    }
    @Then("check whether the student is able to view the assignments.")
    public void checkWhetherTheStudentIsAbleToViewTheAssignments() {

        LoginPomStudent.ClickOn_PV_Milestones(driver).click();
        Logger.info("Clicking on PV milestones ");
    }
    @Then("click on remove button and click on choose file and submit {string}")
    public void clickOnRemoveButtonAndClickOnChooseFileAndSubmit(String filePath) throws InterruptedException {
        Thread.sleep(3000);
        driver.switchTo().frame("prev_att");
        LoginPomStudent.Choose_file(driver).click();
        Logger.info("Selecting file ");
        System.out.println("success");
        LoginPomStudent.Choose_file_ToSubmit(driver).sendKeys(filePath);
        Logger.info(" Selecting file to submit  ");
        System.out.println("Doc added");
        LoginPomStudent.Choose_file_ToEditSubmit(driver).click();
        Logger.info("Choosing file to edit");
    }
    @Then("click on remove button and click on choose unsupported file and submit {string}")
    public void clickOnRemoveButtonAndClickOnChooseUnsupportedFileAndSubmit(String filePath) throws InterruptedException {
        Thread.sleep(9000);
        driver.switchTo().frame("prev_att");
        LoginPomStudent.Click_ToRemovefile(driver).click();
        Logger.info(" Clicking on remove button");
        LoginPomStudent.Click_ToRemovefile_Edit(driver).click();
        Logger.info("Clicking on Remove file and edit     ");
        System.out.println("success");
        LoginPomStudent.Click_ToRemovefile_Edit_Upload(driver).sendKeys(filePath);
        Logger.info("Uploadeding the Unsupported file");
        System.out.println("Doc added");

    }


}