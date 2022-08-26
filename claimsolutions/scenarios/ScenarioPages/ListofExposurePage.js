"use strict";
import { PcfButton, PcfComponent,PcfSelectInput,PcfListView,PcfCheckBox, PcfTextInput } from "@gtui/gt-ui-framework";
import world from "../../utils/world";
import { t,Selector } from "testcafe";

export class ListofExposurePage {
    sideBarExposure_Button = PcfButton("#Claim-MenuLinks-Claim_ClaimExposures");
    exposure_Listview = PcfListView("#ClaimExposures-ClaimExposuresScreen-ExposuresLV");  
    createReserve_Button = PcfButton("#ClaimExposures-ClaimExposuresScreen-ClaimExposures_CreateReserve"); 

    newReserve_Listview = PcfListView("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV");
    saveReserve_Button2 = PcfButton("#NewReserveSet-NewReserveSetScreen-Update");
   
     
    
           
    async ValidateExposures() {
       await this.sideBarExposure_Button.click();
       const rowcount = await this.exposure_Listview.rowCount() - 1;       
       if (rowcount > 0) {
           console.log("Exposure/s are created.");
           
           for (let i=0; i<=rowcount; i++) {                         
            const type = await this.exposure_Listview.getTextFromCellByColumnName(i,"Type");            
            const coverage = await this.exposure_Listview.getTextFromCellByColumnName(i,"Coverage");
            const claimant = await this.exposure_Listview.getTextFromCellByColumnName(i,"Claimant");
            const adjuster = await this.exposure_Listview.getTextFromCellByColumnName(i,"Adjuster");
            const status = await this.exposure_Listview.getTextFromCellByColumnName(i,"Status");
            const remaining_reserves = await this.exposure_Listview.getTextFromCellByColumnName(i,"Remaining Reserves");
            const futurepayments = await this.exposure_Listview.getTextFromCellByColumnName(i,"Future Payments");
            const paid = await this.exposure_Listview.getTextFromCellByColumnName(i,"Paid");             
            const worldtype = world.arrType[i];
            const worldcoverage = world.arrCoverage[i];
            const worldclaimant = world.arrClaimant[i];
            const worldadjuster = world.arrAdjuster[i];
            const worldstatus = world.arrStatus[i];
            const worldremainingreserve = world.arrRemaining_reserves[i];
            const worldfuturepayments = world.arrFuture_payments[i];
            const worldpaid = world.arrPaid[i];
            try {
                await t.expect(type).eql(worldtype);
                await t.expect(coverage).eql(worldcoverage);
                await t.expect(claimant).eql(worldclaimant);
                await t.expect(adjuster).eql(worldadjuster);
                await t.expect(status).eql(worldstatus);
                await t.expect(remaining_reserves).eql(worldremainingreserve);
                await t.expect(futurepayments).eql(worldfuturepayments);
                await t.expect(paid).eql(worldpaid);
                console.log("Exposure data row (" + i +") is valid");
            } 
            catch {
                console.log("Exposure data row (" + i +") is invalid");
            }                                              
           }
       }
       else {
           console.log("No exposure/s on the list.");
       }

    }

    async CreateReserveviaExposurePage() {   
        await this.sideBarExposure_Button.click();   
        const rowcount = await this.exposure_Listview.rowCount() - 1;     
                   
        
        if (rowcount > 0) {  
            await this.exposure_Listview.clickOnCell(0,0)
            await this.createReserve_Button.click();   
            const reservecount = await this.newReserve_Listview.rowCount() - 1;               
            const reserve_newAmount = PcfTextInput("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV-" +   + "-NewAmount");   
            const reserve_costType = PcfSelectInput("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV-" + reservecount + "-CostType");
            const reserve_costCategory = PcfSelectInput("#NewReserveSet-NewReserveSetScreen-ReservesSummaryDV-EditableReservesLV-" + reservecount + "-CostCategory");
            const saveReserve_Button = PcfButton("#NewReserveSet-NewReserveSetScreen-Update");
            await reserve_costType.selectOptionByLabel("Unspecified Cost Type");            
            await reserve_costCategory.selectOptionByLabel("Auto parts");
            await reserve_newAmount.setValue("1500");
            await saveReserve_Button.click(); 
                       
        }
    }


    async CreateReserveviaExposurePage2() {   
        await this.sideBarExposure_Button.click();   
        const rowcount = await this.exposure_Listview.rowCount() - 1;     
                   
        
        if (rowcount > 0) {  
            await this.exposure_Listview.clickOnCell(0,0)
            await this.createReserve_Button.click();   
            //reserve part
            let reservecount = await this.newReserve_Listview.rowCount() - 1;  
            let costType = await this.newReserve_Listview.getCell(reservecount,3);
            let costCategory = await this.newReserve_Listview.getCell(reservecount,4);
            let newAvailableReserve = await this.newReserve_Listview.getCell(reservecount,7);
            let costTypeDropdown = PcfSelectInput(costType);
            let costCategoryDropdown = PcfSelectInput(costCategory);
            let AvailableReserveText = PcfTextInput(newAvailableReserve);
            await costTypeDropdown.selectOptionByLabel("Claim Cost");
            await costCategoryDropdown.selectOptionByLabel("Labor");
            await AvailableReserveText.setValue("1100");            
            await this.saveReserve_Button2.click();         
                
        }
    }
}