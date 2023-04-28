package demoSelenium;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.edge.EdgeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.testng.annotations.Test;

public class Demo {
	
	WebDriver driver;
	
  @Test (enabled=false)
  public void ie() {
	  
	 System.setProperty("webdriver.ie.driver","C:\\Users\\Public\\Documents\\Selenium Drivers\\BrowserDrivers\\InternetExplorer\\IEDriverServer_Win32_3.150.1\\IEDriverServer.exe");
	 driver=new InternetExplorerDriver();
	 driver.get("http://www.google.co.in");
	 driver.findElement(By .linkText("Gmail")).click();
  }
  
  @Test 
  public void edge() {
	  
	 System.setProperty("webdriver.chrome.driver","C:\\Users\\Public\\Documents\\Selenium Drivers\\BrowserDrivers\\edgedriver_win64\\msedgedriver.exe");
	 driver=new EdgeDriver();
	 driver.get("http://www.google.co.in");
	 driver.findElement(By .linkText("Gmail")).click();
  }
  
  @Test (enabled=false)
  public void chrome() {
	  
	 System.setProperty("webdriver.chrome.driver","C:\\Users\\Public\\Documents\\Selenium Drivers\\BrowserDrivers\\Chrome\\chromedriver_V107\\chromedriver.exe");
	 driver=new ChromeDriver();
	 driver.get("http://www.google.co.in");
	 driver.findElement(By .linkText("Gmail")).click();
  }
  
}
