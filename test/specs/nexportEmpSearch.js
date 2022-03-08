import NexportLoginPage from '../pageobjects/nexportLogin.page';
import NexportHomePage from '../pageobjects/nexportHome.page';
import Asserts from '../common/Asserts';
import searchPage from '../pageobjects/search.page';
import testdata from'../testdata/td.json';

describe('My Nexport Application', () => {   
  it('Employee Search and Validation', async () => {      
      await NexportLoginPage.open();
      await NexportLoginPage.loginClick();
      await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD);
    
      await searchPage.clickSearch();
      await searchPage.empNameSearch(testdata.EmpNameSearch);
      await searchPage.empProfile.click();
      await browser.pause(4000)
      
      Asserts.equal(await searchPage.empNameValidation.getText(), testdata.EmpNameSearch);
    
      const EmpProfileActual = await searchPage.EmpProfileValidaton();
      var expectedEmpProfile = testdata.EmpProfile
      Asserts.isArrayEqual(EmpProfileActual, expectedEmpProfile);

    await NexportHomePage.logoutClick();

  }); 
}); 