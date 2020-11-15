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

}