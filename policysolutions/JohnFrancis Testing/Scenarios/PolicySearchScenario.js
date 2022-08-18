import { CustomMethod } from "../util/helpers";


const helpers = new CustomMethod();

export class PolicySearch{

    async searchPolicy(stepArguments){
        let LOB = stepArguments[0];
        switch(LOB) {
            case "Personal Auto":
                await this.pASearchpolicy();
              break;
            case "Property":
                await this.propertySearchpolicy();
              break;
            case "Inland Marine":
                await this.inlandMarineSearchpolicy();
              break;
            default:
          }
    }

    async pASearchpolicy(){
        await helpers.clickSearchTab("Policies");
    }

    async propertySearchpolicy(){
        await helpers.clickSearchTab("Policies");
    }

    async inlandMarineSearchpolicy(){
        await helpers.clickSearchTab("Policies");
    }
}