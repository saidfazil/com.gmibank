package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ManageAccountsPage {
  public ManageAccountsPage (){
        PageFactory.initElements(Driver.getDriver(), this);
    }
    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperations;

    @FindBy(xpath = "//span[.='Manage Accounts']")
    public WebElement manageCostumer;

    @FindBy(id = "jh-create-entity")
    public WebElement newAccount;

    @FindBy(id = "tp-account-description")
    public WebElement descriptionsTextbox;

    @FindBy(xpath = "//div[@class='invalid-feedback']")
    public  WebElement descriptionsBlank;

    @FindBy(id = "save-entity")
    public WebElement saveCreateAccount;

    @FindBy(id = "tp-account-balance")
    public WebElement balanceTextbox;

  @FindBy(xpath = "//div[contains(text(),'created')]")
  public WebElement alertCreate;
}
