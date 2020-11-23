package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import pages.*;
import utilities.ConfigurationReader;
import utilities.DateUtil;
import utilities.Driver;

public class DateCreateStepDef {
    DateCreatePage dateCreatePage = new DateCreatePage();
    PasswordCreatePage passwordCreatePage = new PasswordCreatePage();
    UserRegistrationPage userReg = new UserRegistrationPage();


    String newCustomer = Driver.getNewSSNNumber("107-10-7612");

    @Given("User go to the GMi Bank home page {string}")
    public void userGoToTheGMiBankHomePage(String url) {
        Driver.getDriver().get(url);
    }

    @And("Click on the home page user button")
    public void clickOnUserButton() {
        dateCreatePage.userButton.click();
    }

    @And("You should navigate to sign-in page")
    public void youShouldNavigateToSignInPage() {
        dateCreatePage.signInPage.click();
    }

    @And("Click to My Operations menu and Click to Manage Costumers")
    public void clickToMyOperationsMenuAndClickToManageCostumers() {
        dateCreatePage.usernameTextbox.clear();
        dateCreatePage.usernameTextbox.sendKeys(ConfigurationReader.getProperty("userIshak"));
        dateCreatePage.passBox.clear();
        dateCreatePage.passBox.sendKeys(ConfigurationReader.getProperty("passishak"));
        dateCreatePage.signInButton.click();
        dateCreatePage.myOperations.click();
        dateCreatePage.manageCostumer.click();
    }
    @And("Click the create a new customer button")
    public void clickTheCreateANewCustomerButton() {
        dateCreatePage.creNewCustomer.click();
    }

    @And("Enter the user 1 SSN number to SSN textbox")
    public void enterTheUser1SSNNumber1ToSSNTextbox() throws InterruptedException {

        Thread.sleep(3000);
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak1"));
    }

    @And("Enter the user 2 SSN number to SSN textbox")
    public void enterTheUser2SSNNumber1ToSSNTextbox() {
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak2"));
    }

    @And("Enter the user 3 SSN number to SSN textbox")
    public void enterTheUser3SSNNumber1ToSSNTextbox() {
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak3"));
    }

    @And("Enter the user 4 SSN number to SSN textbox")
    public void enterTheUser4SSNNumber1ToSSNTextbox() {
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak4"));
    }

    @And("Enter the user 5 SSN number to SSN textbox")
    public void enterTheUser5SSNNumber1ToSSNTextbox() {
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak5"));
    }

    @And("Click to search Button")
    public void clickToSearchButton() {
        dateCreatePage.searchButton.click();
    }

    @And("Enter the Middle initial provided")
    public void enterTheMiddleInitialProvided() {
        dateCreatePage.middleInit.sendKeys(ConfigurationReader.getProperty("Middle"));
    }

    @And("Enter the Phone number provided")
    public void enterThePhoneNumberProvided() {
        dateCreatePage.secondPhoneBox.sendKeys(ConfigurationReader.getProperty("PhnNum"));
    }

    @And("Enter the Zip Code provided")
    public void enterTheZipCodeProvided() {
        dateCreatePage.zipCodeBox.sendKeys(ConfigurationReader.getProperty("ZipCd"));
    }

    @And("Enter the City provided")
    public void enterTheCityProvided() {
        dateCreatePage.cityBox.sendKeys(ConfigurationReader.getProperty("City"));
    }

    @And("Enter the date and time for the past provided")
    public void enterTheDateAndTimeForThePastProvided() {
        dateCreatePage.dateBox.sendKeys(ConfigurationReader.getProperty("DateInPast"));
    }

    @And("Click the save button")
    public void clickTheSaveButton() throws InterruptedException {
        Thread.sleep(3000);
        dateCreatePage.saveButton.click();

    }

    @Then("There should be error message.")
    public void thereShouldBeErrorMessage() {
        Assert.assertTrue(dateCreatePage.errorMessage.isDisplayed());
    }

    @And("Enter the date and time with valid credential")
    public void enterTheDateAndTimeWithValidCredential() {
        dateCreatePage.dateBox.sendKeys(DateUtil.todaysDate5());
    }

    @Then("There should be succes message.")
    public void thereShouldBeSuccesMessage() {
        Assert.assertTrue(dateCreatePage.succesMessage.isDisplayed());
    }

    @And("Click on the user box and select a user")
    public void clickOnTheUserBoxAndSelectAUser() {
        Assert.assertTrue(dateCreatePage.userDropdown.isEnabled());
    }

    @And("User can choose an account")
    public void userCanChooseAnAccount() {
        dateCreatePage.accountDropdown.sendKeys("ishak");
    }

    @And("Click zelle check box")
    public void clickZelleCheckBox() {
        dateCreatePage.zelleButton.click();
    }


}
