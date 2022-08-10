import { PcfButton } from "@gtui/gt-ui-framework";


export class CustomMethod{
    async selectDriver(element){
        let screenElement = PcfButton(element);    
        await screenElement.click();   
    }
}