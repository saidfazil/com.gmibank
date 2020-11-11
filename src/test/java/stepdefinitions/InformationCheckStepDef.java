package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.ui.Select;
import pages.InformationCheckPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class InformationCheckStepDef {

    InformationCheckPage page = new InformationCheckPage();


    @Given("Go GMI Bank Adress")
    public void goGMIBankAdress() {

        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @When("Click, SignIn Area")
    public void clickSignInArea() {

        page.firstSignIn.click();

    }

    @And("Click, SignIn Entrace Button")
    public void clickSignInEntraceButton() {

        page.signIn.click();

    }

    @And("Click UserName TextBox, Write Available UseName")
    public void clickUserNameTextBoxWriteAvailableUseName() {

        page.userName.sendKeys(ConfigurationReader.getProperty("hb_id"));

    }

    @And("Click Password TextBox, Write Available Password")
    public void clickPasswordTextBoxWriteAvailablePassword() {

        page.password.sendKeys(ConfigurationReader.getProperty("hb_password"));

    }

    @And("Click SignIn Button")
    public void clickSignInButton() {

        page.submitButton.click();

    }

    @And("Click My Operations Area")
    public void clickMyOperationsArea() {

        page.myOperations.click();

    }

    @And("Click Manage Customers")
    public void clickManageCustomers() {

        page.manageCustomers.click();

    }

    @And("Click Create A New Customer")
    public void clickCreateANewCustomer() {

        page.createNewCustomer.click();

    }

    @And("Click SSN TextBox, Write Available SSN Number")
    public void clickSSNTextBoxWriteAvailableSSNNumber() {

        page.ssn.sendKeys(ConfigurationReader.getProperty("hb_SSN"));

    }

    @And("Click Search Button")
    public void clickSearchButton() {

        page.searchButton.click();

    }

    @And("See First Name")
    public void seeFirstName() {

        Assert.assertTrue(page.firstName.isDisplayed());

    }

    @And("See Last Name")
    public void seeLastName() {

        Assert.assertTrue(page.lastName.isDisplayed());

    }

    @Then("See Mail Adress")
    public void seeMailAdress() {

        Assert.assertTrue(page.email.isDisplayed());

    }

    @Then("Select Country.")
    public void selectCountry() {

        Select select = new Select(page.country);

        int country = Integer.parseInt(ConfigurationReader.getProperty("hb_country"));

        select.selectByIndex(country);


    }

    @Then("Write a State.")
    public void writeAState() {

        page.state.sendKeys(ConfigurationReader.getProperty("hb_state"));


    }

    @Then("See Date TextBox")
    public void seeDateTextBox() {

        Assert.assertTrue(page.date.isDisplayed());

    }
}
