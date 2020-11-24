package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class US17AdminRoleActivationPage {
    public US17AdminRoleActivationPage(){
        PageFactory.initElements(Driver.getDriver(),this);

    }
    @FindBy(id= "account-menu")
    public WebElement user_button;

    @FindBy(id= "login-item")
    public WebElement signIn_button;

    @FindBy(id= "username")
    public WebElement username;

    @FindBy(id= "password")
    public WebElement password;

    @FindBy(xpath= "//button[@type='submit']")
    public WebElement signIn_submit;

    @FindBy(xpath= "//*[@id='admin-menu']/a")
    public WebElement Administration;

    @FindBy(xpath= "//*[@id='admin-menu']/div/a[1]/span")
    public WebElement user_Management;

    @FindBy(xpath= "//*[@id='example22']/td[10]/div/a[2]")
    public WebElement edit_button;

    @FindBy(xpath= "//*[.='ROLE_USER']")
    public WebElement role_User;

    @FindBy(xpath= "//*[.='Save']")
    public WebElement role_Save;

    @FindBy(xpath= "//*[(text()='A user is updated with identifier example22')]")
    public WebElement save_message;

    @FindBy(xpath= "//*[.='ROLE_EMPLOYEE']")
    public WebElement role_employee;

    @FindBy(xpath= "//*[.='ROLE_MANAGER']")
    public WebElement role_Manager;

    @FindBy(xpath= "//*[.='ROLE_ADMIN']")
    public WebElement role_Admin;

    @FindBy(xpath= "//*[@id='example22']/td[1]/a")
    public WebElement view_button;

    @FindBy(xpath= "//*[.='User']")
    public WebElement view_user_Title;

    @FindBy(xpath= "(//*[.='ROLE_USER'])[4]")
    public WebElement role_View;

    @FindBy(xpath= "//*[@id='root']/div/div/div[1]/div/div/button")
    public WebElement edit_created_message;

    @FindBy(xpath= "//*[@id=\"cell\"]/td[10]/div/a[3]")
    public WebElement delete_button;

    @FindBy(xpath= "(//*[.='Confirm delete operation'])[2]")
    public WebElement confirm_delete_message;

    @FindBy(xpath= "(//*[@class='btn btn-danger'])[3]")
    public WebElement confirm_delete_button;

    @FindBy(xpath= "//*[.='Internal server error.']")
    public WebElement delete_message;
}
