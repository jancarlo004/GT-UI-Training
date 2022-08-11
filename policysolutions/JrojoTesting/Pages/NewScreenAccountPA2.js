import { PcfComponent } from "@gtui/gt-ui-framework";
import { t } from "testcafe"; 


export class NewAccountScreenPA2{

    //new account
    newAccountNewAccountScreen = PcfComponent('#NewAccount-NewAccountScreen');

    async setTextFieldValue(fieldName, value){
        await t.typeText(
            this.newAccountNewAccountScreen.component.find('.gw-label').withText(fieldName).sibling('div').find('input'), value);
    }

}