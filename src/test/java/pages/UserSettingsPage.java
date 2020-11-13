package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class UserSettingsPage {
    public UserSettingsPage(){
        PageFactory.initElements(Driver.getDriver(),this);}

    @FindBy(name = "username" )
    public WebElement username;

    @FindBy(name = "password")
    public WebElement password;

    @FindBy(id="account-menu")
    public WebElement userDropDown;

    @FindBy(name = "firstName")
    public WebElement firstName;

    @FindBy(name="lastName")
    public WebElement lastName;

    @FindBy(id="email")
    public WebElement eMail;

    @FindBy(name="langKey")
    public WebElement languageDropDown;

    @FindBy(xpath = "//span[.='Save']")
    public WebElement saveButton;

    @FindBy(xpath = "//span[.='User Info']" )
    public WebElement userInfo;

    @FindBy(xpath = "//option[.='English']")
    public WebElement langEnglish;

    @FindBy(xpath = "//*[@id=\"langKey\"]/option[2]")
    public WebElement langTurkish;

    @FindBy(xpath = "//*[@id=\"root\"]/div/div/div[1]/div")
    public WebElement saveAlert;

    @FindBy(xpath ="//*[@id=\"settings-form\"]/div[3]/div" )
    public WebElement invalidField;
}
