import { t } from "testcafe";
import { NewAccount } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/account/NewAccount";
import { AccountTabBar } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/navigation/tabBar/AccountTabBar";
import { OrganizationSearchPopup } from "../../../ignite/previousGeneratedOutput/classFiles/policysolutions/pages/popup/Organization/OrganizationSearchPopup";
import World from "../utils/World";
import { CreateAccountWizardPA } from "../Pages/CreateAccountWizardPA";
import { PersonalAutoPA2 } from "../Pages/CreateAutoPA2";
import { NewAccountScreenPA2 } from "../Pages/NewScreenAccountPA2";

const accountTabBar = new AccountTabBar();
const newAccount = new NewAccount();
const organizationSearchPopup = new OrganizationSearchPopup();''
const newAccountScreenPA2= new NewAccountScreenPA2();
const createAccountWizardPA= new CreateAccountWizardPA();
const personalAutoPA2= new PersonalAutoPA2();

export class CreateAccountPA2{
    async createPersonAccount(){
        await t.click(accountTabBar.tabBarAccountTab.component.find('div.gw-action--expand-button'));
        await accountTabBar.accountTabAccountTab_NewAccount.click();
        await newAccountScreenPA2.setTextFieldValue('First name', await personalAutoPA2.randomvalue_textfieldGenerator(8));
        await newAccountScreenPA2.setTextFieldValue('Last name', await personalAutoPA2.randomvalue_textfieldGenerator(8));
        // await newAccountScreenPA2.setTextFieldValue('First name', World.contact.firstName);
        // await newAccountScreenPA2.setTextFieldValue('Last name', World.contact.lastName);
        await t.click(newAccountScreenPA2.newAccountNewAccountScreen.component.find('div.gw-shortcutKey').withText('S'));
        //Is the account existing??
        if(await createAccountWizardPA.AccountSearch.rowCount()!=0){
            await createAccountWizardPA.AccountSearch.clickOnCell(0,1);
        }

        else{
           
            await t.click(newAccountScreenPA2.newAccountNewAccountScreen.component.find('.gw-label').withText('Create New Account'));
            await newAccount.newAccountButtonNewAccount_Person.click();
            await createAccountWizardPA.InputAddressLine1.setValue(World.address_generator.Address_Line1);
            await createAccountWizardPA.InputAddressCity.setValue(World.address_generator.Address_city);
            await createAccountWizardPA.InputAddressCounty.setValue(World.address_generator.Address_county);
            await createAccountWizardPA.InputAddressState.click();
            await createAccountWizardPA.InputAddressState.selectOptionByValue(World.address_generator.Address_state);
            await createAccountWizardPA.InputAddressZipcode.setValue(World.address_generator.Address_zipcode);
            await createAccountWizardPA.InputAddressType.click();
            await createAccountWizardPA.InputAddressType.selectOptionByValue(World.address_generator.Address_type);
            await createAccountWizardPA.InputOrganization.click();
            await organizationSearchPopup.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVGlobalContactNameInputSetName.setValue(World.company_generator.company_name);
            await organizationSearchPopup.organizationSearchPopupOrganizationSearchPopupScreenOrganizationSearchDVSearchAndResetInputSetSearchLinksInputSetSearch.click();
            await organizationSearchPopup.organizationSearchPopupScreenOrganizationSearchResultsLV.clickOnCell(0,0);
            await createAccountWizardPA.InputProducerCode.click();
            await t.pressKey('tab');
            await createAccountWizardPA.InputProducerCode.selectOptionByLabel(World.company_generator.company_producercode);
            await createAccountWizardPA.ButtonUpdate.click();
            await t.wait(5000);

        }
    
    }
}