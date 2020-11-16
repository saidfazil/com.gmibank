package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.CityNegativeTestPage;

public class CityNegativeTestStepDef {

    CityNegativeTestPage page = new CityNegativeTestPage();

    @And("Click Save Button")
    public void clickSaveButton() {

        page.saveButton.click();

    }

    @Then("See This field is required.")
    public void seeThisFieldIsRequired() {

        Assert.assertTrue(page.alertCtiy.isDisplayed());

    }
}
