package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class DateCreatePage {
    public DateCreatePage(){
        PageFactory.initElements(Driver.getDriver(), this);
    }

    @FindBy(id = "account-menu")
    public WebElement userButton;

    @FindBy(id = "login-item")
    public WebElement signIn;

    @FindBy(id = "username")
    public WebElement usernameTextbox;

    @FindBy(id = "password")
    public WebElement passBox;

    @FindBy(xpath = "//button[.='Sign in']")
    public WebElement signInButton;

    @FindBy(xpath = "//span[.='My Operations']")
    public WebElement myOperations;

    @FindBy(xpath = "//span[.='Manage Customers']")
    public WebElement manageCostumer;

    @FindBy(id = "jh-create-entity")
    public WebElement creNewCustomer;

    @FindBy(id = "search-ssn")
    public WebElement searchSSN;

    @FindBy(className = "btn btn-secondary")
    public WebElement searchButton;

    @FindBy(id = "tp-customer-middleInitial")
    public WebElement middleInit;

    @FindBy(id = "tp-customer-mobilePhoneNumber")
    public WebElement firstPhoneBox;

    @FindBy(id = "tp-customer-phoneNumber")
    public WebElement secondPhoneBox;

    @FindBy(id = "tp-customer-zipCode")
    public WebElement zipCodeBox;

    @FindBy(id = "tp-customer-city")
    public WebElement cityBox;

    @FindBy(id = "tp-customer-createDate")
    public WebElement dateBox;

    @FindBy(id = "tp-customer-user")
    public WebElement userDropdown;

    @FindBy(id = "tp-customer-account")
    public WebElement accountDropdown;

    @FindBy(id = "tp-customer-zelleEnrolled")
    public WebElement zelleButton;

    @FindBy(id = "save-entity")
    public WebElement saveButton;

    @FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--error toastify-toast']")
    public WebElement errorMessage;

    @FindBy(xpath = "//div[@class='Toastify__toast Toastify__toast--success toastify-toast']")
    public WebElement successMessage;






}
