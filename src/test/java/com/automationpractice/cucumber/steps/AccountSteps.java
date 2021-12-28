package com.automationpractice.cucumber.steps;

import com.automationpractice.pages.CreateAccountPage;
import com.automationpractice.pages.HomePage;
import com.automationpractice.pages.SignInPage;
import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.lexer.Th;
import org.junit.Assert;

import java.util.List;
import java.util.Map;

/**
 * By Dimple
 **/
public class AccountSteps {
    @When("^I click On \"([^\"]*)\"$")
    public void iClickOn(String signIn) {
        new HomePage().clickOnSignInLink(signIn);
    }

    @And("^I enter \"([^\"]*)\"$")
    public void iEnter(String email) {
        new SignInPage().enterEmil(email);

    }
    @And("^I click on create account button$")
    public void iClickOnCreateAccountButton() {
        new SignInPage().clickonCreateAccountBtn();
    }

    @When("^User enters following user details$")
    public void userEntersFollowingUserDetails(DataTable dataTable) throws InterruptedException {
        List<Map<String,String>> userList = dataTable.asMaps(String.class, String.class);
        new CreateAccountPage().getGender("female");
        for (Map<String,String>e:userList)
        {
           String firstName= e.get("firstName");
           String lastName=e.get("lastName");
           String email=e.get("eMail");
           String pass=e.get("password");
           String days=e.get("days");
           String month=e.get("month");
           String year=e.get("year");
           String fNm=e.get("FirstNm");
           String lNm=e.get("LastNm");
           String company=e.get("Company");
           String address=e.get("Address");
           String city=e.get("City");
           String state=e.get("State");
           String zipCode=e.get("ZipCode");
           String country=e.get("Country");
           String mobile=e.get("MobilePhone");
           String alias=e.get("Alias");
           new CreateAccountPage().getCustomerFNM(firstName);
           new CreateAccountPage().getCustomerLNM(lastName);
           new CreateAccountPage().getEmail(email);
           new CreateAccountPage().getPassword(pass);
           new CreateAccountPage().getDays(days);
           new CreateAccountPage().getMonths(month);
           new CreateAccountPage().getYears(year);
           new CreateAccountPage().getFName(fNm);
           new CreateAccountPage().getLName(lNm);
           new CreateAccountPage().getCompany(company);
           new CreateAccountPage().getAddress1(address);
           new CreateAccountPage().getCity(city);
           new CreateAccountPage().getState(state);
           new CreateAccountPage().getPostcode(zipCode);
           new CreateAccountPage().getCountry(country);
           new CreateAccountPage().getMobileNo(mobile);
           new CreateAccountPage().getAlias(alias);
        }
    }
    @And("^clicks register button$")
    public void clicksRegisterButton()
    {
        new CreateAccountPage().clickRegister();
    }
    @Then("^I should be able to see account name \"([^\"]*)\" on top right$")
    public void iShouldBeAbleToSeeAccountNameOnTopRight(String expected)  {
        Assert.assertEquals(expected,new HomePage().verifyMyName());

    }
    @And("^verify the text$")
    public void verifyTheText()
    {
        String sinIn = new CreateAccountPage().textMyAc();
        String expectedMessage ="My account";
        Assert.assertEquals("Show My account ",expectedMessage,sinIn);
    }
}