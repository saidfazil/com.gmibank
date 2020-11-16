package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class AccountChoosePage {

    public AccountChoosePage(){
        PageFactory.initElements(Driver.getDriver(),this);
        }

    @FindBy(xpath = "//a[@href='/tp-account']")
    public WebElement manageAccount;

    @FindBy(xpath = "//a[@class='btn btn-success btn-sm'][1]")
    public WebElement selectFirstAccount;

    @FindBy(id = "description")
    public WebElement description;

    @FindBy(id = "balance")
    public WebElement balance;

    @FindBy(id = "accountType")
    public WebElement accountType;

    @FindBy(id = "accountStatusType")
    public WebElement accountStatus;

    @FindBy(id = "createDate")
    public WebElement createDate;

    @FindBy(id = "closedDate")
    public WebElement closedDate;

    @FindBy(xpath = "//*[.='Employee'][1]")
    public WebElement employee;








}
