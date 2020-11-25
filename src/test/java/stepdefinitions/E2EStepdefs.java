package stepdefinitions;

import io.cucumber.java.en.And;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.ManageAccountsPage;
import pages.UserRegistrationPage;
import utilities.Driver;

import java.util.List;

public class E2EStepdefs {

    UserRegistrationPage userRegPage = new UserRegistrationPage();
    ManageAccountsPage manageAccountsPage = new ManageAccountsPage();

    @And("Enter the Address {string} with valid credential")
    public void enterTheAddressWithValidCredential(String arg0) {
        userRegPage.userAddress.sendKeys(arg0);
    }

    @And("Enter the same password {string} with valid credential")
    public void enterTheSamePasswordWithValidCredential(String arg0) {
        userRegPage.userSecondPassword.sendKeys(arg0);
    }

    @And("Enter a {string}  with valid credentailto Descriptions textBox")
    public void enterAWithValidCredentailtoDescriptionsTextBox(String arg0) {
        manageAccountsPage.descriptionsTextbox.sendKeys(arg0);
    }

    @And("Enter a number {string} to Balance textbox")
    public void enterANumberToBalanceTextbox(String arg0) {
        Driver.wait(2);
        manageAccountsPage.balanceTextbox.sendKeys(arg0);
    }

    @And("User select an account {string}")
    public void userSelectAnAccount(String arg0) {
        Select select = new Select(manageAccountsPage.accountTypeDropdown);
        select.selectByValue(arg0);
    }

    @And("User select an account status as ACTIVE")
    public void userSelectAnAccountStatusAsACTIVE() {
        Select select = new Select(manageAccountsPage.statusTypeDropdown);
        select.selectByValue("ACTIVE");
    }

    @And("Click to Save button in the create a new account page")
    public void clickToSaveButtonInTheCreateANewAccountPage() {
        manageAccountsPage.saveCreateAccount.click();
    }


}
