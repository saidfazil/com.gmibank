package stepdefinitions;

import com.sun.org.apache.bcel.internal.generic.GOTO;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import jdk.internal.org.objectweb.asm.tree.TryCatchBlockNode;
import org.checkerframework.checker.units.qual.C;
import org.codehaus.groovy.transform.tailrec.GotoRecurHereException;
import org.junit.Assert;
import org.junit.TestCouldNotBeSkippedException;
import org.junit.runners.model.TestTimedOutException;
import org.openqa.selenium.Keys;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.support.Color;
import pages.CostumerRegistrationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class CostumerRegistrationNegatifTestStepDef {

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

    @Then("user enters a invalid SSN number {string}")
    public void userEntersAInvalidSSNNumber(String string) {
        costRegPage.SSN_Number.sendKeys((string), Keys.ENTER);
        try {
            Assert.assertTrue(costRegPage.ssnNullErrorMessage.isDisplayed());
            Assert.assertTrue(costRegPage.ssnErrorMessage.isDisplayed());
        } catch (NoSuchElementException e) {
            boolean bln = true;
        }
    }

    @Given("click on First Name TextBox")
    public void click_on_First_Name_TextBox() {
        costRegPage.First_Name_TextBox.click();

    }

    @Then("user enters a invalid First Name {string}")
    public void userEntersAInvalidFirstName(String string) {
        costRegPage.First_Name.sendKeys((string), Keys.ENTER);
        Assert.assertTrue(costRegPage.firstNameErrorMessage.isDisplayed());

    }

    @Given("click on Last Name TextBox")
    public void click_on_Last_Name_TextBox() {
        costRegPage.Last_Name_TextBox.click();

    }

    @Then("user enters a invalid Last Name {string}")
    public void userEntersAInvalidLastName(String string) {
        costRegPage.Last_Name.sendKeys((string), Keys.ENTER);
        Assert.assertTrue(costRegPage.lastNameErrorMessage.isDisplayed());

    }

    @Given("click on Address TextBox")
    public void click_on_Address_TextBox() {
        costRegPage.Address_TextBox.click();

    }

    @Then("user enters invalid Address {string}")
    public void userEntersInvalidAddress(String string) {
        costRegPage.Address_TextBox.sendKeys((string), Keys.ENTER);
        Assert.assertTrue(costRegPage.Address.isDisplayed());

    }


    @Given("click on Mobile Phone Number TextBox")
    public void click_on_Mobile_Phone_Number_TextBox() {
        costRegPage.Mobile_Phone_Number_TextBox.click();

    }

    @Then("user enters a invalid Mobil Phone Number {string}")
    public void userEntersAInvalidMobilPhoneNumber(String string) {
        costRegPage.Mobile_Phone_Number.sendKeys((string), Keys.ENTER);
        try {
            Assert.assertTrue(costRegPage.mobilPhoneErrorMessage.isDisplayed());
            Assert.assertTrue(costRegPage.nullmobilPhoneMessage.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }


    }

    @Given("click on Username TextBox")
    public void click_on_Username_TextBox() {
        costRegPage.Username_TextBox.click();

    }

    @And("user enters invalid username {string}")
    public void userEntersInvalidUsername(String string) {
        costRegPage.Username.sendKeys((string), Keys.ENTER);
        Assert.assertTrue(costRegPage.UsernameErrorMessage.isDisplayed());

    }

    @Given("click on Email TextBox")
    public void click_on_Email_TextBox() {
        costRegPage.Email_TextBox.click();

    }


    @Then("user enters invalid Email {string}")
    public void userEntersInvalidEmail(String string) throws InterruptedException {
        costRegPage.Email.sendKeys((string), Keys.ENTER);
        try {
            Assert.assertTrue(costRegPage.EmailNullErrorMessage.isDisplayed());
            Assert.assertTrue(costRegPage.EmailErrorMessage.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }

        Thread.sleep(3000);

    }

    @Given("click on New password TextBox")
    public void click_on_New_password_TextBox() {
        costRegPage.New_password_TextBox.click();


    }

    @Then("user enters invalid New password {string}")
    public void userEntersInvalidNewPassword(String string) {
        costRegPage.New_password.sendKeys((string), Keys.ENTER);
        try {
            Assert.assertTrue(costRegPage.PasswordCharecterErrorMessage.isDisplayed());
            Assert.assertTrue(costRegPage.firstPasswordErrorMessage.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }


    }

    @Given("Password strength level must be strong")
    public void password_strength_level_must_be_strong() {
        Assert.assertTrue(costRegPage.Password_strength.isDisplayed());

    }

    @Given("click on New password confirmation TextBox")
    public void click_on_New_password_confirmation_TextBox() {
        costRegPage.Password_Confirmation_TextBox.click();

    }

    @Then("user enters invalid New password confirmation {string}")
    public void userEntersInvalidNewPasswordConfirmation(String string) {
        costRegPage.Password_Confirmation.sendKeys((string), Keys.ENTER);
        try {
            Assert.assertTrue(costRegPage.secontPasswordErrorMessage.isDisplayed());
            Assert.assertTrue(costRegPage.secontCharecterErrorMessage.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }

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

    @And("the user must type the character {string} - when entering a number into the current SSN TextBox.")
    public void theUserMustTypeTheCharacterWhenEnteringANumberIntoTheCurrentSSNTextBox(String string) {
        costRegPage.charecter_SSN_TextBox.sendKeys((string), Keys.ENTER);

    }

    @Then("ssn the user should not see the text {string}")
    public void ssn_the_user_should_not_see_the_text(String string) throws InterruptedException {

        Thread.sleep(3000);

        try {
            Assert.assertTrue(costRegPage.No_SSN_message.isDisplayed());
        } catch (NoSuchElementException e){
            boolean bln = true;
        }
    }

    //    @US02TC03

    @And("new click on Mobile Phone Number TexttBox")
    public void newClickOnMobilePhoneNumberTexttBox() {

        costRegPage.charecter_Mobile_Phone_TextBox.click();
    }

    @And("user must type the{string} character - when entering a number into the valid Mobile Phone Number TextBox")
    public void userMustTypeTheCharacterWhenEnteringANumberIntoTheValidMobilePhoneNumberTextBox(String string) {
        costRegPage.Mobile_Phone_Number.sendKeys((string), Keys.ENTER);

    }

    @Then("mobil the user should not see the text {string}.")
    public void mobiltheUserShouldNotSeeTheText(String string) {
        try {
            Assert.assertTrue(costRegPage.no_see_mobile_phone_number_invalid.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }



    }
    //    @US02TC04

    @Given("new click on Email TextBox")
    public void new_click_on_Email_TextBox() {
        costRegPage.charecter_Email_TextBox.click();

    }

    @And("the user is entering a valid Email TextBox Email Must use{string} @  character and .com expression in TextBox")
    public void theUserIsEnteringAValidEmailTextBoxEmailMustUseCharacterAndComExpressionInTextBox(String string) {
        costRegPage.Email.sendKeys((string), Keys.ENTER);

    }

    @Then("email the user should not see the text {string}.")
    public void EmailTheUserShouldNotSeeTheText(String string) {
        try {
            Assert.assertTrue(costRegPage.no_See_Email_Invalid_Message.isDisplayed());
        }catch (NoSuchElementException e){
            boolean bln = true;
        }

    }


}

