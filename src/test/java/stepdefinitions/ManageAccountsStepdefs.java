package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.ManageAccountsPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class ManageAccountsStepdefs {

    ManageAccountsPage manageAccountsPage = new ManageAccountsPage();

    @And("Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account")
    public void clickToMyOperationsDropDownMenuAndClickToManageAccountsThenClickToCreateNewAccount() {
        manageAccountsPage.myOperations.click();
        manageAccountsPage.manageCostumer.click();
        manageAccountsPage.newAccount.click();
    }
    @And("Don't enter a text to descriptions and fill other all informations")
    public void donTEnterATextToDescriptionsAndFillOtherAllInformations() {
        manageAccountsPage.balanceTextbox.sendKeys(ConfigurationReader.getProperty("balanceValid"));
    }

    @And("Click to Save button in the createAccount Page")
    public void clickToSaveButtonInTheCreateAccountPage() {
        manageAccountsPage.saveCreateAccount.click();
    }

    @Then("Should be that message -This field is required.")
    public void shouldBeThatMessageThisFieldIsRequired() {
        Assert.assertTrue(manageAccountsPage.descriptionsBlank.isDisplayed());

    }

    @And("Enter a text to Descriptions TextBox")
    public void enterATextToDescriptionsTextBox() {
        manageAccountsPage.descriptionsTextbox.sendKeys(ConfigurationReader.getProperty("descriptionsTextbox"));
    }

    @Then("Shouldn't be error message")
    public void shouldnTBeErrorMessage() {
        manageAccountsPage.saveCreateAccount.click();
        Assert.assertTrue(manageAccountsPage.alertCreate.isDisplayed());
    }


    @And("Click to Create New Account")
    public void clickToCreateNewAccount() {
        Driver.getDriver().navigate().refresh();
        manageAccountsPage.newAccount.click();

    }

    @And("Enter a text to descriptions textbox")
    public void enterATextToDescriptionsTextbox() {
        manageAccountsPage.descriptionsTextbox.sendKeys(ConfigurationReader.getProperty("descriptionsTextbox"));
    }

    @And("Enter a number be dollar to Balance textbox")
    public void enterANumberBeDollarToBalanceTextbox() {
        manageAccountsPage.balanceTextbox.sendKeys(ConfigurationReader.getProperty("balanceValid"));
    }

    @Then("User should provide a balance for the first time account creation as Dollar")
    public void userShouldProvideABalanceForTheFirstTimeAccountCreationAsDollar() {
        manageAccountsPage.saveCreateAccount.click();
        Assert.assertTrue(manageAccountsPage.alertCreate.isDisplayed());
    }
}
