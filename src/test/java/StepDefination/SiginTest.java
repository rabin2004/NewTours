package StepDefination;

import org.testng.Assert;

import Pages.AccountPage;
import Pages.HomePage;
import TestBase.TestBase;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SiginTest extends TestBase {
	public HomePage hp;
	public AccountPage acc;
	
	@Before
	public void openBrowser() {
		initialization();
		hp = new HomePage();
		acc = new AccountPage();
	}
	
	//Sign Test with valid credentials
	@Given("^user open newtours website$")
	public void user_open_newtours_website() {
	   String actual = hp.verfiyHomepage();
	   Assert.assertEquals(actual, "Welcome: Mercury Tours");
	}

	@When("^user enters valid \"(.*)\" and valid \"(.*)\"$")
	public void user_enters_valid_username_and_valid_password(String username, String password) {
	  hp.typeUserName(username);
	  hp.typePassword(password);
	  hp.clickLoginBtn();
	}

	@Then("^user should be land in my account page$")
	public void user_should_be_land_in_my_account_page() {
	   String actual = acc.UserTitle();
	   Assert.assertEquals(actual, "Welcome User");
	}
	
	//Signin Test with invalid credentials
	
	@When("user enters invalid \"(.*)\\\" and invalid \"(.*)\"$")
	public void user_enters_invalid_and_invalid(String invalidUsername, String invalidPassword) {
		  hp.typeUserName(invalidUsername);
		  hp.typePassword(invalidPassword);
		  hp.clickLoginBtn();
	}
	
	@Then("user should not be able to login")
	public void user_should_not_be_able_to_login() {
	   String actual = driver.getTitle();
	   Assert.assertEquals(actual, "Sign-on: Mercury Tours");
	}

	@After
	public void closeWebsite() {
		closeBrowser();
	}

}
