import { AdminMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/AdminMenuLinks.js';
import { ActivityPatterns } from '../../ClaimSolutions/pages/admin/businessSettings/ActivityPatterns.js';
import { ActivityRules } from '../../ClaimSolutions/pages/admin/businessSettings/businessRules/ActivityRules.js';
import { CCRulesExportImportStatus } from '../../ClaimSolutions/pages/admin/businessSettings/businessRules/CCRulesExportImportStatus.js';
import { ExposureRules } from '../../ClaimSolutions/pages/admin/businessSettings/businessRules/ExposureRules.js';
import { ReserveRules } from '../../ClaimSolutions/pages/admin/businessSettings/businessRules/ReserveRules.js';
import { BusinessWeek } from '../../ClaimSolutions/pages/admin/businessSettings/BusinessWeek.js';
import { Catastrophes } from '../../ClaimSolutions/pages/admin/businessSettings/Catastrophes.js';
import { IncompatibleNewExposure } from '../../ClaimSolutions/pages/admin/businessSettings/coverageDetermination/IncompatibleNewExposure.js';
import { InvalidCoverageForCause } from '../../ClaimSolutions/pages/admin/businessSettings/coverageDetermination/InvalidCoverageForCause.js';
import { InvalidCoverageForFault } from '../../ClaimSolutions/pages/admin/businessSettings/coverageDetermination/InvalidCoverageForFault.js';
import { Holidays } from '../../ClaimSolutions/pages/admin/businessSettings/Holidays.js';
import { ICD } from '../../ClaimSolutions/pages/admin/businessSettings/ICD.js';
import { KeyMetrics } from '../../ClaimSolutions/pages/admin/businessSettings/KeyMetrics.js';
import { ReinsuranceThresholds } from '../../ClaimSolutions/pages/admin/businessSettings/ReinsuranceThresholds.js';
import { DenialPeriods } from '../../ClaimSolutions/pages/admin/businessSettings/wCParms/DenialPeriods.js';
import { WCBenefitParameterSet } from '../../ClaimSolutions/pages/admin/businessSettings/wCParms/WCBenefitParameterSet.js';
import { WCPDBenefits } from '../../ClaimSolutions/pages/admin/businessSettings/wCParms/WCPDBenefits.js';
import { WCPDWeeksAndLimits } from '../../ClaimSolutions/pages/admin/businessSettings/wCParms/WCPDWeeksAndLimits.js';
import { WorkloadClassifications } from '../../ClaimSolutions/pages/admin/businessSettings/WorkloadClassifications.js';
import { MessagingDestinationControlList } from '../../ClaimSolutions/pages/admin/monitoring/MessagingDestinationControlList.js';
import { WorkflowSearch } from '../../ClaimSolutions/pages/admin/monitoring/WorkflowSearch.js';
import { WorkflowStats } from '../../ClaimSolutions/pages/admin/monitoring/WorkflowStats.js';
import { AccountAdmin } from '../../ClaimSolutions/pages/admin/specialHandling/AccountAdmin.js';
import { CustomerServiceTierAdmin } from '../../ClaimSolutions/pages/admin/specialHandling/CustomerServiceTierAdmin.js';
import { AdminGroupSearchPage } from '../../ClaimSolutions/pages/admin/usersAndSecurity/AdminGroupSearchPage.js';
import { AdminUserSearchPage } from '../../ClaimSolutions/pages/admin/usersAndSecurity/AdminUserSearchPage.js';
import { Attributes } from '../../ClaimSolutions/pages/admin/usersAndSecurity/Attributes.js';
import { AuthorityLimitProfiles } from '../../ClaimSolutions/pages/admin/usersAndSecurity/AuthorityLimitProfiles.js';
import { Regions } from '../../ClaimSolutions/pages/admin/usersAndSecurity/Regions.js';
import { Roles } from '../../ClaimSolutions/pages/admin/usersAndSecurity/Roles.js';
import { SecurityZones } from '../../ClaimSolutions/pages/admin/usersAndSecurity/SecurityZones.js';
import { DataChangePage } from '../../ClaimSolutions/pages/admin/utilities/DataChangePage.js';
import { ExportData } from '../../ClaimSolutions/pages/admin/utilities/ExportData.js';
import { ImportWizard } from '../../ClaimSolutions/pages/admin/utilities/ImportWizard.js';
import { InboundFileSearch } from '../../ClaimSolutions/pages/admin/utilities/InboundFileSearch.js';
import { OutboundFileSearch } from '../../ClaimSolutions/pages/admin/utilities/OutboundFileSearch.js';
import { Properties } from '../../ClaimSolutions/pages/admin/utilities/Properties.js';
import { BulkRestoreArchivedClaimsRestoreRecord } from '../../ClaimSolutions/pages/admin/utilities/restoreArchivedClaimsInBulk/BulkRestoreArchivedClaimsRestoreRecord.js';
import { SearchArchivedClaims } from '../../ClaimSolutions/pages/admin/utilities/restoreArchivedClaimsInBulk/SearchArchivedClaims.js';
import { ScriptParametersPage } from '../../ClaimSolutions/pages/admin/utilities/ScriptParametersPage.js';
import { DesktopMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/DesktopMenuLinks.js';
import { BulkPay } from '../../ClaimSolutions/pages/desktop/BulkPay.js';
import { DesktopActivities } from '../../ClaimSolutions/pages/desktop/DesktopActivities.js';
import { DesktopAwaitingAssignment } from '../../ClaimSolutions/pages/desktop/DesktopAwaitingAssignment.js';
import { Calendar } from '../../ClaimSolutions/pages/desktop/desktopCalendarGroup/Calendar.js';
import { SupervisorCalendar } from '../../ClaimSolutions/pages/desktop/desktopCalendarGroup/SupervisorCalendar.js';
import { DesktopClaims } from '../../ClaimSolutions/pages/desktop/DesktopClaims.js';
import { DesktopExposures } from '../../ClaimSolutions/pages/desktop/DesktopExposures.js';
import { DesktopQueuedActivities } from '../../ClaimSolutions/pages/desktop/DesktopQueuedActivities.js';
import { DesktopSubrogations } from '../../ClaimSolutions/pages/desktop/DesktopSubrogations.js';
import { SearchMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/SearchMenuLinks.js';
import { ActivitySearch } from '../../ClaimSolutions/pages/search/ActivitySearch.js';
import { BulkInvoiceSearch } from '../../ClaimSolutions/pages/search/BulkInvoiceSearch.js';
import { CatastropheSearch } from '../../ClaimSolutions/pages/search/claimSearchesGroup/CatastropheSearch.js';
import { ClaimSearch } from '../../ClaimSolutions/pages/search/claimSearchesGroup/ClaimSearch.js';
import { FreeTextClaimSearch } from '../../ClaimSolutions/pages/search/claimSearchesGroup/FreeTextClaimSearch.js';
import { SimpleClaimSearch } from '../../ClaimSolutions/pages/search/claimSearchesGroup/SimpleClaimSearch.js';
import { PaymentSearch } from '../../ClaimSolutions/pages/search/PaymentSearch.js';
import { RecoverySearch } from '../../ClaimSolutions/pages/search/RecoverySearch.js';
import { ClaimMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/ClaimMenuLinks.js';
import { ClaimCalendar } from '../../ClaimSolutions/pages/claim/claimCalendarGroup/ClaimCalendar.js';
import { SupervisorClaimCalendar } from '../../ClaimSolutions/pages/claim/claimCalendarGroup/SupervisorClaimCalendar.js';
import { ClaimDocuments } from '../../ClaimSolutions/pages/claim/ClaimDocuments.js';
import { ClaimExposures } from '../../ClaimSolutions/pages/claim/ClaimExposures.js';
import { ClaimFinancialsChecks } from '../../ClaimSolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsChecks.js';
import { ClaimFinancialsSummary } from '../../ClaimSolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsSummary.js';
import { ClaimFinancialsTransactions } from '../../ClaimSolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsTransactions.js';
import { ClaimHistory } from '../../ClaimSolutions/pages/claim/ClaimHistory.js';
import { ClaimAssociations } from '../../ClaimSolutions/pages/claim/claimLossDetailsGroup/ClaimAssociations.js';
import { ClaimLossDetails } from '../../ClaimSolutions/pages/claim/claimLossDetailsGroup/ClaimLossDetails.js';
import { SIDetails } from '../../ClaimSolutions/pages/claim/claimLossDetailsGroup/SIDetails.js';
import { ClaimMatters } from '../../ClaimSolutions/pages/claim/ClaimMatters.js';
import { ClaimNotes } from '../../ClaimSolutions/pages/claim/ClaimNotes.js';
import { ClaimContacts } from '../../ClaimSolutions/pages/claim/claimPartiesGroup/ClaimContacts.js';
import { ClaimUsers } from '../../ClaimSolutions/pages/claim/claimPartiesGroup/ClaimUsers.js';
import { ClaimEvaluations } from '../../ClaimSolutions/pages/claim/claimPlanOfActionGroup/ClaimEvaluations.js';
import { ClaimNegotiations } from '../../ClaimSolutions/pages/claim/claimPlanOfActionGroup/ClaimNegotiations.js';
import { ClaimPolicyAggregateLimits } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyAggregateLimits.js';
import { ClaimPolicyEndorsements } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyEndorsements.js';
import { ClaimPolicyGeneral } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyGeneral.js';
import { ClaimPolicyLocations } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyLocations.js';
import { ClaimPolicyStatCodes } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyStatCodes.js';
import { ClaimPolicyTrips } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyTrips.js';
import { ClaimPolicyVehicles } from '../../ClaimSolutions/pages/claim/claimPolicyGroup/ClaimPolicyVehicles.js';
import { ClaimServiceRequests } from '../../ClaimSolutions/pages/claim/ClaimServiceRequests.js';
import { ClaimSnapshotDocuments } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotDocuments.js';
import { ClaimSnapshotExposures } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotExposures.js';
import { ClaimSnapshotExtraFields } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotExtraFields.js';
import { ClaimSnapshotLossDetails } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotLossDetails.js';
import { ClaimSnapshotNotes } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotNotes.js';
import { ClaimSnapshotPartiesInvolved } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotPartiesInvolved.js';
import { ClaimSnapshotPolicy } from '../../ClaimSolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotPolicy.js';
import { SubrogationGeneral } from '../../ClaimSolutions/pages/claim/claimSubrogationGroup/SubrogationGeneral.js';
import { SubrogationParties } from '../../ClaimSolutions/pages/claim/claimSubrogationGroup/SubrogationParties.js';
import { ClaimKeyMetrics } from '../../ClaimSolutions/pages/claim/claimSummaryGroup/ClaimKeyMetrics.js';
import { ClaimStatus } from '../../ClaimSolutions/pages/claim/claimSummaryGroup/ClaimStatus.js';
import { ClaimSummary } from '../../ClaimSolutions/pages/claim/claimSummaryGroup/ClaimSummary.js';
import { ClaimWorkplan } from '../../ClaimSolutions/pages/claim/ClaimWorkplan.js';
import { ReinsuranceSummary } from '../../ClaimSolutions/pages/claim/ReinsuranceSummary.js';
import { AddressBookMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/AddressBookMenuLinks.js';
import { AddressBookSearch } from '../../ClaimSolutions/pages/addressBook/AddressBookSearch.js';
import { DashboardSubGroupMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/DashboardSubGroupMenuLinks.js';
import { DashboardClaimActivity } from '../../ClaimSolutions/pages/dashboardSubGroup/DashboardClaimActivity.js';
import { DashboardClaimCount } from '../../ClaimSolutions/pages/dashboardSubGroup/DashboardClaimCount.js';
import { DashboardCurrentFinancials } from '../../ClaimSolutions/pages/dashboardSubGroup/DashboardCurrentFinancials.js';
import { DashboardPeriodFinancials } from '../../ClaimSolutions/pages/dashboardSubGroup/DashboardPeriodFinancials.js';
import { TeamGroupGroupMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/TeamGroupGroupMenuLinks.js';
import { TeamGroupActivities } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupActivities.js';
import { TeamGroupAging } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupAging.js';
import { TeamGroupClaims } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupClaims.js';
import { TeamGroupExposures } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupExposures.js';
import { TeamGroupMatters } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupMatters.js';
import { TeamGroupSubrogations } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupSubrogations.js';
import { TeamGroupSummary } from '../../ClaimSolutions/pages/teamGroupGroup/TeamGroupSummary.js';
import { VacationMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/VacationMenuLinks.js';
import { VacationActivities } from '../../ClaimSolutions/pages/vacation/VacationActivities.js';
import { VacationClaims } from '../../ClaimSolutions/pages/vacation/VacationClaims.js';
import { VacationExposures } from '../../ClaimSolutions/pages/vacation/VacationExposures.js';
import { ServerToolsMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/ServerToolsMenuLinks.js';
import { BatchProcessInfo } from '../../ClaimSolutions/pages/serverTools/BatchProcessInfo.js';
import { CentipedeCacheInfo } from '../../ClaimSolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfo.js';
import { CentipedeCacheInfoDetails } from '../../ClaimSolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfoDetails.js';
import { CentipedeCacheInfoHistory } from '../../ClaimSolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfoHistory.js';
import { ClusterComponents } from '../../ClaimSolutions/pages/serverTools/clusterPages/ClusterComponents.js';
import { ClusterMembers } from '../../ClaimSolutions/pages/serverTools/clusterPages/ClusterMembers.js';
import { ArchiveGraphInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/ArchiveGraphInfo.js';
import { ArchiveInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/ArchiveInfo.js';
import { ConfigurationInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/ConfigurationInfo.js';
import { ConsistencyChecks } from '../../ClaimSolutions/pages/serverTools/infoPages/ConsistencyChecks.js';
import { DataDistributionInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/DataDistributionInfo.js';
import { DatabaseParameters } from '../../ClaimSolutions/pages/serverTools/infoPages/DatabaseParameters.js';
import { DatabaseStatistics } from '../../ClaimSolutions/pages/serverTools/infoPages/DatabaseStatistics.js';
import { DatabaseStorage } from '../../ClaimSolutions/pages/serverTools/infoPages/DatabaseStorage.js';
import { DatabaseTableInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/DatabaseTableInfo.js';
import { LoadErrorsInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/LoadErrorsInfo.js';
import { LoadHistoryInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/LoadHistoryInfo.js';
import { LoadIntegrityChecks } from '../../ClaimSolutions/pages/serverTools/infoPages/LoadIntegrityChecks.js';
import { LoadedGosuClasses } from '../../ClaimSolutions/pages/serverTools/infoPages/LoadedGosuClasses.js';
import { MicrosoftDMVInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/MicrosoftDMVInfo.js';
import { MicrosoftDriverLogging } from '../../ClaimSolutions/pages/serverTools/infoPages/MicrosoftDriverLogging.js';
import { OracleAWRInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/OracleAWRInfo.js';
import { OracleAWRUnusedIndexesInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/OracleAWRUnusedIndexesInfo.js';
import { OracleOutlineInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/OracleOutlineInfo.js';
import { OracleStatspackInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/OracleStatspackInfo.js';
import { PostgreSQLPerfInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/PostgreSQLPerfInfo.js';
import { RuntimeEnvironmentInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/RuntimeEnvironmentInfo.js';
import { SafePersistingOrderInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/SafePersistingOrderInfo.js';
import { SerializationInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/SerializationInfo.js';
import { WorksetInfo } from '../../ClaimSolutions/pages/serverTools/infoPages/WorksetInfo.js';
import { IntentionalLogging } from '../../ClaimSolutions/pages/serverTools/IntentionalLogging.js';
import { JProfiler } from '../../ClaimSolutions/pages/serverTools/JProfiler.js';
import { MBeans } from '../../ClaimSolutions/pages/serverTools/MBeans.js';
import { MetroFlows } from '../../ClaimSolutions/pages/serverTools/MetroFlows.js';
import { ProfilerAnalysisPage } from '../../ClaimSolutions/pages/serverTools/profiler/profilerAnalysisLG/ProfilerAnalysisPage.js';
import { ProfilerConfigurationPage } from '../../ClaimSolutions/pages/serverTools/profiler/ProfilerConfigurationPage.js';
import { SetLogLevel } from '../../ClaimSolutions/pages/serverTools/SetLogLevel.js';
import { StartablePlugin } from '../../ClaimSolutions/pages/serverTools/StartablePlugin.js';
import { UpgradeInfo } from '../../ClaimSolutions/pages/serverTools/UpgradeInfo.js';
import { ViewLogs } from '../../ClaimSolutions/pages/serverTools/ViewLogs.js';
import { WorkQueueInfo } from '../../ClaimSolutions/pages/serverTools/WorkQueueInfo.js';
import { UnsupportedToolsMenuLinks } from '../../ClaimSolutions/pages/navigation/menuLinks/UnsupportedToolsMenuLinks.js';
import { CCSampleData } from '../../ClaimSolutions/pages/unsupportedTools/CCSampleData.js';
import { Reload } from '../../ClaimSolutions/pages/unsupportedTools/Reload.js';
import { ServerPerformance } from '../../ClaimSolutions/pages/unsupportedTools/ServerPerformance.js';
import { SolrReIndexing } from '../../ClaimSolutions/pages/unsupportedTools/SolrReIndexing.js';
import { SystemClock } from '../../ClaimSolutions/pages/unsupportedTools/SystemClock.js';
import { TeamTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/TeamTabBar.js';
import { VacationTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/VacationTabBar.js';
import { DesktopTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/DesktopTabBar.js';
import { ReportTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/ReportTabBar.js';
import { AddressBookTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/AddressBookTabBar.js';
import { AdminTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/AdminTabBar.js';
import { Admin } from '../../ClaimSolutions/pages/admin/Admin.js';
import { DashboardTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/DashboardTabBar.js';
import { SearchTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/SearchTabBar.js';
import { ClaimTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/ClaimTabBar.js';
import { FNOLWizard } from '../../ClaimSolutions/pages/claim/FNOLWizard.js';
import { ServerToolsTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/ServerToolsTabBar.js';
import { UnsupportedToolsTabBar } from '../../ClaimSolutions/pages/navigation/tabBar/UnsupportedToolsTabBar.js';
import { AdminMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/AdminMenuActions.js';
import { DesktopMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/DesktopMenuActions.js';
import { SearchMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/SearchMenuActions.js';
import { ClaimMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/ClaimMenuActions.js';
import { VacationMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/VacationMenuActions.js';
import { ServerToolsMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/ServerToolsMenuActions.js';
import { UnsupportedToolsMenuActions } from '../../ClaimSolutions/pages/navigation/menuActions/UnsupportedToolsMenuActions.js';
import { AcceptedWorkPopup } from '../../ClaimSolutions/pages/popup/Accepted/AcceptedWorkPopup.js';
import { AddDelayPopup } from '../../ClaimSolutions/pages/popup/Add/AddDelayPopup.js';
import { AddExistingPartyInvolvedPopup } from '../../ClaimSolutions/pages/popup/Add/AddExistingPartyInvolvedPopup.js';
import { AddReviseQuotePopup } from '../../ClaimSolutions/pages/popup/Add/AddReviseQuotePopup.js';
import { AddSelectedDuplicatePartiesInvolvedPopup } from '../../ClaimSolutions/pages/popup/Add/AddSelectedDuplicatePartiesInvolvedPopup.js';
import { AdditionalTripAccommodationAddressPopup } from '../../ClaimSolutions/pages/popup/Additional/AdditionalTripAccommodationAddressPopup.js';
import { AdditionalTripSegmentPopup } from '../../ClaimSolutions/pages/popup/Additional/AdditionalTripSegmentPopup.js';
import { AddressBookContactDetailPopup } from '../../ClaimSolutions/pages/popup/Address/AddressBookContactDetailPopup.js';
import { AddressBookContactSearchPopupDV } from '../../ClaimSolutions/pages/popup/Address/AddressBookContactSearchPopupDV.js';
import { AddressBookDirectionsPopup } from '../../ClaimSolutions/pages/popup/Address/AddressBookDirectionsPopup.js';
import { AddressBookPickerPopup } from '../../ClaimSolutions/pages/popup/Address/AddressBookPickerPopup.js';
import { AddressBookSearchNewContactPopup } from '../../ClaimSolutions/pages/popup/Address/AddressBookSearchNewContactPopup.js';
import { AdjustRIRecoverablesPopup } from '../../ClaimSolutions/pages/popup/Adjust/AdjustRIRecoverablesPopup.js';
import { ApproveQuotePopup } from '../../ClaimSolutions/pages/popup/Approve/ApproveQuotePopup.js';
import { ArchiveClaimRetrievePopup } from '../../ClaimSolutions/pages/popup/Archive/ArchiveClaimRetrievePopup.js';
import { ArchiveItemListPopup } from '../../ClaimSolutions/pages/popup/Archive/ArchiveItemListPopup.js';
import { AssignActivitiesPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignActivitiesPopup.js';
import { AssignClaimsPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignClaimsPopup.js';
import { AssignExposuresPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignExposuresPopup.js';
import { AssignMattersPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignMattersPopup.js';
import { AssignServiceRequestPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignServiceRequestPopup.js';
import { AssignSubrogationPopup } from '../../ClaimSolutions/pages/popup/Assign/AssignSubrogationPopup.js';
import { AssigneePickerPopup } from '../../ClaimSolutions/pages/popup/Assignee/AssigneePickerPopup.js';
import { AssignmentOrgGroupTreePopup } from '../../ClaimSolutions/pages/popup/Assignment/AssignmentOrgGroupTreePopup.js';
import { AssignmentPopupDV } from '../../ClaimSolutions/pages/popup/Assignment/AssignmentPopupDV.js';
import { AssignmentPopupScreen } from '../../ClaimSolutions/pages/popup/Assignment/AssignmentPopupScreen.js';
import { AttachDocumentsPopup } from '../../ClaimSolutions/pages/popup/Attach/AttachDocumentsPopup.js';
import { AttachStatementDocumentsPopup } from '../../ClaimSolutions/pages/popup/Attach/AttachStatementDocumentsPopup.js';
import { AutomatedActivityHandlerDetailPopup } from '../../ClaimSolutions/pages/popup/Automated/AutomatedActivityHandlerDetailPopup.js';
import { AutomatedNotificationHandlerDetailPopup } from '../../ClaimSolutions/pages/popup/Automated/AutomatedNotificationHandlerDetailPopup.js';
import { BaggageIncidentPopup } from '../../ClaimSolutions/pages/popup/Baggage/BaggageIncidentPopup.js';
import { BulkEditDocumentDetailsPopup } from '../../ClaimSolutions/pages/popup/Bulk/BulkEditDocumentDetailsPopup.js';
import { BulkRestoreClaimsAssociationSearchPopup } from '../../ClaimSolutions/pages/popup/Bulk/BulkRestoreClaimsAssociationSearchPopup.js';
import { CCRuleComparisonPopup } from '../../ClaimSolutions/pages/popup/CCRule/CCRuleComparisonPopup.js';
import { CCRuleEditPopup } from '../../ClaimSolutions/pages/popup/CCRule/CCRuleEditPopup.js';
import { CCRuleVersionDetailsPopup } from '../../ClaimSolutions/pages/popup/CCRule/CCRuleVersionDetailsPopup.js';
import { CheckWizard_PaymentDeductionsPagePopup } from '../../ClaimSolutions/pages/popup/Check/CheckWizard_PaymentDeductionsPagePopup.js';
import { ChoosePropertyContentsScheduledItemPopup } from '../../ClaimSolutions/pages/popup/Choose/ChoosePropertyContentsScheduledItemPopup.js';
import { ClaimAssociationSearchPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimAssociationSearchPopup.js';
import { ClaimContactDetailPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimContactDetailPopup.js';
import { ClaimContactTransferRolesPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimContactTransferRolesPopup.js';
import { ClaimNewDocumentFromActivityPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimNewDocumentFromActivityPopup.js';
import { ClaimPolicySelectPolicyPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimPolicySelectPolicyPopup.js';
import { ClaimPolicyStatCodePickerPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimPolicyStatCodePickerPopup.js';
import { ClaimSearchPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSearchPopup.js';
import { ClaimSnapshotBaggageIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotBaggageIncidentPopup.js';
import { ClaimSnapshotCovTerm700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotCovTerm700Popup.js';
import { ClaimSnapshotCovTerm800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotCovTerm800Popup.js';
import { ClaimSnapshotCovTermPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotCovTermPopup.js';
import { ClaimSnapshotDwellingIncident600Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident600Popup.js';
import { ClaimSnapshotDwellingIncident700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident700Popup.js';
import { ClaimSnapshotDwellingIncident800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident800Popup.js';
import { ClaimSnapshotDwellingIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotDwellingIncidentPopup.js';
import { ClaimSnapshotFixedPropertyIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotFixedPropertyIncidentPopup.js';
import { ClaimSnapshotInjuredInjuryIncident600Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident600Popup.js';
import { ClaimSnapshotInjuredInjuryIncident700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident700Popup.js';
import { ClaimSnapshotInjuredInjuryIncident800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident800Popup.js';
import { ClaimSnapshotInjuredInjuryIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncidentPopup.js';
import { ClaimSnapshotInjuryIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotInjuryIncidentPopup.js';
import { ClaimSnapshotLivingExpensesIncident600Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident600Popup.js';
import { ClaimSnapshotLivingExpensesIncident700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident700Popup.js';
import { ClaimSnapshotLivingExpensesIncident800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident800Popup.js';
import { ClaimSnapshotLivingExpensesIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncidentPopup.js';
import { ClaimSnapshotOtherStructureIncident600Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident600Popup.js';
import { ClaimSnapshotOtherStructureIncident700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident700Popup.js';
import { ClaimSnapshotOtherStructureIncident800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident800Popup.js';
import { ClaimSnapshotOtherStructureIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncidentPopup.js';
import { ClaimSnapshotPolicyLocation700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPolicyLocation700Popup.js';
import { ClaimSnapshotPolicyLocation800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPolicyLocation800Popup.js';
import { ClaimSnapshotPolicyLocationPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPolicyLocationPopup.js';
import { ClaimSnapshotPropertyContentsIncident600Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident600Popup.js';
import { ClaimSnapshotPropertyContentsIncident700Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident700Popup.js';
import { ClaimSnapshotPropertyContentsIncident800Popup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident800Popup.js';
import { ClaimSnapshotPropertyContentsIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncidentPopup.js';
import { ClaimSnapshotTripIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotTripIncidentPopup.js';
import { ClaimSnapshotVehicleIncidentPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSnapshotVehicleIncidentPopup.js';
import { ClaimSyncStatusPopup } from '../../ClaimSolutions/pages/popup/Claim/ClaimSyncStatusPopup.js';
import { CloseClaimPopup } from '../../ClaimSolutions/pages/popup/Close/CloseClaimPopup.js';
import { CloseExposurePopup } from '../../ClaimSolutions/pages/popup/Close/CloseExposurePopup.js';
import { CloseMatterPopup } from '../../ClaimSolutions/pages/popup/Close/CloseMatterPopup.js';
import { ClusterComponentHistoryPopup } from '../../ClaimSolutions/pages/popup/Cluster/ClusterComponentHistoryPopup.js';
import { ClusterComponentsDownloadConfigurePopup } from '../../ClaimSolutions/pages/popup/Cluster/ClusterComponentsDownloadConfigurePopup.js';
import { ClusterComponentsFilterByComponentPopup } from '../../ClaimSolutions/pages/popup/Cluster/ClusterComponentsFilterByComponentPopup.js';
import { ClusterMemberUserSessionsPopup } from '../../ClaimSolutions/pages/popup/Cluster/ClusterMemberUserSessionsPopup.js';
import { ClusterMembersDownloadConfigurePopup } from '../../ClaimSolutions/pages/popup/Cluster/ClusterMembersDownloadConfigurePopup.js';
import { CommandDefinitionParameterLocalizationsPopup } from '../../ClaimSolutions/pages/popup/Command/CommandDefinitionParameterLocalizationsPopup.js';
import { ConsistencyChecksChangeNumOfWorkersPopup } from '../../ClaimSolutions/pages/popup/Consistency/ConsistencyChecksChangeNumOfWorkersPopup.js';
import { ContactDocumentDetailsPopup } from '../../ClaimSolutions/pages/popup/Contact/ContactDocumentDetailsPopup.js';
import { ContactReviewPopup } from '../../ClaimSolutions/pages/popup/Contact/ContactReviewPopup.js';
import { ContainsExpressionPopup } from '../../ClaimSolutions/pages/popup/Contains/ContainsExpressionPopup.js';
import { CountExpressionPopup } from '../../ClaimSolutions/pages/popup/Count/CountExpressionPopup.js';
import { CovTermPopup } from '../../ClaimSolutions/pages/popup/Cov/CovTermPopup.js';
import { CreateReviewPopup } from '../../ClaimSolutions/pages/popup/Create/CreateReviewPopup.js';
import { DenialPeriodPopup } from '../../ClaimSolutions/pages/popup/Denial/DenialPeriodPopup.js';
import { DeployConfirmationPopup } from '../../ClaimSolutions/pages/popup/Deploy/DeployConfirmationPopup.js';
import { DocumentDetailsPopup } from '../../ClaimSolutions/pages/popup/Document/DocumentDetailsPopup.js';
import { DocumentTemplateSearchPopup } from '../../ClaimSolutions/pages/popup/Document/DocumentTemplateSearchPopup.js';
import { DuplicateClaimLossDetailsPopup } from '../../ClaimSolutions/pages/popup/Duplicate/DuplicateClaimLossDetailsPopup.js';
import { DuplicateContactPopup } from '../../ClaimSolutions/pages/popup/Duplicate/DuplicateContactPopup.js';
import { EditDwellingIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditDwellingIncidentPopup.js';
import { EditFixedPropertyIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditFixedPropertyIncidentPopup.js';
import { EditInjuryIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditInjuryIncidentPopup.js';
import { EditLivingExpensesIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditLivingExpensesIncidentPopup.js';
import { EditNotePopup } from '../../ClaimSolutions/pages/popup/Edit/EditNotePopup.js';
import { EditOtherStructureIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditOtherStructureIncidentPopup.js';
import { EditPropertyContentsIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditPropertyContentsIncidentPopup.js';
import { EditReferenceNumberPopup } from '../../ClaimSolutions/pages/popup/Edit/EditReferenceNumberPopup.js';
import { EditVehicleIncidentPopup } from '../../ClaimSolutions/pages/popup/Edit/EditVehicleIncidentPopup.js';
import { EnableBatchProcessPopup } from '../../ClaimSolutions/pages/popup/Enable/EnableBatchProcessPopup.js';
import { EnableGosuServletPopup } from '../../ClaimSolutions/pages/popup/Enable/EnableGosuServletPopup.js';
import { EnableMessageDestinationPopup } from '../../ClaimSolutions/pages/popup/Enable/EnableMessageDestinationPopup.js';
import { EnableRestOperationPopup } from '../../ClaimSolutions/pages/popup/Enable/EnableRestOperationPopup.js';
import { EnableStartablePluginPopup } from '../../ClaimSolutions/pages/popup/Enable/EnableStartablePluginPopup.js';
import { EnableWebServicePopup } from '../../ClaimSolutions/pages/popup/Enable/EnableWebServicePopup.js';
import { EnableWorkQueuePopup } from '../../ClaimSolutions/pages/popup/Enable/EnableWorkQueuePopup.js';
import { FNOLContactPopup } from '../../ClaimSolutions/pages/popup/FNOLContact/FNOLContactPopup.js';
import { FNOLInjuryIncidentPopup } from '../../ClaimSolutions/pages/popup/FNOLInjury/FNOLInjuryIncidentPopup.js';
import { FNOLVehicleIncidentPopup } from '../../ClaimSolutions/pages/popup/FNOLVehicle/FNOLVehicleIncidentPopup.js';
import { FNOLWizard_EditNotePopup } from '../../ClaimSolutions/pages/popup/FNOLWizard/FNOLWizard_EditNotePopup.js';
import { FixPropAssessItemPopup } from '../../ClaimSolutions/pages/popup/Fix/FixPropAssessItemPopup.js';
import { FixPropAssessSourcePopup } from '../../ClaimSolutions/pages/popup/Fix/FixPropAssessSourcePopup.js';
import { FixPropContentItemPopup } from '../../ClaimSolutions/pages/popup/Fix/FixPropContentItemPopup.js';
import { ForceBackoutConfirmPopup } from '../../ClaimSolutions/pages/popup/Force/ForceBackoutConfirmPopup.js';
import { ForceCancelConfirmPopup } from '../../ClaimSolutions/pages/popup/Force/ForceCancelConfirmPopup.js';
import { GroupRegionPopup } from '../../ClaimSolutions/pages/popup/Group/GroupRegionPopup.js';
import { GroupSearchPopup } from '../../ClaimSolutions/pages/popup/Group/GroupSearchPopup.js';
import { GroupUserPickerPopup } from '../../ClaimSolutions/pages/popup/Group/GroupUserPickerPopup.js';
import { ICDCodePopup } from '../../ClaimSolutions/pages/popup/ICDCode/ICDCodePopup.js';
import { ICDPopup } from '../../ClaimSolutions/pages/popup/ICDPopup/ICDPopup.js';
import { ISOMatchReportDetailPopup } from '../../ClaimSolutions/pages/popup/ISOMatch/ISOMatchReportDetailPopup.js';
import { ImportWizard_ArrayDiffPopup } from '../../ClaimSolutions/pages/popup/Import/ImportWizard_ArrayDiffPopup.js';
import { InboundConfigPopup } from '../../ClaimSolutions/pages/popup/Inbound/InboundConfigPopup.js';
import { InboundRecordPopup } from '../../ClaimSolutions/pages/popup/Inbound/InboundRecordPopup.js';
import { IncidentAssessItemPopup } from '../../ClaimSolutions/pages/popup/Incident/IncidentAssessItemPopup.js';
import { IncidentAssessSourcePopup } from '../../ClaimSolutions/pages/popup/Incident/IncidentAssessSourcePopup.js';
import { InitiateBackoutConfirmPopup } from '../../ClaimSolutions/pages/popup/Initiate/InitiateBackoutConfirmPopup.js';
import { InitiateBackoutPopup } from '../../ClaimSolutions/pages/popup/Initiate/InitiateBackoutPopup.js';
import { LoadFactorsPopup } from '../../ClaimSolutions/pages/popup/Load/LoadFactorsPopup.js';
import { LoadIntegrityChecksCompoundLVPopup } from '../../ClaimSolutions/pages/popup/Load/LoadIntegrityChecksCompoundLVPopup.js';
import { LookupExpressionPopup } from '../../ClaimSolutions/pages/popup/Lookup/LookupExpressionPopup.js';
import { MarkInvoicePaidPopup } from '../../ClaimSolutions/pages/popup/Mark/MarkInvoicePaidPopup.js';
import { MessagePayloadPopup } from '../../ClaimSolutions/pages/popup/Message/MessagePayloadPopup.js';
import { MetroReportDetailsPopup } from '../../ClaimSolutions/pages/popup/Metro/MetroReportDetailsPopup.js';
import { MultiUserSearchPopup } from '../../ClaimSolutions/pages/popup/Multi/MultiUserSearchPopup.js';
import { NewAutomatedActivityHandlerPopup } from '../../ClaimSolutions/pages/popup/New/NewAutomatedActivityHandlerPopup.js';
import { NewAutomatedNotificationHandlerPopup } from '../../ClaimSolutions/pages/popup/New/NewAutomatedNotificationHandlerPopup.js';
import { NewCheckWizardAddressBookPickerPopup } from '../../ClaimSolutions/pages/popup/New/NewCheckWizardAddressBookPickerPopup.js';
import { NewClaimWizard_EndorsementDetailPopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_EndorsementDetailPopup.js';
import { NewClaimWizard_ExposurePagePopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_ExposurePagePopup.js';
import { NewClaimWizard_NewEndorsementPopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_NewEndorsementPopup.js';
import { NewClaimWizard_NewExposurePopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_NewExposurePopup.js';
import { NewClaimWizard_NewPolicyVehiclePopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_NewPolicyVehiclePopup.js';
import { NewClaimWizard_NewStatCodePopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_NewStatCodePopup.js';
import { NewClaimWizard_PartyInvolvedPopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_PartyInvolvedPopup.js';
import { NewClaimWizard_PolicyVehicleDetailPopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_PolicyVehicleDetailPopup.js';
import { NewClaimWizard_StatCodeDetailPopup } from '../../ClaimSolutions/pages/popup/New/NewClaimWizard_StatCodeDetailPopup.js';
import { NewContactPopup } from '../../ClaimSolutions/pages/popup/New/NewContactPopup.js';
import { NewDwellingIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewDwellingIncidentPopup.js';
import { NewFixPropAssessItemPopup } from '../../ClaimSolutions/pages/popup/New/NewFixPropAssessItemPopup.js';
import { NewFixPropAssessSourcePopup } from '../../ClaimSolutions/pages/popup/New/NewFixPropAssessSourcePopup.js';
import { NewFixPropContentItemPopup } from '../../ClaimSolutions/pages/popup/New/NewFixPropContentItemPopup.js';
import { NewFixedPropertyIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewFixedPropertyIncidentPopup.js';
import { NewICDPopup } from '../../ClaimSolutions/pages/popup/New/NewICDPopup.js';
import { NewInboundLocalConfigPopup } from '../../ClaimSolutions/pages/popup/New/NewInboundLocalConfigPopup.js';
import { NewInboundS3ConfigPopup } from '../../ClaimSolutions/pages/popup/New/NewInboundS3ConfigPopup.js';
import { NewIncidentAssessItemPopup } from '../../ClaimSolutions/pages/popup/New/NewIncidentAssessItemPopup.js';
import { NewIncidentAssessSourcePopup } from '../../ClaimSolutions/pages/popup/New/NewIncidentAssessSourcePopup.js';
import { NewInjuryIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewInjuryIncidentPopup.js';
import { NewLivingExpensesIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewLivingExpensesIncidentPopup.js';
import { NewMetroReportDetailsPopup } from '../../ClaimSolutions/pages/popup/New/NewMetroReportDetailsPopup.js';
import { NewNotePopup } from '../../ClaimSolutions/pages/popup/New/NewNotePopup.js';
import { NewOtherStructureIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewOtherStructureIncidentPopup.js';
import { NewOutboundLocalConfigPopup } from '../../ClaimSolutions/pages/popup/New/NewOutboundLocalConfigPopup.js';
import { NewOutboundS3ConfigPopup } from '../../ClaimSolutions/pages/popup/New/NewOutboundS3ConfigPopup.js';
import { NewPartyInvolvedPopup } from '../../ClaimSolutions/pages/popup/New/NewPartyInvolvedPopup.js';
import { NewPropertyContentsIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewPropertyContentsIncidentPopup.js';
import { NewRecoveryReserveMultiCurrencyPopup } from '../../ClaimSolutions/pages/popup/New/NewRecoveryReserveMultiCurrencyPopup.js';
import { NewReserveMultiCurrencyPopup } from '../../ClaimSolutions/pages/popup/New/NewReserveMultiCurrencyPopup.js';
import { NewSubroAdversePartyPopup } from '../../ClaimSolutions/pages/popup/New/NewSubroAdversePartyPopup.js';
import { NewVehAssessItemPopup } from '../../ClaimSolutions/pages/popup/New/NewVehAssessItemPopup.js';
import { NewVehAssessSourcePopup } from '../../ClaimSolutions/pages/popup/New/NewVehAssessSourcePopup.js';
import { NewVehicleIncidentPopup } from '../../ClaimSolutions/pages/popup/New/NewVehicleIncidentPopup.js';
import { NewWorkStatusPopup } from '../../ClaimSolutions/pages/popup/New/NewWorkStatusPopup.js';
import { NewWorkloadClassificationPopup } from '../../ClaimSolutions/pages/popup/New/NewWorkloadClassificationPopup.js';
import { NullClaimContactDetailPopup } from '../../ClaimSolutions/pages/popup/Null/NullClaimContactDetailPopup.js';
import { OperationReasonPromptPopup } from '../../ClaimSolutions/pages/popup/Operation/OperationReasonPromptPopup.js';
import { OracleOutlineDetailsPopup } from '../../ClaimSolutions/pages/popup/Oracle/OracleOutlineDetailsPopup.js';
import { OracleStatisticsPreferencesConfigPopup } from '../../ClaimSolutions/pages/popup/Oracle/OracleStatisticsPreferencesConfigPopup.js';
import { OrganizationGroupTreePopup } from '../../ClaimSolutions/pages/popup/Organization/OrganizationGroupTreePopup.js';
import { OrganizationSearchPopup } from '../../ClaimSolutions/pages/popup/Organization/OrganizationSearchPopup.js';
import { OtherInstructionPopup } from '../../ClaimSolutions/pages/popup/Other/OtherInstructionPopup.js';
import { OtherServiceRequestPopup } from '../../ClaimSolutions/pages/popup/Other/OtherServiceRequestPopup.js';
import { OutboundConfigPopup } from '../../ClaimSolutions/pages/popup/Outbound/OutboundConfigPopup.js';
import { OutboundRecordPopup } from '../../ClaimSolutions/pages/popup/Outbound/OutboundRecordPopup.js';
import { PaymentTransferPopup } from '../../ClaimSolutions/pages/popup/Payment/PaymentTransferPopup.js';
import { PickEmailTemplatePopup } from '../../ClaimSolutions/pages/popup/Pick/PickEmailTemplatePopup.js';
import { PickExistingDocumentPopup } from '../../ClaimSolutions/pages/popup/Pick/PickExistingDocumentPopup.js';
import { PickNoteTemplatePopup } from '../../ClaimSolutions/pages/popup/Pick/PickNoteTemplatePopup.js';
import { PickSavedFilePopup } from '../../ClaimSolutions/pages/popup/Pick/PickSavedFilePopup.js';
import { PlannedShutdownPopup } from '../../ClaimSolutions/pages/popup/Planned/PlannedShutdownPopup.js';
import { PlannedShutdownStatusPopup } from '../../ClaimSolutions/pages/popup/Planned/PlannedShutdownStatusPopup.js';
import { PolicyLocationPopup } from '../../ClaimSolutions/pages/popup/Policy/PolicyLocationPopup.js';
import { PolicySummaryInfoPopup } from '../../ClaimSolutions/pages/popup/Policy/PolicySummaryInfoPopup.js';
import { PrintOptionPopup } from '../../ClaimSolutions/pages/popup/Print/PrintOptionPopup.js';
import { ProfilerAnalysisPopup } from '../../ClaimSolutions/pages/popup/Profiler/ProfilerAnalysisPopup.js';
import { ProfilerPopup } from '../../ClaimSolutions/pages/popup/Profiler/ProfilerPopup.js';
import { PropertyReferencePopup } from '../../ClaimSolutions/pages/popup/Property/PropertyReferencePopup.js';
import { QuoteDetailsPopup } from '../../ClaimSolutions/pages/popup/Quote/QuoteDetailsPopup.js';
import { RDMDatasetSearchPopup } from '../../ClaimSolutions/pages/popup/RDMDataset/RDMDatasetSearchPopup.js';
import { RDMRecordSearchPopup } from '../../ClaimSolutions/pages/popup/RDMRecord/RDMRecordSearchPopup.js';
import { RIAgreementGroupPopup } from '../../ClaimSolutions/pages/popup/RIAgreement/RIAgreementGroupPopup.js';
import { ReferSubrogationPopup } from '../../ClaimSolutions/pages/popup/Refer/ReferSubrogationPopup.js';
import { RejectInvoicePopup } from '../../ClaimSolutions/pages/popup/Reject/RejectInvoicePopup.js';
import { ReopenClaimPopup } from '../../ClaimSolutions/pages/popup/Reopen/ReopenClaimPopup.js';
import { ReopenExposurePopup } from '../../ClaimSolutions/pages/popup/Reopen/ReopenExposurePopup.js';
import { ReopenMatterPopup } from '../../ClaimSolutions/pages/popup/Reopen/ReopenMatterPopup.js';
import { RequestRequotePopup } from '../../ClaimSolutions/pages/popup/Request/RequestRequotePopup.js';
import { RuleEditPopupToolbarButtonSet } from '../../ClaimSolutions/pages/popup/Rule/RuleEditPopupToolbarButtonSet.js';
import { RuleExportAllConfirmationPopup } from '../../ClaimSolutions/pages/popup/Rule/RuleExportAllConfirmationPopup.js';
import { RuleExportDetailsPopup } from '../../ClaimSolutions/pages/popup/Rule/RuleExportDetailsPopup.js';
import { RuleExportImportFailurePopup } from '../../ClaimSolutions/pages/popup/Rule/RuleExportImportFailurePopup.js';
import { RuleImportAllPopup } from '../../ClaimSolutions/pages/popup/Rule/RuleImportAllPopup.js';
import { RuleImportDetailsPopup } from '../../ClaimSolutions/pages/popup/Rule/RuleImportDetailsPopup.js';
import { RuleManagementAuditPopup } from '../../ClaimSolutions/pages/popup/Rule/RuleManagementAuditPopup.js';
import { RunCommandPopup } from '../../ClaimSolutions/pages/popup/Run/RunCommandPopup.js';
import { SelectServicesPopup } from '../../ClaimSolutions/pages/popup/Select/SelectServicesPopup.js';
import { ServiceRequestMessagePopup } from '../../ClaimSolutions/pages/popup/Service/ServiceRequestMessagePopup.js';
import { StartBlueGreenUpgradePopup } from '../../ClaimSolutions/pages/popup/Start/StartBlueGreenUpgradePopup.js';
import { StartFullUpgradePopup } from '../../ClaimSolutions/pages/popup/Start/StartFullUpgradePopup.js';
import { StartRollingUpgradePopup } from '../../ClaimSolutions/pages/popup/Start/StartRollingUpgradePopup.js';
import { StartRuleCsvImportPopup } from '../../ClaimSolutions/pages/popup/Start/StartRuleCsvImportPopup.js';
import { StartRuleImportPopup } from '../../ClaimSolutions/pages/popup/Start/StartRuleImportPopup.js';
import { SumExpressionPopup } from '../../ClaimSolutions/pages/popup/Sum/SumExpressionPopup.js';
import { TeamClaimRemoveFlagPopup } from '../../ClaimSolutions/pages/popup/Team/TeamClaimRemoveFlagPopup.js';
import { TimeSearchPopup } from '../../ClaimSolutions/pages/popup/Time/TimeSearchPopup.js';
import { TotalLossCalculatorPopup } from '../../ClaimSolutions/pages/popup/Total/TotalLossCalculatorPopup.js';
import { TripAccommodationAddressPopup } from '../../ClaimSolutions/pages/popup/Trip/TripAccommodationAddressPopup.js';
import { TripIncidentPopup } from '../../ClaimSolutions/pages/popup/Trip/TripIncidentPopup.js';
import { TripRUPopup } from '../../ClaimSolutions/pages/popup/Trip/TripRUPopup.js';
import { TripSegmentPopup } from '../../ClaimSolutions/pages/popup/Trip/TripSegmentPopup.js';
import { UnusedServerRolesPopup } from '../../ClaimSolutions/pages/popup/Unused/UnusedServerRolesPopup.js';
import { UploadDocumentContentPopup } from '../../ClaimSolutions/pages/popup/Upload/UploadDocumentContentPopup.js';
import { UserAssignmentCalendarPopup } from '../../ClaimSolutions/pages/popup/User/UserAssignmentCalendarPopup.js';
import { UserAttributesPopup } from '../../ClaimSolutions/pages/popup/User/UserAttributesPopup.js';
import { UserContactDetailPopup } from '../../ClaimSolutions/pages/popup/User/UserContactDetailPopup.js';
import { UserRegionPopup } from '../../ClaimSolutions/pages/popup/User/UserRegionPopup.js';
import { UserSearchPopup } from '../../ClaimSolutions/pages/popup/User/UserSearchPopup.js';
import { UserSelectPopup } from '../../ClaimSolutions/pages/popup/User/UserSelectPopup.js';
import { ValidationPopupErrorsInputSet } from '../../ClaimSolutions/pages/popup/Validation/ValidationPopupErrorsInputSet.js';
import { VehAssessItemPopup } from '../../ClaimSolutions/pages/popup/Veh/VehAssessItemPopup.js';
import { VehAssessSourcePopup } from '../../ClaimSolutions/pages/popup/Veh/VehAssessSourcePopup.js';
import { WCBenefitParameterSetPopup } from '../../ClaimSolutions/pages/popup/WCBenefit/WCBenefitParameterSetPopup.js';
import { WorkQueueHistoryDownloadConfigurePopup } from '../../ClaimSolutions/pages/popup/Work/WorkQueueHistoryDownloadConfigurePopup.js';
import { WorkQueueInfoDownloadConfigurePopup } from '../../ClaimSolutions/pages/popup/Work/WorkQueueInfoDownloadConfigurePopup.js';
import { WorkQueueRawDataDownloadConfigurePopup } from '../../ClaimSolutions/pages/popup/Work/WorkQueueRawDataDownloadConfigurePopup.js';
import { WorkStatusPopup } from '../../ClaimSolutions/pages/popup/Work/WorkStatusPopup.js';
import { WorkloadClassificationDetailPopup } from '../../ClaimSolutions/pages/popup/Workload/WorkloadClassificationDetailPopup.js';
import { NewAccount } from '../../ClaimSolutions/pages/other/NewAccount.js';
import { NewActivity } from '../../ClaimSolutions/pages/other/NewActivity.js';
import { NewActivityPattern } from '../../ClaimSolutions/pages/other/NewActivityPattern.js';
import { NewAssignableQueue } from '../../ClaimSolutions/pages/other/NewAssignableQueue.js';
import { NewAttribute } from '../../ClaimSolutions/pages/other/NewAttribute.js';
import { NewAuthorityLimitProfile } from '../../ClaimSolutions/pages/other/NewAuthorityLimitProfile.js';
import { NewBulkInvoiceDetail } from '../../ClaimSolutions/pages/other/NewBulkInvoiceDetail.js';
import { NewBulkRestoreArchivedClaims } from '../../ClaimSolutions/pages/other/NewBulkRestoreArchivedClaims.js';
import { NewBusinessWeek } from '../../ClaimSolutions/pages/other/NewBusinessWeek.js';
import { NewCatastrophe } from '../../ClaimSolutions/pages/other/NewCatastrophe.js';
import { NewCheckNoAbilityToPay } from '../../ClaimSolutions/pages/other/NewCheckNoAbilityToPay.js';
import { NewClaimAssociation } from '../../ClaimSolutions/pages/other/NewClaimAssociation.js';
import { NewClaimDuplicatesWorksheet } from '../../ClaimSolutions/pages/other/NewClaimDuplicatesWorksheet.js';
import { NewClaimNewDocumentExistsWorksheet } from '../../ClaimSolutions/pages/other/NewClaimNewDocumentExistsWorksheet.js';
import { NewClaimNewDocumentFromTemplateWorksheet } from '../../ClaimSolutions/pages/other/NewClaimNewDocumentFromTemplateWorksheet.js';
import { NewClaimNewDocumentLinkedWorksheet } from '../../ClaimSolutions/pages/other/NewClaimNewDocumentLinkedWorksheet.js';
import { NewClaimSaved } from '../../ClaimSolutions/pages/other/NewClaimSaved.js';
import { NewCustomerServiceTier } from '../../ClaimSolutions/pages/other/NewCustomerServiceTier.js';
import { NewEvaluation } from '../../ClaimSolutions/pages/other/NewEvaluation.js';
import { NewExposure } from '../../ClaimSolutions/pages/other/NewExposure.js';
import { NewGroup } from '../../ClaimSolutions/pages/other/NewGroup.js';
import { NewHoliday } from '../../ClaimSolutions/pages/other/NewHoliday.js';
import { NewInvoice } from '../../ClaimSolutions/pages/other/NewInvoice.js';
import { NewMatter } from '../../ClaimSolutions/pages/other/NewMatter.js';
import { NewNegotiation } from '../../ClaimSolutions/pages/other/NewNegotiation.js';
import { NewNoteWorksheet } from '../../ClaimSolutions/pages/other/NewNoteWorksheet.js';
import { NewProperty } from '../../ClaimSolutions/pages/other/NewProperty.js';
import { NewRIAgreement } from '../../ClaimSolutions/pages/other/NewRIAgreement.js';
import { NewRecoveryReserveSet } from '../../ClaimSolutions/pages/other/NewRecoveryReserveSet.js';
import { NewRecoverySet } from '../../ClaimSolutions/pages/other/NewRecoverySet.js';
import { NewRegion } from '../../ClaimSolutions/pages/other/NewRegion.js';
import { NewReserveSet } from '../../ClaimSolutions/pages/other/NewReserveSet.js';
import { NewRole } from '../../ClaimSolutions/pages/other/NewRole.js';
import { NewScriptParameter } from '../../ClaimSolutions/pages/other/NewScriptParameter.js';
import { NewSecurityZone } from '../../ClaimSolutions/pages/other/NewSecurityZone.js';
import { NewServiceRequest } from '../../ClaimSolutions/pages/other/NewServiceRequest.js';
import { NewUser } from '../../ClaimSolutions/pages/other/NewUser.js';

export class OnCCPage {
	getAdminmenulinks() {
		return new AdminMenuLinks();
	}

	getActivitypatterns() {
		return new ActivityPatterns();
	}

	getActivityrules() {
		return new ActivityRules();
	}

	getCcrulesexportimportstatus() {
		return new CCRulesExportImportStatus();
	}

	getExposurerules() {
		return new ExposureRules();
	}

	getReserverules() {
		return new ReserveRules();
	}

	getBusinessweek() {
		return new BusinessWeek();
	}

	getCatastrophes() {
		return new Catastrophes();
	}

	getIncompatiblenewexposure() {
		return new IncompatibleNewExposure();
	}

	getInvalidcoverageforcause() {
		return new InvalidCoverageForCause();
	}

	getInvalidcoverageforfault() {
		return new InvalidCoverageForFault();
	}

	getHolidays() {
		return new Holidays();
	}

	getIcd() {
		return new ICD();
	}

	getKeymetrics() {
		return new KeyMetrics();
	}

	getReinsurancethresholds() {
		return new ReinsuranceThresholds();
	}

	getDenialperiods() {
		return new DenialPeriods();
	}

	getWcbenefitparameterset() {
		return new WCBenefitParameterSet();
	}

	getWcpdbenefits() {
		return new WCPDBenefits();
	}

	getWcpdweeksandlimits() {
		return new WCPDWeeksAndLimits();
	}

	getWorkloadclassifications() {
		return new WorkloadClassifications();
	}

	getMessagingdestinationcontrollist() {
		return new MessagingDestinationControlList();
	}

	getWorkflowsearch() {
		return new WorkflowSearch();
	}

	getWorkflowstats() {
		return new WorkflowStats();
	}

	getAccountadmin() {
		return new AccountAdmin();
	}

	getCustomerservicetieradmin() {
		return new CustomerServiceTierAdmin();
	}

	getAdmingroupsearchpage() {
		return new AdminGroupSearchPage();
	}

	getAdminusersearchpage() {
		return new AdminUserSearchPage();
	}

	getAttributes() {
		return new Attributes();
	}

	getAuthoritylimitprofiles() {
		return new AuthorityLimitProfiles();
	}

	getRegions() {
		return new Regions();
	}

	getRoles() {
		return new Roles();
	}

	getSecurityzones() {
		return new SecurityZones();
	}

	getDatachangepage() {
		return new DataChangePage();
	}

	getExportdata() {
		return new ExportData();
	}

	getImportwizard() {
		return new ImportWizard();
	}

	getInboundfilesearch() {
		return new InboundFileSearch();
	}

	getOutboundfilesearch() {
		return new OutboundFileSearch();
	}

	getProperties() {
		return new Properties();
	}

	getBulkrestorearchivedclaimsrestorerecord() {
		return new BulkRestoreArchivedClaimsRestoreRecord();
	}

	getSearcharchivedclaims() {
		return new SearchArchivedClaims();
	}

	getScriptparameterspage() {
		return new ScriptParametersPage();
	}

	getDesktopmenulinks() {
		return new DesktopMenuLinks();
	}

	getBulkpay() {
		return new BulkPay();
	}

	getDesktopactivities() {
		return new DesktopActivities();
	}

	getDesktopawaitingassignment() {
		return new DesktopAwaitingAssignment();
	}

	getCalendar() {
		return new Calendar();
	}

	getSupervisorcalendar() {
		return new SupervisorCalendar();
	}

	getDesktopclaims() {
		return new DesktopClaims();
	}

	getDesktopexposures() {
		return new DesktopExposures();
	}

	getDesktopqueuedactivities() {
		return new DesktopQueuedActivities();
	}

	getDesktopsubrogations() {
		return new DesktopSubrogations();
	}

	getSearchmenulinks() {
		return new SearchMenuLinks();
	}

	getActivitysearch() {
		return new ActivitySearch();
	}

	getBulkinvoicesearch() {
		return new BulkInvoiceSearch();
	}

	getCatastrophesearch() {
		return new CatastropheSearch();
	}

	getClaimsearch() {
		return new ClaimSearch();
	}

	getFreetextclaimsearch() {
		return new FreeTextClaimSearch();
	}

	getSimpleclaimsearch() {
		return new SimpleClaimSearch();
	}

	getPaymentsearch() {
		return new PaymentSearch();
	}

	getRecoverysearch() {
		return new RecoverySearch();
	}

	getClaimmenulinks() {
		return new ClaimMenuLinks();
	}

	getClaimcalendar() {
		return new ClaimCalendar();
	}

	getSupervisorclaimcalendar() {
		return new SupervisorClaimCalendar();
	}

	getClaimdocuments() {
		return new ClaimDocuments();
	}

	getClaimexposures() {
		return new ClaimExposures();
	}

	getClaimfinancialschecks() {
		return new ClaimFinancialsChecks();
	}

	getClaimfinancialssummary() {
		return new ClaimFinancialsSummary();
	}

	getClaimfinancialstransactions() {
		return new ClaimFinancialsTransactions();
	}

	getClaimhistory() {
		return new ClaimHistory();
	}

	getClaimassociations() {
		return new ClaimAssociations();
	}

	getClaimlossdetails() {
		return new ClaimLossDetails();
	}

	getSidetails() {
		return new SIDetails();
	}

	getClaimmatters() {
		return new ClaimMatters();
	}

	getClaimnotes() {
		return new ClaimNotes();
	}

	getClaimcontacts() {
		return new ClaimContacts();
	}

	getClaimusers() {
		return new ClaimUsers();
	}

	getClaimevaluations() {
		return new ClaimEvaluations();
	}

	getClaimnegotiations() {
		return new ClaimNegotiations();
	}

	getClaimpolicyaggregatelimits() {
		return new ClaimPolicyAggregateLimits();
	}

	getClaimpolicyendorsements() {
		return new ClaimPolicyEndorsements();
	}

	getClaimpolicygeneral() {
		return new ClaimPolicyGeneral();
	}

	getClaimpolicylocations() {
		return new ClaimPolicyLocations();
	}

	getClaimpolicystatcodes() {
		return new ClaimPolicyStatCodes();
	}

	getClaimpolicytrips() {
		return new ClaimPolicyTrips();
	}

	getClaimpolicyvehicles() {
		return new ClaimPolicyVehicles();
	}

	getClaimservicerequests() {
		return new ClaimServiceRequests();
	}

	getClaimsnapshotdocuments() {
		return new ClaimSnapshotDocuments();
	}

	getClaimsnapshotexposures() {
		return new ClaimSnapshotExposures();
	}

	getClaimsnapshotextrafields() {
		return new ClaimSnapshotExtraFields();
	}

	getClaimsnapshotlossdetails() {
		return new ClaimSnapshotLossDetails();
	}

	getClaimsnapshotnotes() {
		return new ClaimSnapshotNotes();
	}

	getClaimsnapshotpartiesinvolved() {
		return new ClaimSnapshotPartiesInvolved();
	}

	getClaimsnapshotpolicy() {
		return new ClaimSnapshotPolicy();
	}

	getSubrogationgeneral() {
		return new SubrogationGeneral();
	}

	getSubrogationparties() {
		return new SubrogationParties();
	}

	getClaimkeymetrics() {
		return new ClaimKeyMetrics();
	}

	getClaimstatus() {
		return new ClaimStatus();
	}

	getClaimsummary() {
		return new ClaimSummary();
	}

	getClaimworkplan() {
		return new ClaimWorkplan();
	}

	getReinsurancesummary() {
		return new ReinsuranceSummary();
	}

	getAddressbookmenulinks() {
		return new AddressBookMenuLinks();
	}

	getAddressbooksearch() {
		return new AddressBookSearch();
	}

	getDashboardsubgroupmenulinks() {
		return new DashboardSubGroupMenuLinks();
	}

	getDashboardclaimactivity() {
		return new DashboardClaimActivity();
	}

	getDashboardclaimcount() {
		return new DashboardClaimCount();
	}

	getDashboardcurrentfinancials() {
		return new DashboardCurrentFinancials();
	}

	getDashboardperiodfinancials() {
		return new DashboardPeriodFinancials();
	}

	getTeamgroupgroupmenulinks() {
		return new TeamGroupGroupMenuLinks();
	}

	getTeamgroupactivities() {
		return new TeamGroupActivities();
	}

	getTeamgroupaging() {
		return new TeamGroupAging();
	}

	getTeamgroupclaims() {
		return new TeamGroupClaims();
	}

	getTeamgroupexposures() {
		return new TeamGroupExposures();
	}

	getTeamgroupmatters() {
		return new TeamGroupMatters();
	}

	getTeamgroupsubrogations() {
		return new TeamGroupSubrogations();
	}

	getTeamgroupsummary() {
		return new TeamGroupSummary();
	}

	getVacationmenulinks() {
		return new VacationMenuLinks();
	}

	getVacationactivities() {
		return new VacationActivities();
	}

	getVacationclaims() {
		return new VacationClaims();
	}

	getVacationexposures() {
		return new VacationExposures();
	}

	getServertoolsmenulinks() {
		return new ServerToolsMenuLinks();
	}

	getBatchprocessinfo() {
		return new BatchProcessInfo();
	}

	getCentipedecacheinfo() {
		return new CentipedeCacheInfo();
	}

	getCentipedecacheinfodetails() {
		return new CentipedeCacheInfoDetails();
	}

	getCentipedecacheinfohistory() {
		return new CentipedeCacheInfoHistory();
	}

	getClustercomponents() {
		return new ClusterComponents();
	}

	getClustermembers() {
		return new ClusterMembers();
	}

	getArchivegraphinfo() {
		return new ArchiveGraphInfo();
	}

	getArchiveinfo() {
		return new ArchiveInfo();
	}

	getConfigurationinfo() {
		return new ConfigurationInfo();
	}

	getConsistencychecks() {
		return new ConsistencyChecks();
	}

	getDatadistributioninfo() {
		return new DataDistributionInfo();
	}

	getDatabaseparameters() {
		return new DatabaseParameters();
	}

	getDatabasestatistics() {
		return new DatabaseStatistics();
	}

	getDatabasestorage() {
		return new DatabaseStorage();
	}

	getDatabasetableinfo() {
		return new DatabaseTableInfo();
	}

	getLoaderrorsinfo() {
		return new LoadErrorsInfo();
	}

	getLoadhistoryinfo() {
		return new LoadHistoryInfo();
	}

	getLoadintegritychecks() {
		return new LoadIntegrityChecks();
	}

	getLoadedgosuclasses() {
		return new LoadedGosuClasses();
	}

	getMicrosoftdmvinfo() {
		return new MicrosoftDMVInfo();
	}

	getMicrosoftdriverlogging() {
		return new MicrosoftDriverLogging();
	}

	getOracleawrinfo() {
		return new OracleAWRInfo();
	}

	getOracleawrunusedindexesinfo() {
		return new OracleAWRUnusedIndexesInfo();
	}

	getOracleoutlineinfo() {
		return new OracleOutlineInfo();
	}

	getOraclestatspackinfo() {
		return new OracleStatspackInfo();
	}

	getPostgresqlperfinfo() {
		return new PostgreSQLPerfInfo();
	}

	getRuntimeenvironmentinfo() {
		return new RuntimeEnvironmentInfo();
	}

	getSafepersistingorderinfo() {
		return new SafePersistingOrderInfo();
	}

	getSerializationinfo() {
		return new SerializationInfo();
	}

	getWorksetinfo() {
		return new WorksetInfo();
	}

	getIntentionallogging() {
		return new IntentionalLogging();
	}

	getJprofiler() {
		return new JProfiler();
	}

	getMbeans() {
		return new MBeans();
	}

	getMetroflows() {
		return new MetroFlows();
	}

	getProfileranalysispage() {
		return new ProfilerAnalysisPage();
	}

	getProfilerconfigurationpage() {
		return new ProfilerConfigurationPage();
	}

	getSetloglevel() {
		return new SetLogLevel();
	}

	getStartableplugin() {
		return new StartablePlugin();
	}

	getUpgradeinfo() {
		return new UpgradeInfo();
	}

	getViewlogs() {
		return new ViewLogs();
	}

	getWorkqueueinfo() {
		return new WorkQueueInfo();
	}

	getUnsupportedtoolsmenulinks() {
		return new UnsupportedToolsMenuLinks();
	}

	getCcsampledata() {
		return new CCSampleData();
	}

	getReload() {
		return new Reload();
	}

	getServerperformance() {
		return new ServerPerformance();
	}

	getSolrreindexing() {
		return new SolrReIndexing();
	}

	getSystemclock() {
		return new SystemClock();
	}

	getTeamtabbar() {
		return new TeamTabBar();
	}

	getVacationtabbar() {
		return new VacationTabBar();
	}

	getDesktoptabbar() {
		return new DesktopTabBar();
	}

	getReporttabbar() {
		return new ReportTabBar();
	}

	getAddressbooktabbar() {
		return new AddressBookTabBar();
	}

	getAdmintabbar() {
		return new AdminTabBar();
	}

	getAdmin() {
		return new Admin();
	}

	getDashboardtabbar() {
		return new DashboardTabBar();
	}

	getSearchtabbar() {
		return new SearchTabBar();
	}

	getClaimtabbar() {
		return new ClaimTabBar();
	}

	getFnolwizard() {
		return new FNOLWizard();
	}

	getServertoolstabbar() {
		return new ServerToolsTabBar();
	}

	getUnsupportedtoolstabbar() {
		return new UnsupportedToolsTabBar();
	}

	getAdminmenuactions() {
		return new AdminMenuActions();
	}

	getDesktopmenuactions() {
		return new DesktopMenuActions();
	}

	getSearchmenuactions() {
		return new SearchMenuActions();
	}

	getClaimmenuactions() {
		return new ClaimMenuActions();
	}

	getVacationmenuactions() {
		return new VacationMenuActions();
	}

	getServertoolsmenuactions() {
		return new ServerToolsMenuActions();
	}

	getUnsupportedtoolsmenuactions() {
		return new UnsupportedToolsMenuActions();
	}

	getAcceptedworkpopup() {
		return new AcceptedWorkPopup();
	}

	getAdddelaypopup() {
		return new AddDelayPopup();
	}

	getAddexistingpartyinvolvedpopup() {
		return new AddExistingPartyInvolvedPopup();
	}

	getAddrevisequotepopup() {
		return new AddReviseQuotePopup();
	}

	getAddselectedduplicatepartiesinvolvedpopup() {
		return new AddSelectedDuplicatePartiesInvolvedPopup();
	}

	getAdditionaltripaccommodationaddresspopup() {
		return new AdditionalTripAccommodationAddressPopup();
	}

	getAdditionaltripsegmentpopup() {
		return new AdditionalTripSegmentPopup();
	}

	getAddressbookcontactdetailpopup() {
		return new AddressBookContactDetailPopup();
	}

	getAddressbookcontactsearchpopupdv() {
		return new AddressBookContactSearchPopupDV();
	}

	getAddressbookdirectionspopup() {
		return new AddressBookDirectionsPopup();
	}

	getAddressbookpickerpopup() {
		return new AddressBookPickerPopup();
	}

	getAddressbooksearchnewcontactpopup() {
		return new AddressBookSearchNewContactPopup();
	}

	getAdjustrirecoverablespopup() {
		return new AdjustRIRecoverablesPopup();
	}

	getApprovequotepopup() {
		return new ApproveQuotePopup();
	}

	getArchiveclaimretrievepopup() {
		return new ArchiveClaimRetrievePopup();
	}

	getArchiveitemlistpopup() {
		return new ArchiveItemListPopup();
	}

	getAssignactivitiespopup() {
		return new AssignActivitiesPopup();
	}

	getAssignclaimspopup() {
		return new AssignClaimsPopup();
	}

	getAssignexposurespopup() {
		return new AssignExposuresPopup();
	}

	getAssignmatterspopup() {
		return new AssignMattersPopup();
	}

	getAssignservicerequestpopup() {
		return new AssignServiceRequestPopup();
	}

	getAssignsubrogationpopup() {
		return new AssignSubrogationPopup();
	}

	getAssigneepickerpopup() {
		return new AssigneePickerPopup();
	}

	getAssignmentorggrouptreepopup() {
		return new AssignmentOrgGroupTreePopup();
	}

	getAssignmentpopupdv() {
		return new AssignmentPopupDV();
	}

	getAssignmentpopupscreen() {
		return new AssignmentPopupScreen();
	}

	getAttachdocumentspopup() {
		return new AttachDocumentsPopup();
	}

	getAttachstatementdocumentspopup() {
		return new AttachStatementDocumentsPopup();
	}

	getAutomatedactivityhandlerdetailpopup() {
		return new AutomatedActivityHandlerDetailPopup();
	}

	getAutomatednotificationhandlerdetailpopup() {
		return new AutomatedNotificationHandlerDetailPopup();
	}

	getBaggageincidentpopup() {
		return new BaggageIncidentPopup();
	}

	getBulkeditdocumentdetailspopup() {
		return new BulkEditDocumentDetailsPopup();
	}

	getBulkrestoreclaimsassociationsearchpopup() {
		return new BulkRestoreClaimsAssociationSearchPopup();
	}

	getCcrulecomparisonpopup() {
		return new CCRuleComparisonPopup();
	}

	getCcruleeditpopup() {
		return new CCRuleEditPopup();
	}

	getCcruleversiondetailspopup() {
		return new CCRuleVersionDetailsPopup();
	}

	getCheckwizard_paymentdeductionspagepopup() {
		return new CheckWizard_PaymentDeductionsPagePopup();
	}

	getChoosepropertycontentsscheduleditempopup() {
		return new ChoosePropertyContentsScheduledItemPopup();
	}

	getClaimassociationsearchpopup() {
		return new ClaimAssociationSearchPopup();
	}

	getClaimcontactdetailpopup() {
		return new ClaimContactDetailPopup();
	}

	getClaimcontacttransferrolespopup() {
		return new ClaimContactTransferRolesPopup();
	}

	getClaimnewdocumentfromactivitypopup() {
		return new ClaimNewDocumentFromActivityPopup();
	}

	getClaimpolicyselectpolicypopup() {
		return new ClaimPolicySelectPolicyPopup();
	}

	getClaimpolicystatcodepickerpopup() {
		return new ClaimPolicyStatCodePickerPopup();
	}

	getClaimsearchpopup() {
		return new ClaimSearchPopup();
	}

	getClaimsnapshotbaggageincidentpopup() {
		return new ClaimSnapshotBaggageIncidentPopup();
	}

	getClaimsnapshotcovterm700popup() {
		return new ClaimSnapshotCovTerm700Popup();
	}

	getClaimsnapshotcovterm800popup() {
		return new ClaimSnapshotCovTerm800Popup();
	}

	getClaimsnapshotcovtermpopup() {
		return new ClaimSnapshotCovTermPopup();
	}

	getClaimsnapshotdwellingincident600popup() {
		return new ClaimSnapshotDwellingIncident600Popup();
	}

	getClaimsnapshotdwellingincident700popup() {
		return new ClaimSnapshotDwellingIncident700Popup();
	}

	getClaimsnapshotdwellingincident800popup() {
		return new ClaimSnapshotDwellingIncident800Popup();
	}

	getClaimsnapshotdwellingincidentpopup() {
		return new ClaimSnapshotDwellingIncidentPopup();
	}

	getClaimsnapshotfixedpropertyincidentpopup() {
		return new ClaimSnapshotFixedPropertyIncidentPopup();
	}

	getClaimsnapshotinjuredinjuryincident600popup() {
		return new ClaimSnapshotInjuredInjuryIncident600Popup();
	}

	getClaimsnapshotinjuredinjuryincident700popup() {
		return new ClaimSnapshotInjuredInjuryIncident700Popup();
	}

	getClaimsnapshotinjuredinjuryincident800popup() {
		return new ClaimSnapshotInjuredInjuryIncident800Popup();
	}

	getClaimsnapshotinjuredinjuryincidentpopup() {
		return new ClaimSnapshotInjuredInjuryIncidentPopup();
	}

	getClaimsnapshotinjuryincidentpopup() {
		return new ClaimSnapshotInjuryIncidentPopup();
	}

	getClaimsnapshotlivingexpensesincident600popup() {
		return new ClaimSnapshotLivingExpensesIncident600Popup();
	}

	getClaimsnapshotlivingexpensesincident700popup() {
		return new ClaimSnapshotLivingExpensesIncident700Popup();
	}

	getClaimsnapshotlivingexpensesincident800popup() {
		return new ClaimSnapshotLivingExpensesIncident800Popup();
	}

	getClaimsnapshotlivingexpensesincidentpopup() {
		return new ClaimSnapshotLivingExpensesIncidentPopup();
	}

	getClaimsnapshototherstructureincident600popup() {
		return new ClaimSnapshotOtherStructureIncident600Popup();
	}

	getClaimsnapshototherstructureincident700popup() {
		return new ClaimSnapshotOtherStructureIncident700Popup();
	}

	getClaimsnapshototherstructureincident800popup() {
		return new ClaimSnapshotOtherStructureIncident800Popup();
	}

	getClaimsnapshototherstructureincidentpopup() {
		return new ClaimSnapshotOtherStructureIncidentPopup();
	}

	getClaimsnapshotpolicylocation700popup() {
		return new ClaimSnapshotPolicyLocation700Popup();
	}

	getClaimsnapshotpolicylocation800popup() {
		return new ClaimSnapshotPolicyLocation800Popup();
	}

	getClaimsnapshotpolicylocationpopup() {
		return new ClaimSnapshotPolicyLocationPopup();
	}

	getClaimsnapshotpropertycontentsincident600popup() {
		return new ClaimSnapshotPropertyContentsIncident600Popup();
	}

	getClaimsnapshotpropertycontentsincident700popup() {
		return new ClaimSnapshotPropertyContentsIncident700Popup();
	}

	getClaimsnapshotpropertycontentsincident800popup() {
		return new ClaimSnapshotPropertyContentsIncident800Popup();
	}

	getClaimsnapshotpropertycontentsincidentpopup() {
		return new ClaimSnapshotPropertyContentsIncidentPopup();
	}

	getClaimsnapshottripincidentpopup() {
		return new ClaimSnapshotTripIncidentPopup();
	}

	getClaimsnapshotvehicleincidentpopup() {
		return new ClaimSnapshotVehicleIncidentPopup();
	}

	getClaimsyncstatuspopup() {
		return new ClaimSyncStatusPopup();
	}

	getCloseclaimpopup() {
		return new CloseClaimPopup();
	}

	getCloseexposurepopup() {
		return new CloseExposurePopup();
	}

	getClosematterpopup() {
		return new CloseMatterPopup();
	}

	getClustercomponenthistorypopup() {
		return new ClusterComponentHistoryPopup();
	}

	getClustercomponentsdownloadconfigurepopup() {
		return new ClusterComponentsDownloadConfigurePopup();
	}

	getClustercomponentsfilterbycomponentpopup() {
		return new ClusterComponentsFilterByComponentPopup();
	}

	getClustermemberusersessionspopup() {
		return new ClusterMemberUserSessionsPopup();
	}

	getClustermembersdownloadconfigurepopup() {
		return new ClusterMembersDownloadConfigurePopup();
	}

	getCommanddefinitionparameterlocalizationspopup() {
		return new CommandDefinitionParameterLocalizationsPopup();
	}

	getConsistencycheckschangenumofworkerspopup() {
		return new ConsistencyChecksChangeNumOfWorkersPopup();
	}

	getContactdocumentdetailspopup() {
		return new ContactDocumentDetailsPopup();
	}

	getContactreviewpopup() {
		return new ContactReviewPopup();
	}

	getContainsexpressionpopup() {
		return new ContainsExpressionPopup();
	}

	getCountexpressionpopup() {
		return new CountExpressionPopup();
	}

	getCovtermpopup() {
		return new CovTermPopup();
	}

	getCreatereviewpopup() {
		return new CreateReviewPopup();
	}

	getDenialperiodpopup() {
		return new DenialPeriodPopup();
	}

	getDeployconfirmationpopup() {
		return new DeployConfirmationPopup();
	}

	getDocumentdetailspopup() {
		return new DocumentDetailsPopup();
	}

	getDocumenttemplatesearchpopup() {
		return new DocumentTemplateSearchPopup();
	}

	getDuplicateclaimlossdetailspopup() {
		return new DuplicateClaimLossDetailsPopup();
	}

	getDuplicatecontactpopup() {
		return new DuplicateContactPopup();
	}

	getEditdwellingincidentpopup() {
		return new EditDwellingIncidentPopup();
	}

	getEditfixedpropertyincidentpopup() {
		return new EditFixedPropertyIncidentPopup();
	}

	getEditinjuryincidentpopup() {
		return new EditInjuryIncidentPopup();
	}

	getEditlivingexpensesincidentpopup() {
		return new EditLivingExpensesIncidentPopup();
	}

	getEditnotepopup() {
		return new EditNotePopup();
	}

	getEditotherstructureincidentpopup() {
		return new EditOtherStructureIncidentPopup();
	}

	getEditpropertycontentsincidentpopup() {
		return new EditPropertyContentsIncidentPopup();
	}

	getEditreferencenumberpopup() {
		return new EditReferenceNumberPopup();
	}

	getEditvehicleincidentpopup() {
		return new EditVehicleIncidentPopup();
	}

	getEnablebatchprocesspopup() {
		return new EnableBatchProcessPopup();
	}

	getEnablegosuservletpopup() {
		return new EnableGosuServletPopup();
	}

	getEnablemessagedestinationpopup() {
		return new EnableMessageDestinationPopup();
	}

	getEnablerestoperationpopup() {
		return new EnableRestOperationPopup();
	}

	getEnablestartablepluginpopup() {
		return new EnableStartablePluginPopup();
	}

	getEnablewebservicepopup() {
		return new EnableWebServicePopup();
	}

	getEnableworkqueuepopup() {
		return new EnableWorkQueuePopup();
	}

	getFnolcontactpopup() {
		return new FNOLContactPopup();
	}

	getFnolinjuryincidentpopup() {
		return new FNOLInjuryIncidentPopup();
	}

	getFnolvehicleincidentpopup() {
		return new FNOLVehicleIncidentPopup();
	}

	getFnolwizard_editnotepopup() {
		return new FNOLWizard_EditNotePopup();
	}

	getFixpropassessitempopup() {
		return new FixPropAssessItemPopup();
	}

	getFixpropassesssourcepopup() {
		return new FixPropAssessSourcePopup();
	}

	getFixpropcontentitempopup() {
		return new FixPropContentItemPopup();
	}

	getForcebackoutconfirmpopup() {
		return new ForceBackoutConfirmPopup();
	}

	getForcecancelconfirmpopup() {
		return new ForceCancelConfirmPopup();
	}

	getGroupregionpopup() {
		return new GroupRegionPopup();
	}

	getGroupsearchpopup() {
		return new GroupSearchPopup();
	}

	getGroupuserpickerpopup() {
		return new GroupUserPickerPopup();
	}

	getIcdcodepopup() {
		return new ICDCodePopup();
	}

	getIcdpopup() {
		return new ICDPopup();
	}

	getIsomatchreportdetailpopup() {
		return new ISOMatchReportDetailPopup();
	}

	getImportwizard_arraydiffpopup() {
		return new ImportWizard_ArrayDiffPopup();
	}

	getInboundconfigpopup() {
		return new InboundConfigPopup();
	}

	getInboundrecordpopup() {
		return new InboundRecordPopup();
	}

	getIncidentassessitempopup() {
		return new IncidentAssessItemPopup();
	}

	getIncidentassesssourcepopup() {
		return new IncidentAssessSourcePopup();
	}

	getInitiatebackoutconfirmpopup() {
		return new InitiateBackoutConfirmPopup();
	}

	getInitiatebackoutpopup() {
		return new InitiateBackoutPopup();
	}

	getLoadfactorspopup() {
		return new LoadFactorsPopup();
	}

	getLoadintegritycheckscompoundlvpopup() {
		return new LoadIntegrityChecksCompoundLVPopup();
	}

	getLookupexpressionpopup() {
		return new LookupExpressionPopup();
	}

	getMarkinvoicepaidpopup() {
		return new MarkInvoicePaidPopup();
	}

	getMessagepayloadpopup() {
		return new MessagePayloadPopup();
	}

	getMetroreportdetailspopup() {
		return new MetroReportDetailsPopup();
	}

	getMultiusersearchpopup() {
		return new MultiUserSearchPopup();
	}

	getNewautomatedactivityhandlerpopup() {
		return new NewAutomatedActivityHandlerPopup();
	}

	getNewautomatednotificationhandlerpopup() {
		return new NewAutomatedNotificationHandlerPopup();
	}

	getNewcheckwizardaddressbookpickerpopup() {
		return new NewCheckWizardAddressBookPickerPopup();
	}

	getNewclaimwizard_endorsementdetailpopup() {
		return new NewClaimWizard_EndorsementDetailPopup();
	}

	getNewclaimwizard_exposurepagepopup() {
		return new NewClaimWizard_ExposurePagePopup();
	}

	getNewclaimwizard_newendorsementpopup() {
		return new NewClaimWizard_NewEndorsementPopup();
	}

	getNewclaimwizard_newexposurepopup() {
		return new NewClaimWizard_NewExposurePopup();
	}

	getNewclaimwizard_newpolicyvehiclepopup() {
		return new NewClaimWizard_NewPolicyVehiclePopup();
	}

	getNewclaimwizard_newstatcodepopup() {
		return new NewClaimWizard_NewStatCodePopup();
	}

	getNewclaimwizard_partyinvolvedpopup() {
		return new NewClaimWizard_PartyInvolvedPopup();
	}

	getNewclaimwizard_policyvehicledetailpopup() {
		return new NewClaimWizard_PolicyVehicleDetailPopup();
	}

	getNewclaimwizard_statcodedetailpopup() {
		return new NewClaimWizard_StatCodeDetailPopup();
	}

	getNewcontactpopup() {
		return new NewContactPopup();
	}

	getNewdwellingincidentpopup() {
		return new NewDwellingIncidentPopup();
	}

	getNewfixpropassessitempopup() {
		return new NewFixPropAssessItemPopup();
	}

	getNewfixpropassesssourcepopup() {
		return new NewFixPropAssessSourcePopup();
	}

	getNewfixpropcontentitempopup() {
		return new NewFixPropContentItemPopup();
	}

	getNewfixedpropertyincidentpopup() {
		return new NewFixedPropertyIncidentPopup();
	}

	getNewicdpopup() {
		return new NewICDPopup();
	}

	getNewinboundlocalconfigpopup() {
		return new NewInboundLocalConfigPopup();
	}

	getNewinbounds3configpopup() {
		return new NewInboundS3ConfigPopup();
	}

	getNewincidentassessitempopup() {
		return new NewIncidentAssessItemPopup();
	}

	getNewincidentassesssourcepopup() {
		return new NewIncidentAssessSourcePopup();
	}

	getNewinjuryincidentpopup() {
		return new NewInjuryIncidentPopup();
	}

	getNewlivingexpensesincidentpopup() {
		return new NewLivingExpensesIncidentPopup();
	}

	getNewmetroreportdetailspopup() {
		return new NewMetroReportDetailsPopup();
	}

	getNewnotepopup() {
		return new NewNotePopup();
	}

	getNewotherstructureincidentpopup() {
		return new NewOtherStructureIncidentPopup();
	}

	getNewoutboundlocalconfigpopup() {
		return new NewOutboundLocalConfigPopup();
	}

	getNewoutbounds3configpopup() {
		return new NewOutboundS3ConfigPopup();
	}

	getNewpartyinvolvedpopup() {
		return new NewPartyInvolvedPopup();
	}

	getNewpropertycontentsincidentpopup() {
		return new NewPropertyContentsIncidentPopup();
	}

	getNewrecoveryreservemulticurrencypopup() {
		return new NewRecoveryReserveMultiCurrencyPopup();
	}

	getNewreservemulticurrencypopup() {
		return new NewReserveMultiCurrencyPopup();
	}

	getNewsubroadversepartypopup() {
		return new NewSubroAdversePartyPopup();
	}

	getNewvehassessitempopup() {
		return new NewVehAssessItemPopup();
	}

	getNewvehassesssourcepopup() {
		return new NewVehAssessSourcePopup();
	}

	getNewvehicleincidentpopup() {
		return new NewVehicleIncidentPopup();
	}

	getNewworkstatuspopup() {
		return new NewWorkStatusPopup();
	}

	getNewworkloadclassificationpopup() {
		return new NewWorkloadClassificationPopup();
	}

	getNullclaimcontactdetailpopup() {
		return new NullClaimContactDetailPopup();
	}

	getOperationreasonpromptpopup() {
		return new OperationReasonPromptPopup();
	}

	getOracleoutlinedetailspopup() {
		return new OracleOutlineDetailsPopup();
	}

	getOraclestatisticspreferencesconfigpopup() {
		return new OracleStatisticsPreferencesConfigPopup();
	}

	getOrganizationgrouptreepopup() {
		return new OrganizationGroupTreePopup();
	}

	getOrganizationsearchpopup() {
		return new OrganizationSearchPopup();
	}

	getOtherinstructionpopup() {
		return new OtherInstructionPopup();
	}

	getOtherservicerequestpopup() {
		return new OtherServiceRequestPopup();
	}

	getOutboundconfigpopup() {
		return new OutboundConfigPopup();
	}

	getOutboundrecordpopup() {
		return new OutboundRecordPopup();
	}

	getPaymenttransferpopup() {
		return new PaymentTransferPopup();
	}

	getPickemailtemplatepopup() {
		return new PickEmailTemplatePopup();
	}

	getPickexistingdocumentpopup() {
		return new PickExistingDocumentPopup();
	}

	getPicknotetemplatepopup() {
		return new PickNoteTemplatePopup();
	}

	getPicksavedfilepopup() {
		return new PickSavedFilePopup();
	}

	getPlannedshutdownpopup() {
		return new PlannedShutdownPopup();
	}

	getPlannedshutdownstatuspopup() {
		return new PlannedShutdownStatusPopup();
	}

	getPolicylocationpopup() {
		return new PolicyLocationPopup();
	}

	getPolicysummaryinfopopup() {
		return new PolicySummaryInfoPopup();
	}

	getPrintoptionpopup() {
		return new PrintOptionPopup();
	}

	getProfileranalysispopup() {
		return new ProfilerAnalysisPopup();
	}

	getProfilerpopup() {
		return new ProfilerPopup();
	}

	getPropertyreferencepopup() {
		return new PropertyReferencePopup();
	}

	getQuotedetailspopup() {
		return new QuoteDetailsPopup();
	}

	getRdmdatasetsearchpopup() {
		return new RDMDatasetSearchPopup();
	}

	getRdmrecordsearchpopup() {
		return new RDMRecordSearchPopup();
	}

	getRiagreementgrouppopup() {
		return new RIAgreementGroupPopup();
	}

	getRefersubrogationpopup() {
		return new ReferSubrogationPopup();
	}

	getRejectinvoicepopup() {
		return new RejectInvoicePopup();
	}

	getReopenclaimpopup() {
		return new ReopenClaimPopup();
	}

	getReopenexposurepopup() {
		return new ReopenExposurePopup();
	}

	getReopenmatterpopup() {
		return new ReopenMatterPopup();
	}

	getRequestrequotepopup() {
		return new RequestRequotePopup();
	}

	getRuleeditpopuptoolbarbuttonset() {
		return new RuleEditPopupToolbarButtonSet();
	}

	getRuleexportallconfirmationpopup() {
		return new RuleExportAllConfirmationPopup();
	}

	getRuleexportdetailspopup() {
		return new RuleExportDetailsPopup();
	}

	getRuleexportimportfailurepopup() {
		return new RuleExportImportFailurePopup();
	}

	getRuleimportallpopup() {
		return new RuleImportAllPopup();
	}

	getRuleimportdetailspopup() {
		return new RuleImportDetailsPopup();
	}

	getRulemanagementauditpopup() {
		return new RuleManagementAuditPopup();
	}

	getRuncommandpopup() {
		return new RunCommandPopup();
	}

	getSelectservicespopup() {
		return new SelectServicesPopup();
	}

	getServicerequestmessagepopup() {
		return new ServiceRequestMessagePopup();
	}

	getStartbluegreenupgradepopup() {
		return new StartBlueGreenUpgradePopup();
	}

	getStartfullupgradepopup() {
		return new StartFullUpgradePopup();
	}

	getStartrollingupgradepopup() {
		return new StartRollingUpgradePopup();
	}

	getStartrulecsvimportpopup() {
		return new StartRuleCsvImportPopup();
	}

	getStartruleimportpopup() {
		return new StartRuleImportPopup();
	}

	getSumexpressionpopup() {
		return new SumExpressionPopup();
	}

	getTeamclaimremoveflagpopup() {
		return new TeamClaimRemoveFlagPopup();
	}

	getTimesearchpopup() {
		return new TimeSearchPopup();
	}

	getTotallosscalculatorpopup() {
		return new TotalLossCalculatorPopup();
	}

	getTripaccommodationaddresspopup() {
		return new TripAccommodationAddressPopup();
	}

	getTripincidentpopup() {
		return new TripIncidentPopup();
	}

	getTriprupopup() {
		return new TripRUPopup();
	}

	getTripsegmentpopup() {
		return new TripSegmentPopup();
	}

	getUnusedserverrolespopup() {
		return new UnusedServerRolesPopup();
	}

	getUploaddocumentcontentpopup() {
		return new UploadDocumentContentPopup();
	}

	getUserassignmentcalendarpopup() {
		return new UserAssignmentCalendarPopup();
	}

	getUserattributespopup() {
		return new UserAttributesPopup();
	}

	getUsercontactdetailpopup() {
		return new UserContactDetailPopup();
	}

	getUserregionpopup() {
		return new UserRegionPopup();
	}

	getUsersearchpopup() {
		return new UserSearchPopup();
	}

	getUserselectpopup() {
		return new UserSelectPopup();
	}

	getValidationpopuperrorsinputset() {
		return new ValidationPopupErrorsInputSet();
	}

	getVehassessitempopup() {
		return new VehAssessItemPopup();
	}

	getVehassesssourcepopup() {
		return new VehAssessSourcePopup();
	}

	getWcbenefitparametersetpopup() {
		return new WCBenefitParameterSetPopup();
	}

	getWorkqueuehistorydownloadconfigurepopup() {
		return new WorkQueueHistoryDownloadConfigurePopup();
	}

	getWorkqueueinfodownloadconfigurepopup() {
		return new WorkQueueInfoDownloadConfigurePopup();
	}

	getWorkqueuerawdatadownloadconfigurepopup() {
		return new WorkQueueRawDataDownloadConfigurePopup();
	}

	getWorkstatuspopup() {
		return new WorkStatusPopup();
	}

	getWorkloadclassificationdetailpopup() {
		return new WorkloadClassificationDetailPopup();
	}

	getNewaccount() {
		return new NewAccount();
	}

	getNewactivity() {
		return new NewActivity();
	}

	getNewactivitypattern() {
		return new NewActivityPattern();
	}

	getNewassignablequeue() {
		return new NewAssignableQueue();
	}

	getNewattribute() {
		return new NewAttribute();
	}

	getNewauthoritylimitprofile() {
		return new NewAuthorityLimitProfile();
	}

	getNewbulkinvoicedetail() {
		return new NewBulkInvoiceDetail();
	}

	getNewbulkrestorearchivedclaims() {
		return new NewBulkRestoreArchivedClaims();
	}

	getNewbusinessweek() {
		return new NewBusinessWeek();
	}

	getNewcatastrophe() {
		return new NewCatastrophe();
	}

	getNewchecknoabilitytopay() {
		return new NewCheckNoAbilityToPay();
	}

	getNewclaimassociation() {
		return new NewClaimAssociation();
	}

	getNewclaimduplicatesworksheet() {
		return new NewClaimDuplicatesWorksheet();
	}

	getNewclaimnewdocumentexistsworksheet() {
		return new NewClaimNewDocumentExistsWorksheet();
	}

	getNewclaimnewdocumentfromtemplateworksheet() {
		return new NewClaimNewDocumentFromTemplateWorksheet();
	}

	getNewclaimnewdocumentlinkedworksheet() {
		return new NewClaimNewDocumentLinkedWorksheet();
	}

	getNewclaimsaved() {
		return new NewClaimSaved();
	}

	getNewcustomerservicetier() {
		return new NewCustomerServiceTier();
	}

	getNewevaluation() {
		return new NewEvaluation();
	}

	getNewexposure() {
		return new NewExposure();
	}

	getNewgroup() {
		return new NewGroup();
	}

	getNewholiday() {
		return new NewHoliday();
	}

	getNewinvoice() {
		return new NewInvoice();
	}

	getNewmatter() {
		return new NewMatter();
	}

	getNewnegotiation() {
		return new NewNegotiation();
	}

	getNewnoteworksheet() {
		return new NewNoteWorksheet();
	}

	getNewproperty() {
		return new NewProperty();
	}

	getNewriagreement() {
		return new NewRIAgreement();
	}

	getNewrecoveryreserveset() {
		return new NewRecoveryReserveSet();
	}

	getNewrecoveryset() {
		return new NewRecoverySet();
	}

	getNewregion() {
		return new NewRegion();
	}

	getNewreserveset() {
		return new NewReserveSet();
	}

	getNewrole() {
		return new NewRole();
	}

	getNewscriptparameter() {
		return new NewScriptParameter();
	}

	getNewsecurityzone() {
		return new NewSecurityZone();
	}

	getNewservicerequest() {
		return new NewServiceRequest();
	}

	getNewuser() {
		return new NewUser();
	}

}
