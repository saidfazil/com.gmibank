package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;
import pages.AdminRoleActivationPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class US17AdminRoleActivationStepDef {

    AdminRoleActivationPage roleActivationPage = new AdminRoleActivationPage();

    @Given("user is on {string} page.")
    public void user_is_on_page(String gmi_bank_url) {
        Driver.getDriver().get(ConfigurationReader.getProperty("gmi_bank_url"));

    }

    @Given("user click on User Button")
    public void user_click_on_User_Button() {
        roleActivationPage.user_button.click();

    }

    @Given("user click on Sign in menu")
    public void user_click_on_Sign_in_menu() {
        roleActivationPage.signIn_button.click();

    }

    @Given("user enters username and password")
    public void user_enters_username_and_password() {
        roleActivationPage.username.sendKeys(ConfigurationReader.getProperty("UsernameUS17"));
        roleActivationPage.password.sendKeys(ConfigurationReader.getProperty("PasswordUS17"));

    }

    @Given("user click on Sign in button")
    public void user_click_on_Sign_in_button() {
        roleActivationPage.signIn_submit.click();

    }

    @Given("user click on the  Administration menu")
    public void user_click_on_the_Administration_menu() {
        roleActivationPage.Administration.click();

    }

    @Given("user click on the User Management putton")
    public void user_click_on_the_User_Management_putton() {
        roleActivationPage.user_Management.click();

    }


    //      @US017TC01
    @Given("user click on the Edit putton TCOne")
    public void user_click_on_the_Edit_putton_TCone() {
        roleActivationPage.edit_button.click();

    }

    @Given("user should be able to assign Role as User from Profiles dropdown")
    public void user_should_be_able_to_assign_Role_as_User_from_Profiles_dropdown() {

        roleActivationPage.role_User.click();

    }

    @Given("user click on the Save button")
    public void user_click_on_the_Save_button() {
        roleActivationPage.role_Save.click();

    }

    @Then("Confirmation user message should be displayed")
    public void confirmation_user_message_should_be_displayed() {
        roleActivationPage.save_message.isDisplayed();



    }

    //      @US017TC02
    @Given("user click on the Edit putton TCtwo")
    public void user_click_on_the_Edit_putton_TCtwo() {
        roleActivationPage.edit_button.click();

    }

    @Given("user should be able to assign Role as Employee from Profiles dropdown")
    public void user_should_be_able_to_assign_Role_as_Employee_from_Profiles_dropdown() {
        roleActivationPage.role_employee.click();

    }

    @Given("user click on the Save button2")
    public void user_click_on_the_Save_button2() {
        roleActivationPage.role_Save.click();

    }

    @Then("Confirmation employee message should be displayed")
    public void confirmation_employee_message_should_be_displayed() {
        roleActivationPage.save_message.isDisplayed();

    }

    //      @US017TC03
    @Given("user click on the Edit putton TCthree")
    public void user_click_on_the_Edit_putton_TCthree() {
        roleActivationPage.edit_button.click();

    }

    @Given("user should be able to assign Role as Maneger from Profiles dropdown")
    public void user_should_be_able_to_assign_Role_as_Maneger_from_Profiles_dropdown() {
        roleActivationPage.role_Manager.click();

    }

    @Given("user click on the Save button3")
    public void user_click_on_the_Save_button3() {
        roleActivationPage.role_Save.click();

    }

    @Then("Confirmation manager message should be displayed")
    public void confirmation_manager_message_should_be_displayed() {
        roleActivationPage.save_message.isDisplayed();


    }

    //      @US017TC04
    @Given("user click on the Edit putton TCfour")
    public void user_click_on_the_Edit_putton_TCfour() {
        roleActivationPage.edit_button.click();

    }

    @Given("user should be able to assign Role as Admin from Profiles dropdown")
    public void user_should_be_able_to_assign_Role_as_Admin_from_Profiles_dropdown() {
        roleActivationPage.role_Admin.click();

    }

    @Given("user click on the Save button4")
    public void user_click_on_the_Save_button4() {
        roleActivationPage.role_Save.click();

    }

    @Then("Confirmation admin message should be displayed")
    public void confirmation_admin_message_should_be_displayed() {
        roleActivationPage.save_message.isDisplayed();

    }

    //      @US017TC05
    @Given("user click on the View putton")
    public void user_click_on_the_View_putton() {
        roleActivationPage.view_button.click();

    }

    @Then("user should be able to see the message User")
    public void user_should_be_able_to_see_the_message_User() {
        roleActivationPage.view_user_Title.isDisplayed();



    }
    //      @US017TC06

    @Given("user click on the Edit putton TCfive")
    public void user_click_on_the_Edit_putton_TCfive() {
        roleActivationPage.edit_button.click();

    }
        @Then("user click on the Save button Edit")
        public void user_click_on_the_Save_button_edit(){
            roleActivationPage.role_Save.click();

    }
    @Then("user should be able to see the message Create or edit a user.")
    public void user_should_be_able_to_see_the_message_Create_or_edit_a_user() {
        roleActivationPage.edit_created_message.isDisplayed();


    }

    //      @US017TC07
    @Given("user click on the Delete putton")
    public void user_click_on_the_Delete_putton() {
        roleActivationPage.delete_button.click();

    }

    @Given("user should be able to see the message Confirm delete operation.")
    public void user_should_be_able_to_see_the_message_Confirm_delete_operation() throws InterruptedException {
        Thread.sleep(3000);
        roleActivationPage.confirm_delete_message.isDisplayed();

    }

    @Given("user click on the Delete")
    public void user_click_on_the_Delete() throws InterruptedException {
        roleActivationPage.confirm_delete_button.click();
        Thread.sleep(3000);

    }

    @Then("user should be able to see the confirmation message")
    public void user_should_be_able_to_see_the_confirmation_message() {

        String expectedResult = "Successfully deleted";

        try{
//            roleActivationPage.delete_message.isDisplayed();
            String actualResult = roleActivationPage.delete_message.getText();
            System.out.println("Delete Mesaji "+ roleActivationPage.delete_message.getText());
            Assert.assertFalse(expectedResult.contains(actualResult));

        }catch (Exception e){
            boolean bl = false;

        }

    }


}
