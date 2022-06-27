'use strict';
import { t } from "testcafe";
import { onApp } from "../../../../pageregistry/onApp.js";
import { InvoiceScenarios } from "../../scenarios/InvoiceScenarios";
import { PolicyScenarios } from "../../scenarios/PolicyScenarios";
import { AccountScenarios } from "../../scenarios/AccountScenarios";
import { AdminScenarios } from "../../scenarios/AdminScenarios";
import { ChargeScenarios } from "../../scenarios/ChargeScenarios";
import world from "../../utils/world.js";
const { Given, Then } = require('@cucumber/cucumber');
let onBCApp = new onApp("BC");

let invoiceScenarios = new InvoiceScenarios();
let accountScenarios = new AccountScenarios();
let adminScenarios = new AdminScenarios();
let policyScenarios = new PolicyScenarios();
let chargeScenarios = new ChargeScenarios();

Given(/^([^ ]* )(.*)invoice item(.*) in (.*) invoice$/, async function (t, stepArguments) {
    let numInvoiceItems = stepArguments[0].trim();
    let invoiceStatus = stepArguments[3];
    if(invoiceStatus == "the next planned")
        invoiceStatus = "Planned";
    else if(invoiceStatus == "a billed")
        invoiceStatus = "Billed";

    await onBCApp.navigateToApp();
    await onBCApp.loginWithDefaultUser();
    await accountScenarios.createNewAccountRandomNumber();
    await policyScenarios.createPolicyOnAccount(world.accountNumber);

    await invoiceScenarios.openInvoices();
    await adminScenarios.runInvoiceBatchProcesses();
    await invoiceScenarios.getNextInvoiceWithStatus(invoiceStatus, numInvoiceItems);
    if(world.rowNumber == -1 && invoiceStatus == "Billed") {
        await invoiceScenarios.getNextInvoiceWithStatus("Planned", numInvoiceItems);
        await adminScenarios.moveDate("Invoice Bill Date");
    }
});

Then(/the invoice item was pushed to the next planned invoice/, async function (t) {
    await chargeScenarios.openCharges();
    await invoiceScenarios.checkInvoiceItemPushed();
});


Given(/^the invoice item was (.*)$/, async function (t, stepArguments) {
    let status = stepArguments[0];
    if(status == "held") {
        await chargeScenarios.openCharges();
        await chargeScenarios.holdCharges();
        await invoiceScenarios.openInvoices();
    }
});

Given(/all the invoice items were held/, async function (t) {
    await chargeScenarios.openCharges();
    await chargeScenarios.holdAllCharges();
    await invoiceScenarios.openInvoices();
});

Then(/^the invoice is (.*)$/, async function (t, stepArguments) {
    let status = stepArguments[0];
    let response = await invoiceScenarios.getInvoiceStatus(world.rowNumber);
    await t.expect(response).eql(status);
});

Then(/an (.*) transaction was created for the invoice item with (.*) and (.*)/, async function (t, stepArguments) {
    let event = stepArguments[0]; 
    let credit = stepArguments[1];
    let debit = stepArguments[2];
    let response = await invoiceScenarios.checkTransaction(event);
    
    await t.expect(response.credit).contains(credit) && t.expect(response.debit).contains(debit);
});
