package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.NoSuchElementException;
import pages.UserRegistrationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class UserRegistrationStepDef  {

    UserRegistrationPage userRegPage = new UserRegistrationPage();

    //US01TC01
    @Given("Go to gmibank.com home page us01")
    public void goToHomePage(){
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));
    }

    @Given("Click to User Account menu and Click to Register")
    public void click_to_User_Account_menu_and_Click_to_Register() {
        userRegPage.userMenu.click();
        userRegPage.userRegistrationButton.click();
    }


    @Given("Enter the SSN with valid credential")
    public void enter_the_SSN_with_valid_credential() {
        userRegPage.user_SSN.sendKeys(ConfigurationReader.getProperty("SSN01"));
    }

    @Given("Click on first name box")
    public void click_first_name_box(){
        userRegPage.userFirstName.click();
    }

    @Then ("There should be a valid SSN respecting")
    public void there_should_be_a_valid_SSN_respecting(){

       try {
            Assert.assertFalse(userRegPage.alertMessageSSN.isDisplayed());
       }catch (NoSuchElementException e){
         boolean  bln = true;
       }

    }

    //US01TC02

    @Given("Enter the First Name with valid credential")
    public void enter_the_First_Name_with_valid_credential() {

        userRegPage.userFirstName.sendKeys(ConfigurationReader.getProperty("first_name"));
    }

    @Given("click on last name box")
    public void click_on_last_name_box() {
        userRegPage.userLastName.click();
    }

    @Then("There should be a valid name respecting")
    public void there_should_be_a_valid_name_respecting(){
        try {
                Assert.assertFalse(userRegPage.alertMessageFirstName.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC03

    @Given("Enter the Last Name with valid credential")
    public void enter_the_Last_Name_with_valid_credential() {

        userRegPage.userLastName.sendKeys(ConfigurationReader.getProperty("last_name"));
    }

    @Given("click on Address box")
    public void click_on_Address_box() {
        userRegPage.userAddress.click();
    }

    @Then("There should be a valid last name respecting")
    public void there_should_be_a_valid_last_name_respecting(){
        try {
            Assert.assertFalse(userRegPage.alertMessageLastName.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC04
    @Given("Enter the Address")
    public void enter_the_Address() {
        userRegPage.userAddress.sendKeys(ConfigurationReader.getProperty("address01"));
    }

    @Given("click on mobile phone number box")
    public void click_on_mobile_phone_number_box() {
        userRegPage.userMobilePhoneNumber.click();
    }

    @Then("There should be a valid address respecting")
    public void there_should_be_a_valid_address_respecting() {
    }

    //US01TC05

    @Given("Enter the Mobile Phone Number with valid credential")
    public void enter_the_Mobile_Phone_Number_with_valid_credential() {
        userRegPage.userMobilePhoneNumber.sendKeys(ConfigurationReader.getProperty("mobile_phone_number"));
    }

    @Given("click on username box")
    public void click_on_username_box() {
        userRegPage.userName.click();
    }

    @Then("There should be a valid mobile phone number respecting")
    public void there_should_be_a_valid_mobile_phone_number_respecting() {
        try {
            Assert.assertFalse(userRegPage.alertMessageMobileNumber.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC06

    @Given("Enter the valid username with valid credentail")
    public void enter_the_username_with_valid_credentail(){
        userRegPage.userName.sendKeys(ConfigurationReader.getProperty("username01"));
    }

    @Given("click on email box")
    public void click_on_email_box() {
        userRegPage.userEmail.click();
    }

    @Then("There should be a valid username respecting")
    public void there_should_be_a_valid_username_respecting() {
        try {
            Assert.assertFalse(userRegPage.alertMessageUsername.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC07

    @Given("Enter the e-mail with valid credential")
    public void enter_the_e_mail_with_valid_credential() {
        userRegPage.userEmail.sendKeys(ConfigurationReader.getProperty("email01"));
    }

    @Given("click on new password box")
    public void click_on_new_password_box() {
        userRegPage.userFirstPassword.click();
    }

    @Then("There should be a valid email respecting")
    public void there_should_be_a_valid_email_respecting() {
        try {
            Assert.assertFalse(userRegPage.alertMessageEmail.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC08

    @Given("Enter the new password with valid credential")
    public void enter_the_new_password_with_valid_credential() {
        userRegPage.userFirstPassword.sendKeys(ConfigurationReader.getProperty("new_password"));
    }

    @Given("click on new password confirmation box")
    public void click_on_new_password_confirmation_box() {
        userRegPage.userSecondPassword.click();
    }

    @Then("There should be a valid password respecting")
    public void there_should_be_a_valid_password_respecting() {
        try {
            Assert.assertFalse(userRegPage.alertMessagePassword.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC09

    @Given("Enter the same password with valid credential")
    public void enter_the_same_password_with_valid_credential() {
        userRegPage.userSecondPassword.sendKeys(ConfigurationReader.getProperty("new_password"));
    }

    @Given("click on new password box02")
    public void click_on_new_password_box02() {
        userRegPage.userFirstPassword.click();
    }

    @Then("entry should be same with password")
    public void entry_should_be_same_with_password() {
        try {
            Assert.assertFalse(userRegPage.alertMessageSecondPassword.isDisplayed());
        }catch (NoSuchElementException e){
            boolean  bln = true;
        }
    }

    //US01TC10

    @Given("Click to Register button")
    public void click_to_Register_button() {
        userRegPage.registrationSubmitButton.submit();
    }

    @Then("There should be Succes message.")
    public void there_should_be_Succes_message() {

            Assert.assertTrue(userRegPage.successMessage.isDisplayed());
    }

}