package stepdefinitions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import pojos.Customer;
import utilities.ConfigurationReader;
import utilities.ReadTxt;
import utilities.WriteToTxt;

import java.util.ArrayList;
import java.util.List;

import static io.restassured.RestAssured.given;

public class ApiReadCustomerStepdefs {
    Customer[] customers;
    Response response;
    @Given("user provides the ap end point to set response using {string}")
    public void userProvidesTheApEndPointToSetResponseUsing(String url) {
        response= given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON).
                when().
                get(url).
                then().
                contentType(ContentType.JSON).
                extract().
                response();

    }

    @Given("manipulate all customers' data")
    public void manipulateAllCustomersData() throws JsonProcessingException {
        ObjectMapper obj = new ObjectMapper();
         customers = obj.readValue(response.asString(),Customer[].class);

    }

    @And("user set the data in correspondent files")
    public void userSetTheDataInCorrespondentFiles() {
       // WriteToTxt.saveDataInFileWithAllCustomerInfo("AllCostumer.txt", customers);
       WriteToTxt.saveDataInFile("AllCustomerSSN.txt",customers);
    }

    @Then("user validate all data")
    public void userValidateAllData() throws Exception {
        List<String> AllCustomerSSN = ReadTxt.returnCustomerSNNList("AllCustomerSSN.txt");
        List<String> expectedStateList= new ArrayList<>();
        expectedStateList.add("246-53-4555");
        Assert.assertTrue(AllCustomerSSN.containsAll(expectedStateList));
/*List<Customer> allCustomerList=ReadTxt.returnCustomer("AllCostumer.txt");
        Customer customer = new Customer();
String expected1 = "777-77-7777";
String expected2 = "246-53-4555";
for (int i=0; i<allCustomerList.size(); i++){
    if (allCustomerList.get(1).getSsn().equals(expected2)){
        System.out.println("Found item");
    }
}*/
    }
}
