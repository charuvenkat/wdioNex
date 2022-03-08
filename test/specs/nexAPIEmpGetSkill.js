import supertest from 'supertest';
import configdata from '../resources/configdata';
import HolidayList from '../dataobjects/holidaylist';
import apiPage from '../pageobjects/api/apiclient.page';
import Reporter from '../common/Reporter';
import credentials from '../testdata/creds.json';
import Asserts from '../common/Asserts';
import ProfileData from '../dataobjects/profileobj';
import SkillData from '../dataobjects/skillobj';
import testData from '../testdata/td.json';
import profileData from '../testdata/profileTd.json';
import SkillObj from '../dataobjects/skillobj';
import SkillList from '../dataobjects/skilllist';


let accessToken = "";

describe('Nexport API Test', () => {      
    before(async () => {
        accessToken = await apiPage.nxToken();
    });

    it('API test1: get Employee Profile data', async () => { 
        const profileResponse = await apiPage.nexProfileAPI(process.env.NEXUSERNAME,accessToken);
        const data = new ProfileData(profileResponse.body);
        Reporter.addStep("Profile Data = " + JSON.stringify(data));  
        Asserts.equal(profileResponse.status,200);   
    });

    it('API test2: get Employee Skill Data', async () => {
        const empSkillResponse = await apiPage.empSkillAPI(process.env.NEXUSERNAME,accessToken);
        console.log("Employee  Skill Assertion")
        Asserts.equal(empSkillResponse.status,200);
    
        var SkillList = new SkillObj(empSkillResponse.body);
        
       //var actualList = SkillList.getAllSkills;
        Reporter.addStep("Employee Skill Data = " + JSON.stringify(SkillList)); 
       
       // var len = SkillList.response.json().arrayName.length
    //    var sklen = SkillList.length;
    //     console.log(sklen)
    var sklen = Object.keys(SkillList).length;
        console.log("Length of the Array " +sklen);
       // console.log("Expected data" + await testData.SkillData)
        for (var i = 0; i < 1; i++) {
            console.log("i value"+ i )
        const actualList = [SkillList[i].createdBy,SkillList[i].skill.name,SkillList[i].yearsExperience,SkillList[i].skillLevel,SkillList[i].desire,SkillList[i].skillType]
        Asserts.isArrayEqual(actualList, testData.SkillData);
    }
       

    })
   
});


  // [{"employeeNetworkId":"cvenkateswaran","skill.name":"Automation Testing",
  //   "yearsExperience":0.2,"skillLevel":2,"desire":75,"skillType":"STANDARD"},
  //   {"employeeNetworkId":"cvenkateswaran","skill.name":"Azure",
  //     "yearsExperience":0.2,"skillLevel":2,"desire":50,"skillType":"STANDARD"}],

 // ["cvenkateswaran","Java",0.2,2,50,"STANDARD"],

  
        // for (var i = 0; i < sklen; i++) {
        //     //SkillList.createdBy = SkillList[i].createdBy;
        //     console.log("actual createdBy " + await SkillList[i].createdBy);
        //     console.log("actual skill " + await SkillList[i].skill.name);
        //     console.log("actual yearsExperience " + await SkillList[i].yearsExperience);
        //     console.log("actual skillLevel " + await SkillList[i].skillLevel);
        //     console.log("actual desire " + await SkillList[i].desire);
        //     console.log("actual skillType " + await SkillList[i].skillType);
        // }


      // console.log("Expected test data" + testData.SkillData)
    //    const actualList = [SkillList.employeeNetworkId,SkillList.skill,SkillList.yearsExperience,SkillList.skillLevel,SkillList.desire,SkillList.skillType]
    //    Asserts.isArrayEqual(actualList, testData.SkillData);




      // Asserts.deepEqual(actualList, testData.SkillData);
        // const actualList = [SkillList.skillType]
        // Asserts.isArrayEqual(actualList, testData.EmpApiSkill);


        // var holidaylist =  new HolidayList(holidaysRespose.body);  
        // var actualList = holidaylist.getAllHolidays;       
        // Reporter.addStep("All Holidays List = " + JSON.stringify(actualList));       
        // Asserts.deepEqual(actualList, testData.HolidaysData);

        // var filteredHolidays = holidaylist.getAllHolidaysInBetween('2022-01-01', '2022-08-01');
        // filteredHolidays.forEach(holiday => console.log("filteredHolidays = " + JSON.stringify(holiday) + " \n"));
        // Reporter.addStep("Holidays List between 2022-01-01 and 2022-08-01 = " + JSON.stringify(filteredHolidays));
    