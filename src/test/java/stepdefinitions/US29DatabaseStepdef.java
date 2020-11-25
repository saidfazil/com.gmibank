package stepdefinitions;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import pojos.States;
import utilities.ConfigurationReader;
import utilities.DatabaseUtility;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

public class US29DatabaseStepdef {
    States[] states;

    @Given("The user connects to the JDBC with the admin and password given to her")
    public void theUserConnectsToTheJDBCWithTheAdminAndPasswordGivenToHer() {
        DatabaseUtility.createConnection();
    }

    @Then("All users' info {string}{string}{string}{string}{string}{string}{string}{string}{string} by database and validated")
    public void allUsersInfoByDatabaseAndValidated(String id, String loginname, String email, String activated, String language, String profiles, String create_date, String modified_by, String modified_date) {
      String query = "SELECT * FROM public.jhi_user WHERE login='"+loginname+"'";
       //String query = "SELECT * FROM public.jhi_user WHERE login LIKE '%global%'";
       List<Map<String,Object>> allUsersInfoMapList = DatabaseUtility.getQueryResultMap(query);

        allUsersInfoMapList.stream().
              //  map(t->t.get("login")).
                forEach(System.out::println);
        System.out.println(allUsersInfoMapList.size());
        Assert.assertTrue(allUsersInfoMapList.get(0).get("id").toString().equalsIgnoreCase(id));
        Assert.assertTrue(allUsersInfoMapList.get(0).get("login").toString().equalsIgnoreCase(loginname));
 //       Assert.assertTrue(allUsersInfoMapList.get(0).get("email").toString().equalsIgnoreCase(email));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("activated").toString().equalsIgnoreCase(activated));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("language").toString().equalsIgnoreCase(language));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("profiles").toString().equalsIgnoreCase(profiles));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("create_date").toString().equalsIgnoreCase(create_date));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("last_modified_date").toString().equalsIgnoreCase(modified_date));
//        Assert.assertTrue(allUsersInfoMapList.get(0).get("last_modified_by").toString().equalsIgnoreCase(modified_by));

/*        List<List<Object>> allUsersInfoList = DatabaseUtility.getQueryResultList(query);
        List<String> expectedList = new ArrayList<>();
        expectedList.add(id);
        expectedList.add(loginname);
        expectedList.add(email);
        expectedList.add(profiles);
        Assert.assertTrue(allUsersInfoList.get(0).containsAll(expectedList));*/



    }

    @Then("All countries' {string} info should be retrieved by database and validated")
    public void allCountriesInfoShouldBeRetrievedByDatabaseAndValidated(String country) {
                String query = "SELECT * FROM public.tp_country WHERE name='"+country+"'";
        List<Map<String,Object>> countryMapList = DatabaseUtility.getQueryResultMap(query);
        System.out.println(countryMapList.toString());
        Assert.assertTrue(countryMapList.get(0).get("name").toString().equalsIgnoreCase(country));
    }

    @Then("All {string} should related to USA should be  retrieved by database and validated")
    public void allShouldRelatedToUSAShouldBeRetrievedByDatabaseAndValidated(String state) {
        String query = "SELECT * FROM public.tp_state WHERE name='"+state+"'";
        List<Map<String,Object>> stateMapList = DatabaseUtility.getQueryResultMap(query);
        System.out.println(stateMapList.toString());
        Assert.assertTrue(stateMapList.get(0).get("name").toString().equalsIgnoreCase(state));
    }
}
