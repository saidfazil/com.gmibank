package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.SigninPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class CreateNewAccountStepDef {
    SigninPage signinPage = new SigninPage ();
    @Given("gmibank.com address goes")
    public void gmibank_com_address_goes() {
        Driver.getDriver ().get (ConfigurationReader.getProperty ("gmi_url"));
    }

    @Given("enter a clicks dropdown menu")
    public void enter_a_clicks_dropdown_menu() {
        signinPage.dropdown.click ();
    }

    @Given("sign in click")
    public void sign_in_click() {
        signinPage.dropSign.click ();
    }

    @Given("the username enters")
    public void the_username_enters() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("adminUsername") + Keys.ENTER);
    }

    @Given("the user password enters u")
    public void the_user_password_enters_u() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("adminPassword") + Keys.ENTER);
    }

    @Given("user clicks sign in button")
    public void user_clicks_sign_in_button() {
        signinPage.signButton.click ();
    }

    @Given("click the `` My Operations {string} drop-down menu at one click.")
    public void click_the_My_Operations_drop_down_menu_at_one_click(String string) {
        signinPage.myOperations.click ();

    }

    @Given("Managing Accounts is safe")
    public void managing_Accounts_is_safe() {
        signinPage.manangeAccount.click ();
    }

    @Then("create new account")
    public void create_new_account() {
        signinPage.createNewAccount.click ();
    }

}








