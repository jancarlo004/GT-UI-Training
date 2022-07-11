import { PcfButton, PcfComponent } from '@gtui/gt-ui-framework';

export class AccountTabBar {
	accountTabAccountTab_AccountNumberSearchItem = PcfComponent('#TabBar-AccountTab-AccountTab_AccountNumberSearchItem');
	accountTabAccountTab_NewAccount = PcfComponent('#TabBar-AccountTab-AccountTab_NewAccount');
	tabBarAccountTab = PcfComponent('#TabBar-AccountTab');
	tabBarWidgetmoreoptions = PcfComponent('#TabBarWidget--more-options');

	createAccount = PcfComponent("#CreateAccount-CreateAccountScreen-CreateAccountDV");
	searchAccount = PcfComponent("#NewAccount-NewAccountScreen");
	updateButton = PcfButton("#CreateAccount-CreateAccountScreen-Update");
}
