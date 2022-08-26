import { CCTabBarHelper } from "../utils/CCTabBarHelper";
import { CCUtil } from "../utils/CCUtil";
import { ClaimTabBar } from "./ScenarioPages/ClaimTabBar";
import { ClaimMenuActions } from "../pages/navigation/menuActions/ClaimMenuActions";
import { NewServiceRequest } from "../pages/other/NewServiceRequest";
import { NewContactPopup } from "../pages/popup/New/NewContactPopup";
import { ActionsMenu } from "../../claimsolutions/scenarios/ScenarioPages/ActionsMenu";
import { SelectServicesPopup } from "../../claimsolutions/pages/popup/Select/SelectServicesPopup"
import { t,Selector } from "testcafe";
import { PcfComponent, PcfListView } from "@gtui/gt-ui-framework";
import world from "../utils/world";


const ccTabBarHelper = new CCTabBarHelper();
const ccUtil = new CCUtil();
const claimTabbar = new ClaimTabBar();
const actionMenu = new ActionsMenu();
const claimMenuActions = new ClaimMenuActions();
const newServiceRequest = new NewServiceRequest();
const newcontactpopup = new NewContactPopup();
const selectservicesespopup = new SelectServicesPopup();

export class ServiceScenario {

    servicesToAdd_Listview = PcfComponent("#SelectServicesPopup-SpecialistServiceTreeLV");    

    async CreateService() {
        await actionMenu.sideBarActionsMenu_Button.click();
        await claimMenuActions.claimMenuActions_NewOtherClaimMenuActions_NewServiceRequest.click();  
        //Select Exposure      
        await newServiceRequest.newServiceRequestNewServiceRequestScreenNewServiceRequestDVRelatedTo.selectOptionByLabel("(1) 3rd Party Vehicle - Ray Newton");     
        //Add Services   
        await newServiceRequest.newServiceRequestNewServiceRequestScreenNewServiceRequestDVInstructionServicesLV_tbAddMultipleServices.click();
        await this.AddServices();
        //Select Request Type
        await newServiceRequest.newServiceRequestNewServiceRequestScreenNewServiceRequestDVKind.selectOptionByLabel("Perform Service");            
        await newServiceRequest.Vendor.click();
        //Add a new vendor
        await t.hover(newServiceRequest.newVendor.component);
        await t.hover(newServiceRequest.AutobodyRepairShop.component);    
        //can put condition here for different vendor organization / person   
        await newServiceRequest.AutobodyRepairShop.click();      
        await this.AddVendorOrganization();
        //Select Service Address
        await newServiceRequest.newServiceRequestNewServiceRequestScreenNewServiceRequestDVNewServiceRequestInstructionInputSetServiceAddressPicker.selectOptionByLabel("1253 Paloma Ave, Floor 0000, Developer Unit Habitation Cube #0000, Arcadia, CA 91007");
        //Submit the new service
        await newServiceRequest.newServiceRequestSubmitButton.click();
    }

    async AddVendorOrganization() {
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDVOrganizationNameGlobalContactNameInputSetName.setValue("Clifford");
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDVPrimaryAddressInputSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetAddressLine1.setValue("9308 W Ironwood Dr");
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDVPrimaryAddressInputSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetCity.setValue("Peoria");
        await t.pressKey('tab');
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDVPrimaryAddressInputSetCCAddressInputSetglobalAddressContainerglobalAddressGlobalAddressInputSetState.selectOptionByLabel("Arizona");        
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDVPrimaryAddressInputSetCCAddressInputSetglobalAddressContainerAddress_AddressType.selectOptionByLabel("Business");
        await newcontactpopup.newContactPopupContactDetailScreenContactBasicsDV_tbContactDetailToolbarButtonSetCustomUpdateButton.click();        
    }

    async AddServices() {        
        const servicesCount = world.arrServicesTobeSelected.length - 1;        
        for (let i=0; i<=servicesCount; i++) {            
            let servicesCheckbox = this.servicesToAdd_Listview.component.find('td[id$=-ServiceLeaf_Cell]').withExactText(world.arrServicesTobeSelected[i]).find('div.gw-IteratorEntryCheckBoxWidget[id$=-_Checkbox]');
            await t.click(servicesCheckbox);
        }    

        await selectservicesespopup.selectServicesPopupUpdateServiceRequestServices.click();
    }
}