package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import utilities.Driver;

public class CityNegativeTestPage {

    public CityNegativeTestPage(){
        PageFactory.initElements(Driver.getDriver(), this);

    }

    @FindBy(id = "save-entity")
    public WebElement saveButton;

    @FindBy(xpath = "//*[.='This field is required.']")
    public WebElement alertCtiy;

}
