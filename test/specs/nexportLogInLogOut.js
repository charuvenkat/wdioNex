import NexportLoginPage from '../pageobjects/nexportLogin.page';
import NexportHomePage from '../pageobjects/nexportHome.page';
import Asserts from '../common/Asserts';
import testdata from'../testdata/td.json';


describe('My Nexport Login Logout', () => {   
  it('Login to Nexport with valid credentials', async () => {      
      await NexportLoginPage.open();
      await NexportLoginPage.loginClick();
      await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD);
      await NexportHomePage.logoutClick();
      
      const nexLogoff = await NexportLoginPage.logffMsg.getText();  
      var expectedLogOffData = testdata.LogOffMsg;     
      Asserts.equal(await nexLogoff, expectedLogOffData);
     
  }); 
}); 