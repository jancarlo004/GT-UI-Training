'use strict';
import { t } from "testcafe";
import { InvoiceScenarios } from "../../scenarios/InvoiceScenarios";
const { Then } = require('@cucumber/cucumber');

let invoiceScenarios = new InvoiceScenarios();

Then(/^a delinquency process was (.*)$/, async function (t, stepArguments) {
    let status = stepArguments[0];
    let response = await invoiceScenarios.checkDelinquencyStatus();
    if (status == "started") {
        await t.expect(response).contains("This account has one or more active delinquencies");
    }else if (status == "not started") {
        await t.expect(response).notContains("This account has one or more active delinquencies");
    }
});
