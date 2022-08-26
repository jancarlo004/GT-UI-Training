import { t } from 'testcafe';
import { SearchTabBar_Ext } from "./ScenarioPages/Search/SearchTabBar_Ext.js";

const searchTabBar_Ext = new SearchTabBar_Ext();
export class PolicyScenario {
    constructor() {}
  
    async SearchForPolicy() {
     await searchTabBar_Ext.tabBarSearchTab.click();    
     !await searchTabBar_Ext.tabBarSearchTab.hasClass('gw-hasOpenSubMenu') && await t.click(searchTabBar.tabBarSearchTab.find('div.gw-action--expand-button'));
     await searchTabBar_Ext.searchTabSearch_PolicySearch.click();
     
    }
}
