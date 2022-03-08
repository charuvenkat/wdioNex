import NexportLoginPage from '../pageobjects/nexportLogin.page';
import NexportProfilePage from '../pageobjects/nexportProfile.page';
import NexportSkillPage from '../pageobjects/nexportSkill.page';
import NexportHomePage from '../pageobjects/nexportHome.page';
import Asserts from '../common/Asserts';
import testdata from'../testdata/td.json';
//import testdata from'../testdata/skillTestData.json';
import elementActions from '../common/elementActions';
//import nexportSkillPage from '../pageobjects/nexportSkill.page';

describe('My Nexport Profile application', () => { 
 

  it('Nexport Profile Adding Skill', async () => {  
  
    
    await NexportLoginPage.open();
    await NexportLoginPage.loginClick();
    await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD);
    await NexportProfilePage.profileClick();
    await NexportSkillPage.skill(); 
    await browser.pause(7000);
    await browser
 
     await $("(//md-select)[1]").click();
    await $("//md-option/div[contains(text(),'" + testdata.skillexample.skill + "')]").waitForDisplayed();
    await $("//md-option/div[contains(text(),'" + testdata.skillexample.skill + "')]").click();
    
    // await $("//md-option/div[textContent='" + testdata.skillexample.skill + "')]").waitForDisplayed();
    // await $("//md-option/div[textContent='" + testdata.skillexample.skill + "')]").click();

   // await $("//md-option/div[./text()='" + testdata.skillexample.skill + "']").waitForDisplayed();
   // await $("//md-option/div[./text()='" + testdata.skillexample.skill + "']").click();
   
  //   await NexportSkillPage.skillClick();
  //   await browser.pause(3000)
  //   await NexportSkillPage.getSkill(testdata.skillexample.skill);
  //  await browser.pause(3000)

    await $("//input[@type='text']").waitForDisplayed();
    await NexportSkillPage.getYrsOfExp(testdata.skillexample.yearsOfExperience);

    // await NexportSkillPage.skillLevelClick();
    // await $("//md-option/div[contains(text(),'" + testdata.skillexample.skillLevel + "')]").waitForDisplayed();
    // await $("//md-option/div[contains(text(),'" + testdata.skillexample.skillLevel + "')]").click();
    // await NexportSkillPage.skillDesireClick();   
    // await $("//md-option/div[contains(text(),'" + testdata.skillexample.desireToUseSkill + "')]").waitForDisplayed();
    // await $("//md-option/div[contains(text(),'" + testdata.skillexample.desireToUseSkill + "')]").click();
    
    // await NexportSkillPage.skillLevelClick();
    // await browser.pause(3000);
    // await NexportSkillPage.getSkillLevel(testdata.skillexample.skillLevel);


    // await NexportSkillPage.skillDesireClick();   
    // await browser.pause(3000)
    // await NexportSkillPage.getDesireToUseSkill(testdata.skillexample.desireToUseSkilll);
    
  //   await browser.pause(3000)
  //   await NexportSkillPage.getSkillType(testdata.skillexample.skillType)

  //   await browser.pause(2000);
  //   await NexportSkillPage.skillSave();
  
  // await browser.pause(3000);
   
    await NexportSkillPage.skillCancel();
    await browser.pause(3000);
   
  //   const skillActual = await NexportSkillPage.skillValidaton();
  //   var expectedSkill = testdata.skillexample.expectedSkill;
  //   Asserts.equal(skillActual, expectedSkill);
  //  await browser.pause(3000);

   await NexportHomePage.logoutClick();

}); 
 
    
xit('Nexport Profile Deleting Skill', async () => {  
  
  // await NexportLoginPage.open();
  // await NexportLoginPage.loginClick();
  // await NexportLoginPage.login(process.env.NEXUSERNAME, process.env.NEXPASSWORD); 
  // await NexportProfilePage.profileClick();
  await NexportSkillPage.deleteValidaton();
  await browser.pause(3000);
  await NexportHomePage.logoutClick();

}); 

});



//skill selector from room 196 list in skill
//(//div/md-input-container/md-select/md-select-value)[1]/following::div//md-select-menu/md-content/md-option[@ng-value='skill']




//"ExpectedSkill": "Primary REST" 

//await $("//md-select-menu[@class='_md md-overflow']/md-content/md-option/div[contains(text(),'" + testdata.Skill + "')]").waitForDisplayed();
  //await $("//md-select-menu[@class='_md md-overflow']/md-content/md-option/div[contains(text(),'" + testdata.Skill + "')]").click();


//************************************

//await elementActions.setValue(await this.inputUsername, 'USERNAME', username); 

  
// await item.map( async ele => ele.setValue
// var list2 =  list.filter(x => x.length > 2);


// for(var i=0; i<item.length; i++)
// {
//     console.log(item[i].getText())
// }
// const desloc = item.filter(item => item.getText() === "India")
// desloc[0].click()