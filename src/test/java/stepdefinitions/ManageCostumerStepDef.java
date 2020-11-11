package stepdefinitions;

import com.sun.tools.jxc.ConfigReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import utilities.ConfigurationReader;
import utilities.Driver;

public class ManageCostumerStepDef {

    @Given("Go to {string} link")
    public void goToLink(String arg0) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @And("Click to User drop down menu")
    public void clickToUserDropDownMenu() {
    }

    @And("Click to Sign in")
    public void clickToSignIn() {
    }

    @And("Enter the username with valid credentail")
    public void enterTheUsernameWithValidCredentail() {
    }

    @And("Enter the pasword with valid credentail")
    public void enterThePaswordWithValidCredentail() {
    }

    @And("Click to Sign in button")
    public void clickToSignInButton() {
    }

    @And("Click to My Operations drop down menu")
    public void clickToMyOperationsDropDownMenu() {
    }

    @And("Click to Manage Costumers")
    public void clickToManageCostumers() {
    }

    @Then("Random customer should show up on manage customers module populating the account information of the customer.")
    public void randomCustomerShouldShowUpOnManageCustomersModulePopulatingTheAccountInformationOfTheCustomer() {
    }
}
