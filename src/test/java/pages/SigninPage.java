package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.WeakHashMap;

public class SigninPage {
    public SigninPage(){
        PageFactory.initElements (Driver.getDriver (),this);
    }
    @FindBy(id="username")
    public WebElement username;

    @FindBy(id="password")
    public WebElement password;
    @FindBy(xpath = "//button[@class='btn btn-primary']")
    public WebElement signButton;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[1]/div[1]/div/span/strong")
    public WebElement errorAlert;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[3]/a/span")
    public WebElement forgetPass;

    @FindBy(xpath = "//*[@id=\"app-view-container\"]/div[1]/div/div/div/div/h1/span")
    public WebElement resetPass;

    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[2]/div[4]/a/span")
    public WebElement Registration;

    @FindBy(xpath = "//*[@id=\"register-title\"]/span")
    public WebElement newRegistration;
    @FindBy(xpath = "//*[@id=\"login-page\"]/div/form/div[3]/button[1]")
    public  WebElement cancel;

    @FindBy(xpath = "//li[@id='account-menu']")
    public WebElement dropdown;

    @FindBy(xpath = "//*[@id=\"login-item\"]/span")
    public WebElement dropSign;
    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperations;
    @FindBy(xpath = "//*[@id=\"entity-menu\"]/div/a[2]")
    public WebElement manangeAccount;
    @FindBy(id="jh-create-entity")
    public WebElement createNewAccount;
    @FindBy(id="tp-account-description")
    public WebElement discription;
    @FindBy(id="tp-account-balance")
    public WebElement balance;
    @FindBy(id="tp-account-accountType")
    public WebElement dropDownAccountType ;
    @FindBy(xpath = "//*[@id=\"tp-account-accountStatusType\"]/option[1]")
    public WebElement active;
    @FindBy(xpath = "//*[@id=\"tp-account-accountType\"]/option[2]")
    public WebElement saving;
    @FindBy(id="tp-account-accountStatusType")
    public WebElement dropDownAccountStatus;
    @FindBy(id="tp-account-employee")
    public WebElement employe;
    @FindBy(xpath = "//*[@id=\"save-entity\"]/svg")
    public WebElement saveButton;
    @FindBy(xpath = "//*[@id=\"account-menu\"]/a")
    public WebElement refresh;
    @FindBy(xpath = "//*[@id=\"account-menu\"]/div/a[3]/span")
    public WebElement signOut;


}