package io.mosip.test.pmptest.testcase;

import java.awt.AWTException;
import org.openqa.selenium.By;

import org.testng.annotations.Test;



import io.mosip.test.pmptest.utility.BaseClass;
import io.mosip.test.pmptest.utility.Commons;
import io.mosip.test.pmptest.utility.Reporter;
import io.mosip.test.pmptest.utility.RealTimeReport;
import org.testng.annotations.Listeners;

@Listeners(value=Reporter.class)
public class AdminUploadCaCertTest extends BaseClass {
	
	@Test(groups = "UFCC",dataProvider = "data-provider-ca")
	public void adminUploadCaCertTest(String cer) throws InterruptedException, AWTException {

		
		
		test=extent.createTest("AdminUploadCaCertTest", "verify Login");
		Commons.click(test,driver, By.xpath("//a[@href='#/pmp/resources/uploadcacert/upload']"));
		
		String dropdwnVal=cer.substring(0, cer.indexOf("_", 0));
		
		
		//Commons.enter(test,driver, By.id("custom-file-input"), System.getProperty("user.dir")+"\\ca_cert\\AUTH_ca.pem");
		
		Commons.uploadPartnerCert(driver,By.id("partnerDomain"),dropdwnVal,"\\ca_cert\\",cer);
		
		
		 

	}
}
