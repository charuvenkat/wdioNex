import Page from './page';
import configdata from '../resources/configdata';
import elementActions from '../common/elementActions';
import testdata from'../testdata/skillTestData.json';




/**
 * sub page containing specific selectors and methods for a specific page
 */
 class NexportSkillPage extends Page {

    get addSkill() { return $(".nexient-orange")};
    get btnSkillSave(){return $("//button[@aria-label='Submit New Employee Skill']")}
    get btnSkillCancel(){return $("//button[@aria-label='Cancel Create Skill']")}
       // $("//button[@class='md-raised md-button md-ink-ripple']/following::button")};
    get yrsOfExp(){return $("input[type='text']")}
    get btnRadioSkillType() {return $$("md-radio-button[value]")}
    //get btnRadioSkillType(){return $$("md-radio-button div[class='md-label']")};
    //$$('md-radio-button[value]')
    get clickSkill() { return $("div md-select[aria-label='Skill :']")}
        //$("(//div/following::md-select)[1]")
       
    get listSkill(){return $$("div md-option[ng-value='skill']")}
    get clickSkillLevel() { return $("div md-select[aria-label='Skill Level :']")}
    get listSkillLevel(){return $$("div md-option[ng-repeat='(index, desc) in profileCtrl.skillLevels']")}
    get clickDesireSkill() { return $("div md-select[aria-label='Desire to Use Skill :']")}
    get listDesireSkillLevel(){return $$("div md-option[ng-repeat='(index, desc) in profileCtrl.desireLevels']")}
    get addedSkill(){return $("div[class='ng-binding flex-noshrink']")}
    get deleteAddedSkill(){return $("(//i[@ng-click='profileCtrl.deleteEmployeeSkill(empSkill)'])[1]")}
    get deleteAlertOk(){return $("//button[@aria-label='Delete Employee Skill']")}

    async skill() {       
        await elementActions.click(await this.addSkill, 'Nexport CiickAddSkill');     
    } 
    async skillClick() {     
        await elementActions.click(await this.clickSkill, 'Skill DropDown');  
       } 

    async getSkill(skill) { 
        await elementActions.clickElementNameFromList(this.listSkill, skill);  
    }
    async getYrsOfExp(yearsOfExperience) {      
        await elementActions.setValue(await this.yrsOfExp, 'YearsOfExp', yearsOfExperience); 
    }
    async skillLevelClick() {       
        await elementActions.click(await this.clickSkillLevel, 'SkillLevel DropDown');     
    } 

    async getSkillLevel(skillLevel) {      
        await elementActions.clickElementNameFromList(this.listSkillLevel, skillLevel); 
    }
    async skillDesireClick() {       
        await elementActions.click(await this.clickDesireSkill, 'SkillDesire DropDown');     
       } 
   async getDesireToUseSkill(desireToUseSkill) {  
        await elementActions.clickElementNameFromList(this.listDesireSkillLevel, desireToUseSkill);
    }  
    async getSkillType(skillType) {     

        await elementActions.clickElementNameFromList(this.btnRadioSkillType, skillType);
    }
    async skillSave() {       
        await elementActions.click(await this.btnSkillSave, 'Nexport SaveSkill');     
    } 
    async skillCancel() {       
        await elementActions.click(await this.btnSkillCancel, 'Nexport CancelSkill');     
    } 
    async skillValidaton() {    
        let newSkill = await this.addedSkill.getText();       
        return newSkill;
      } 
    async deleteValidaton() {    
        await elementActions.click(await this.deleteAddedSkill, 'Nexport DeleteSkill'); 
        await elementActions.click(await this.deleteAlertOk, 'Nexport DeleteAlertBoxOK'); 
      } 
    
    
 }
export default new NexportSkillPage();
   


































      
  // await elementActions.clickElementNameFromListBySelector(await this.listDesireSkillLevel, DesireToUseSkill);
//     await elementActions.getTextFromList(await this.listDesireSkillLevel);
//    const a = await elementActions.getTextFromList(this.listDesireSkillLevel)
//     console.log("A is :   ======================" + a[2])
   
    // let list = [];
    //         await this.listDesireSkillLevel.forEach(async element => {
    //             list.push(await element.getText());
    //         });
           
    //         var list2 =  list.filter(x => x.length > 0);
    //         console.log("A is :   ======================" + list2)
    //        await elementActions.clickElementNameFromList(list2, DesireToUseSkill );
          
        //    const desireSkillList = this.listDesireSkillLevel.filter(await (async ele=>DesireToUseSkill.includes(ele.$("div md-option[ng-repeat='(index, desc) in profileCtrl.desireLevels']").getText())))
        
        //   .map(async item => item.$("div md-option[ng-repeat='(index, desc) in profileCtrl.desireLevels']").click())
        //     console.log("filtered list " + JSON.stringify(desireSkillList))
   

   
 
    

    //async clickDesireToUseSkill(DesireToUseSkill) {  

        //****** *
    // let list = [];
    //         await  this.listDesireSkillLevel.forEach(async element => {
    //             list.push(await element.getText());
    //         });
    //         console.log("Element of the List" + await list)

    //         var list2 =  list.filter(x => x.length > 0);

    //        return list2;



    //console.log("parameter DesireToUseSkill "+ testdata.DesireToUseSkill)

    // const listItems =  await this.listDesireSkillLevel
    // let listItemsText = await listItems.map(async e => e.getText())
    // console.log("list of desired skills length "+ listItemsText)


    // const elems =  await this.listDesireSkillLevel
    //  elems.forEach((elem) => {
    // return console.log(await  elem.getText())
    //})
    // const list = this.listDesireSkillLevel
    // console.log("List Length"+ await list.length)
    // for(let i=0;i<list.length;i++){
    // const ele = list[i];
    // console.log("List of desire skills " + await list[i].getText())
    // }

    //************
    





    // async getSkillType(SkillType){
    //     console.log("print skillType" + await SkillType)
    //     const item = await $$("md-radio-button div[class='md-label']");
    // if (await testdata.SkillType === 'Primary')
    // {
    // console.log("radio 1 :" +await item[0].getText());
    // console.log("radio 1 :" +await $("md-radio-button[value='PRIMARY']").click());
    // }
    // else  (await SkillType === 'Secondary')
    // {
    // console.log("radio 2  :" +await item[1].getText());
    // console.log("radio 2  :" +await $("md-radio-button[value='SECONDARY']").click());
    // }
    // else
    // {
    // console.log("std skill type :  "+ await $("label[class=ng-binding]").getText());
    // }
    
    
//   async getSkillType(SkillType){
//     switch(skillType) {
//       case "Primary":
//         console.log("Parameter " +testdata.SkillType)
//         console.log("radio 1 :" +await item[0].getText());
//         console.log("radio 1 clicked :" +await $("md-radio-button[value='PRIMARY']").click());
//         break;
//       case "Secondary":
//         console.log("Parameter " +testdata.SkillType)
//         console.log("radio 2  :" +await item[1].getText());
//         console.log("radio 2 clicked  :" +await $("md-radio-button[value='SECONDARY']").click());
//         break;
//       default:
//         console.log("Parameter " +testdata.SkillType)
//         console.log("std skill type :  "+ await $("label[class=ng-binding]").getText());
//         }
//     }
   
    // async selectCheckbox(element, elementName) {
    //     try {
    //         let chkBox = await getAttr(element, 'aria-checked');
    //         if (chkBox != null && chkBox.includes('false')) {
    //             element.click();
    //             Reporter.addStep(elementName + " is ckecked.");
    //         } else {
    //             Reporter.addStep(elementName + " is already ckecked.");
    //         }
    //     } catch (error) {
    //         console.error(error);
    //         Reporter.addStep("Exception occurred while Setting the Value to an element," + elementName + " . Error Message = " + error.message);
    //         throw error;
    //     }


