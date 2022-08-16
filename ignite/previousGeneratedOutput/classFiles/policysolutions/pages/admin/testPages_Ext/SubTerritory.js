import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';

export class SubTerritory {
	subTerritoryRequestPolicyPullDVPolicyModule = PcfTextInput('#SubTerritory-RequestPolicyPullDV-PolicyModule');
	subTerritoryRequestPolicyPullDVPolicyNumber = PcfTextInput('#SubTerritory-RequestPolicyPullDV-PolicyNumber');
	subTerritoryRequestPolicyPullDVRequestXml = PcfTextInput('#SubTerritory-RequestPolicyPullDV-RequestXml');
	subTerritoryRequestPolicyPullDVResponseXml = PcfTextInput('#SubTerritory-RequestPolicyPullDV-ResponseXml');
	subTerritoryRequestPolicyPullDVloadSampleData = PcfButton('#SubTerritory-RequestPolicyPullDV-loadSampleData');
	subTerritoryRequestPolicyPullDVresetFields = PcfButton('#SubTerritory-RequestPolicyPullDV-resetFields');
	subTerritoryRequestPolicyPullDVretrieveSubTerrirtoryCode = PcfButton('#SubTerritory-RequestPolicyPullDV-retrieveSubTerrirtoryCode');
	subTerritoryRequestPolicyPullDVstate = PcfSelectInput('#SubTerritory-RequestPolicyPullDV-state');
	subTerritorySubTerritory_UpLink = PcfButton('#SubTerritory-SubTerritory_UpLink');
	subTerritory_Paging = PcfButton('#SubTerritory-_Paging');
	subTerritory__crumb__ = PcfComponent('#SubTerritory-__crumb__');
	subTerritory_msgs = PcfButton('#SubTerritory-_msgs');
}
