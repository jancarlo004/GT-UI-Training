import { FNOLWizard } from "../../pages/claim/FNOLWizard";
import { NewClaimBasicInfoPage } from "./ScenarioPages/NewClaimBasicInfoPage";
import { NewClaimSavedScreen } from "./ScenarioPages/NewClaimSavedScreen";
import { CCTabBarHelper } from "../utils/CCTabBarHelper";
import { CCUtil } from "../utils/CCUtil";
import world from "../utils/world";

const fNOLWizard = new FNOLWizard();
const newClaimSavedScreen = new NewClaimSavedScreen();
const newClaimBasicInfoPage = new NewClaimBasicInfoPage();
const ccTabBarHelper = new CCTabBarHelper();
const ccUtil = new CCUtil();
let claimDataMap = new Map();

export class FNOLScenario {
    async createPAClaimUsingFNOLFullWizardForCCScenario() {
        await ccTabBarHelper.goToFNOLWizard();
        console.log("On FNOL Wizard Page 1 - Find Policy");
        await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyType.selectOptionByLabel('Personal Auto');
        await fNOLWizard.fNOLWizardFindPolicyPanelSetSearch.click();
        claimDataMap.set('Insured', await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyResultLV.getTextFromCell(0,2));
        await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyResultLV.clickOnCell(0,0);
        await fNOLWizard.fNOLWizardFindPolicyPanelSetClaim_LossDate.setValue(await ccUtil.getDateForToday());
        await fNOLWizard.fNOLWizardNext.click();
        
        console.log("On FNOL Wizard Page 2 - Basic Info");
        await newClaimBasicInfoPage.nameDropdown.selectOptionByLabel(claimDataMap.get('Insured'));
        await fNOLWizard.fNOLWizardNext.click();
        
        console.log("On FNOL Wizard Page 3 - Loss Details");
        await fNOLWizard.lossDetailsAddressDVClaim_LossCause.selectOptionByLabel('Collision with motor vehicle');
        await fNOLWizard.fNOLWizardFullWizardStepSetFNOLWizard_NewLossDetailsScreenLossDetailsAddressDVAddressDetailInputSetRefCCAddressInputSetglobalAddressContainerAddress_Picker
            .selectFirstOptionWithValue();
        await fNOLWizard.categorizationDVNotification_Fault.selectOptionByLabel('No fault');
        await fNOLWizard.fNOLWizardNext.click();
        
        console.log("On FNOL Wizard Page 4 - Services")
        await fNOLWizard.fNOLWizardNext.click();
        
        console.log("On FNOL Wizard Page 5 - Save & Assign Claim")
        await fNOLWizard.fNOLWizardFinish.click();
        world.claimNumber = await newClaimSavedScreen.getClaimNumber();
        console.log("Created new claim with number: " + world.claimNumber )

        claimDataMap.set('ClaimNumber', await newClaimSavedScreen.checkClaimSuccessfullyCreatedConfirmation());
        claimDataMap.set('AssignedUser', await newClaimSavedScreen.getAssignedUserOfNewCreatedClaim());
        claimDataMap.set('AssignedGroup', await newClaimSavedScreen.getAssignedGroupOfNewCreatedClaim());
        return claimDataMap;
    }

    async getPolicyNumber() {
        await ccTabBarHelper.goToFNOLWizard();
        await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyType.selectOptionByLabel('Personal Auto');
        await fNOLWizard.fNOLWizardFindPolicyPanelSetSearch.click();
        return await fNOLWizard.fNOLWizardFindPolicyPanelSetPolicyResultLV.getTextFromCell(0,1);
    }

}
