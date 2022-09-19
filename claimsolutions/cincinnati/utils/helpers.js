import { PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class Helper{
    
    newClaimDuplicatesScreenNewClaimDuplicatesWorksheet_CloseButton = PcfComponent('#NewClaimDuplicatesWorksheet-NewClaimDuplicatesScreen-NewClaimDuplicatesWorksheet_CloseButton');

    async radioButtonSelect(selector, choice){ 
        await t.click(selector.component.find('.gw-RangeRadioValueWidget--label').withText(choice));
    }

    async dateAndTime(selector, date, time){
        selector = PcfComponent(selector);
        await t.typeText(selector.component.find('.gw-vw--value').find('input.gw-min-visible.gw-DateValueWidget--dateInput'), date);
        await t.typeText(selector.component.find('.gw-vw--value').find('input.gw-DateValueWidget--timeInput.gw-is12Hour'), time);
    }

    async closeDuplicateClaims(){
        if(await this.newClaimDuplicatesScreenNewClaimDuplicatesWorksheet_CloseButton.component.exists){
            await this.newClaimDuplicatesScreenNewClaimDuplicatesWorksheet_CloseButton.click();
        }
        else{
        }
    }
}