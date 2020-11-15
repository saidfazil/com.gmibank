package stepdefinitions;
import com.sun.tools.jxc.ConfigReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.interactions.Actions;
import pages.SigninPage;
import utilities.ConfigurationReader;
import utilities.Driver;

import static java.lang.Thread.*;

public class SignInStepDef {
    SigninPage signinPage = new SigninPage ();
    @Given("user is on “https:\\/\\/gmibank.com\\/login”.")
    public void user_is_on_https_gmibank_com_login() {
        Driver.getDriver ().get (ConfigurationReader.getProperty ("signIn_Urrl"));

    }

    @Given("the user enters the wrong Username")
    public void the_user_enters_the_wrong_Username() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("falseUsername") +Keys.ENTER);

    }

    @Given("the user enters the correct Password.")
    public void the_user_enters_the_correct_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("truePassword")+Keys.ENTER);

    }

    @Given("user clicks on Sign in .")
    public void user_clicks_on_Sign_in() throws InterruptedException {
        signinPage.signButton.click ();

        sleep (3000);


    }

    @Then("the error message on the screen is confirmed.")
    public void the_error_message_on_the_screen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }

    @Given("the user enters the correct Username")
    public void the_user_enters_the_correct_Username() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("trueUsername") +Keys.ENTER);


    }

    @Given("the user enters the wrong Password.")
    public void the_user_enters_the_wrong_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("falsePassword")+Keys.ENTER);

    }

    @Given("user click on Sign in.")
    public void user_click_on_Sign_in() throws InterruptedException {
       signinPage.signButton.click ();
       sleep (3000);
    }

    @Then("the error message onthe screen is confirmed .")
    public void the_error_message_onthe_screen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }
    @Given("the users enter wrong username")
    public void the_users_enter_wrong_username() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("falseUsername")+Keys.ENTER);

    }

    @Given("the user enters the wronk Password..")
    public void the_user_enters_the_wronk_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("falsePassword")+Keys.ENTER);

    }

    @Given("user clic on sign in.")
    public void user_clic_on_sign_in() throws InterruptedException {
        signinPage.signButton.click ();

        sleep (3000);

    }

    @Then("the error mesage on the screeen is confirmed.")
    public void the_error_mesage_on_the_screeen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }
    @Given("the user enters the invalid Username")
    public void the_user_enters_the_invalid_Username() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("falseUsername")+Keys.ENTER);

    }

    @Given("the user enters the invalid Password.")
    public void the_user_enters_the_invalid_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("falsePassword")+Keys.ENTER);

    }

    @Given("user clicon Sign in .")
    public void user_clicon_Sign_in() throws InterruptedException {
        signinPage.signButton.click ();
        sleep (3000);
    }

    @Given("the error message on the screeen is confirmed.")
    public void the_error_message_on_the_screeen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }

    @Given("If you get an error message, click the Forgot your password link.")
    public void if_you_get_an_error_message_click_the_Forgot_your_password_link() throws InterruptedException {
        signinPage.forgetPass.click ();
        sleep (3000);


    }

    @Then("verify the message on the visited page")
    public void verify_the_message_on_the_visited_page() {
        Assert.assertTrue (signinPage.resetPass.isDisplayed ());

    }
    @Given("the user enters the wrong username")
    public void the_user_enters_the_wrong_username() {
       signinPage.username.sendKeys (ConfigurationReader.getProperty ("falseUsername")+Keys.ENTER);
    }

    @Given("the user enter the wrong Password.")
    public void the_user_enter_the_wrong_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("falsePassword")+Keys.ENTER);

    }

    @Given("user clics on Sign in .")
    public void user_clics_on_Sign_in() throws InterruptedException {
        signinPage.signButton.click ();
        sleep (3000);

    }

    @Given("the error message on the skreen is confirmed.")
    public void the_error_message_on_the_skreen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }

    @Given("If you get an error message, click the You don't have an account yet? Register a new account")
    public void if_you_get_an_error_message_click_the_You_don_t_have_an_account_yet_Register_a_new_account() throws InterruptedException {
        signinPage.Registration.click ();
        sleep (3000);

    }

    @Then("verify the message onthe visited page")
    public void verify_the_message_onthe_visited_page() {
        Assert.assertTrue (signinPage.newRegistration.isDisplayed ());

    }

    @Given("the users enter the wrong Username")
    public void the_users_enter_the_wrong_Username() {
        signinPage.username.sendKeys (ConfigurationReader.getProperty ("falseUsername")+Keys.ENTER);

    }

    @Given("thee users enter thee wrong Password.")
    public void thee_users_enter_thee_wrong_Password() {
        signinPage.password.sendKeys (ConfigurationReader.getProperty ("falsePassword")+Keys.ENTER);

    }

    @Given("users clikson Sign in .")
    public void users_clikson_Sign_in() throws InterruptedException {
        signinPage.signButton.click ();
        sleep (3000);

    }

    @Given("the eror messaage onthe screeen is confirmed.")
    public void the_eror_messaage_onthe_screeen_is_confirmed() {
        Assert.assertTrue (signinPage.errorAlert.isDisplayed ());

    }

    @Given("User clicks cancel after error message")
    public void user_clicks_cancel_after_error_message() throws InterruptedException {
        signinPage.cancel.click ();
        sleep (3000);
        signinPage.dropdown.click ();
        signinPage.dropSign.click ();

        sleep (3000);

    }

    @Given("If the user gets the error message, a bug has been found.")
    public void if_the_user_gets_the_error_message_a_bug_has_been_found() {
        Assert.assertFalse (signinPage.errorAlert.isDisplayed ());

    }



















}