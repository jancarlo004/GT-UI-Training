import { WorkersCompensationPages } from "../pages/WorkersCompensationPages";
import { AutoPolicyPages } from "../pages/account/AutoPolicyPages";
import { Kevpages } from "../pages/account/Kevpages";
import { t } from "testcafe";
import { PcfButton, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { PcfRadioButton } from "../Component/PcfRadioButton";

const workersCompensationPages = new WorkersCompensationPages();
const autoPolicyPages = new AutoPolicyPages();
const kevpages = new Kevpages();

export class WorkersCompensationScenario{

async WorkersCompensationCreation(){
    await autoPolicyPages.newSubmission.click();
    await autoPolicyPages.newSubmissionButton.click();
    await kevpages.selectLOB("Workers' Compensation");
    await autoPolicyPages.nextButton.click();
    await workersCompensationPages.ssn.setValue("232-32-3232");
    await workersCompensationPages.industryCode.setValue("0740");
    await t.pressKey('tab');
    await kevpages.orgType.selectOptionByLabel("Common ownership");
    await autoPolicyPages.nextButton.click();
    await autoPolicyPages.nextButton.click();
    await this.addClassForEmp();
    await autoPolicyPages.nextButton.click();
    await t.wait(2000);
    await this.WCSupplementalNoRadioButton();
}

async verifyWorkersCompensationIsBound(){

}















// Add class for employee method
async addClassForEmp(){
    for(let i=0; i <3; i++){
        await workersCompensationPages.addClassButton.click();
        let addClassIndex = await workersCompensationPages.coverageEmpLV.rowCount() -1;
        if(i == 0){
            let governingLawIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Governing Law");
            let governingLawDD = PcfSelectInput(governingLawIndex);
            await governingLawDD.selectOptionByLabel("State Act"); 

            let locationIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Location");
            let locationDD = PcfSelectInput(locationIndex);
            await locationDD.selectFirstOptionWithValue();

            let classCodeIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Class Code");
            let classCodeTextInput = PcfTextInput(classCodeIndex);
            await classCodeTextInput.setValue("0005");

            let basisIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Basis");
            let basisTextInput = PcfTextInput(basisIndex);
            await basisTextInput.setValue("1000");
            
        }else if(i == 1){
            let governingLawIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Governing Law");
            let governingLawDD = PcfSelectInput(governingLawIndex);
            await governingLawDD.selectOptionByLabel("Voluntary Comp");

            let locationIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Location");
            let locationDD = PcfSelectInput(locationIndex);
            await locationDD.selectFirstOptionWithValue();

            let classCodeIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Class Code");
            let classCodeTextInput = PcfTextInput(classCodeIndex);
            await classCodeTextInput.setValue("0016");

            let basisIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Basis");
            let basisTextInput = PcfTextInput(basisIndex);
            await basisTextInput.setValue("1000");

        }else{
            let governingLawIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Governing Law");
            let governingLawDD = PcfSelectInput(governingLawIndex);
            await governingLawDD.selectOptionByLabel("Limited Maritime");

            let locationIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Location");
            let locationDD = PcfSelectInput(locationIndex);
            await locationDD.selectFirstOptionWithValue();

            let classCodeIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Class Code");
            let classCodeTextInput = PcfTextInput(classCodeIndex);
            await classCodeTextInput.setValue("0005");

            let basisIndex = await workersCompensationPages.coverageEmpLV.getCellByColumnName(addClassIndex, "Basis");
            let basisTextInput = PcfTextInput(basisIndex);
            await basisTextInput.setValue("1000");
        }
    }
}

async WCSupplementalNoRadioButton(){
    console.log(await workersCompensationPages.supplementalLV.rowCount());
    for(let i=0; i< await workersCompensationPages.supplementalLV.rowCount(); i++){
        // let NoRadioButton = await workersCompensationPages.supplementalLV.(i);
        // if(await NoRadioButton){
            
        // }

        
    }
  }
}