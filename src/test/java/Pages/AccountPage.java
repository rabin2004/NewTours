package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import TestBase.TestBase;

public class AccountPage extends TestBase {

	@FindBy(name="Welcome user")
	WebElement welcomeUsertitle;
	
	public AccountPage() {
		PageFactory.initElements(driver, this);
	}

	public String UserTitle() {
		return welcomeUsertitle.getText();
	}

}
