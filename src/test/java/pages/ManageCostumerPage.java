package pages;


import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

import java.util.List;

public class ManageCostumerPage {

        public ManageCostumerPage() {
            PageFactory.initElements(Driver.getDriver(), this);
        }

        @FindBy(xpath = "//li[@id='account-menu']")
        public WebElement dropDownAccount;

        @FindBy(name = "username")
        public WebElement username;

        @FindBy(name = "password")
        public WebElement password;

        @FindBy(xpath = "//button[.='Sign in']")
        public WebElement buttonSignin;

        @FindBy(xpath = "//span[.='My Operations']")
        public WebElement myOperations;

        @FindBy(xpath = "//span[.='Manage Customers']")
        public WebElement manageCostumer;

        @FindBy(xpath = "//tbody//tr[5]/td")
        public List<WebElement> rowList;

        @FindBy(xpath = "//thead//th")
        public List<WebElement> headList;

        @FindBy(xpath = "//span[.='Sign in']")
        public WebElement accountSignIn;

        @FindBy(xpath = "//span[text()='View']")
        public WebElement buttonWiew;

        @FindBy(xpath = "//span[text()='Edit']")
        public WebElement buttonEdit;

        @FindBy(xpath = "//span[text()='Delete']")
        public WebElement buttonDelete;

        @FindBy(xpath = "//span[text()='Edit']")
        public WebElement ButtonViewEdit;


    }

