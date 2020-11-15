package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import pages.LoginPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class LoginStepDef {
    LoginPage loginPage=new LoginPage();

    @Given("user is on the gmibanklogin page.")
    public void user_is_on_the_gmibanklogin_page() {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));

    }

    @When("user clicks login button")
    public void user_clicks_login_button() {

        loginPage.gmiloginButton.click();
    }

    @When("user signin buton.")
    public void user_signin_buton() {
      loginPage.signinbutton.click();
    }


    @When("user enters valid username.")
    public void user_enters_valid_username() {
        loginPage.username.sendKeys("globalemployee1");

    }

    @When("Puser enters  valid password.")
    public void puser_enters_valid_password() {

        loginPage.password.sendKeys("Global.123");
    }

    @When("user clicks signin button.")
    public void user_clicks_signin_button() {
        loginPage.signin1button.click();

    }

    @Then("verify login is successfulli")
    public void verify_login_is_successfulli() {
        loginPage.sucses.isDisplayed();

    }

}
