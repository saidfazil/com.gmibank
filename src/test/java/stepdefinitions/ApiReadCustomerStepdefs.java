package stepdefinitions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import pojos.Customer;
import utilities.ConfigurationReader;
import utilities.ReadTxt;
import utilities.WriteToTxt;

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
        //WriteToTxt.saveDataInFileAllCustomersInfo("AllCostumer.txt", customers);
       // WriteToTxt.saveDataInFileWithSSN("ssnNumber.txt",customers);
    }

    @Then("user validate all data")
    public void userValidateAllData() throws Exception {
List<Customer> ssnList=ReadTxt.readTxtData("AllCostumer.txt");
for (int i=0; i<ssnList.size(); i++){
    System.out.println(ssnList.get(i).getSsn());
}
    }
}
