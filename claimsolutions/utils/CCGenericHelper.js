import { Selector, t } from 'testcafe';

const pageTitleWidget = Selector('div.gw-TitleBarWidget');

export class CCGenericHelper {

    async assertCurrentPageTitle(expectedPageTitle, matchType){
        let actualPageTitle = await pageTitleWidget.textContent;
        if (matchType.toLowerCase() === 'exact') {
            await t.expect(actualPageTitle).eql(expectedPageTitle, 'Page title was not an exact match, expected page title - '
                + expectedPageTitle + ' but actual page title is - ' + actualPageTitle);
        } else if (matchType.toLowerCase() === 'partial') {
            await t.expect(actualPageTitle).contains(expectedPageTitle, 'Page title was not a partial match, expected page title - '
                + expectedPageTitle + ' but actual page title is - ' + actualPageTitle);
        } else {
            throw "Parameter matchType of CCGenericHelper.assertCurrentPageTitle() must be specified as either exact or partial.";
        }
    }
}
