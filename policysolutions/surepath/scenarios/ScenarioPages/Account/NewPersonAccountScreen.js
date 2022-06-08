'use strict';
import {Selector, t} from 'testcafe';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';


export class NewPersonAccountScreen {
    constructor() {
        this.addressLine1 = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-AddressLine1");
        this.city = PcfTextInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressInputSet-globalAddressContainer-GlobalAddressInputSet-City");
        this.addressType = PcfSelectInput("#CreateAccount-CreateAccountScreen-CreateAccountDV-AddressType");
        this.producerCode = Selector("#CreateAccount-CreateAccountScreen-CreateAccountDV-ProducerSelectionInputSet-ProducerCode");
        this.updateButton = PcfButton("#CreateAccount-CreateAccountScreen-Update");
    }

    async selectProducerCode(valueToSelect) {
        await t.click(this.producerCode);
		await t.click(this.producerCode.find('option').withText(valueToSelect));
    }

}