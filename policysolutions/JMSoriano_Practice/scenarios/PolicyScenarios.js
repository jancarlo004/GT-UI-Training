import { PcfComponent } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';
import { PolicyScenarios_helper } from '../utils/helpers/PolicyScenarios_helper';
import world from '../utils/world';

const helper = new PolicyScenarios_helper();

export class PolicyScenarios {

    async searchMultiplePolicies(LOB){
        let ui_PolicyTabBar = (await helper.getScreenComponent("TabBar")).component.find('div.gw-TabWidget[id$=-SearchTab]').find('div.gw-action--expand-button');
        await t.click(ui_PolicyTabBar);
        await t.click(ui_PolicyTabBar.parent('div').find('div.gw-MenuItemWidget[id$=-Search_PolicySearch]'));

        await helper.searchPolicyBasedOnLOB(LOB);
    }
}