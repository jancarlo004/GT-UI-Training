import { PcfButton, PcfTextInput } from "@gtui/gt-ui-framework";
import { Selector, t } from 'testcafe';
import { AccountTabBar } from "../../../../pages/navigation/tabBar/AccountTabBar";

export class AccountTabBar_Ext extends AccountTabBar {

    tabBarAccountTab_AccounNumberSearchItem = PcfTextInput('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem');
    tabBarAccountTab_AccounNumberSearchItem_Button = PcfButton('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem_Button');
    tabBarAccountTab_Ext = Selector('#TabBar-AccountTab');
}