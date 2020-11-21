package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import utilities.ConfigurationReader;
import utilities.DatabaseUtility;

import java.util.List;
import java.util.Map;

public class US29DatabaseStepdef {
    @Given("The user connects to the JDBC with the admin and password given to her")
    public void theUserConnectsToTheJDBCWithTheAdminAndPasswordGivenToHer() {
        DatabaseUtility.createConnection();
    }

    @Then("All users' info \\(user, employee, manager and admin) should be retrieved by database and validated")
    public void allUsersInfoUserEmployeeManagerAndAdminShouldBeRetrievedByDatabaseAndValidated() throws Exception {

        String query = ConfigurationReader.getProperty("sqlQueryCustomer");
        List<Object> customerList = DatabaseUtility.getRowList(query);
        System.out.println(customerList.toString());

        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_id")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_first_name")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_last_name")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_middle_initial")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_email")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_mobile_phone_number")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_phone_number")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_address")));
        Assert.assertTrue(customerList.toString().contains(ConfigurationReader.getProperty("tp_customer_create_date")));

        //List<Map<String, Object>> customerMap = DatabaseUtility.getQueryResultMap(query);
        // System.out.println(customerMap.toString());

    }


    @Then("All countries' info should be retrieved by database and validated")
    public void allCountriesInfoShouldBeRetrievedByDatabaseAndValidated() {
    }

    @Then("All states should related to USA should be  retrieved by database and validated")
    public void allStatesShouldRelatedToUSAShouldBeRetrievedByDatabaseAndValidated() {
    }


}
