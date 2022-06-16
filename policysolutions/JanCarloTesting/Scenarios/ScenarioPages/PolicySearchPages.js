import { PcfButton, PcfComponent, PcfListView, PcfTextInput } from "@gtui/gt-ui-framework";

export class PolicySearchPages{
    searchTab = PcfComponent("#TabBar-SearchTab");
    searchPolicy = PcfTextInput("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearchDV-PolicyNumberCriterion");
    searchButton = PcfButton("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search");
    policySearchListView = PcfListView("#PolicySearch-PolicySearchScreen-DatabasePolicySearchPanelSet-PolicySearch_ResultsLV");
}