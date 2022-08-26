import { FNOLWizard } from "../pages/claim/FNOLWizard";
import { NewClaimBasicInfoPage } from "../scenarios/ScenarioPages/NewClaimBasicInfoPage";
import { NewClaimSavedScreen } from "../scenarios/ScenarioPages/NewClaimSavedScreen";
import { CCTabBarHelper } from "../utils/CCTabBarHelper";
import { CCUtil } from "../utils/CCUtil";
import world from "../utils/world";
import { ClaimTabBar } from "./ScenarioPages/ClaimTabBar";
import {ActionsMenu} from "./ScenarioPages/ActionsMenu";
import {ListofExposurePage} from "./ScenarioPages/ListofExposurePage";

const fNOLWizard = new FNOLWizard();
const newClaimSavedScreen = new NewClaimSavedScreen();
const newClaimBasicInfoPage = new NewClaimBasicInfoPage();
const ccTabBarHelper = new CCTabBarHelper();
const ccUtil = new CCUtil();
const claimTabBar = new ClaimTabBar();
const actionsMenu = new ActionsMenu();
const listofExposure = new ListofExposurePage();
let claimDataMap = new Map();

export class ExposureScenario {
    async CreateNewExposure() {
        await actionsMenu.CreateNewExposure();
    }   

    async ValidateExposure() {
        await listofExposure.ValidateExposures();                
    } 

    async CreateReserve() {
        await listofExposure.CreateReserveviaExposurePage2();
    }
}