import Page from './page';
//import configdata from '../resources/configdata';
import elementActions from '../common/elementActions';
//import managepassword from '../utility/managepassword';
//import Asserts from '../common/Asserts';

class NexportProfilePage extends Page {

   
    get profile() {return $('div span')}; 
    get profileList() {return $$("span[class='md-subhead horizontal-padding ng-binding']")};
  
    get jobTitle() {return $("//span[text()='Job Title: Quality Engineer I']")};
    get eMail() {return $("//span[text()='Email: cvenkateswaran@nexient.com']")};
    get manager() {return $("//span[text()='Manager: Gauri Pawar']")};
    get careerCoach() {return $("//*[contains(text(),'Career Coach')]")};
   
    async profileClick() {       
      await elementActions.click(await this.profile, 'Nexport Profile');     
     } 
    
      async profileValidaton() {       
        let proList = await elementActions.getTextFromList(this.profileList);       
        return proList;
      }  










      // async profileValidatonMap(){
        
      //     let list = [];
      //      await this.profileList.map( async pData => list.push(await(await pData.getText()).trim()))
      //    var list2 =  list.filter(x => x.length > 2);
      //     return list2;
      // }
     
 


    

}

export default new NexportProfilePage();











