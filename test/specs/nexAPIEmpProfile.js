import supertest from 'supertest';
import configdata from '../resources/configdata';
import HolidayList from '../dataobjects/holidaylist';
import apiPage from '../pageobjects/api/apiclient.page';
import Reporter from '../common/Reporter';
import credentials from '../testdata/creds.json';
import Asserts from '../common/Asserts';
import ProfileData from '../dataobjects/profileobj';
import EmpProfileData from '../dataobjects/empprofileobj';
import testData from '../testdata/td.json';
import profileData from '../testdata/profileTd.json';


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

    it('API test2: get EmpSearch Profile Data', async () => {
        const empSearchProfileRespose = await apiPage.empSearchProfileAPI(testData.EmpProfileSearch,accessToken);
        console.log("Employee  profile search Assertion")
        Asserts.equal(empSearchProfileRespose.status,200);
        const profilelist = new ProfileData(empSearchProfileRespose.body);
        Reporter.addStep("Emp Search Profile Data = " + JSON.stringify(profilelist));  
        
        const actualList = [profilelist.displayName,profilelist.jobTitle,profilelist.manager,profilelist.email,profilelist.careerCoach]
        Asserts.isArrayEqual(actualList, testData.EmpApiProfile);

    })
   
});