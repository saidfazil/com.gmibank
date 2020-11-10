package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.checkerframework.checker.units.qual.C;
import org.junit.Assert;
import pages.CostumerRegistrationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class CostumerRegistrationStepDef {

    CostumerRegistrationPage costRegPage = new CostumerRegistrationPage();


//    @US02TC01

    @Given("user is on {string} page")
    public void user_is_on_page(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));


    }

    @Given("user click on User button")
    public void user_click_on_User_button() {
        costRegPage.user_button.click();

    }

    @Given("user clicks Registration tab")
    public void user_clicks_Registration_tab() {
        costRegPage.registration_button.click();

    }

    @Given("click on SSN TextBox")
    public void click_on_SSN_TextBox() {
        costRegPage.SSN_TextBox.click();

    }

    @Given("user enters a valid SSN number")
    public void user_enters_a_valid_SSN_number() {
        costRegPage.SSN_Number.sendKeys(ConfigurationReader.getProperty("SSN"));

    }

    @Given("click on First Name TextBox")
    public void click_on_First_Name_TextBox() {
        costRegPage.First_Name_TextBox.click();

    }

    @Given("user enters a valid First Name")
    public void user_enters_a_valid_First_Name() {
        costRegPage.First_Name.sendKeys(ConfigurationReader.getProperty("First_Name"));

    }

    @Given("click on Last Name TextBox")
    public void click_on_Last_Name_TextBox() {
        costRegPage.Last_Name_TextBox.click();

    }

    @Given("user enters a valid Last Name")
    public void user_enters_a_valid_Last_Name() {
        costRegPage.Last_Name.sendKeys(ConfigurationReader.getProperty("Last_Name"));

    }

    @Given("click on Address TextBox")
    public void click_on_Address_TextBox() {
        costRegPage.Address_TextBox.click();

    }

    @Given("user enters Valid Address")
    public void user_enters_Valid_Address() {
        costRegPage.Address.sendKeys(ConfigurationReader.getProperty("Address"));

    }

    @Given("click on Mobile Phone Number TextBox")
    public void click_on_Mobile_Phone_Number_TextBox() {
        costRegPage.Mobile_Phone_Number_TextBox.click();

    }

    @Given("user enters a valid Mobile Phone Number")
    public void user_enters_a_valid_Mobile_Phone_Number() {
        costRegPage.Mobile_Phone_Number.sendKeys(ConfigurationReader.getProperty("Mobile_Phone_Number"));

    }

    @Given("click on Username TextBox")
    public void click_on_Username_TextBox() {
        costRegPage.Username_TextBox.click();

    }

    @Given("user enters Valid Username")
    public void user_enters_Valid_Username() {
        costRegPage.Username.sendKeys(ConfigurationReader.getProperty("Username"));

    }

    @Given("click on Email TextBox")
    public void click_on_Email_TextBox() {
        costRegPage.Email_TextBox.click();

    }

    @Given("user enters Valid Email")
    public void user_enters_Valid_Email() {
        costRegPage.Email.sendKeys(ConfigurationReader.getProperty("Email"));

    }

    @Given("click on New password TextBox")
    public void click_on_New_password_TextBox() {
        costRegPage.New_password_TextBox.click();

    }

    @Given("user enters valid New password")
    public void user_enters_valid_New_password() {
        costRegPage.New_password.sendKeys(ConfigurationReader.getProperty("New_password"));

    }

    @Given("Password strength level must be strong")
    public void password_strength_level_must_be_strong() {
        Assert.assertTrue(costRegPage.Password_strength.isDisplayed());

    }

    @Given("click on New password confirmation TextBox")
    public void click_on_New_password_confirmation_TextBox() {
        costRegPage.Password_Confirmation_TextBox.click();

    }

    @Given("user enters valid New password confirmation")
    public void user_enters_valid_New_password_confirmation() {
        costRegPage.Password_Confirmation.sendKeys(ConfigurationReader.getProperty("New_password"));

    }

    @Given("user clicks the Register button")
    public void user_clicks_the_Register_button() {
        costRegPage.Register_button.click();

    }

    @Then("the user should see the message {string}")
    public void the_user_should_see_the_message(String string) {
        costRegPage.SavedMessage.isDisplayed();

    }

//    @US02TC02

    @Given("SSN user is on {string} page")
    public void SSN_user_is_on_page(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));


    }

    @Given("SSN user click on User button")
    public void SSN_user_click_on_User_button() {
        costRegPage.user_button.click();

    }

    @Given("SSN user clicks Registration tab")
    public void SSN_user_clicks_Registration_tab() {
        costRegPage.registration_button.click();

    }

    @Given("SSN click on SSN TextBox")
    public void SSN_click_on_SSN_TextBox() {
        costRegPage.SSN_TextBox.click();

    }
    @Given("SSN the user must type the character {string} when entering a number into the current SSN TextBox.")
    public void SSN_the_user_must_type_the_character_when_entering_a_number_into_the_current_SSN_TextBox(String string) {
        String ssn = ConfigurationReader.getProperty("SSN");
        String newSSN = Driver.getNewSSN(ssn);
        costRegPage.charecter_SSN_TextBox.sendKeys(newSSN);

    }

    @Then("SSN the user should not see the text {string}")
    public void SSN_the_user_should_not_see_the_text(String string) {
        costRegPage.No_SSN_message.isDisplayed();

    }

    //    @US02TC03
    @Given("MPhone user is on {string} page")
    public void MPhone_user_is_on_page(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));


    }

    @Given("MPhone user click on User button")
    public void MPhone_user_click_on_User_button() {
        costRegPage.user_button.click();

    }

    @Given("MPhone user clicks Registration tab")
    public void MPhone_user_clicks_Registration_tab() {
        costRegPage.registration_button.click();

    }

    @And("MPhone click on Mobile Phone Number TexttBox")
    public void MPhone_clickOnMobilePhoneNumberTexttBox() {

        costRegPage.Mobile_Phone_Number_TextBox.click();
    }

    @And("MPhone user must type the character {string} when entering a number into the valid Mobile Phone Number TextBox")
    public void MPhone_userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(String arg0) {
        String Hypen = "-";
        costRegPage.Mobile_Phone_Number.sendKeys(ConfigurationReader.getProperty("Mobile_Phone_Number"));

    }

    @Then("MPhone the user should not see the text {string}.")
    public void MPhone_theUserShouldNotSeeTheText(String arg0) {
        costRegPage.no_see_mobile_phone_number_invalid.isDisplayed();


    }
    //    @US02TC04
    @Given("Email user is on {string} page")
    public void Email_user_is_on_page(String string) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));


    }

    @Given("Email user click on User button")
    public void Email_user_click_on_User_button() {
        costRegPage.user_button.click();

    }

    @Given("Email user clicks Registration tab")
    public void Email_user_clicks_Registration_tab() {
        costRegPage.registration_button.click();

    }
    @Given("Email click on Email TextBox")
    public void Email_click_on_Email_TextBox() {
        costRegPage.charecter_Email_TextBox.click();

    }
    @And("Email the user is entering a valid Email TextBox. Email Must use {string} character and {string} expression in TextBox")
    public void Email_theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndExpressionInTextBox (String arg0, String arg1){

    }
    @Then("Email the user should not see the text {string}.")
    public void Email_theUserShouldNotSeeTheText(String arg0) {
        costRegPage.no_See_Email_Invalid_Message.isDisplayed();


    }

}


