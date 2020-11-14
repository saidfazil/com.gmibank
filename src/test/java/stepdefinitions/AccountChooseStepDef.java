package stepdefinitions;


import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pages.AccountChoosePage;

public class AccountChooseStepDef {

    AccountChoosePage page = new AccountChoosePage();


    @And("Click Manage Accounts")
    public void clickManageAccounts() {

        page.manageAccount.click();

    }

    @And("Click FirstID")
    public void clickFirstID() {

        page.selectFirstAccount.click();

    }

    @And("See Description")
    public void seeDescription() {

        Assert.assertTrue(page.description.isDisplayed());

    }

    @And("See Balance")
    public void seeBalance() {

        Assert.assertTrue(page.balance.isDisplayed());

    }

    @And("See Account Type")
    public void seeAccountType() {

        Assert.assertTrue(page.accountType.isDisplayed());

    }

    @And("See Account Status Type")
    public void seeAccountStatusType() {

        Assert.assertTrue(page.accountStatus.isDisplayed());

    }

    @And("See CreateDate")
    public void seeCreateDate() {

        Assert.assertTrue(page.createDate.isDisplayed());

    }

    @And("See ClosedDate")
    public void seeClosedDate() {

        Assert.assertTrue(page.closedDate.isDisplayed());

    }

    @Then("See Employee")
    public void seeEmployee() {

        Assert.assertTrue(page.employee.isDisplayed());

    }
}
