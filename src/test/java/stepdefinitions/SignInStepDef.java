package stepdefinitions;
import com.sun.tools.jxc.ConfigReader;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import utilities.ConfigurationReader;
import utilities.Driver;

public class SignInStepDef {
    @Given("user is on “https:\\/\\/gmibank.com\\/login” page.")
    public void user_is_on_https_gmibank_com_login_page() {
       Driver.getDriver ().get (ConfigurationReader.getProperty ("signIn_Url"));
    }

    @Given("the user clicks on Username.")
    public void the_user_clicks_on_Username() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("the user enters the wrong Username")
    public void the_user_enters_the_wrong_Username() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("the user clicks on Password..")
    public void the_user_clicks_on_Password() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("the user enters the correct Password.")
    public void the_user_enters_the_correct_Password() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Given("the user clicks on Sign in .")
    public void the_user_clicks_on_Sign_in() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }

    @Then("the error message on the screen is confirmed.")
    public void the_error_message_on_the_screen_is_confirmed() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
