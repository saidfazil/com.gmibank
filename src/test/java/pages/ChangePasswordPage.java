package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class ChangePasswordPage {
	public ChangePasswordPage() {
		PageFactory.initElements(Driver.getDriver(), this);
	}

	@FindBy(id = "account-menu")
	public WebElement accountButton;

	@FindBy(id = "login-item")
	public WebElement signIn;
	
	@FindBy(id = "username")
	public WebElement inputUserName;
	
	@FindBy(id = "password")
	public WebElement inputPassword;
	
	@FindBy(xpath = "//button[.='Sign in']")
    public WebElement buttonSignin;
	
	@FindBy(xpath = "//span[.='Password']")
    public WebElement passwordButton;
	
	@FindBy(name =  "currentPassword")
	public WebElement currentPassword;
	
	@FindBy(name =  "newPassword")
	public WebElement newPassword;
	
	@FindBy(name =  "confirmPassword")
	public WebElement confirmPassword;
	
	@FindBy (xpath = "(//li[@class='point'])[1]")
    public WebElement line1;

    @FindBy (xpath = "(//li[@class='point'])[2]")
    public WebElement line2;

    @FindBy (xpath = "(//li[@class='point'])[3]")
    public WebElement line3;

    @FindBy (xpath = "(//li[@class='point'])[4]")
    public WebElement line4;

    @FindBy (xpath = "(//li[@class='point'])[5]")
    public WebElement line5;
    
    @FindBy(xpath = "//span[.='Save']")
    public WebElement saveButton;
    

}
