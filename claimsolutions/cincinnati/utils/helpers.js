import { t } from "testcafe";


export class Helper{

    async radioButtonSelect(element, choice){ 
        await t.click(element.component.find('div.gw-RangeRadioValueWidget--input').find(choice));
    }
}