package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.support.Color;
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
        String renk = passCreatePage.line1.getCssValue("background-color");
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(255, 0, 0, 1)"));
    }

    @And("Color line must be orange or green")
    public void colorLineMustBeOrangeOrGreen() {
        String renk = passCreatePage.line1.getCssValue("background-color");
        System.out.println(renk);
    }

    @Then("Then I should not see the red massage under the box")
    public void thenIShouldNotSeeTheRedMassageUnderTheBox() {
        //Assert.assertFalse(passCreatePage.messageUnderTextBox.isDisplayed());
    }

    @And("Enter a password with 1 uppercase letter of at least 4 characters")
    public void enterAPasswordWithUppercaseLetterOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("123G");
        String renk = passCreatePage.line2.getCssValue("background-color");
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(255, 153, 0, 1)"));
    }

    @And("Enter a password with 1 digit of at least 4 characters")
    public void enterAPasswordWithDigitOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("1234");
        String renk = passCreatePage.line2.getCssValue("background-color");
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(255, 153, 0, 1)"));

    }

    @And("Enter a password with 1 special char of at least 4 characters")
    public void enterAPasswordWithSpecialCharOfAtLeastCharacters() {
        passCreatePage.firstPassBox.sendKeys("123$");
        String renk = passCreatePage.line2.getCssValue("background-color");
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(255, 153, 0, 1)"));
    }

    @And("Enter a password with 7 chars")
    public void enterAPasswordWithChars() {
        passCreatePage.firstPassBox.sendKeys("123gMi$");
        String renk = passCreatePage.line5.getCssValue("background-color");
        System.out.println(renk);
        Assert.assertTrue(renk.contains("rgba(0, 255, 0, 1)"));
    }

    @And("Click on password confirmation textbox")
    public void clickOnPasswordConfirmationTextbox() {
        passCreatePage.secondPassBox.click();
    }

    @Then("Enter to second textbox with 1 lowercase letter of at least 4 characters")
    public void enterToSecondTextboxWithLowercaseLetterOfAtLeastCharacters() {
        passCreatePage.secondPassBox.sendKeys("123k");
    }

    @Then("Enter to second textbox with 1 uppercase letter of at least 4 characters")
    public void enterToSecondTextboxWithUppercaseLetterOfAtLeastCharacters() {
        passCreatePage.secondPassBox.sendKeys("123G");
    }

    @Then("Enter to second textbox with 1 digit of at least 4 characters")
    public void enterToSecondTextboxWithDigitOfAtLeastCharacters() {
        passCreatePage.secondPassBox.sendKeys("1234");
    }

    @Then("Enter to second textbox with 1 special char of at least 4 characters")
    public void enterToSecondTextboxWithSpecialCharOfAtLeastCharacters() {
        passCreatePage.secondPassBox.sendKeys("123$");
    }

    @Then("Enter to second textbox a password with 7 chars")
    public void enterToSecondTextboxAPasswordWithChars() {
        passCreatePage.secondPassBox.sendKeys("123gMi$");
    }
}
