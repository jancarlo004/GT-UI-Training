import { WorkersCompensationScenario } from "../../scenarios/WorkersCompensationScenario";
import { onApp } from "../../../../pageregistry/onApp";

const {When, Then } = require("@cucumber/cucumber");
const workersCompensationScenario = new WorkersCompensationScenario();
const OnApp = new onApp("PC");

When (/^I create Workers Compensation in PC$/, async function() {
    await workersCompensationScenario.WorkersCompensationCreation();

});
Then (/^Verify if the workers compensation policy is binded in PC$/, async function(){
    await workersCompensationScenario.verifyWorkersCompensationIsBound();

});