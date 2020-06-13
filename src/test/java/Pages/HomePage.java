package Pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import TestBase.TestBase;

public class HomePage extends TestBase {
	
	@FindBy(name="userName")
	WebElement userName;
	
	@FindBy(name="password")
	WebElement Password;
	
	@FindBy(name="login")
	WebElement LoginBtn;
	
	public HomePage() {
		PageFactory.initElements(driver, this);
	}
	
	public String verfiyHomepage() {
		return driver.getTitle();
	}
	
	public void typeUserName(String username) {
		userName.sendKeys(username);
	}
	
	public void typePassword(String password) {
		Password.sendKeys(password);
	}
	
	public void clickLoginBtn() {
		LoginBtn.click();
	}

}
