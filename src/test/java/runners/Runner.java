package runners;
import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        plugin = {"html:target/default-cucumber-reports",
                "json:target/json-reports/cucumber.json",
                "junit:target/xml-report/cucumber.xml"
        },
        features = "/Users/administrator/IdeaProjects/com.gmibank/src/test/resources/features/US03passwordCreate.feature",
        glue = "stepdefinitions",
        tags = "@US03",
        dryRun = false
)

public class Runner {
}