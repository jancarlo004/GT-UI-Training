import {PcfComponent } from "@gtui/gt-ui-framework";
import { Selector, t } from 'testcafe';
import { SearchTabBar } from "../../../../pages/navigation/tabBar/SearchTabBar";

export class SearchTabBar_Ext extends SearchTabBar {
    tabBarSearchTab_PolicySearch_Button = PcfComponent('#TabBar-SearchTab-Search_PolicySearch');
    tabBarSearchTab_Ext = Selector('#TabBar-SearchTab');
}
