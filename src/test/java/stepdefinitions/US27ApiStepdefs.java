package stepdefinitions;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.restassured.http.ContentType;
import io.restassured.response.Response;
import org.junit.Assert;
import utilities.ConfigurationReader;

import static io.restassured.RestAssured.given;

public class US27ApiStepdefs {
    @Given("The user connects to the API with the token given to her")
    public void the_user_connects_to_the_API_with_the_token_given_to_her() {
        Response response = given().
                headers(
                "Authorization",
                "Bearer " + ConfigurationReader.getProperty("token"),
                "Content-Type",
                ContentType.JSON,
                "Accept",
                ContentType.JSON).
                when().
                get(ConfigurationReader.getProperty("api_states_url")).
                then().
                contentType(ContentType.JSON).
                extract().
                response();

                response.
                then().
                assertThat().
                statusCode(200);
    }

    @And("The user should be delete a state")
    public void theUserShouldBeDeleteAState() {
      Response responseDelete = given().
                headers(
                        "Authorization",
                        "Bearer " + ConfigurationReader.getProperty("token"),
                        "Content-Type",
                        ContentType.JSON,
                        "Accept",
                        ContentType.JSON).
                when().
                delete(ConfigurationReader.getProperty("api_states_url"));

    }

    @Then("The deleted state must not be in the database")
    public void theDeletedStateMustNotBeInTheDatabase() {
        Response response = given().
                headers(
                        "Authorization",
                        "Bearer " + ConfigurationReader.getProperty("token"),
                        "Content-Type",
                        ContentType.JSON,
                        "Accept",
                        ContentType.JSON).
                when().
                get(ConfigurationReader.getProperty("api_states_url")).
                then().
                contentType(ContentType.JSON).
                extract().
                response();

        response.
                then().
                assertThat().
                statusCode(404);
    }
}
