package stepdefinitions;

import com.sun.tools.jxc.ConfigReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.ManageCostumerPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import java.util.List;

public class ManageCostumerStepDef {
    ManageCostumerPage manageCostumerPage= new ManageCostumerPage();


    @Given("Go to gmibank.com home page")
    public void goToGmibankComHomePage() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }
    @And("Click to User Account drop down menu and Click to Sign In")
    public void clickToUserAccountDropDownMenuAndClickToSignIn() {
        manageCostumerPage.dropDownAccount.click();
        manageCostumerPage.accountSignIn.click();
        //Select select = new Select(manageCostumerPage.dropDownAccount);
        //select.selectByIndex(0);
    }

    @And("Enter the username with valid credentail")
    public void enterTheUsernameWithValidCredentail() {
manageCostumerPage.username.sendKeys(ConfigurationReader.getProperty("employeeUsername"));
    }

    @And("Enter the pasword with valid credentail")
    public void enterThePaswordWithValidCredentail() {
        manageCostumerPage.password.sendKeys(ConfigurationReader.getProperty("employeePassword"));
    }

    @And("Click to Sign in button")
    public void clickToSignInButton() {
        manageCostumerPage.buttonSignin.click();
    }

    @And("Click to My Operations drop down menu and Click to Manage Costumers")
    public void clickToMyOperationsDropDownMenuAndClickToManageCostumers() {
        manageCostumerPage.myOperations.click();
        manageCostumerPage.manageCostumer.click();
    }
    @Then("A Randomly selected customer should show up on manage customers module populating the account information of the customer.")
    public void aRandomlySelectedCustomerShouldShowUpOnManageCustomersModulePopulatingTheAccountInformationOfTheCustomer() {

        /*for (WebElement e:manageCostumerPage.rowList){
            System.out.println(e.getText());
        }*/
    }

}
