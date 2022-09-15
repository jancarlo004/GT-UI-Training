import { t } from "testcafe";
import { AddPermissionPages } from "../pages/account/AddPermissionPages";

const addPermissionpages = new AddPermissionPages();

export class AddPermissionClaim{
    async addPermissionToTheUser(Permission, Users){
        await addPermissionpages.adminTab.click();
        await t.click(addPermissionpages.adminTab.component.find('div.gw-action--expand-button'));
        await addPermissionpages.clickAdminUsers();
        await addPermissionpages.usersLastName.setValue(Users);
        await addPermissionpages.usersSearch.click();
        await addPermissionpages.usersLV.clickOnCellByColumnName(0, "Name");
        await addPermissionpages.usersRoles.click();
        await addPermissionpages.usersEdit.click();
        await this.addUserPermission(Permission);
    }

    async addUserPermission(permission){
     for(let i=0; i< await addPermissionpages.userRolesLV.rowCount(); i++){
        let descriptionLabels = await addPermissionpages.userRolesLV.getTextFromCellByColumnName(i, "Description");
        console.log(descriptionLabels);

        if(await descriptionLabels == permission){
            await addPermissionpages.usersUpdate.click();
            await t.wait(2000);
        }else{
            await addPermissionpages.usersAddRoleButton.click();
            await addPermissionpages.selectRole.selectOptionByLabel("Underwriting Supervisor");
           }
           
        }
    }

    async createNewPersonalAutoSubmission(){
        await addPermissionpages.settingsButton.click();
        await addPermissionpages.logoutButton.click();
    }

    // async addNewNote(){

    // }

    // async deleteNote(){

    // }

}