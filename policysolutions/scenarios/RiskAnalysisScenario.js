import { PcfButton, PcfCheckBox, PcfComponent, PcfListView } from '@gtui/gt-ui-framework';
import { Selector, t } from 'testcafe';
import { PolicyTabBar } from '../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/tabBar/PolicyTabBar.js';
import { NewSubmissionScreen } from './ScenarioPages/SubmissionWizard/NewSubmissionScreen.js';

const policyTabBar = new PolicyTabBar();
const newsubmission = new NewSubmissionScreen();
export class RiskAnalysisScenario {
    constructor() {}
  
    async SearchForSubmission() {
        
        await t.click(policyTabBar.tabBarPolicyTab.component.find('div.gw-action--expand-button'));
        await policyTabBar.policyTabPolicyTab_SubmissionNumberSearchItem.setValue("0710678116");
        await policyTabBar.policyTabPolicyTab_SubmissionSearchButton.click();     
    }

    async ApproveRiskAnalysis() {        
        await newsubmission.quoteButton.click();
        await newsubmission.detailsButton.click();
        let ApproveComponent = newsubmission.RiskAnalysisTablecomp.component.find('div.gw-LinkWidget[id$=-UWIssueRowSet-Approve');
        let count = await ApproveComponent.count - 1;        
        for (let i=0; i<=count; i++) {                              
             await t.click(ApproveComponent);    
             await newsubmission.popupApproveBtn.click();                                                               
        }                      
    }

    async ApproveRiskAnalysisusingcheckbox() {        
        await newsubmission.quoteButton.click();
        await newsubmission.detailsButton.click();
        let count = await newsubmission.RiskAnalysisTable.rowCount() - 1;
        for (let i=0; i<=count; i++) {

            await newsubmission.RiskAnalysisTable.clickOnCell(i,0);

        }

        await newsubmission.ApproveButton.click();    

        await newsubmission.RiskAnalysisUpdateButton.click();

        await t.debug();    

    }
}
