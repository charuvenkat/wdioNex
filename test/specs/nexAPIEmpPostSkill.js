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

    xit('API test1: PostMethod Employee Skill Data', async () => {
        const empPostSkillResponse = await apiPage.empPostSkillAPI(process.env.NEXUSERNAME,accessToken);
        // console.log("status" + empPostSkillResponse.status)
        // console.log("status code "+ empPostSkillResponse.statusCode)
        // console.log("status tykpe "+ empPostSkillResponse.statusType)
        // console.log("response "+ empPostSkillResponse.body.id)
        const AddedSkill = new SkillObj(empPostSkillResponse.body);
        Reporter.addStep("Skill Data = " + JSON.stringify(AddedSkill));  
        console.log("Employee API Post Skill Assertion")
        Asserts.equal(empPostSkillResponse.status,200);
        console.log("New Skill id    : "+ await AddedSkill.id)
        const actualList = [AddedSkill.employeeNetworkId,AddedSkill.yearsExperience,AddedSkill.skillLevel,AddedSkill.desire,AddedSkill.skillType]
        Asserts.isArrayEqual(actualList, testData.EmpApiNewSkill);

    });
    it('API test2: get Employee Skill Data', async () => {
      const empSkillResponse = await apiPage.empSkillAPI(process.env.NEXUSERNAME,accessToken);
      console.log("Employee  Skill Assertion")
      Asserts.equal(empSkillResponse.status,200);
  
      var SkillList = new SkillObj(empSkillResponse.body);
      
     //var actualList = SkillList.getAllSkills;
      Reporter.addStep("Employee Skill Data = " + JSON.stringify(SkillList)); 
    
      //var sklen= await SkillList.length

      
      var keys = Object.entries(SkillList);
    console.log("key length" + keys.length)

      for (var i = 0, len = keys.length; i < len; i++) {
        console.log(await SkillList[i]);
       const actualList = [SkillList[i].createdBy,SkillList[i].skill.name,SkillList[i].yearsExperience,
            SkillList[i].skillLevel,SkillList[i].desire,SkillList[i].skillType]
            console.log("Actual List"+ await actualList)
            
            //console.log("Test data" + await testData.SkillData[i])
           // Asserts.isArrayEqual(actualList, testData.SkillData);
     }
      let SkillListInfo = [];
      actualList.forEach(skill => {SkillListInfo.push(skill);
       console.log("skill info"+SkillListInfo )
          })
         
     
     // var len = SkillList.response.json().arrayName.length
  //    var sklen = SkillList.length;
  //     console.log(sklen)

  //var sklen = Object.entries(SkillList).length
  //.keys(SkillList).length;
    //  console.log("Length of the Array " + await sklen);
  //     for (var i = 0; i < sklen; i++) {
  //         console.log("i value"+ i )
  //        let  actualList = []
  //     actualList = [SkillList[i].createdBy,SkillList[i].skill.name,SkillList[i].yearsExperience,
  //     SkillList[i].skillLevel,SkillList[i].desire,SkillList[i].skillType]
  //     console.log("Test data" + await testData.SkillData[i])
  //     Asserts.isArrayEqual(actualList, testData.SkillData);
  // }
     

  })

    
});


// xit('POST /users',async() => {
//   const data = {
//           employeeNetworkId: "cvenkateswaran",
//           skillType: "SECONDARY",
//           skill: {
//             active: true,
//             id: "CUogwl",
//             name: "Java",
//             tags: [],
//             practices: [
//               {
//                 active: true,
//                 id: "tOMade",
//                 name: "App Development",
//                 practiceType: "DEV"
//               }
//             ]
//           },
//           yearsExperience: "0.2",
//           skillLevel: 2,
//           desire: 50
//         }
//   return request
//    .post ('https://portal.nexient.com/gateway/api/employee-skills/cvenkateswaran')
//    .set('X-Authorization', accessToken)
//       .set('tenantId', configdata.nxTenentId)
//       .set('version', configdata.nxVersion_1)
//    .send(data) // send payload data
//    .then((res) => {
//      console.log(res.body)
//      Asserts.equal(res.status,200);
//      });
// });