package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.DateCreatePage;
import pages.ManageAccountsPage;
import pages.ManageCostumerPage;
import pages.PasswordCreatePage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class DateCreateStepDef {
    DateCreatePage dateCreatePage = new DateCreatePage();


    @Given("User go to the GMi Bank home page {string}")
    public void userGoToTheGMiBankHomePage(String url) {
        Driver.getDriver().get(url);
    }

    @And("You should navigate to sign-in page")
    public void youShouldNavigateToSignInPage() {
        dateCreatePage.userButton.click();
        dateCreatePage.signIn.click();
    }

    @And("Click to My Operations menu and Click to Manage Costumers")
    public void clickToMyOperationsMenuAndClickToManageCostumers() {
        dateCreatePage.usernameTextbox.sendKeys(ConfigurationReader.getProperty("userNameIshak"));
        dateCreatePage.passBox.sendKeys(ConfigurationReader.getProperty("passishak"));
        dateCreatePage.myOperations.click();
        dateCreatePage.signInButton.click();
    }

    @And("Enter the user SSN number to SSN textbox")
    public void enterTheUserSSNNumberToSSNTextbox() {
        dateCreatePage.creNewCustomer.click();
        dateCreatePage.searchSSN.sendKeys(ConfigurationReader.getProperty("SSNishak"));
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
        dateCreatePage.middleInit.sendKeys(ConfigurationReader.getProperty("PhnNum"));
    }

    @And("Enter the Zip Code provided")
    public void enterTheZipCodeProvided() {
        dateCreatePage.middleInit.sendKeys(ConfigurationReader.getProperty("ZipCd"));
    }

    @And("Enter the City provided")
    public void enterTheCityProvided() {
        dateCreatePage.middleInit.sendKeys(ConfigurationReader.getProperty("City"));
    }

    @And("Enter the date and time for the past provided")
    public void enterTheDateAndTimeForThePastProvided() {
        dateCreatePage.middleInit.sendKeys(ConfigurationReader.getProperty("DateInPast"));
    }

    @And("Click the save button")
    public void clickTheSaveButton() {
        dateCreatePage.saveButton.click();
    }

    @Then("There should be error message.")
    public void thereShouldBeErrorMessage() {
        Assert.assertTrue(dateCreatePage.errorMessage.isDisplayed());
    }

    @And("Enter the date and time with valid credential")
    public void enterTheDateAndTimeWithValidCredential() {
    }

    @Then("There should be succes message.")
    public void thereShouldBeSuccesMessage() {
    }

    @And("Click on the user box and select a user")
    public void clickOnTheUserBoxAndSelectAUser() {
    }

    @And("User can choose an account")
    public void userCanChooseAnAccount() {
    }

    @And("Click zelle check box")
    public void clickZelleCheckBox() {
    }
}
