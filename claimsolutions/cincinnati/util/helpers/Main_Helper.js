import { t } from "testcafe";
import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class Main_helper{
    
    async getDateToday(){
        var date = new Date();
        var dateToday = '';
        var dd = date.getDate();
        var mm = date.getMonth() + 1;
        var yyyy = date.getFullYear();
        if(dd < 10){
            dd = '0' + dd;
        }
        if(mm < 10){
            mm = '0' + mm;
        }
        dateToday = mm + '/' + dd + '/' + yyyy;
        return dateToday;
    }

    async RandomStringGenerator(length){
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
        var charactersLength = characters.length;
        for ( var i = 0; i < length; i++ ) {
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    async selectOptionDropdown(dropdownName, option, screenElement){
        const dropdownElement = (await this.getScreenComponent(screenElement)).component.find('.gw-label').withText(dropdownName).sibling('div').find('select');
        await t.click(dropdownElement);
        if(typeof option == 'string'){
            await t.click(dropdownElement.find('option').withAttribute('value',option));
        }else{
            await t.click(dropdownElement.find('option').nth(option))
        }
    }

    async selectRadioButton(radioButtonName, option, screenElement){
        const radioButtonElement = (await this.getScreenComponent(screenElement)).component.find('.gw-label').withText(radioButtonName).sibling('div');
        const selectedOption = radioButtonElement.find('.gw-label--inner').withText(option).parent('div').find('.gw-RangeRadioValueWidget--input');
        await t.click(selectedOption);
    }

    async selectListViewValue(element,columnIndex,value,column_Button){
        const screenElement = PcfListView('#'+element);
        var givenValue = "";
        var counter = -1;
        var cellValue = "";
        var rowIndex;
        givenValue = value;

        for(rowIndex = 0; counter == -1;){
            cellValue = await screenElement.getTextFromCell(rowIndex,columnIndex);
            counter = cellValue.indexOf(givenValue);
            if(counter == -1){
                rowIndex++
            }else{
                await screenElement.clickOnCell(rowIndex,column_Button);
            }
        }
    }

    async getScreenComponent(element){
        const screenElement = PcfComponent("#"+element);
        return screenElement;
    }
}