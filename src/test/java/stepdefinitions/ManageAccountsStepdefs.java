package stepdefinitions;

import io.cucumber.java.bs.A;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.ManageAccountsPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.List;

public class ManageAccountsStepdefs {

    ManageAccountsPage manageAccountsPage = new ManageAccountsPage();

    @And("Click to My Operations drop down menu and Click to Manage Accounts then click to Create New Account")
    public void clickToMyOperationsDropDownMenuAndClickToManageAccountsThenClickToCreateNewAccount() {
        manageAccountsPage.myOperations.click();
        manageAccountsPage.manageCostumer.click();
        manageAccountsPage.newAccount.click();
    }
    @And("Click to Descriptions TextBox")
    public void clickToDescriptionsTextBox() {
        manageAccountsPage.descriptionsTextbox.click();
    }

    @And("Click to Employee Dropdown")
    public void clickToEmployeeDropdown() {
        manageAccountsPage.employeeDropdown.click();
    }

    @Then("Should be that message -This field is required.")
    public void shouldBeThatMessageThisFieldIsRequired() {
        Assert.assertTrue(manageAccountsPage.descriptionsBlank.isDisplayed());

    }

    @And("Enter a number be dollar to Balance textbox")
    public void enterANumberBeDollarToBalanceTextbox() {
        manageAccountsPage.balanceTextbox.sendKeys(ConfigurationReader.getProperty("balanceValid"));
    }

    @Then("User Shouldn't be error message")
    public void userShouldnTBeErrorMessage() {
        Assert.assertFalse(manageAccountsPage.balanceBlank.isDisplayed());
        manageAccountsPage.employeeDropdown.click();

    }

    @Then("User can select an account type as CHECKING, SAVING, CREDIT_CARD or INVESTING")
    public void userCanSelectAnAccountTypeAsCHECKINGSAVINGCREDIT_CARDOrINVESTING() {
        Select select = new Select(manageAccountsPage.accountTypeDropdown);
       List<WebElement> accountTypeList = select.getOptions();
       Assert.assertTrue(accountTypeList.get(0).getText().equals("CHECKING"));
        Assert.assertTrue(accountTypeList.get(1).getText().equals("SAVING"));
        Assert.assertTrue(accountTypeList.get(2).getText().equals("CREDIT_CARD"));
        Assert.assertTrue(accountTypeList.get(3).getText().equals("INVESTING"));


    }

    @Then("Account status should be defined as ACTIVE, SUSPENDED or CLOSED")
    public void accountStatusShouldBeDefinedAsACTIVESUSPENDEDOrCLOSED() {
        Select select = new Select(manageAccountsPage.statusTypeDropdown);
        List<WebElement> statusList = select.getOptions();
        select.selectByIndex(0);
        Assert.assertTrue(statusList.get(0).getText().equals("ACTIVE"));
        select.selectByIndex(1);
        Assert.assertTrue(statusList.get(1).getText().equals("SUSPENDED"));
        select.selectByIndex(2);
        Assert.assertTrue(statusList.get(2).getText().equals("CLOSED"));


    }

    @Then("User can select an employee from the drop-down")
    public void userCanSelectAnEmployeeFromTheDropDown() {
        Driver.scrollToElement(manageAccountsPage.statusTypeDropdown);
        Select select = new Select(manageAccountsPage.employeeDropdown);
        manageAccountsPage.employeeDropdown.click();
        Assert.assertTrue(select.getAllSelectedOptions().size()>1);


    }



}
