import { t } from "testcafe";
import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from '@gtui/gt-ui-framework';

export class Main_helper{
    
    async getDateToday(){ // Method usage: Gets the date today. Returns a value when used.
        var date = new Date(); // Instantiate the class Date to 'date' object
        var dateToday = ''; // Object to save the resulting date today
        var dd = date.getDate(); // Call getDate() method from class Date and save it to 'dd' object
        var mm = date.getMonth() + 1; // Call getMonth() method from class Date and save it to 'mm' object
        var yyyy = date.getFullYear(); // Call getFullYear() method from class Date and save it to 'yyyy' object

        // Conditional Statement: The default format of the dates above will be 'm/d/yyyy'. 
        // This is to add '0' if the date and month is < 10 since in xCenters, date format is 'mm/dd/yyyy'
        if(dd < 10){ // If date < 10 
            dd = '0' + dd; // Should add '0' in the date. (ex. '09') 
        }
        if(mm < 10){ // If month < 10
            mm = '0' + mm; // Should add '0' in the month (ex. '09') 
        }
        dateToday = mm + '/' + dd + '/' + yyyy; // mm/dd/yyyy format
        return dateToday; // returns the value
    }

    async RandomStringGenerator(length){ // Method usage: Returns a random generated string.
        var result = ''; // Object to save the generated string
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'; // characters to be used in the generation
        var charactersLength = characters.length; // counts the length of object 'character' and save it to obj charactersLength
        for ( var i = 0; i < length; i++ ) { // Used loop to add random characters and form it as string
          result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result; // returns the random generated string
    }

    // Method Usage: Selects an option in a dropdown. Can be used in every dropdown in a screen
    // Parameters: 
    //      dropdownName - the label of the dropdown
    //      option - either the value or nth option to be selected in the dropdown
    //      screenElement - the ID element of the screen
    async selectOptionDropdown(dropdownName, option, screenElement){
        // Finds the dropdown element in the screen using the 'dropdownName' and 'screenElement'
        const dropdownElement = (await this.getScreenComponent(screenElement)).component.find('.gw-label').withText(dropdownName).sibling('div').find('select');
        await t.click(dropdownElement); // Clicks the dropdown to show the options
        if(typeof option == 'string'){ // Identifies if 'option' is a string or a digit
            await t.click(dropdownElement.find('option').withAttribute('value',option));
        }else{
            await t.click(dropdownElement.find('option').nth(option))
        }
    }

    // Method Usage: Selects an option in a radiobutton. Can be used in every radio button in a screen
    // Parameters: 
    //      radioButtonName - the label of the radiobutton
    //      option - the value to be selected in the radiobutton
    //      screenElement - the ID element of the screen
    async selectRadioButton(radioButtonName, option, screenElement){
        const radioButtonElement = (await this.getScreenComponent(screenElement)).component.find('.gw-label').withText(radioButtonName).sibling('div');
        const selectedOption = radioButtonElement.find('.gw-label--inner').withText(option).parent('div').find('.gw-RangeRadioValueWidget--input');
        await t.click(selectedOption);
    }

    // Method Usage: Clicks a button in a list view based on the given value. Can be used in every list view in screen
    // Parameters:
    //      element = List View ID
    //      columnIndex = index of the column to search and verify
    //      value = value to be searched
    //      column_Button = index of the column with the button to click
    async selectListViewValue(element,columnIndex,value,column_Button){
        const screenElement = PcfListView('#'+element);
        var givenValue = ""; // Object to store the value to string
        var counter = -1; // Counter for the indexOf() method
        var cellValue = ""; // Object to store the text in a list view cell
        var rowIndex; // Counter for the rows of the list view
        givenValue = value;

        for(rowIndex = 0; counter == -1;){ // Loop to check every list view cell
            cellValue = await screenElement.getTextFromCell(rowIndex,columnIndex); // gets the text in a cell based on 'rownIndex' and 'columnIndex'
            counter = cellValue.indexOf(givenValue); // indexOf() returns the index of the value in the list view. (0,1,2 etc)
            if(counter == -1){ // if counter didnt update, will proceed to the next row
                rowIndex++
            }else{ // else clicks the button based on the 'rowIndex'
                await screenElement.clickOnCell(rowIndex,column_Button);
            }
        }
    }

    //Method Usage: Returns the element in a pcfcomponent format
    async getScreenComponent(element){
        const screenElement = PcfComponent("#"+element);
        return screenElement;
    }
}