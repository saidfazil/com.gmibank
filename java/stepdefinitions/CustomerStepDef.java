package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import pages.CustomerInformationPage;
import utilities.Driver;

import java.util.List;

public class CustomerStepDef {

    CustomerInformationPage page = new CustomerInformationPage();


    @And("Click First ID")
    public void clickFirstID() {

        page.firstCustomer.click();

    }

    @And("See FirstName")
    public void seeFirstName() {

        Assert.assertTrue(page.firstName.isDisplayed());

    }

    @And("See LastName")
    public void seeLastName() {

        Assert.assertTrue(page.lastName.isDisplayed());

    }

    @And("See Middle Initial")
    public void seeMiddleInitial() {

        Assert.assertTrue(page.middleInitial.isDisplayed());

    }

    @And("See Email")
    public void seeEmail() {

       Assert.assertTrue(page.e_mail.isDisplayed());

    }

    @And("See Mobile Phone Number")
    public void seeMobilePhoneNumber() {

        Assert.assertTrue(page.mobilePhone.isDisplayed());
    }

    @And("See Phone Number")
    public void seePhoneNumber() {

        Assert.assertTrue(page.phone.isDisplayed());
    }

    @And("See Zip Code")
    public void seeZipCode() {

        Assert.assertTrue(page.zipCode.isDisplayed());

    }

    @And("See Address")
    public void seeAddress() {

        Assert.assertTrue(page.address.isDisplayed());

    }

    @And("See City")
    public void seeCity() {

        Assert.assertTrue(page.city.isDisplayed());

    }

    @And("See SSN")
    public void seeSSN() {

        Assert.assertTrue(page.ssnNumber.isDisplayed());

    }

    @And("See Create Date")
    public void seeCreateDate() {

        Assert.assertTrue(page.createDate.isDisplayed());

    }

    @And("See Zelle Enrolled")
    public void seeZelleEnrolled() {

        Assert.assertTrue(page.zelleEnrolled.isDisplayed());

    }

    @And("See Country")
    public void seeCountry() {

        Assert.assertTrue(page.country.isDisplayed());

    }

    @And("See User")
    public void seeUser() {

        Assert.assertTrue(page.userNo.isDisplayed());

    }

    @And("See Account")
    public void seeAccount() {

        Assert.assertTrue(page.account.isDisplayed());

    }


    @Then("See All Titles")
    public void seeAllTitles() {

        List<WebElement> allTitles = Driver.getDriver().findElements(By.xpath("//dd"));

        Assert.assertEquals(allTitles.size(),16);
    }
}
