
import Page from './page';
import configdata from '../resources/configdata';
import AllureReporter from '@wdio/allure-reporter';
import elementActions from '../common/elementActions';



/**
 * sub page containing specific selectors and methods for a specific page
 */
class NexportHomePage extends Page {
    /**
     * define selectors using getter methods
     */
    get baseurl() {
        return configdata.nexportURL;
    }

    get title() {
        return $('title');
    }

    get home() { return $('*=HOME') }

    get companyLinks() {
        return $('#LINKS');
    }
    get btnlogoutNexport() {
         return $('[class="md-icon-button md-button ng-scope md-ink-ripple"] i')
    }
    async logoutClick() {       
        await elementActions.click(await this.btnlogoutNexport, 'Nexport Logout');     
    }
    
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open(baseurl, 'home');
    }

    async homeLink(){
        AllureReporter.addStep("Get the Home element..");
        const home = await this.home ;
        return home;
    }

    async getTitle(){       
        await this.title ;
    }
}

export default new NexportHomePage();
