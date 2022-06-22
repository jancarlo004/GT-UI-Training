'use strict'
import { AccountCreation } from "../../scenarios/AccountCreation";
import { t } from "testcafe"
import { onApp } from "../../../../pageregistry/onApp";
import { DetailViewPractice } from "../../scenarios/DetailViewPractice";


const { Given, When, Then } = require("@cucumber/cucumber");
const OnAppPC = new onApp("PC");
const accountCreation = new AccountCreation();
const detailViewPractice = new DetailViewPractice();

Given(/^I create account in PC$/, async function() {
    await OnAppPC.loginWithUser("bbaker", "gw");
    await detailViewPractice.detailViewPractice();
  });

