import supertest from 'supertest';
import Asserts from '../../common/Asserts';
import Reporter from '../../common/Reporter';
import configdata from '../../resources/configdata';
import credentials from '../../testdata/creds.json';
import managepassword from '../../utility/managepassword';

class APIClient {
    async nxToken() {
        Reporter.addStep("Login API is called to get the Accesstoken");
        const loginAPI = await this.nexLoginAPI();
        if (loginAPI.status == 200) {
            const token = await loginAPI.headers.accesstoken;
            Reporter.addStep("Access Token = " + await loginAPI.headers.accesstoken);  
            return token;

        } else {
            Asserts.fail("Failed to get the Login Token..");
        }
    }

    async nexLoginAPI() {
        console.log("NEXPORT Login API is called..");
        console.log("configdata.nxLoginEndpoint = " + configdata.nxLoginEndpoint);
        const request = supertest(configdata.nxAPIBaseUrl);
        const loginResponse = await request
            .post(configdata.nxLoginEndpoint)
            .send({
                username: process.env.NEXUSERNAME,
                password: managepassword.decrypt(process.env.NEXPASSWORD)
            })
            .set('version', configdata.nxVersion_2);
        return loginResponse;
    }

    async nexProfileAPI(employeeId, accessToken) {
        Reporter.addStep("NEXPORT Profile API is called..");
        Reporter.addStep("configdata.nxProfileEndpoint = " + configdata.nxProfileEndpoint + '/' + employeeId);
        const request = supertest(configdata.nxAPIBaseUrl);
        const profileResponse = await request
            .get(configdata.nxProfileEndpoint + '/' + employeeId)
            .set('X-Authorization', accessToken)
            .set('tenantId', configdata.nxTenentId)
            .set('version', configdata.nxVersion_2);
        return profileResponse;
    }


    async holidayAPI(accessToken) {
        Reporter.addStep("NEXPORT Holiday API is called..");
        Reporter.addStep("configdata.nxHolidaysEndpoint = " + configdata.nxHolidaysEndpoint);      
        const request = supertest(configdata.nxAPIBaseUrl);
        const response = await request
            .get(configdata.nxHolidaysEndpoint)
            .set('X-Authorization', accessToken)
            .set('tenantId', configdata.nxTenentId)
            .set('version', configdata.nxVersion_1);

        Asserts.equal(response.status,200);        
        return response;
    }
    
    async empSearchProfileAPI(empIdSearch,accessToken) {
        Reporter.addStep("NEXPORT Emp Search Profile API is called..");
        Reporter.addStep("configdata.nxProfileEndpoint = " + configdata.nxProfileEndpoint + '/' + empIdSearch);      
        const request = supertest(configdata.nxAPIBaseUrl);
        const response = await request
            .get(configdata.nxProfileEndpoint + '/' + empIdSearch)
            .set('X-Authorization', accessToken)
            .set('tenantId', configdata.nxTenentId)
            .set('version', configdata.nxVersion_2);

        Asserts.equal(response.status,200);        
        return response;
    }
    async empSkillAPI(employeeId, accessToken) {
        Reporter.addStep("NEXPORT Emp Skill API is called..");
        Reporter.addStep("configdata.nxSkillEndpoint = " + configdata.nxSkillEndpoint + '/' + employeeId);      
        const request = supertest(configdata.nxAPIBaseUrl);
        const response = await request
            .get(configdata.nxSkillEndpoint + '/' + employeeId)
            .set('X-Authorization', accessToken)
            .set('tenantId', configdata.nxTenentId)
            .set('version', configdata.nxVersion_1);

        Asserts.equal(response.status,200);        
        return response;
    }
    
    async empPostSkillAPI(employeeId, accessToken) {
        console.log("Employee Skill Post API is called..");
        Reporter.addStep("configdata.nxSkillEndpoint = " + configdata.nxPostSkillEndpoint); 
        const request = supertest(configdata.nxAPIBaseUrl);
        const response = await request
            .post(configdata.nxPostSkillEndpoint)
            .set('X-Authorization', accessToken)
            .set('tenantId', configdata.nxTenentId)
            .set('version', configdata.nxVersion_1)
             .send( {
                    employeeNetworkId: employeeId,
                    skillType: "SECONDARY",
                    skill: {
                      active: true,
                      id: "CUogwl",
                      name: "Java",
                      tags: [],
                      practices: [
                        {
                          active: true,
                          id: "tOMade",
                          name: "App Development",
                          practiceType: "DEV"
                        }
                      ]
                    },
                    yearsExperience: "0.2",
                    skillLevel: 2,
                    desire: 50
                  });
       
            Asserts.equal(response.status,200);        
            return response;
    }

}

export default new APIClient();