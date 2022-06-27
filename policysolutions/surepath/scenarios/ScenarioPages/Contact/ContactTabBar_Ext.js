import { Selector, t } from 'testcafe';
import { ContactTabBar } from "../../../../pages/navigation/tabBar/ContactTabBar";

export class ContactTabBar_Ext extends ContactTabBar {

    tabBarContactTab_Ext = Selector('#TabBar-ContactTab');
    contactTabNewContact_Ext = Selector('#TabBar-ContactTab-NewContact');

    async openTabBarContactTabMenuItem() {
		!await this.tabBarContactTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(this.tabBarContactTab_Ext.find('div.gw-action--expand-button'));
	}
    
    async selectContactTabNewContactNewCompany() {
		await this.openTabBarContactTabMenuItem();
		await t
            .hover(this.contactTabNewContact_Ext)
            this.newContactNewCompany.click();
         
	}

    async selectContactTabNewContactNewPerson() {
		await this.openTabBarContactTabMenuItem();
		await t
            .hover(this.contactTabNewContact_Ext)
            this.newContactNewPerson.click();
        
	}

    async selectContactTabBarContactSearch() {
        await this.openTabBarContactTabMenuItem();
        await this.contactTabSearch.click();
    }

}