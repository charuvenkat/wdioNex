import NexportLoginPage from '../pageobjects/nexportLogin.page';
import NexportProfilePage from '../pageobjects/nexportProfile.page';
import NexportHomePage from '../pageobjects/nexportHome.page';
import Asserts from '../common/Asserts';
import profiledata from '../testdata/profileTd.json';
import testdata from'../testdata/td.json';

describe('My Nexport Profile', () => { 
 

  it('Nexport Profile Validation', async () => {  
    
    await NexportLoginPage.open();
    await NexportLoginPage.loginClick();
    await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD); 
    await NexportProfilePage.profileClick();
    await browser.pause(3000)
  
    const profileActual = await NexportProfilePage.profileValidaton();
    var expectedProfileData = testdata.ProfileData;
    Asserts.isArrayEqual(profileActual, expectedProfileData);

    await NexportHomePage.logoutClick();
}); 



});









// it('Nexport Profile Validation', async () => {  
    
//   await NexportLoginPage.open();
//   await NexportLoginPage.loginClick();
//   await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD); 
//   await NexportProfilePage.profileClick();

  
//   Asserts.equal(await NexportProfilePage.jobTitle.getText(), profiledata.Title);
//   Asserts.equal(await NexportProfilePage.eMail.getText(), profiledata.Email);
//   Asserts.equal(await NexportProfilePage.careerCoach.getText(), profiledata.CareerCoach);
//   Asserts.equal(await NexportProfilePage.manager.getText(),profiledata.Manager);

//   await NexportHomePage.logoutClick();
// }); 






   

   

























 // it('Nexport Profile Validation using Map', async () => {  
    
  //   await NexportLoginPage.open();
  //   await NexportLoginPage.loginClick();
  //   await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD); 
  //   await NexportProfilePage.profileClick();
    
  //   const profileActual = await NexportProfilePage.profileValidatonMap();
  //       var expectedProfileData = testdata.ProfileData;
  //       Asserts.isArrayEqual(profileActual, expectedProfileData);

  //   await NexportHomePage.logoutClick();
  // }); 


























// describe('Nexport', () => {
//     it('Login and Logout TC ', async() => {
//         await browser.url("https://portal.nexient.com/#!/home")
//        // browser.pause(3000)
//       //  expect(await browser.getTitle()).toEqual("Nexient: Employee Portal")

//         const login = $(".ng-scope a").click()
//        // const login = $("//a[text()='login']")
//       // $("#input_8").setValue("cvenkateswaran")
//         const userName = $("#input_11")
//         await ( userName).setValue('cvenkateswaran')
//         // const pswd = $("#input_9")
//         // await (await pswd).setValue('***********')
       
//         // // const enter = $("//button[@type='submit']")
//         // // await enter.click()
//          //await browser.pause(2000)
//     });
