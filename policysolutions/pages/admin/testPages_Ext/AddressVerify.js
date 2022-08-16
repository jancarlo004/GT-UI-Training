import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class AddressVerify {
	addressVerifyAddressVerify_UpLink = PcfButton('#AddressVerify-AddressVerify_UpLink');
	requestPolicyPullDVAddressLine1 = PcfTextInput('#AddressVerify-RequestPolicyPullDV-AddressLine1');
	requestPolicyPullDVAddressLine2 = PcfTextInput('#AddressVerify-RequestPolicyPullDV-AddressLine2');
	requestPolicyPullDVCity = PcfTextInput('#AddressVerify-RequestPolicyPullDV-City');
	requestPolicyPullDVCountry = PcfSelectInput('#AddressVerify-RequestPolicyPullDV-Country');
	requestPolicyPullDVPostalCode = PcfTextInput('#AddressVerify-RequestPolicyPullDV-PostalCode');
	requestPolicyPullDVRequestGeoLocation = PcfComponent('#AddressVerify-RequestPolicyPullDV-RequestGeoLocation');
	requestPolicyPullDVRequestXml = PcfTextInput('#AddressVerify-RequestPolicyPullDV-RequestXml');
	requestPolicyPullDVResponseXml = PcfTextInput('#AddressVerify-RequestPolicyPullDV-ResponseXml');
	requestPolicyPullDVRetrieveAddress = PcfButton('#AddressVerify-RequestPolicyPullDV-RetrieveAddress');
	requestPolicyPullDVloadSampleCANAddress = PcfButton('#AddressVerify-RequestPolicyPullDV-loadSampleCANAddress');
	requestPolicyPullDVloadSampleUSAddress = PcfButton('#AddressVerify-RequestPolicyPullDV-loadSampleUSAddress');
	requestPolicyPullDVresetFields = PcfButton('#AddressVerify-RequestPolicyPullDV-resetFields');
	requestPolicyPullDVstate = PcfSelectInput('#AddressVerify-RequestPolicyPullDV-state');
	addressVerify_Paging = PcfButton('#AddressVerify-_Paging');
	addressVerify__crumb__ = PcfComponent('#AddressVerify-__crumb__');
	addressVerify_msgs = PcfButton('#AddressVerify-_msgs');
}
