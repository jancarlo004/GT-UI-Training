'use strict';
import { t } from "testcafe";
import { DistributionScenarios } from "../../scenarios/DistributionScenarios";
import { PaymentScenarios } from "../../scenarios/PaymentScenarios";
import world from "../../utils/world.js";
const { Given, Then } = require('@cucumber/cucumber');

let distributionScenarios = new DistributionScenarios();
let paymentScenarios = new PaymentScenarios();

Given(/a (.*) payment instrument on the account/, async function (t, stepArguments) {
    let paymentType = stepArguments[0];
    if(["ACH", "EFT", "Credit Card"].includes(paymentType))
        await paymentScenarios.addNonResponsiveEFT_ACH();
    else if(paymentType == "responsive")
        await paymentScenarios.addResponsive();
});

Given(/^an undistributed payment on the account$/, async function () {
    world.paymentAmount = 100
    world.amtDistributed = "100"
    await distributionScenarios.makePaymentDistribution(world.amtDistributed);
});

Given(/^the amount distributed to the invoice item was (.*)$/, async function (t, stepArguments) {
    let amount = stepArguments[0];
    await distributionScenarios.makePaymentDistribution(amount);
});

Then(/^a payment request is (.*)$/, async function (t, stepArguments) {
    let description = stepArguments[0];
    let paymentRequestStatus = await paymentScenarios.getPaymentRequestStatus();
    if(description == "raised") {
        await t.expect(paymentRequestStatus).eql("Created");
        paymentRequestStatus = await paymentScenarios.validatePaymentRequestStatus();
        await t.expect(paymentRequestStatus).eql("Requested");
    }
    else if(description == "not raised") {
        await t.expect(paymentRequestStatus).eql("");
    }
});

Then(/^the payment is distributed to the invoice$/, async function () {
    let response = await distributionScenarios.getUnappliedAmount()
    await t.expect(response).notEql(world.paymentAmount) 
});
