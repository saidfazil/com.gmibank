package stepdefinitions;

import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;
import java.util.List;
import java.util.Map;
import static io.restassured.RestAssured.*;

public class US20CustomerReadingApiSteps {

    Response response;
    JsonPath json;
    List<Map<String,Object>> allCustomerData;


    @Given("use api end point  {string}")
    public void useApiEndPoint(String endPointUrl) {
        response =given().
                accept(ContentType.JSON).
                auth().oauth2(ConfigurationReader.getProperty("token")).
                when().
                get(endPointUrl);
        response.
                then().
                assertThat().
                statusCode(200);
        response.prettyPrint();
        json = response.jsonPath();
    }

    @And("get all customers' information as De-Serialization")
    public void getAllCustomersInformationAsDeSerialization() {
        allCustomerData = json.getList("$");
        System.out.println(allCustomerData);
    }

    @And("find out how many customers are and verify that there are {int} customers")
    public void findOutHowManyCustomersAreAndVerifyThatThereAreCustomers(int customerCount) {
        int actualCustomerCount = allCustomerData.size();
        Assert.assertEquals(customerCount,actualCustomerCount);
    }

    @And("get all the information of the seventh customer")
    public void getAllTheInformationOfTheSeventhCustomer() {
        System.out.println(allCustomerData.get(6));
    }

    @And("Verify second customers ssn is {string} and country name is {string}")
    public void verifySecondCustomersSsnIsAndCountryNameIs(String expectedSSN, String expectedCountryName) {
        String actualSSN = allCustomerData.get(1).get("ssn").toString();
        Assert.assertEquals(expectedSSN,actualSSN);

        String actualCountryName = json.getString("country[1].name");
        Assert.assertEquals(expectedCountryName,actualCountryName);
    }

    @And("verify first customer's firstName {string}")
    public void verifyFirstCustomerSFirstName(String expectedFirstName) {
        Assert.assertEquals(expectedFirstName,allCustomerData.get(0).get("firstName"));
    }

    @And("Verify second customer's lastName {string}")
    public void verifySecondCustomerSLastName(String expectedLastName) {
        Assert.assertEquals(expectedLastName,allCustomerData.get(1).get("lastName"));
    }

    @And("Verify third customer's country name is {string}")
    public void verifyThirdCustomerSCountryNameIs(String expectedCountryName) {
        String actualCountryName = json.getString("country[2].name");
        Assert.assertEquals(expectedCountryName,actualCountryName);
    }

    @And("Verify first customer's user email {string}")
    public void verifyFirstCustomerSUserEmail(String expectedEmail) {
        Assert.assertEquals(expectedEmail,allCustomerData.get(0).get("email"));
    }
}
