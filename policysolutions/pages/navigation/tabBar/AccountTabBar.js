import { PcfComponent } from '@gtui/gt-ui-framework';
import { t } from 'testcafe';

export class AccountTabBar {
	accountTabAccountTab_AccountNumberSearchItem = PcfComponent('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem');
	accountTabAccountTab_NewAccount = PcfComponent('#TabBar-AccountTab-AccountTab_NewAccount');
	tabBarAccountTab = PcfComponent('#TabBar-AccountTab');
	moreoptions = PcfComponent('#TabBarWidget--more-options');
}
