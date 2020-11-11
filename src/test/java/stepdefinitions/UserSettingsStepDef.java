package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.Wait;
import pages.ManageCostumerPage;
import pages.UserSettingsPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class UserSettingsStepDef {
    ManageCostumerPage manageCostumerPage = new ManageCostumerPage();
    UserSettingsPage userSettingsPage = new UserSettingsPage();

    @Given("Go to {string} link")
    public void goToLink(String arg0) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @And("Click to User drop down menu")
    public void clickToUserDropDownMenu() {
        manageCostumerPage.dropDownAccount.click();
    }

    @And("Click to Sign in")
    public void clickToSignIn() {
        manageCostumerPage.accountSignIn.click();
    }

    @And("Enter the username with valid credentails")
    public void enterTheUsernameWithValidCredentails() {
        manageCostumerPage.username.sendKeys(ConfigurationReader.getProperty("employeeUsername3"));
    }

    @And("Enter the password with valid credentails")
    public void enterThePasswordWithValidCredentails() {
        manageCostumerPage.password.sendKeys(ConfigurationReader.getProperty("employeePassword3"));
    }

    @And("Click to User info")
    public void clickToUserInfo() {
        userSettingsPage.userInfo.click();
    }

    @And("Assert that First Name is not empty.")
    public void assertThatFirstNameIsNotEmpty() {
        Assert.assertTrue(userSettingsPage.firstName.isDisplayed());
    }

    @And("Assert that Last Name is not empty.")
    public void assertThatLastNameIsNotEmpty() {
        Assert.assertTrue(userSettingsPage.lastName.isDisplayed());
    }

    @And("Assert that Email is not empty.")
    public void assertThatEmailIsNotEmpty() {
        Assert.assertTrue(userSettingsPage.eMail.isDisplayed());
    }

    @And("Assert that Language dropdown is have English.")
    public void assertThatLanguageDropdownIsHaveEnglish() {
        Assert.assertTrue(userSettingsPage.langEnglish.getText().equals(ConfigurationReader.getProperty("selectedLanguage")));
    }

    @And("Assert that Language dropdown is have Türkçe.")
    public void assertThatLanguageDropdownIsHaveTürkçe() {
        Assert.assertTrue(userSettingsPage.langTurkish.getText().equals(ConfigurationReader.getProperty("selectedLanguage2")));

    }

    @And("Update to First Name")
    public void updateToFirstName() {
        userSettingsPage.firstName.clear();
        userSettingsPage.firstName.sendKeys(ConfigurationReader.getProperty("updateFirstName"));
    }

    @And("Click to Save button")
    public void clickToSaveButton() {
        userSettingsPage.saveButton.click();
    }

    @Then("Assert that visible text saveAlertText.")
    public void assertThatVisibleTextSaveAlertText() {
        Assert.assertTrue(userSettingsPage.saveAlert.isDisplayed());
    }
}
