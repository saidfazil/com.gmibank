package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.eo.Se;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.Select;
import pages.SigninPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class CreateNewAccountStepDef {
    SigninPage signinPage = new SigninPage ();
    //Select options = new Select (signinPage.dropDownAccountStatus);

    @Given("gmibank.com address goes")
    public void gmibank_com_address_goes() {
        Driver.getDriver ().get (ConfigurationReader.getProperty ("gmi_url"));
    }

    @Given("enter a clicks dropdown menu")
    public void enter_a_clicks_dropdown_menu() {
        signinPage.dropdown.click ();
    }

    @Given("sign in")
    public void sign_in() {
        signinPage.dropSign.click ();
    }

    @Given("the username enters i")
    public void the_username_enters_i() {
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

    @Given("create a new Account and more")
    public void create_a_new_Account_and_more() throws InterruptedException {
        signinPage.createNewAccount.click ();
        Thread.sleep (3000);
    }
    @Given("The User sign out")
    public void the_User_sign_out() throws InterruptedException {
        signinPage.refresh.click ();
        signinPage.signOut.click ();

        Thread.sleep (3000);
    }
    @Given("click the My Operations drop-down menu at one click.")
    public void click_the_My_Operations_drop_down_menu_at_one_click() {
       signinPage.myOperations.click ();
       signinPage.manangeAccount.click ();

    }
    @Then("The User Descrition field is clicked but left blank.")
    public void the_User_Descrition_field_is_clicked_but_left_blank() {

    }

    @Then("hen the user enters a number in the {string} field")
    public void hen_the_user_enters_a_number_in_the_field(String string) {

    }

    @Then("hen clicks Account Type dropdown")
    public void hen_clicks_Account_Type_dropdown() {

    }

    @Then("hen clicks Account Status Type dropdown")
    public void hen_clicks_Account_Status_Type_dropdown() {

    }

    @Then("hen User Employee clicks dropdown")
    public void hen_User_Employee_clicks_dropdown() {

    }

    @Then("hen clicks Save button.")
    public void hen_clicks_Save_button() {

    }
    @Given("click the {string} dropdown menu at one click.")
    public void click_the_dropdown_menu_at_one_click(String string) {
        signinPage.myOperations.click ();
        signinPage.manangeAccount.click ();
    }


    @Given("click the {string} drop-down menu at one click.")
    public void click_the_drop_down_menu_at_one_click(String string) {


    }

    @Then("Click User Account Status Type dropdown")
    public void click_User_Account_Status_Type_dropdown() {

    }

    @Then("confirms that the {string} option can be selected from the drop down select menu")
    public void confirms_that_the_option_can_be_selected_from_the_drop_down_select_menu(String string) {

    }

    @Then("confirms that the {string} option can be selected from the select menu that opens.")
    public void confirms_that_the_option_can_be_selected_from_the_select_menu_that_opens(String string) {

    }

    @Then("it verifies that the {string} option is selectable from the select menu that opens.")
    public void it_verifies_that_the_option_is_selectable_from_the_select_menu_that_opens(String string) {

    }

    @Then("confirms that the {string} option can be selected from the opened seleck menu.")
    public void confirms_that_the_option_can_be_selected_from_the_opened_seleck_menu(String string) {

    }
    @Given("click the {string} droppdown menu at one click.")
    public void click_the_droppdown_menu_at_one_click(String string) {
        signinPage.myOperations.click ();
        signinPage.manangeAccount.click ();
    }

    @Then("An Account Type dropdown menu")
    public void an_Account_Type_dropdown_menu() {
        signinPage.dropDownAccountType.click ();

    }



    @Then("confirms that the {string} option is selectable from the select menu that opens.")
    public void confirms_that_the_option_is_selectable_from_the_select_menu_that_opens(String string) {

    }

    @Then("confirm that the {string} option is selectable from the drop-down menu.")
    public void confirm_that_the_option_is_selectable_from_the_drop_down_menu(String string) {

    }
    @Given("click the {string} dropdown menu att one click.")
    public void click_the_dropdown_menu_att_one_click(String string) {
        signinPage.myOperations.click ();
        signinPage.manangeAccount.click ();

    }

    @Then("User Employee clicks dropdown")
    public void user_Employee_clicks_dropdown() {
        signinPage.employe.click ();

    }

    @Then("confirms that an employee can be selected from the select drop-down menu.")
    public void confirms_that_an_employee_can_be_selected_from_the_select_drop_down_menu() {

    }




}









