package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.ManageCostumerPage;
import pages.UserSettingsPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class UserSettingsStepDef {
    ManageCostumerPage manageCostumerPage = new ManageCostumerPage();
    UserSettingsPage userSettingsPage = new UserSettingsPage();

    @Given("Go to {string} link")
    public void goToLink(String url) {
        Driver.getDriver().get(url);
    }

    @And("Click to User drop down menu")
    public void clickToUserDropDownMenu() {
        manageCostumerPage.dropDownAccount.click();
    }

    @And("Click to Sign in")
    public void clickToSignIn() {
        manageCostumerPage.accountSignIn.click();
    }

    @And("Enter the username with valid credentials")
    public void enterTheUsernameWithValidCredentials() {
        manageCostumerPage.username.sendKeys(ConfigurationReader.getProperty("employeeUsername3"));
    }

    @And("Enter the password with valid credentials")
    public void enterThePasswordWithValidCredentials() {
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
       Assert.assertEquals(userSettingsPage.langEnglish.getText(),ConfigurationReader.getProperty("selectedLanguage"));
    }

    @And("Assert that Language dropdown is have Turkish.")
    public void assertThatLanguageDropdownIsHaveTurkish() {
       Assert.assertEquals(userSettingsPage.langTurkish.getText(),ConfigurationReader.getProperty("selectedLanguage2"));
    }

    @And("Update to First Name")
    public void updateToFirstName() {
        userSettingsPage.firstName.clear();
        userSettingsPage.firstName.sendKeys(ConfigurationReader.getProperty("updateFirstName"));
    }

    @Then("Assert that visible text saveAlertText.")
    public void assertThatVisibleTextSaveAlertText() {
        Assert.assertTrue(userSettingsPage.saveAlert.isDisplayed());
    }

    @And("Update to Last Name")
    public void updateToLastName() {
        userSettingsPage.lastName.clear();
        userSettingsPage.lastName.sendKeys(ConfigurationReader.getProperty("updateLastName"));
    }

    @And("Update to Email")
    public void updateToEmail() {
        userSettingsPage.eMail.clear();
        userSettingsPage.eMail.sendKeys(ConfigurationReader.getProperty("updateEmployeeEmail3"));
    }

    @And("Assert that Email is contain mailContains")
    public void assertThatEmailIsContain() {
        Assert.assertTrue(ConfigurationReader.getProperty("updateEmployeeEmail3").contains(ConfigurationReader.getProperty("mailContains")));
        Assert.assertTrue(ConfigurationReader.getProperty("updateEmployeeEmail3").contains(ConfigurationReader.getProperty("mailContains2")));
    }

    @And("Click to Save button")
    public void clickToSaveButton() {
        userSettingsPage.saveButton.click();
    }

    @And("Update to Email with invalid credential without special characters.")
    public void updateToEmailWithInvalidCredentialWithoutSpecialCharacters() {
        userSettingsPage.eMail.click();
        userSettingsPage.eMail.clear();
        userSettingsPage.eMail.sendKeys(ConfigurationReader.getProperty("updateInvalidMail"));
    }

    @Then("Assert that visible text invalidField.")
    public void assertThatVisibleTextInvalidField() {
        Assert.assertTrue(userSettingsPage.invalidField.isDisplayed());
    }

    @And("Assert that Language dropdown is not have other languages")
    public void assertThatLanguageDropdownIsNotHaveOtherLanguages() {
        Assert.assertFalse(userSettingsPage.languageDropDown.getText().contains(ConfigurationReader.getProperty("invalidLanguage")));
    }

    @And("Enter the username with customer valid credential for transaction.")
    public void enterTheUsernameWithCustomerValidCredentialForTransaction() {
        userSettingsPage.username.sendKeys(ConfigurationReader.getProperty("TransferUsername"));
    }

    @And("Enter the password with customer valid credential for transaction.")
    public void enterThePasswordWithCustomerValidCredentialForTransaction() {
        userSettingsPage.password.sendKeys(ConfigurationReader.getProperty("TransferPassword"));
    }

    @And("Click to My Operation drop down menu")
    public void clickToMyOperationDropDownMenu() {
        userSettingsPage.MyOperationDropDown.click();
    }

    @And("Click to Transfer Money")
    public void clickToTransferMoney() {
        userSettingsPage.TransferMoney.click();
    }

    @And("Choose first account from first dropdown")
    public void choseeFirstAccountFromFirstDropdown() {
        userSettingsPage.TransferFromBox.click();
        Select select = new Select(userSettingsPage.TransferFromBox);
        select.selectByIndex(1);
    }

    @And("Choose second account from second dropdown")
    public void choseeSecondAccountFromSecondDropdown() {
        userSettingsPage.TransferToBox.click();
        Select select = new Select(userSettingsPage.TransferToBox);
        select.selectByIndex(1);
    }

    @And("Enter a value for transaction")
    public void enterAValueForTransaction() {
        userSettingsPage.BalanceBox.sendKeys(ConfigurationReader.getProperty("TransactionValue"));
    }

    @And("Enter the some information to description box.")
    public void enterTheSomeInformationToDescriptionBox() {
        userSettingsPage.DescriptionBox.sendKeys(ConfigurationReader.getProperty("TextDescriptionBox"));
    }

    @And("Click to Make Transfer Button")
    public void clickToMakeTransferButton() {
        userSettingsPage.MakeTransferButton.click();
    }

    @Then("Assert that visible text")
    public void assertThatVisibleText() {
        Assert.assertTrue(userSettingsPage.TransactionSuccesfullAlert.isDisplayed());
    }
}