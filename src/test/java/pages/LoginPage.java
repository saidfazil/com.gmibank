package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class LoginPage {

    public LoginPage(){

        PageFactory.initElements(Driver.getDriver(),this);
    }
    @FindBy(xpath ="//a[@class=\"d-flex align-items-center dropdown-toggle nav-link\"]" )
    public WebElement gmiloginButton;

    @FindBy(xpath = "//a[@id=\"login-item\"]")
    public WebElement signinbutton;

    @FindBy(xpath = "//input[@id=\"username\"]")
    public WebElement username;

    @FindBy(xpath = "//input[@name = \"password\"]")
    public WebElement password;

    @FindBy(xpath = "//button[@class=\"btn btn-primary\"]")
    public WebElement signin1button;

    @FindBy(xpath = "//span[text()=\"globalemployee1 globalemployee1\"]")
    public WebElement sucses;


}
