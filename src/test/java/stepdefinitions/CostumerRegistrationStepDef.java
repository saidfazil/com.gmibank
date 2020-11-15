package stepdefinitions;

import com.sun.org.apache.bcel.internal.generic.GOTO;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.checkerframework.checker.units.qual.C;
import org.codehaus.groovy.transform.tailrec.GotoRecurHereException;
import org.junit.Assert;
import org.junit.TestCouldNotBeSkippedException;
import org.junit.runners.model.TestTimedOutException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.support.Color;
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

    @And("user enters a invalid SSN number")
    public void userEntersAInvalidSSNNumber() throws InterruptedException {

        costRegPage.SSN_Number.sendKeys(ConfigurationReader.getProperty("SSN"), Keys.ENTER);
        Thread.sleep(2000);
            costRegPage.ssnErrorMessage.isDisplayed();

    }

    @Given("click on First Name TextBox")
    public void click_on_First_Name_TextBox() {
        costRegPage.First_Name_TextBox.click();

    }

    @And("user enters a invalid First Name")
    public void userEntersAInvalidFirstName() {
        costRegPage.First_Name.sendKeys(ConfigurationReader.getProperty("First_Name"));
        Assert.assertTrue(costRegPage.firstNameErrorMessage.isDisplayed());

    }

    @Given("click on Last Name TextBox")
    public void click_on_Last_Name_TextBox() {
        costRegPage.Last_Name_TextBox.click();

    }

    @And("user enters a invalid Last Name")
    public void userEntersAInvalidLastName() {
        costRegPage.Last_Name.sendKeys(ConfigurationReader.getProperty("Last_Name"));
        Assert.assertTrue(costRegPage.lastNameErrorMessage.isDisplayed());

    }

    @Given("click on Address TextBox")
    public void click_on_Address_TextBox() {
        costRegPage.Address_TextBox.click();

    }
    @And("user enters invalid Address")
    public void userEntersInvalidAddress() {
        costRegPage.Address_TextBox.sendKeys(ConfigurationReader.getProperty("Address"));
        Assert.assertTrue(costRegPage.Address.isDisplayed());

    }

//    @US02TC01_A

    @Given("click on Mobile Phone Number TextBox")
    public void click_on_Mobile_Phone_Number_TextBox() {
        costRegPage.Mobile_Phone_Number_TextBox.click();

    }

    @And("user enters a invalid Mobile Phone Number")
    public void userEntersAInvalidMobilePhoneNumber() {
        costRegPage.Mobile_Phone_Number.sendKeys(ConfigurationReader.getProperty("Mobile_Phone_Number"),Keys.ENTER);
        Assert.assertTrue(costRegPage.mobilPhoneErrorMessage.isDisplayed());

    }

    @Given("click on Username TextBox")
    public void click_on_Username_TextBox() {
        costRegPage.Username_TextBox.click();

    }

    @And("user enters invalid Username")
    public void userEntersInvalidUsername() {
        costRegPage.Username.sendKeys(ConfigurationReader.getProperty("Username"),Keys.ENTER);
        Assert.assertTrue(costRegPage.UsernameErrorMessage.isDisplayed());

    }

    @Given("click on Email TextBox")
    public void click_on_Email_TextBox() {
        costRegPage.Email_TextBox.click();

    }

    @And("user on null Email TextBox")
    public void userOnNullEmailTextBox() {
        costRegPage.Email.sendKeys(ConfigurationReader.getProperty("Null_Email"));
        Assert.assertTrue(costRegPage.EmailNullErrorMessage.isDisplayed());

    }

    @And("user enters invalid Email")
    public void userEntersInvalidEmail() throws InterruptedException {
        Thread.sleep(3000);
        costRegPage.Email_TextBox.clear();
        costRegPage.Email.sendKeys(ConfigurationReader.getProperty("Email"),Keys.ENTER);
        Assert.assertTrue(costRegPage.EmailErrorMessage.isDisplayed());

    }

    @Given("click on New password TextBox")
    public void click_on_New_password_TextBox() {
        costRegPage.New_password_TextBox.click();


    }

    @And("user on null New password TextBox")
    public void userOnNullNewPasswordTextBox() {
        costRegPage.New_password.sendKeys(ConfigurationReader.getProperty("Null_Password"));
        Assert.assertTrue(costRegPage.firstPasswordErrorMessage.isDisplayed());
    }

    @And("user enters invalid New password")
    public void userEntersInvalidNewPassword() {
        costRegPage.New_password.sendKeys(ConfigurationReader.getProperty("New_password"),Keys.ENTER);
        Assert.assertTrue(costRegPage.PasswordCharecterErrorMessage.isDisplayed());

    }

    @Given("Password strength level must be strong")
    public void password_strength_level_must_be_strong() {
        Assert.assertTrue(costRegPage.Password_strength.isDisplayed());

    }

    @Given("click on New password confirmation TextBox")
    public void click_on_New_password_confirmation_TextBox() {
        costRegPage.Password_Confirmation_TextBox.click();

    }

    @And("user on null New password confirmation TextBox")
    public void userOnNullNewPasswordConfirmationTextBox() {
        costRegPage.Password_Confirmation.sendKeys(ConfigurationReader.getProperty("Null_Password"));
        Assert.assertTrue(costRegPage.secontPasswordErrorMessage.isDisplayed());
    }

    @And("user enters invalid New password confirmation")
    public void userEntersInvalidNewPasswordConfirmation() {
        costRegPage.Password_Confirmation.sendKeys(ConfigurationReader.getProperty("New_password"),Keys.ENTER);
        Assert.assertTrue(costRegPage.secontCharecterErrorMessage.isDisplayed());
    }

    @Then("user clicks the Register button")
    public void user_clicks_the_Register_button() {
        costRegPage.Register_button.click();

    }

//    @US02TC02


    @Given("new click on SSN TextBox")
    public void new_click_on_SSN_TextBox() {
        costRegPage.SSN_TextBox.click();

    }
    @Given("the user must type the character {string} when entering a number into the current SSN TextBox.")
    public void the_user_must_type_the_character_when_entering_a_number_into_the_current_SSN_TextBox(String string) {
        costRegPage.charecter_SSN_TextBox.sendKeys(ConfigurationReader.getProperty("SSN"),Keys.ENTER);

    }

    @Then("ssn the user should not see the text {string}")
    public void ssn_the_user_should_not_see_the_text(String string) throws InterruptedException {

        Thread.sleep(5000);
        Assert.assertTrue(costRegPage.No_SSN_message.isDisplayed());

    }

    //    @US02TC03

    @And("new click on Mobile Phone Number TexttBox")
    public void newClickOnMobilePhoneNumberTexttBox() {

        costRegPage.charecter_Mobile_Phone_TextBox.click();
    }

    @And("user must type the character {string} when entering a number into the valid Mobile Phone Number TextBox")
    public void userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(String string) {
        costRegPage.Mobile_Phone_Number.sendKeys(ConfigurationReader.getProperty("Mobile_Phone_Number"),Keys.ENTER);


    }

    @Then("mobil the user should not see the text {string}.")
    public void mobiltheUserShouldNotSeeTheText(String string) {
        Assert.assertTrue(costRegPage.no_see_mobile_phone_number_invalid.isDisplayed());


    }
    //    @US02TC04

    @Given("new click on Email TextBox")
    public void new_click_on_Email_TextBox() {
        costRegPage.charecter_Email_TextBox.click();

    }
    @And("the user is entering a valid Email TextBox. Email Must use {string} character and {string} expression in TextBox")
    public void theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndExpressionInTextBox (String string, String string1){
        costRegPage.Email.sendKeys(ConfigurationReader.getProperty("Email"),Keys.ENTER);

    }
    @Then("email the user should not see the text {string}.")
    public void EmailTheUserShouldNotSeeTheText(String string) {
        Assert.assertTrue(costRegPage.no_See_Email_Invalid_Message.isDisplayed());


    }



}


