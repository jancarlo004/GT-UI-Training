import { PcfButton, PcfComponent, PcfListView, PcfTextInput } from "@gtui/gt-ui-framework";



export class SearchPolicyScreen{

    viewPolicyLink = PcfComponent("#JobComplete-JobCompleteScreen-JobCompleteDV-ViewPolicy");
    newPolicyNumber = PcfComponent("#JobComplete-JobWizardInfoBar-PolicyNumber");
    searchTabBar = PcfButton("#TabBar-SearchTab");
    searchPolicyNumber = PcfTextInput("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearchDV-PolicyNumberCriterion");
    searchButton = PcfButton("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search");
    policySearchResult = PcfListView("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearch_ResultsLV");


}