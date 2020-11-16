package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CostumerRegistrationPage {
    public CostumerRegistrationPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy(id= "account-menu")
    public WebElement user_button;

    @FindBy(xpath = "//a[@class='dropdown-item'][2]")
    public WebElement registration_button;

    @FindBy(id= "ssn")
    public WebElement SSN_TextBox;

    @FindBy(xpath = "//input[@name='ssn']")
    public WebElement SSN_Number;

    @FindBy(xpath = "//*[.='translation-not-found[Your SSN is required]']")
    public WebElement ssnNullErrorMessage;

    @FindBy(xpath = "//*[contains(text(),'Your SSN is invalid')]")
    public WebElement ssnErrorMessage;

    @FindBy(id = "firstname")
    public WebElement First_Name_TextBox;

    @FindBy(id = "firstname")
    public WebElement First_Name;

    @FindBy(xpath = "//*[contains(text(),'Your First Name is required')]")
    public WebElement firstNameErrorMessage;

    @FindBy(id= "lastname")
    public WebElement Last_Name_TextBox;

    @FindBy(id= "lastname")
    public WebElement Last_Name;

    @FindBy(xpath = "//*[contains(text(),'Your Last Name is required')]")
    public WebElement lastNameErrorMessage;

    @FindBy(id = "address")
    public WebElement Address_TextBox;

    @FindBy(xpath = "//*[contains(text(),'Your Address is required')]")
    public WebElement Address;

    @FindBy(id = "mobilephone")
    public WebElement Mobile_Phone_Number_TextBox;

    @FindBy(id = "mobilephone")
    public WebElement Mobile_Phone_Number;

    @FindBy(xpath = "//*[contains(text(),'Your mobile phone number is invalid')]")
    public WebElement mobilPhoneErrorMessage;

    @FindBy(xpath = "//*[contains(text(),'Your mobile phone number is required')]")
    public WebElement nullmobilPhoneMessage;


    @FindBy(id = "username")
    public WebElement Username_TextBox;

    @FindBy(id = "username")
    public WebElement Username;

    @FindBy(xpath = "//*[contains(text(),'Your username is required.')]")
    public WebElement UsernameErrorMessage;

    @FindBy(id = "email")
    public WebElement Email_TextBox;

    @FindBy(id = "email")
    public WebElement Email;

    @FindBy(xpath = "//*[contains(text(),'Your email is required.')]")
    public WebElement EmailNullErrorMessage;

    @FindBy(xpath = "//*[contains(text(),'This field is invalid')]")
    public WebElement EmailErrorMessage;

    @FindBy(id = "firstPassword")
    public WebElement New_password_TextBox;

    @FindBy(id = "firstPassword")
    public WebElement New_password;

    @FindBy(xpath = "//*[contains(text(),'Your password is required.')]")
    public WebElement firstPasswordErrorMessage;

    @FindBy(xpath = "//*[contains(text(),'Your password is required to be at least 4 characters.')]")
    public WebElement PasswordCharecterErrorMessage;

    @FindBy(xpath = "//*[@id=\"strengthBar\"]/li[1]")
    public WebElement Password_strength;

    @FindBy(id = "secondPassword")
    public WebElement Password_Confirmation_TextBox;

    @FindBy(id = "secondPassword")
    public WebElement Password_Confirmation;

    @FindBy(xpath = "//*[contains(text(),'Your confirmation password is required')]")
    public WebElement secontPasswordErrorMessage;

    @FindBy(xpath = "//*[.='Your confirmation password is required to be at least 4 characters.']")
    public WebElement secontCharecterErrorMessage;

    @FindBy(id = "register-submit")
    public WebElement Register_button;


//    @US02TC02

    @FindBy(id = "ssn")
    public WebElement charecter_SSN_TextBox;

    @FindBy(xpath = "//*[.='Your SSN is invalid']")
    public WebElement No_SSN_message;

//    @US02TC03

    @FindBy(id = "mobilephone")
    public WebElement charecter_Mobile_Phone_TextBox;

    @FindBy(xpath = "//*[.='Your mobile phone number is invalid']")
    public WebElement no_see_mobile_phone_number_invalid;

//    @US02TC04

    @FindBy(id = "email")
    public WebElement charecter_Email_TextBox;

    @FindBy(xpath = "//*[.='This field is invalid']")
    public WebElement no_See_Email_Invalid_Message;


}

