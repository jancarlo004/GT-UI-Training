import { PcfComponent } from '@gtui/gt-ui-framework';
import { PcfTextInput } from '@gtui/gt-ui-framework';
import { PcfDateValueInput } from '@gtui/gt-ui-framework';
import { PcfSelectInput } from '@gtui/gt-ui-framework';
import { PcfButton } from '@gtui/gt-ui-framework';
import { PcfListView } from '@gtui/gt-ui-framework';

export class NewHoliday {
	holidayDetailScreenAllZones = PcfComponent('#NewHoliday-HolidayDetailScreen-AllZones');
	holidayDetailScreenCancel = PcfButton('#NewHoliday-HolidayDetailScreen-Cancel');
	holidayDetailScreenCountry = PcfSelectInput('#NewHoliday-HolidayDetailScreen-Country');
	holidayDetailScreenDate = PcfDateValueInput('#NewHoliday-HolidayDetailScreen-Date');
	holidayDetailScreenEdit = PcfButton('#NewHoliday-HolidayDetailScreen-Edit');
	holidayDetailDVHolidayZonesLV = PcfListView('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-HolidayZonesLV');
	holidayZonesLV_tbAdd = PcfButton('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-HolidayZonesLV_tb-Add');
	holidayZonesLV_tbRemove = PcfButton('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-HolidayZonesLV_tb-Remove');
	holidayDetailDVZoneType = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-ZoneType');
	holidayDetailDVprovince = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-province');
	holidayDetailDVstate = PcfSelectInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-state');
	holidayDetailDVZones = PcfTextInput('#NewHoliday-HolidayDetailScreen-HolidayDetailDV-Zones');
	newHolidayHolidayDetailScreenLocalizedValuesDVLocalizedValuesLV = PcfListView('#NewHoliday-HolidayDetailScreen-LocalizedValuesDV-LocalizedValuesLV');
	holidayDetailScreenName = PcfTextInput('#NewHoliday-HolidayDetailScreen-Name');
	holidayDetailScreenTags = PcfTextInput('#NewHoliday-HolidayDetailScreen-Tags');
	holidayDetailScreenUpdate = PcfButton('#NewHoliday-HolidayDetailScreen-Update');
	holidayDetailScreenZones = PcfTextInput('#NewHoliday-HolidayDetailScreen-Zones');
	holidayDetailScreen_msgs = PcfButton('#NewHoliday-HolidayDetailScreen-_msgs');
	newHolidayNewHoliday_UpLink = PcfButton('#NewHoliday-NewHoliday_UpLink');
	newHoliday_Paging = PcfButton('#NewHoliday-_Paging');
	newHoliday__crumb__ = PcfComponent('#NewHoliday-__crumb__');
}
