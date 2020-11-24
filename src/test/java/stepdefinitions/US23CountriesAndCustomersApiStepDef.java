package stepdefinitions;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import jsonModels.CountryJson;
import jsonModels.CustomersJson;
import jsonModels.StateJson;
import org.junit.Assert;
import pojos.Country;
import pojos.Customer;
import utilities.ConfigurationReader;
import utilities.ReadTxt;
import utilities.WriteToTxt;
import java.util.List;
import java.util.Map;
import static io.restassured.RestAssured.given;

public class US23CountriesAndCustomersApiStepDef {


    Response response;
    Customer[] customers;
    Country[] country;
    String filePath = "AllCountriesData";
    String filePath2 = "AllCustomersData";

    //    @US023TC01
    @Given("user provites the api ent point to set the response using countries {string} creates countries using {string}and {string}")
    public void userProvitesTheApiEntPointToSetTheResponseUsingCountriesCreatesCountriesUsingAnd(String api_country_url, String type, String country) {

        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("Selim_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .body(CountryJson.CREATE_COUNTRY1+CountryJson.CREATE_COUNTRY2+CountryJson.CREATE_COUNTRY3)
                .post(api_country_url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
        response.prettyPrint();


    }
    @Given("user sets the countries to response using  {string}")
    public void userSetsTheCountriesToResponseUsing(String api_country_url) {
        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("Selim_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .get(api_country_url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
        response.prettyPrint();

    }

    @Given("user deserializes all countries to pojo")
    public void user_deserializes_all_countries_to_pojo() throws Exception {
        ObjectMapper objCntry = new ObjectMapper();
        country = objCntry.readValue(response.asString(), Country[].class);
        System.out.println(country[0].getName());


    }

    @Given("user generates all countries data in correspondent files")
    public void user_generates_all_countries_data_in_correspondent_files() {
        WriteToTxt.saveAllCountry(filePath, country);

    }

    @Then("user validates data for all countries")
    public void user_validates_data_for_all_countries() {
        List<Country> list = ReadTxt.returnAllCountry(filePath);
        String expected = "Malta";
        System.out.println(list.get(2).getName());
        Assert.assertEquals(expected, list.get(2).getName());


    }

    //    @US023TC02
    @Given("user provites the api ent point to set the response using customers {string} creates customer using {string}and {string} and {string}")
    public void userProvitesTheApiEntPointToSetTheResponseUsingCustomersCreatesCustomerUsingAndAnd(String customer_api_url, String id, String firstName, String lastName) {

        response = given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("Selim_token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON)
                .when()
                .body(CustomersJson.CREATE_CUSTOMERS1+CustomersJson.CREATE_CUSTOMERS2+CustomersJson.CREATE_CUSTOMERS3)
                .post(customer_api_url)
                .then()
                .contentType(ContentType.JSON)
                .extract()
                .response();
        response.prettyPrint();

    }

    @Given("Read all customer data provided")
    public void read_all_customer_data_provided() {
        ReadTxt.returnAllCustomer(filePath2,customers);


    }

    @Then("the user verifies all the data")
    public void the_user_verifies_all_the_data() {
        List<Country> list = ReadTxt.returnAllCountry(filePath);
        String expected = "Malta";
        System.out.println(list.get(2).getName());
        Assert.assertEquals(expected, list.get(2).getName());

    }



}
