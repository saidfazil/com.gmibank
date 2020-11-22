package stepdefinitions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import jsonModels.StateJson;
import pojos.States;
import utilities.ConfigurationReader;
import utilities.WriteToTxt;

import static io.restassured.RestAssured.given;

public class US27StatesApiStep {

    Response response;
    States[] states;
    @Given("user sets states to response using {string}")
    public void userSetsStatesToResponseUsing(String url) {
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
        response.prettyPrint();
    }

    @Given("user deserializes all states to pojo")
    public void userDeserializesAllStatesToPojo() throws JsonProcessingException {
        ObjectMapper obj = new ObjectMapper();
        states = obj.readValue(response.asString(), States[].class);
    }

    @And("user generates all states' data in correspondent files")
    public void userGeneratesAllStatesDataInCorrespondentFiles() {
        WriteToTxt.saveAllStates2("AllStates.txt", states);
    }

    @Then("user validates data for all states")
    public void userValidatesDataForAllStates() {
    }

    @Given("user creates a new state using {string}")
    public void userCreatesANewStateUsing(String url) {
        response= given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON).
                when().
                body(StateJson.CREATE_STATE).
                post(url).
                then().
                contentType(ContentType.JSON).
                extract().
                response();
    }

    @Given("user provides api end point to delete states using {string} and its extension{string}")
    public void userProvidesApiEndPointToDeleteStatesUsingAndItsExtension(String arg0, String id) {
        response= given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON).
                when().
                delete(id).
                then().
                contentType(ContentType.JSON).
                extract().
                response();
    }
}
