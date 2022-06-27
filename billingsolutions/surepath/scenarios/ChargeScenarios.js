import { AccountDetailCharges } from "../../pages/accountGroup/AccountDetailCharges"
import { AccountDetailChargesCustom } from "../pages/accountGroup/AccountDetailCharges"
import { AccountGroupMenuLinks } from "../../pages/navigation/menuLinks/AccountGroupMenuLinks"
import { ChargeHoldsPopup } from "../../pages/popup/Charge/ChargeHoldsPopup"
import { ChargeHoldsPopupCustom } from "../pages/popup/Charge/ChargeHoldsPopup"
import world from "../utils/world"

const accountDetailCharges = new AccountDetailCharges();
const accountDetailChargesCustom = new AccountDetailChargesCustom();
const accountGroupMenuLinks = new AccountGroupMenuLinks();
const chargeHoldsPopup = new ChargeHoldsPopup();
const chargeHoldsPopupCustom = new ChargeHoldsPopupCustom();

export class ChargeScenarios {

    async openCharges() {
        await accountGroupMenuLinks.menuLinksAccountGroup_AccountDetailCharges.click();
    }

    async holdCharges() {
        await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.clickOnCell(0,0);
        world.nextPlannedBillDate = await accountDetailCharges.accountDetailChargesListDetailPanelChargesLV.getTextFromCell(1, 3);
        await accountDetailCharges.chargesLV_tbEditHolds.click();
        await chargeHoldsPopupCustom.chargeHoldsPopupChargeHoldsScreenChargesLV0ChargeHoldStatus.selectOptionByLabel("Held");
        await chargeHoldsPopup.chargeHoldsScreenUpdate.click();
    }

    async holdAllCharges() {
        await accountDetailChargesCustom.accountDetailChargesAccountDetailChargesScreenAccountDetailChargesListDetailPanelChargesLVCheckbox.click();
        await accountDetailCharges.chargesLV_tbEditHolds.click();
        await chargeHoldsPopupCustom.chargeHoldsPopupChargeHoldsScreenChargesLV0ChargeHoldStatus.selectOptionByLabel("Held");
        await chargeHoldsPopupCustom.chargeHoldsPopupChargeHoldsScreenChargesLV1ChargeHoldStatus.selectOptionByLabel("Held");
        await chargeHoldsPopup.chargeHoldsScreenUpdate.click();
    }

}
