package stepdefinitions;

import static org.junit.Assert.assertArrayEquals;
import static org.junit.Assert.assertTrue;

import org.junit.Assert;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import pages.ChangePasswordPage;
import utilities.ConfigurationReader;
import utilities.Driver;

public class ChangePasswordStepDef {
	ChangePasswordPage changePasswordPage = new ChangePasswordPage();

	@Given("Go to home page link")
	public void go_to_home_page_link() {
		Driver.getDriver().get(ConfigurationReader.getProperty("gmi_url"));

	}

	@And("to User Account drob down menu and Click to Sign In")
	public void toUserAccountDrobDownMenuAndClickToSignIn() {

		changePasswordPage.accountButton.click();
		changePasswordPage.signIn.click();

	}

	@And("Enter the password with valid credentail")
	public void enter_the_password_with_valid_credentail() {
		changePasswordPage.inputUserName.sendKeys(ConfigurationReader.getProperty("current_username"));
		changePasswordPage.inputPassword.sendKeys(ConfigurationReader.getProperty("current_password"));
		changePasswordPage.buttonSignin.click();
	}

	@And("Click to User Account drop down menu and Click to Password")
	public void click_to_User_Account_drop_down_menu_and_Click_to_Password() {
		changePasswordPage.accountButton.click();
		changePasswordPage.passwordButton.click();

	}

	@And("Enter the Current Password width credentail")
	public void enter_the_Current_Password_width_credentail() {
		changePasswordPage.currentPassword.sendKeys(ConfigurationReader.getProperty("current_password"));
	}

	@And("Enter the New Password")
	public void enter_the_New_Password() {
		changePasswordPage.newPassword.sendKeys(ConfigurationReader.getProperty("new_password"));

	}

	@And("check password availability")
	public void check_password_availability() {

		String[] expected = new String[] { changePasswordPage.line1.getCssValue("background-color"),
				changePasswordPage.line2.getCssValue("background-color"),
				changePasswordPage.line3.getCssValue("background-color"),
				changePasswordPage.line4.getCssValue("background-color"),
				changePasswordPage.line5.getCssValue("background-color") };

		Assert.assertTrue(ConfigurationReader.getProperty("new_password")
				.matches("(?=.*[a-z]).*(?=.*[A-Z]).*(?=.*[0-9]).*(?=.*[~!@#.$%^&*()_-]).*"));
		Assert.assertArrayEquals(expected, new String[] { "rgba(0, 255, 0, 1)", "rgba(0, 255, 0, 1)",
				"rgba(0, 255, 0, 1)", "rgba(0, 255, 0, 1)", "rgba(0, 255, 0, 1)" });
		Assert.assertFalse(ConfigurationReader.getProperty("new_password")
				.equals(ConfigurationReader.getProperty("current_password")));

	}

	@And("Enter the New Password Confirmation")
	public void enter_the_New_Password_Confirmation() {
		changePasswordPage.confirmPassword.sendKeys(ConfigurationReader.getProperty("new_password"));
	}

	@Then("Click to Save in button")
	public void click_to_Save_in_button() {
		changePasswordPage.saveButton.click();
	}


}
