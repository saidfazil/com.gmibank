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
        features = "/Users/buse/IdeaProjects/com.gmibank/src/test/resources/features/customerRegistration.feature",
        glue = "stepdefinitions",
        tags = "@US02TC01",
        dryRun = true
)

public class Runner {
}