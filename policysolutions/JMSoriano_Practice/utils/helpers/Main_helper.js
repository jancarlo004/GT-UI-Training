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

    async setTextField(element,value){
        let screenElement = PcfTextInput(element);
        await screenElement.setValue(value);
    }

    async selectDropdownValue(element,value){
        let screenElement = PcfSelectInput('#'+element);
        await screenElement.selectOptionByValue(value);
    }

    async selectListViewValue(element,columnIndex,value,column_Button){
        let screenElement = PcfListView('#'+element);
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
}