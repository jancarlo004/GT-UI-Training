import { PcfButton, PcfComponent, PcfListView, PcfSelectInput, PcfTextInput } from "@gtui/gt-ui-framework";
import { t } from "testcafe";

export class AddPermissionPages{
adminTab = PcfComponent('#TabBar-AdminTab');
usersAndSecurity = PcfComponent('#TabBar-AdminTab-Admin_UsersAndSecurity');
users = PcfComponent('#TabBar-AdminTab-Admin_UsersAndSecurity-UsersAndSecurity_AdminUserSearchPage');
 async clickAdminUsers(){
    await t.hover(this.usersAndSecurity.component).click(this.users.component);
 }
usersLastName = PcfTextInput('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-ContactInputSet-GlobalPersonNameInputSet-LastName');
usersSearch = PcfButton('#AdminUserSearchPage-UserSearchScreen-UserSearchDV-SearchAndResetInputSet-SearchLinksInputSet-Search');
usersLV = PcfListView('#AdminUserSearchPage-UserSearchScreen-UserSearchResultsLV');
usersRoles = PcfButton('#UserDetailPage-UserDetailScreen-UserDetail_RolesCardTab');
usersEdit = PcfButton('#UserDetailPage-UserDetailScreen-UserDetailToolbarButtonSet-Edit');
usersUpdate = PcfButton('#UserDetailPage-UserDetailScreen-UserDetailToolbarButtonSet-Update');
userRolesLV = PcfListView('#UserDetailPage-UserDetailScreen-UserRolesLV');
usersAddRoleButton = PcfButton('#UserDetailPage-UserDetailScreen-UserRolesLV_tb-Add');
selectRole = PcfSelectInput('#UserDetailPage-UserDetailScreen-UserRolesLV-1-RoleName');
settingsButton = PcfButton('#gw-TabBarWidget--settings');
logoutButton = PcfButton('#TabBar-LogoutTabBarLink');
}