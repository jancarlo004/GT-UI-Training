
import world from "./world";

export class PersonalAutoCustomMethod{

    async generateRandomLicenseNumber(){

        let generatedLicenseNumber = '';
        let characterElements = '0123456789';
        let characterElementsLength = characterElements.length;

        for (let i = 0; i < 9; i++) {
            
            generatedLicenseNumber += characterElements.charAt(Math.floor( Math.random() * characterElementsLength ));

        }

        world.InsuranceInfo.PolicyInfo.PersonalAuto.licenseNumber = generatedLicenseNumber;

        return generatedLicenseNumber;
    }

    async generateVINNumber(){

        let generatedVINNumber = '';
        let characterElements = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ';
        let characterElementsLength = characterElements.length;

        for (let i = 0; i < 17; i++) {
            
            generatedVINNumber += characterElements.charAt(Math.floor( Math.random() * characterElementsLength ));

        }

        world.InsuranceInfo.PolicyInfo.PersonalAuto.vinNumber = generatedVINNumber;

        return generatedVINNumber;

    }

}