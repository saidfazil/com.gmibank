package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.PasswordCreatePage;
import utilities.Driver;

public class PasswordCreateStepDef {
    PasswordCreatePage passCreatePage = new PasswordCreatePage();


    @Given("User go to the GMi Bank home page")
    public void userGoToTheGMiBankHomePage() {
        Driver.getDriver().get("https://gmibank.com/");
    }

    @And("Click on user button")
    public void clickOnUserButton() {
        passCreatePage.userButton.click();
    }

    @And("You should navigate to registration page")
    public void youShouldNavigateToRegistrationPage() {
        passCreatePage.registerButton.click();
    }

    @And("Click on Password textbox")
    public void clickOnPasswordTextbox() {
        passCreatePage.firstPassBox.click();
    }

    @And("Enter a password with 1 lowercase letter of at least 4 characters")
    public void enterAPasswordWithLowercaseLetterOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("123k");
    }

    @And("Color line must be orange or green")
    public void colorLineMustBeOrangeOrGreen() {
    }

    @Then("Then I should not see the red massage under the box")
    public void thenIShouldNotSeeTheRedMassageUnderTheBox() {
        //Assert.assertFalse(passCreatePage.messageUnderTextBox.isDisplayed());
    }

    @And("Enter a password with 1 uppercase letter of at least 4 characters")
    public void enterAPasswordWithUppercaseLetterOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("123G");
    }

    @And("Enter a password with 1 digit of at least 4 characters")
    public void enterAPasswordWithDigitOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("1234");
    }

    @And("Enter a password with 1 special char of at least 4 characters")
    public void enterAPasswordWithSpecialCharOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("123$");
    }

    @And("Enter a password with 7 chars")
    public void enterAPasswordWithChars() {
        passCreatePage.firstPassBox.sendKeys("123gMi$");
    }
}
