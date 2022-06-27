import { PcfComponent } from "@gtui/gt-ui-framework";
import { Selector, t } from 'testcafe';
import { SearchTabBar } from "../../../pages/navigation/tabBar/SearchTabBar";

export class SearchTabBar_Ext extends SearchTabBar {

    tabBarSearchTab_Ext = Selector('#TabBar-SearchTab');
	searchTabSearch_PaymentSearch_Ext = PcfComponent('#TabBar-SearchTab-Search_PaymentSearch');
    searchTabSearch_Recovery_Ext = PcfComponent('#TabBar-SearchTab-Search_RecoverySearch');
	tabBarWidgetmoreoptions_Ext = PcfComponent('#TabBarWidget--more-options');

    async openSearchPayment(){
        !await this.tabBarSearchTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(this.tabBarSearchTab_Ext.find('div.gw-action--expand-button'));
        await this.searchTabSearch_PaymentSearch_Ext.click();
    }

    async openSearchRecovery(){
        !await this.tabBarSearchTab_Ext.hasClass('gw-hasOpenSubMenu') && await t.click(this.tabBarSearchTab_Ext.find('div.gw-action--expand-button'));
        await this.searchTabSearch_Recovery_Ext.click();
    }

}