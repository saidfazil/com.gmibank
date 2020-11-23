package stepdefinitions;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import jsonModels.StateJson;
import org.junit.Assert;
import pojos.States;
import utilities.ConfigurationReader;
import utilities.ReadTxt;
import utilities.WriteToTxt;

import java.util.ArrayList;
import java.util.List;

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
        //one data
//        List<States> allAStatesList = ReadTxt.returnAllStates2("AllStates.txt");
//        String expectedStateName ="Ile-de-France";
//        System.out.println(allAStatesList.get(0).getName());
//        Assert.assertEquals(expectedStateName,allAStatesList.get(0).getName());
        //much data
        List<String> allAStatesList = ReadTxt.returnAllStates3("AllStates.txt");
        List<String> expectedStateList= new ArrayList<>();
        expectedStateList.add("Ile-de-France");
        expectedStateList.add("Languedoc-Roussillon");
        Assert.assertTrue(allAStatesList.containsAll(expectedStateList));

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
    @Then("validate the state created")
    public void validateTheStateCreated() {
        List<String> allAStatesList = ReadTxt.returnAllStates3("AllStates.txt");
        List<String> expectedStateList= new ArrayList<>();
        expectedStateList.add("Baden-Wurttemberg");
        Assert.assertTrue(allAStatesList.containsAll(expectedStateList));
    }

    @Given("user provides api end point to delete states using {string} and its extension{string}")
    public void userProvidesApiEndPointToDeleteStatesUsingAndItsExtension(String endpoint, String id) {
        response= given().headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON).
                when().
                delete(endpoint+id).
                then().
                extract().
                response();
    }


    @Then("validate the state deleted")
    public void validateTheStateDeleted() throws JsonProcessingException {
//        ObjectMapper obj = new ObjectMapper();
//        states = obj.readValue(response.asString(), States[].class);
//        WriteToTxt.saveAllStates2("DeletedListState.txt",states);
//        List<String> DeletedListState = ReadTxt.returnAllStates3("DeletedListState.txt");
//        List<String> expectedStateList= new ArrayList<>();
//        expectedStateList.add("WASHINGTONN_DC");
//        Assert.assertFalse(DeletedListState.containsAll(expectedStateList));

    }
}
