import { AdminMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/AdminMenuLinks.js';
import { ActivityPatterns } from '../../claimsolutions/pages/admin/businessSettings/ActivityPatterns.js';
import { ActivityRules } from '../../claimsolutions/pages/admin/businessSettings/businessRules/ActivityRules.js';
import { CCRulesExportImportStatus } from '../../claimsolutions/pages/admin/businessSettings/businessRules/CCRulesExportImportStatus.js';
import { ExposureRules } from '../../claimsolutions/pages/admin/businessSettings/businessRules/ExposureRules.js';
import { ReserveRules } from '../../claimsolutions/pages/admin/businessSettings/businessRules/ReserveRules.js';
import { BusinessWeek } from '../../claimsolutions/pages/admin/businessSettings/BusinessWeek.js';
import { Catastrophes } from '../../claimsolutions/pages/admin/businessSettings/Catastrophes.js';
import { IncompatibleNewExposure } from '../../claimsolutions/pages/admin/businessSettings/coverageDetermination/IncompatibleNewExposure.js';
import { InvalidCoverageForCause } from '../../claimsolutions/pages/admin/businessSettings/coverageDetermination/InvalidCoverageForCause.js';
import { InvalidCoverageForFault } from '../../claimsolutions/pages/admin/businessSettings/coverageDetermination/InvalidCoverageForFault.js';
import { Holidays } from '../../claimsolutions/pages/admin/businessSettings/Holidays.js';
import { ICD } from '../../claimsolutions/pages/admin/businessSettings/ICD.js';
import { KeyMetrics } from '../../claimsolutions/pages/admin/businessSettings/KeyMetrics.js';
import { ReinsuranceThresholds } from '../../claimsolutions/pages/admin/businessSettings/ReinsuranceThresholds.js';
import { DenialPeriods } from '../../claimsolutions/pages/admin/businessSettings/wCParms/DenialPeriods.js';
import { WCBenefitParameterSet } from '../../claimsolutions/pages/admin/businessSettings/wCParms/WCBenefitParameterSet.js';
import { WCPDBenefits } from '../../claimsolutions/pages/admin/businessSettings/wCParms/WCPDBenefits.js';
import { WCPDWeeksAndLimits } from '../../claimsolutions/pages/admin/businessSettings/wCParms/WCPDWeeksAndLimits.js';
import { WorkloadClassifications } from '../../claimsolutions/pages/admin/businessSettings/WorkloadClassifications.js';
import { MessagingDestinationControlList } from '../../claimsolutions/pages/admin/monitoring/MessagingDestinationControlList.js';
import { WorkflowSearch } from '../../claimsolutions/pages/admin/monitoring/WorkflowSearch.js';
import { WorkflowStats } from '../../claimsolutions/pages/admin/monitoring/WorkflowStats.js';
import { AccountAdmin } from '../../claimsolutions/pages/admin/specialHandling/AccountAdmin.js';
import { CustomerServiceTierAdmin } from '../../claimsolutions/pages/admin/specialHandling/CustomerServiceTierAdmin.js';
import { AdminGroupSearchPage } from '../../claimsolutions/pages/admin/usersAndSecurity/AdminGroupSearchPage.js';
import { AdminUserSearchPage } from '../../claimsolutions/pages/admin/usersAndSecurity/AdminUserSearchPage.js';
import { Attributes } from '../../claimsolutions/pages/admin/usersAndSecurity/Attributes.js';
import { AuthorityLimitProfiles } from '../../claimsolutions/pages/admin/usersAndSecurity/AuthorityLimitProfiles.js';
import { Regions } from '../../claimsolutions/pages/admin/usersAndSecurity/Regions.js';
import { Roles } from '../../claimsolutions/pages/admin/usersAndSecurity/Roles.js';
import { SecurityZones } from '../../claimsolutions/pages/admin/usersAndSecurity/SecurityZones.js';
import { DataChangePage } from '../../claimsolutions/pages/admin/utilities/DataChangePage.js';
import { ExportData } from '../../claimsolutions/pages/admin/utilities/ExportData.js';
import { ImportWizard } from '../../claimsolutions/pages/admin/utilities/ImportWizard.js';
import { InboundFileSearch } from '../../claimsolutions/pages/admin/utilities/InboundFileSearch.js';
import { OutboundFileSearch } from '../../claimsolutions/pages/admin/utilities/OutboundFileSearch.js';
import { Properties } from '../../claimsolutions/pages/admin/utilities/Properties.js';
import { BulkRestoreArchivedClaimsRestoreRecord } from '../../claimsolutions/pages/admin/utilities/restoreArchivedClaimsInBulk/BulkRestoreArchivedClaimsRestoreRecord.js';
import { SearchArchivedClaims } from '../../claimsolutions/pages/admin/utilities/restoreArchivedClaimsInBulk/SearchArchivedClaims.js';
import { ScriptParametersPage } from '../../claimsolutions/pages/admin/utilities/ScriptParametersPage.js';
import { DesktopMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/DesktopMenuLinks.js';
import { BulkPay } from '../../claimsolutions/pages/desktop/BulkPay.js';
import { DesktopActivities } from '../../claimsolutions/pages/desktop/DesktopActivities.js';
import { DesktopAwaitingAssignment } from '../../claimsolutions/pages/desktop/DesktopAwaitingAssignment.js';
import { Calendar } from '../../claimsolutions/pages/desktop/desktopCalendarGroup/Calendar.js';
import { SupervisorCalendar } from '../../claimsolutions/pages/desktop/desktopCalendarGroup/SupervisorCalendar.js';
import { DesktopClaims } from '../../claimsolutions/pages/desktop/DesktopClaims.js';
import { DesktopExposures } from '../../claimsolutions/pages/desktop/DesktopExposures.js';
import { DesktopQueuedActivities } from '../../claimsolutions/pages/desktop/DesktopQueuedActivities.js';
import { DesktopSubrogations } from '../../claimsolutions/pages/desktop/DesktopSubrogations.js';
import { SearchMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/SearchMenuLinks.js';
import { ActivitySearch } from '../../claimsolutions/pages/search/ActivitySearch.js';
import { BulkInvoiceSearch } from '../../claimsolutions/pages/search/BulkInvoiceSearch.js';
import { CatastropheSearch } from '../../claimsolutions/pages/search/claimSearchesGroup/CatastropheSearch.js';
import { ClaimSearch } from '../../claimsolutions/pages/search/claimSearchesGroup/ClaimSearch.js';
import { FreeTextClaimSearch } from '../../claimsolutions/pages/search/claimSearchesGroup/FreeTextClaimSearch.js';
import { SimpleClaimSearch } from '../../claimsolutions/pages/search/claimSearchesGroup/SimpleClaimSearch.js';
import { PaymentSearch } from '../../claimsolutions/pages/search/PaymentSearch.js';
import { RecoverySearch } from '../../claimsolutions/pages/search/RecoverySearch.js';
import { ClaimMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/ClaimMenuLinks.js';
import { ClaimCalendar } from '../../claimsolutions/pages/claim/claimCalendarGroup/ClaimCalendar.js';
import { SupervisorClaimCalendar } from '../../claimsolutions/pages/claim/claimCalendarGroup/SupervisorClaimCalendar.js';
import { ClaimDocuments } from '../../claimsolutions/pages/claim/ClaimDocuments.js';
import { ClaimExposures } from '../../claimsolutions/pages/claim/ClaimExposures.js';
import { ClaimFinancialsChecks } from '../../claimsolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsChecks.js';
import { ClaimFinancialsSummary } from '../../claimsolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsSummary.js';
import { ClaimFinancialsTransactions } from '../../claimsolutions/pages/claim/claimFinancialsGroup/ClaimFinancialsTransactions.js';
import { ClaimHistory } from '../../claimsolutions/pages/claim/ClaimHistory.js';
import { ClaimAssociations } from '../../claimsolutions/pages/claim/claimLossDetailsGroup/ClaimAssociations.js';
import { ClaimLossDetails } from '../../claimsolutions/pages/claim/claimLossDetailsGroup/ClaimLossDetails.js';
import { SIDetails } from '../../claimsolutions/pages/claim/claimLossDetailsGroup/SIDetails.js';
import { ClaimMatters } from '../../claimsolutions/pages/claim/ClaimMatters.js';
import { ClaimNotes } from '../../claimsolutions/pages/claim/ClaimNotes.js';
import { ClaimContacts } from '../../claimsolutions/pages/claim/claimPartiesGroup/ClaimContacts.js';
import { ClaimUsers } from '../../claimsolutions/pages/claim/claimPartiesGroup/ClaimUsers.js';
import { ClaimEvaluations } from '../../claimsolutions/pages/claim/claimPlanOfActionGroup/ClaimEvaluations.js';
import { ClaimNegotiations } from '../../claimsolutions/pages/claim/claimPlanOfActionGroup/ClaimNegotiations.js';
import { ClaimPolicyAggregateLimits } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyAggregateLimits.js';
import { ClaimPolicyEndorsements } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyEndorsements.js';
import { ClaimPolicyGeneral } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyGeneral.js';
import { ClaimPolicyLocations } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyLocations.js';
import { ClaimPolicyStatCodes } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyStatCodes.js';
import { ClaimPolicyTrips } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyTrips.js';
import { ClaimPolicyVehicles } from '../../claimsolutions/pages/claim/claimPolicyGroup/ClaimPolicyVehicles.js';
import { ClaimServiceRequests } from '../../claimsolutions/pages/claim/ClaimServiceRequests.js';
import { ClaimSnapshotDocuments } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotDocuments.js';
import { ClaimSnapshotExposures } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotExposures.js';
import { ClaimSnapshotExtraFields } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotExtraFields.js';
import { ClaimSnapshotLossDetails } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotLossDetails.js';
import { ClaimSnapshotNotes } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotNotes.js';
import { ClaimSnapshotPartiesInvolved } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotPartiesInvolved.js';
import { ClaimSnapshotPolicy } from '../../claimsolutions/pages/claim/claimSnapshotGroup/ClaimSnapshotPolicy.js';
import { SubrogationGeneral } from '../../claimsolutions/pages/claim/claimSubrogationGroup/SubrogationGeneral.js';
import { SubrogationParties } from '../../claimsolutions/pages/claim/claimSubrogationGroup/SubrogationParties.js';
import { ClaimKeyMetrics } from '../../claimsolutions/pages/claim/claimSummaryGroup/ClaimKeyMetrics.js';
import { ClaimStatus } from '../../claimsolutions/pages/claim/claimSummaryGroup/ClaimStatus.js';
import { ClaimSummary } from '../../claimsolutions/pages/claim/claimSummaryGroup/ClaimSummary.js';
import { ClaimWorkplan } from '../../claimsolutions/pages/claim/ClaimWorkplan.js';
import { ReinsuranceSummary } from '../../claimsolutions/pages/claim/ReinsuranceSummary.js';
import { AddressBookMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/AddressBookMenuLinks.js';
import { AddressBookSearch } from '../../claimsolutions/pages/addressBook/AddressBookSearch.js';
import { DashboardSubGroupMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/DashboardSubGroupMenuLinks.js';
import { DashboardClaimActivity } from '../../claimsolutions/pages/dashboardSubGroup/DashboardClaimActivity.js';
import { DashboardClaimCount } from '../../claimsolutions/pages/dashboardSubGroup/DashboardClaimCount.js';
import { DashboardCurrentFinancials } from '../../claimsolutions/pages/dashboardSubGroup/DashboardCurrentFinancials.js';
import { DashboardPeriodFinancials } from '../../claimsolutions/pages/dashboardSubGroup/DashboardPeriodFinancials.js';
import { TeamGroupGroupMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/TeamGroupGroupMenuLinks.js';
import { TeamGroupActivities } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupActivities.js';
import { TeamGroupAging } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupAging.js';
import { TeamGroupClaims } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupClaims.js';
import { TeamGroupExposures } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupExposures.js';
import { TeamGroupMatters } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupMatters.js';
import { TeamGroupSubrogations } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupSubrogations.js';
import { TeamGroupSummary } from '../../claimsolutions/pages/teamGroupGroup/TeamGroupSummary.js';
import { VacationMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/VacationMenuLinks.js';
import { VacationActivities } from '../../claimsolutions/pages/vacation/VacationActivities.js';
import { VacationClaims } from '../../claimsolutions/pages/vacation/VacationClaims.js';
import { VacationExposures } from '../../claimsolutions/pages/vacation/VacationExposures.js';
import { ServerToolsMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/ServerToolsMenuLinks.js';
import { BatchProcessInfo } from '../../claimsolutions/pages/serverTools/BatchProcessInfo.js';
import { CentipedeCacheInfo } from '../../claimsolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfo.js';
import { CentipedeCacheInfoDetails } from '../../claimsolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfoDetails.js';
import { CentipedeCacheInfoHistory } from '../../claimsolutions/pages/serverTools/centipedeCacheInfoLG/CentipedeCacheInfoHistory.js';
import { ClusterComponents } from '../../claimsolutions/pages/serverTools/clusterPages/ClusterComponents.js';
import { ClusterMembers } from '../../claimsolutions/pages/serverTools/clusterPages/ClusterMembers.js';
import { ArchiveGraphInfo } from '../../claimsolutions/pages/serverTools/infoPages/ArchiveGraphInfo.js';
import { ArchiveInfo } from '../../claimsolutions/pages/serverTools/infoPages/ArchiveInfo.js';
import { ConfigurationInfo } from '../../claimsolutions/pages/serverTools/infoPages/ConfigurationInfo.js';
import { ConsistencyChecks } from '../../claimsolutions/pages/serverTools/infoPages/ConsistencyChecks.js';
import { DataDistributionInfo } from '../../claimsolutions/pages/serverTools/infoPages/DataDistributionInfo.js';
import { DatabaseParameters } from '../../claimsolutions/pages/serverTools/infoPages/DatabaseParameters.js';
import { DatabaseStatistics } from '../../claimsolutions/pages/serverTools/infoPages/DatabaseStatistics.js';
import { DatabaseStorage } from '../../claimsolutions/pages/serverTools/infoPages/DatabaseStorage.js';
import { DatabaseTableInfo } from '../../claimsolutions/pages/serverTools/infoPages/DatabaseTableInfo.js';
import { LoadErrorsInfo } from '../../claimsolutions/pages/serverTools/infoPages/LoadErrorsInfo.js';
import { LoadHistoryInfo } from '../../claimsolutions/pages/serverTools/infoPages/LoadHistoryInfo.js';
import { LoadIntegrityChecks } from '../../claimsolutions/pages/serverTools/infoPages/LoadIntegrityChecks.js';
import { LoadedGosuClasses } from '../../claimsolutions/pages/serverTools/infoPages/LoadedGosuClasses.js';
import { MicrosoftDMVInfo } from '../../claimsolutions/pages/serverTools/infoPages/MicrosoftDMVInfo.js';
import { MicrosoftDriverLogging } from '../../claimsolutions/pages/serverTools/infoPages/MicrosoftDriverLogging.js';
import { OracleAWRInfo } from '../../claimsolutions/pages/serverTools/infoPages/OracleAWRInfo.js';
import { OracleAWRUnusedIndexesInfo } from '../../claimsolutions/pages/serverTools/infoPages/OracleAWRUnusedIndexesInfo.js';
import { OracleOutlineInfo } from '../../claimsolutions/pages/serverTools/infoPages/OracleOutlineInfo.js';
import { OracleStatspackInfo } from '../../claimsolutions/pages/serverTools/infoPages/OracleStatspackInfo.js';
import { PostgreSQLPerfInfo } from '../../claimsolutions/pages/serverTools/infoPages/PostgreSQLPerfInfo.js';
import { RuntimeEnvironmentInfo } from '../../claimsolutions/pages/serverTools/infoPages/RuntimeEnvironmentInfo.js';
import { SafePersistingOrderInfo } from '../../claimsolutions/pages/serverTools/infoPages/SafePersistingOrderInfo.js';
import { SerializationInfo } from '../../claimsolutions/pages/serverTools/infoPages/SerializationInfo.js';
import { WorksetInfo } from '../../claimsolutions/pages/serverTools/infoPages/WorksetInfo.js';
import { IntentionalLogging } from '../../claimsolutions/pages/serverTools/IntentionalLogging.js';
import { JProfiler } from '../../claimsolutions/pages/serverTools/JProfiler.js';
import { MBeans } from '../../claimsolutions/pages/serverTools/MBeans.js';
import { MetroFlows } from '../../claimsolutions/pages/serverTools/MetroFlows.js';
import { ProfilerAnalysisPage } from '../../claimsolutions/pages/serverTools/profiler/profilerAnalysisLG/ProfilerAnalysisPage.js';
import { ProfilerConfigurationPage } from '../../claimsolutions/pages/serverTools/profiler/ProfilerConfigurationPage.js';
import { SetLogLevel } from '../../claimsolutions/pages/serverTools/SetLogLevel.js';
import { StartablePlugin } from '../../claimsolutions/pages/serverTools/StartablePlugin.js';
import { UpgradeInfo } from '../../claimsolutions/pages/serverTools/UpgradeInfo.js';
import { ViewLogs } from '../../claimsolutions/pages/serverTools/ViewLogs.js';
import { WorkQueueInfo } from '../../claimsolutions/pages/serverTools/WorkQueueInfo.js';
import { UnsupportedToolsMenuLinks } from '../../claimsolutions/pages/navigation/menuLinks/UnsupportedToolsMenuLinks.js';
import { CCSampleData } from '../../claimsolutions/pages/unsupportedTools/CCSampleData.js';
import { Reload } from '../../claimsolutions/pages/unsupportedTools/Reload.js';
import { ServerPerformance } from '../../claimsolutions/pages/unsupportedTools/ServerPerformance.js';
import { SolrReIndexing } from '../../claimsolutions/pages/unsupportedTools/SolrReIndexing.js';
import { SystemClock } from '../../claimsolutions/pages/unsupportedTools/SystemClock.js';
import { DashboardTabBar } from '../../claimsolutions/pages/navigation/tabBar/DashboardTabBar.js';
import { AddressBookTabBar } from '../../claimsolutions/pages/navigation/tabBar/AddressBookTabBar.js';
import { DesktopTabBar } from '../../claimsolutions/pages/navigation/tabBar/DesktopTabBar.js';
import { ClaimTabBar } from '../../claimsolutions/pages/navigation/tabBar/ClaimTabBar.js';
import { FNOLWizard } from '../../claimsolutions/pages/claim/FNOLWizard.js';
import { AdminTabBar } from '../../claimsolutions/pages/navigation/tabBar/AdminTabBar.js';
import { Admin } from '../../claimsolutions/pages/admin/Admin.js';
import { ReportTabBar } from '../../claimsolutions/pages/navigation/tabBar/ReportTabBar.js';
import { SearchTabBar } from '../../claimsolutions/pages/navigation/tabBar/SearchTabBar.js';
import { TeamTabBar } from '../../claimsolutions/pages/navigation/tabBar/TeamTabBar.js';
import { VacationTabBar } from '../../claimsolutions/pages/navigation/tabBar/VacationTabBar.js';
import { ServerToolsTabBar } from '../../claimsolutions/pages/navigation/tabBar/ServerToolsTabBar.js';
import { UnsupportedToolsTabBar } from '../../claimsolutions/pages/navigation/tabBar/UnsupportedToolsTabBar.js';
import { AdminMenuActions } from '../../claimsolutions/pages/navigation/menuActions/AdminMenuActions.js';
import { DesktopMenuActions } from '../../claimsolutions/pages/navigation/menuActions/DesktopMenuActions.js';
import { SearchMenuActions } from '../../claimsolutions/pages/navigation/menuActions/SearchMenuActions.js';
import { ClaimMenuActions } from '../../claimsolutions/pages/navigation/menuActions/ClaimMenuActions.js';
import { VacationMenuActions } from '../../claimsolutions/pages/navigation/menuActions/VacationMenuActions.js';
import { ServerToolsMenuActions } from '../../claimsolutions/pages/navigation/menuActions/ServerToolsMenuActions.js';
import { UnsupportedToolsMenuActions } from '../../claimsolutions/pages/navigation/menuActions/UnsupportedToolsMenuActions.js';
import { AcceptedWorkPopup } from '../../claimsolutions/pages/popup/Accepted/AcceptedWorkPopup.js';
import { AddDelayPopup } from '../../claimsolutions/pages/popup/Add/AddDelayPopup.js';
import { AddExistingPartyInvolvedPopup } from '../../claimsolutions/pages/popup/Add/AddExistingPartyInvolvedPopup.js';
import { AddReviseQuotePopup } from '../../claimsolutions/pages/popup/Add/AddReviseQuotePopup.js';
import { AddSelectedDuplicatePartiesInvolvedPopup } from '../../claimsolutions/pages/popup/Add/AddSelectedDuplicatePartiesInvolvedPopup.js';
import { AdditionalTripAccommodationAddressPopup } from '../../claimsolutions/pages/popup/Additional/AdditionalTripAccommodationAddressPopup.js';
import { AdditionalTripSegmentPopup } from '../../claimsolutions/pages/popup/Additional/AdditionalTripSegmentPopup.js';
import { AddressBookContactDetailPopup } from '../../claimsolutions/pages/popup/Address/AddressBookContactDetailPopup.js';
import { AddressBookContactSearchPopupDV } from '../../claimsolutions/pages/popup/Address/AddressBookContactSearchPopupDV.js';
import { AddressBookDirectionsPopup } from '../../claimsolutions/pages/popup/Address/AddressBookDirectionsPopup.js';
import { AddressBookPickerPopup } from '../../claimsolutions/pages/popup/Address/AddressBookPickerPopup.js';
import { AddressBookSearchNewContactPopup } from '../../claimsolutions/pages/popup/Address/AddressBookSearchNewContactPopup.js';
import { AdjustRIRecoverablesPopup } from '../../claimsolutions/pages/popup/Adjust/AdjustRIRecoverablesPopup.js';
import { ApproveQuotePopup } from '../../claimsolutions/pages/popup/Approve/ApproveQuotePopup.js';
import { ArchiveClaimRetrievePopup } from '../../claimsolutions/pages/popup/Archive/ArchiveClaimRetrievePopup.js';
import { ArchiveItemListPopup } from '../../claimsolutions/pages/popup/Archive/ArchiveItemListPopup.js';
import { AssignActivitiesPopup } from '../../claimsolutions/pages/popup/Assign/AssignActivitiesPopup.js';
import { AssignClaimsPopup } from '../../claimsolutions/pages/popup/Assign/AssignClaimsPopup.js';
import { AssignExposuresPopup } from '../../claimsolutions/pages/popup/Assign/AssignExposuresPopup.js';
import { AssignMattersPopup } from '../../claimsolutions/pages/popup/Assign/AssignMattersPopup.js';
import { AssignServiceRequestPopup } from '../../claimsolutions/pages/popup/Assign/AssignServiceRequestPopup.js';
import { AssignSubrogationPopup } from '../../claimsolutions/pages/popup/Assign/AssignSubrogationPopup.js';
import { AssigneePickerPopup } from '../../claimsolutions/pages/popup/Assignee/AssigneePickerPopup.js';
import { AssignmentOrgGroupTreePopup } from '../../claimsolutions/pages/popup/Assignment/AssignmentOrgGroupTreePopup.js';
import { AssignmentPopupDV } from '../../claimsolutions/pages/popup/Assignment/AssignmentPopupDV.js';
import { AssignmentPopupScreen } from '../../claimsolutions/pages/popup/Assignment/AssignmentPopupScreen.js';
import { AttachDocumentsPopup } from '../../claimsolutions/pages/popup/Attach/AttachDocumentsPopup.js';
import { AttachStatementDocumentsPopup } from '../../claimsolutions/pages/popup/Attach/AttachStatementDocumentsPopup.js';
import { AutomatedActivityHandlerDetailPopup } from '../../claimsolutions/pages/popup/Automated/AutomatedActivityHandlerDetailPopup.js';
import { AutomatedNotificationHandlerDetailPopup } from '../../claimsolutions/pages/popup/Automated/AutomatedNotificationHandlerDetailPopup.js';
import { BaggageIncidentPopup } from '../../claimsolutions/pages/popup/Baggage/BaggageIncidentPopup.js';
import { BulkEditDocumentDetailsPopup } from '../../claimsolutions/pages/popup/Bulk/BulkEditDocumentDetailsPopup.js';
import { BulkRestoreClaimsAssociationSearchPopup } from '../../claimsolutions/pages/popup/Bulk/BulkRestoreClaimsAssociationSearchPopup.js';
import { CCRuleComparisonPopup } from '../../claimsolutions/pages/popup/CCRule/CCRuleComparisonPopup.js';
import { CCRuleEditPopup } from '../../claimsolutions/pages/popup/CCRule/CCRuleEditPopup.js';
import { CCRuleVersionDetailsPopup } from '../../claimsolutions/pages/popup/CCRule/CCRuleVersionDetailsPopup.js';
import { CheckWizard_PaymentDeductionsPagePopup } from '../../claimsolutions/pages/popup/Check/CheckWizard_PaymentDeductionsPagePopup.js';
import { ChoosePropertyContentsScheduledItemPopup } from '../../claimsolutions/pages/popup/Choose/ChoosePropertyContentsScheduledItemPopup.js';
import { ClaimAssociationSearchPopup } from '../../claimsolutions/pages/popup/Claim/ClaimAssociationSearchPopup.js';
import { ClaimContactDetailPopup } from '../../claimsolutions/pages/popup/Claim/ClaimContactDetailPopup.js';
import { ClaimContactTransferRolesPopup } from '../../claimsolutions/pages/popup/Claim/ClaimContactTransferRolesPopup.js';
import { ClaimNewDocumentFromActivityPopup } from '../../claimsolutions/pages/popup/Claim/ClaimNewDocumentFromActivityPopup.js';
import { ClaimPolicySelectPolicyPopup } from '../../claimsolutions/pages/popup/Claim/ClaimPolicySelectPolicyPopup.js';
import { ClaimPolicyStatCodePickerPopup } from '../../claimsolutions/pages/popup/Claim/ClaimPolicyStatCodePickerPopup.js';
import { ClaimSearchPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSearchPopup.js';
import { ClaimSnapshotBaggageIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotBaggageIncidentPopup.js';
import { ClaimSnapshotCovTerm700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotCovTerm700Popup.js';
import { ClaimSnapshotCovTerm800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotCovTerm800Popup.js';
import { ClaimSnapshotCovTermPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotCovTermPopup.js';
import { ClaimSnapshotDwellingIncident600Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident600Popup.js';
import { ClaimSnapshotDwellingIncident700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident700Popup.js';
import { ClaimSnapshotDwellingIncident800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotDwellingIncident800Popup.js';
import { ClaimSnapshotDwellingIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotDwellingIncidentPopup.js';
import { ClaimSnapshotFixedPropertyIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotFixedPropertyIncidentPopup.js';
import { ClaimSnapshotInjuredInjuryIncident600Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident600Popup.js';
import { ClaimSnapshotInjuredInjuryIncident700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident700Popup.js';
import { ClaimSnapshotInjuredInjuryIncident800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncident800Popup.js';
import { ClaimSnapshotInjuredInjuryIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotInjuredInjuryIncidentPopup.js';
import { ClaimSnapshotInjuryIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotInjuryIncidentPopup.js';
import { ClaimSnapshotLivingExpensesIncident600Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident600Popup.js';
import { ClaimSnapshotLivingExpensesIncident700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident700Popup.js';
import { ClaimSnapshotLivingExpensesIncident800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncident800Popup.js';
import { ClaimSnapshotLivingExpensesIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotLivingExpensesIncidentPopup.js';
import { ClaimSnapshotOtherStructureIncident600Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident600Popup.js';
import { ClaimSnapshotOtherStructureIncident700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident700Popup.js';
import { ClaimSnapshotOtherStructureIncident800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncident800Popup.js';
import { ClaimSnapshotOtherStructureIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotOtherStructureIncidentPopup.js';
import { ClaimSnapshotPolicyLocation700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPolicyLocation700Popup.js';
import { ClaimSnapshotPolicyLocation800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPolicyLocation800Popup.js';
import { ClaimSnapshotPolicyLocationPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPolicyLocationPopup.js';
import { ClaimSnapshotPropertyContentsIncident600Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident600Popup.js';
import { ClaimSnapshotPropertyContentsIncident700Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident700Popup.js';
import { ClaimSnapshotPropertyContentsIncident800Popup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncident800Popup.js';
import { ClaimSnapshotPropertyContentsIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotPropertyContentsIncidentPopup.js';
import { ClaimSnapshotTripIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotTripIncidentPopup.js';
import { ClaimSnapshotVehicleIncidentPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSnapshotVehicleIncidentPopup.js';
import { ClaimSyncStatusPopup } from '../../claimsolutions/pages/popup/Claim/ClaimSyncStatusPopup.js';
import { CloseClaimPopup } from '../../claimsolutions/pages/popup/Close/CloseClaimPopup.js';
import { CloseExposurePopup } from '../../claimsolutions/pages/popup/Close/CloseExposurePopup.js';
import { CloseMatterPopup } from '../../claimsolutions/pages/popup/Close/CloseMatterPopup.js';
import { ClusterComponentHistoryPopup } from '../../claimsolutions/pages/popup/Cluster/ClusterComponentHistoryPopup.js';
import { ClusterComponentsDownloadConfigurePopup } from '../../claimsolutions/pages/popup/Cluster/ClusterComponentsDownloadConfigurePopup.js';
import { ClusterComponentsFilterByComponentPopup } from '../../claimsolutions/pages/popup/Cluster/ClusterComponentsFilterByComponentPopup.js';
import { ClusterMemberUserSessionsPopup } from '../../claimsolutions/pages/popup/Cluster/ClusterMemberUserSessionsPopup.js';
import { ClusterMembersDownloadConfigurePopup } from '../../claimsolutions/pages/popup/Cluster/ClusterMembersDownloadConfigurePopup.js';
import { CommandDefinitionParameterLocalizationsPopup } from '../../claimsolutions/pages/popup/Command/CommandDefinitionParameterLocalizationsPopup.js';
import { ConsistencyChecksChangeNumOfWorkersPopup } from '../../claimsolutions/pages/popup/Consistency/ConsistencyChecksChangeNumOfWorkersPopup.js';
import { ContactDocumentDetailsPopup } from '../../claimsolutions/pages/popup/Contact/ContactDocumentDetailsPopup.js';
import { ContactReviewPopup } from '../../claimsolutions/pages/popup/Contact/ContactReviewPopup.js';
import { ContainsExpressionPopup } from '../../claimsolutions/pages/popup/Contains/ContainsExpressionPopup.js';
import { CountExpressionPopup } from '../../claimsolutions/pages/popup/Count/CountExpressionPopup.js';
import { CovTermPopup } from '../../claimsolutions/pages/popup/Cov/CovTermPopup.js';
import { CreateReviewPopup } from '../../claimsolutions/pages/popup/Create/CreateReviewPopup.js';
import { DenialPeriodPopup } from '../../claimsolutions/pages/popup/Denial/DenialPeriodPopup.js';
import { DeployConfirmationPopup } from '../../claimsolutions/pages/popup/Deploy/DeployConfirmationPopup.js';
import { DocumentDetailsPopup } from '../../claimsolutions/pages/popup/Document/DocumentDetailsPopup.js';
import { DocumentTemplateSearchPopup } from '../../claimsolutions/pages/popup/Document/DocumentTemplateSearchPopup.js';
import { DuplicateClaimLossDetailsPopup } from '../../claimsolutions/pages/popup/Duplicate/DuplicateClaimLossDetailsPopup.js';
import { DuplicateContactPopup } from '../../claimsolutions/pages/popup/Duplicate/DuplicateContactPopup.js';
import { EditDwellingIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditDwellingIncidentPopup.js';
import { EditFixedPropertyIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditFixedPropertyIncidentPopup.js';
import { EditInjuryIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditInjuryIncidentPopup.js';
import { EditLivingExpensesIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditLivingExpensesIncidentPopup.js';
import { EditNotePopup } from '../../claimsolutions/pages/popup/Edit/EditNotePopup.js';
import { EditOtherStructureIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditOtherStructureIncidentPopup.js';
import { EditPropertyContentsIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditPropertyContentsIncidentPopup.js';
import { EditReferenceNumberPopup } from '../../claimsolutions/pages/popup/Edit/EditReferenceNumberPopup.js';
import { EditVehicleIncidentPopup } from '../../claimsolutions/pages/popup/Edit/EditVehicleIncidentPopup.js';
import { EnableBatchProcessPopup } from '../../claimsolutions/pages/popup/Enable/EnableBatchProcessPopup.js';
import { EnableGosuServletPopup } from '../../claimsolutions/pages/popup/Enable/EnableGosuServletPopup.js';
import { EnableMessageDestinationPopup } from '../../claimsolutions/pages/popup/Enable/EnableMessageDestinationPopup.js';
import { EnableRestOperationPopup } from '../../claimsolutions/pages/popup/Enable/EnableRestOperationPopup.js';
import { EnableStartablePluginPopup } from '../../claimsolutions/pages/popup/Enable/EnableStartablePluginPopup.js';
import { EnableWebServicePopup } from '../../claimsolutions/pages/popup/Enable/EnableWebServicePopup.js';
import { EnableWorkQueuePopup } from '../../claimsolutions/pages/popup/Enable/EnableWorkQueuePopup.js';
import { FNOLContactPopup } from '../../claimsolutions/pages/popup/FNOLContact/FNOLContactPopup.js';
import { FNOLInjuryIncidentPopup } from '../../claimsolutions/pages/popup/FNOLInjury/FNOLInjuryIncidentPopup.js';
import { FNOLVehicleIncidentPopup } from '../../claimsolutions/pages/popup/FNOLVehicle/FNOLVehicleIncidentPopup.js';
import { FNOLWizard_EditNotePopup } from '../../claimsolutions/pages/popup/FNOLWizard/FNOLWizard_EditNotePopup.js';
import { FixPropAssessItemPopup } from '../../claimsolutions/pages/popup/Fix/FixPropAssessItemPopup.js';
import { FixPropAssessSourcePopup } from '../../claimsolutions/pages/popup/Fix/FixPropAssessSourcePopup.js';
import { FixPropContentItemPopup } from '../../claimsolutions/pages/popup/Fix/FixPropContentItemPopup.js';
import { ForceBackoutConfirmPopup } from '../../claimsolutions/pages/popup/Force/ForceBackoutConfirmPopup.js';
import { ForceCancelConfirmPopup } from '../../claimsolutions/pages/popup/Force/ForceCancelConfirmPopup.js';
import { GroupRegionPopup } from '../../claimsolutions/pages/popup/Group/GroupRegionPopup.js';
import { GroupSearchPopup } from '../../claimsolutions/pages/popup/Group/GroupSearchPopup.js';
import { GroupUserPickerPopup } from '../../claimsolutions/pages/popup/Group/GroupUserPickerPopup.js';
import { ICDCodePopup } from '../../claimsolutions/pages/popup/ICDCode/ICDCodePopup.js';
import { ICDPopup } from '../../claimsolutions/pages/popup/ICDPopup/ICDPopup.js';
import { ISOMatchReportDetailPopup } from '../../claimsolutions/pages/popup/ISOMatch/ISOMatchReportDetailPopup.js';
import { ImportWizard_ArrayDiffPopup } from '../../claimsolutions/pages/popup/Import/ImportWizard_ArrayDiffPopup.js';
import { InboundConfigPopup } from '../../claimsolutions/pages/popup/Inbound/InboundConfigPopup.js';
import { InboundRecordPopup } from '../../claimsolutions/pages/popup/Inbound/InboundRecordPopup.js';
import { IncidentAssessItemPopup } from '../../claimsolutions/pages/popup/Incident/IncidentAssessItemPopup.js';
import { IncidentAssessSourcePopup } from '../../claimsolutions/pages/popup/Incident/IncidentAssessSourcePopup.js';
import { InitiateBackoutConfirmPopup } from '../../claimsolutions/pages/popup/Initiate/InitiateBackoutConfirmPopup.js';
import { InitiateBackoutPopup } from '../../claimsolutions/pages/popup/Initiate/InitiateBackoutPopup.js';
import { LoadFactorsPopup } from '../../claimsolutions/pages/popup/Load/LoadFactorsPopup.js';
import { LoadIntegrityChecksCompoundLVPopup } from '../../claimsolutions/pages/popup/Load/LoadIntegrityChecksCompoundLVPopup.js';
import { LookupExpressionPopup } from '../../claimsolutions/pages/popup/Lookup/LookupExpressionPopup.js';
import { MarkInvoicePaidPopup } from '../../claimsolutions/pages/popup/Mark/MarkInvoicePaidPopup.js';
import { MessagePayloadPopup } from '../../claimsolutions/pages/popup/Message/MessagePayloadPopup.js';
import { MetroReportDetailsPopup } from '../../claimsolutions/pages/popup/Metro/MetroReportDetailsPopup.js';
import { MultiUserSearchPopup } from '../../claimsolutions/pages/popup/Multi/MultiUserSearchPopup.js';
import { NewAutomatedActivityHandlerPopup } from '../../claimsolutions/pages/popup/New/NewAutomatedActivityHandlerPopup.js';
import { NewAutomatedNotificationHandlerPopup } from '../../claimsolutions/pages/popup/New/NewAutomatedNotificationHandlerPopup.js';
import { NewCheckWizardAddressBookPickerPopup } from '../../claimsolutions/pages/popup/New/NewCheckWizardAddressBookPickerPopup.js';
import { NewClaimWizard_EndorsementDetailPopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_EndorsementDetailPopup.js';
import { NewClaimWizard_ExposurePagePopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_ExposurePagePopup.js';
import { NewClaimWizard_NewEndorsementPopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_NewEndorsementPopup.js';
import { NewClaimWizard_NewExposurePopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_NewExposurePopup.js';
import { NewClaimWizard_NewPolicyVehiclePopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_NewPolicyVehiclePopup.js';
import { NewClaimWizard_NewStatCodePopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_NewStatCodePopup.js';
import { NewClaimWizard_PartyInvolvedPopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_PartyInvolvedPopup.js';
import { NewClaimWizard_PolicyVehicleDetailPopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_PolicyVehicleDetailPopup.js';
import { NewClaimWizard_StatCodeDetailPopup } from '../../claimsolutions/pages/popup/New/NewClaimWizard_StatCodeDetailPopup.js';
import { NewContactPopup } from '../../claimsolutions/pages/popup/New/NewContactPopup.js';
import { NewDwellingIncidentPopup } from '../../claimsolutions/pages/popup/New/NewDwellingIncidentPopup.js';
import { NewFixPropAssessItemPopup } from '../../claimsolutions/pages/popup/New/NewFixPropAssessItemPopup.js';
import { NewFixPropAssessSourcePopup } from '../../claimsolutions/pages/popup/New/NewFixPropAssessSourcePopup.js';
import { NewFixPropContentItemPopup } from '../../claimsolutions/pages/popup/New/NewFixPropContentItemPopup.js';
import { NewFixedPropertyIncidentPopup } from '../../claimsolutions/pages/popup/New/NewFixedPropertyIncidentPopup.js';
import { NewICDPopup } from '../../claimsolutions/pages/popup/New/NewICDPopup.js';
import { NewInboundLocalConfigPopup } from '../../claimsolutions/pages/popup/New/NewInboundLocalConfigPopup.js';
import { NewInboundS3ConfigPopup } from '../../claimsolutions/pages/popup/New/NewInboundS3ConfigPopup.js';
import { NewIncidentAssessItemPopup } from '../../claimsolutions/pages/popup/New/NewIncidentAssessItemPopup.js';
import { NewIncidentAssessSourcePopup } from '../../claimsolutions/pages/popup/New/NewIncidentAssessSourcePopup.js';
import { NewInjuryIncidentPopup } from '../../claimsolutions/pages/popup/New/NewInjuryIncidentPopup.js';
import { NewLivingExpensesIncidentPopup } from '../../claimsolutions/pages/popup/New/NewLivingExpensesIncidentPopup.js';
import { NewMetroReportDetailsPopup } from '../../claimsolutions/pages/popup/New/NewMetroReportDetailsPopup.js';
import { NewNotePopup } from '../../claimsolutions/pages/popup/New/NewNotePopup.js';
import { NewOtherStructureIncidentPopup } from '../../claimsolutions/pages/popup/New/NewOtherStructureIncidentPopup.js';
import { NewOutboundLocalConfigPopup } from '../../claimsolutions/pages/popup/New/NewOutboundLocalConfigPopup.js';
import { NewOutboundS3ConfigPopup } from '../../claimsolutions/pages/popup/New/NewOutboundS3ConfigPopup.js';
import { NewPartyInvolvedPopup } from '../../claimsolutions/pages/popup/New/NewPartyInvolvedPopup.js';
import { NewPropertyContentsIncidentPopup } from '../../claimsolutions/pages/popup/New/NewPropertyContentsIncidentPopup.js';
import { NewRecoveryReserveMultiCurrencyPopup } from '../../claimsolutions/pages/popup/New/NewRecoveryReserveMultiCurrencyPopup.js';
import { NewReserveMultiCurrencyPopup } from '../../claimsolutions/pages/popup/New/NewReserveMultiCurrencyPopup.js';
import { NewSubroAdversePartyPopup } from '../../claimsolutions/pages/popup/New/NewSubroAdversePartyPopup.js';
import { NewVehAssessItemPopup } from '../../claimsolutions/pages/popup/New/NewVehAssessItemPopup.js';
import { NewVehAssessSourcePopup } from '../../claimsolutions/pages/popup/New/NewVehAssessSourcePopup.js';
import { NewVehicleIncidentPopup } from '../../claimsolutions/pages/popup/New/NewVehicleIncidentPopup.js';
import { NewWorkStatusPopup } from '../../claimsolutions/pages/popup/New/NewWorkStatusPopup.js';
import { NewWorkloadClassificationPopup } from '../../claimsolutions/pages/popup/New/NewWorkloadClassificationPopup.js';
import { NullClaimContactDetailPopup } from '../../claimsolutions/pages/popup/Null/NullClaimContactDetailPopup.js';
import { OperationReasonPromptPopup } from '../../claimsolutions/pages/popup/Operation/OperationReasonPromptPopup.js';
import { OracleOutlineDetailsPopup } from '../../claimsolutions/pages/popup/Oracle/OracleOutlineDetailsPopup.js';
import { OracleStatisticsPreferencesConfigPopup } from '../../claimsolutions/pages/popup/Oracle/OracleStatisticsPreferencesConfigPopup.js';
import { OrganizationGroupTreePopup } from '../../claimsolutions/pages/popup/Organization/OrganizationGroupTreePopup.js';
import { OrganizationSearchPopup } from '../../claimsolutions/pages/popup/Organization/OrganizationSearchPopup.js';
import { OtherInstructionPopup } from '../../claimsolutions/pages/popup/Other/OtherInstructionPopup.js';
import { OtherServiceRequestPopup } from '../../claimsolutions/pages/popup/Other/OtherServiceRequestPopup.js';
import { OutboundConfigPopup } from '../../claimsolutions/pages/popup/Outbound/OutboundConfigPopup.js';
import { OutboundRecordPopup } from '../../claimsolutions/pages/popup/Outbound/OutboundRecordPopup.js';
import { PaymentTransferPopup } from '../../claimsolutions/pages/popup/Payment/PaymentTransferPopup.js';
import { PickEmailTemplatePopup } from '../../claimsolutions/pages/popup/Pick/PickEmailTemplatePopup.js';
import { PickExistingDocumentPopup } from '../../claimsolutions/pages/popup/Pick/PickExistingDocumentPopup.js';
import { PickNoteTemplatePopup } from '../../claimsolutions/pages/popup/Pick/PickNoteTemplatePopup.js';
import { PickSavedFilePopup } from '../../claimsolutions/pages/popup/Pick/PickSavedFilePopup.js';
import { PlannedShutdownPopup } from '../../claimsolutions/pages/popup/Planned/PlannedShutdownPopup.js';
import { PlannedShutdownStatusPopup } from '../../claimsolutions/pages/popup/Planned/PlannedShutdownStatusPopup.js';
import { PolicyLocationPopup } from '../../claimsolutions/pages/popup/Policy/PolicyLocationPopup.js';
import { PolicySummaryInfoPopup } from '../../claimsolutions/pages/popup/Policy/PolicySummaryInfoPopup.js';
import { PrintOptionPopup } from '../../claimsolutions/pages/popup/Print/PrintOptionPopup.js';
import { ProfilerAnalysisPopup } from '../../claimsolutions/pages/popup/Profiler/ProfilerAnalysisPopup.js';
import { ProfilerPopup } from '../../claimsolutions/pages/popup/Profiler/ProfilerPopup.js';
import { PropertyReferencePopup } from '../../claimsolutions/pages/popup/Property/PropertyReferencePopup.js';
import { QuoteDetailsPopup } from '../../claimsolutions/pages/popup/Quote/QuoteDetailsPopup.js';
import { RDMDatasetSearchPopup } from '../../claimsolutions/pages/popup/RDMDataset/RDMDatasetSearchPopup.js';
import { RDMRecordSearchPopup } from '../../claimsolutions/pages/popup/RDMRecord/RDMRecordSearchPopup.js';
import { RIAgreementGroupPopup } from '../../claimsolutions/pages/popup/RIAgreement/RIAgreementGroupPopup.js';
import { ReferSubrogationPopup } from '../../claimsolutions/pages/popup/Refer/ReferSubrogationPopup.js';
import { RejectInvoicePopup } from '../../claimsolutions/pages/popup/Reject/RejectInvoicePopup.js';
import { ReopenClaimPopup } from '../../claimsolutions/pages/popup/Reopen/ReopenClaimPopup.js';
import { ReopenExposurePopup } from '../../claimsolutions/pages/popup/Reopen/ReopenExposurePopup.js';
import { ReopenMatterPopup } from '../../claimsolutions/pages/popup/Reopen/ReopenMatterPopup.js';
import { RequestRequotePopup } from '../../claimsolutions/pages/popup/Request/RequestRequotePopup.js';
import { RuleEditPopupToolbarButtonSet } from '../../claimsolutions/pages/popup/Rule/RuleEditPopupToolbarButtonSet.js';
import { RuleExportAllConfirmationPopup } from '../../claimsolutions/pages/popup/Rule/RuleExportAllConfirmationPopup.js';
import { RuleExportDetailsPopup } from '../../claimsolutions/pages/popup/Rule/RuleExportDetailsPopup.js';
import { RuleExportImportFailurePopup } from '../../claimsolutions/pages/popup/Rule/RuleExportImportFailurePopup.js';
import { RuleImportAllPopup } from '../../claimsolutions/pages/popup/Rule/RuleImportAllPopup.js';
import { RuleImportDetailsPopup } from '../../claimsolutions/pages/popup/Rule/RuleImportDetailsPopup.js';
import { RuleManagementAuditPopup } from '../../claimsolutions/pages/popup/Rule/RuleManagementAuditPopup.js';
import { RunCommandPopup } from '../../claimsolutions/pages/popup/Run/RunCommandPopup.js';
import { SelectServicesPopup } from '../../claimsolutions/pages/popup/Select/SelectServicesPopup.js';
import { ServiceRequestMessagePopup } from '../../claimsolutions/pages/popup/Service/ServiceRequestMessagePopup.js';
import { StartBlueGreenUpgradePopup } from '../../claimsolutions/pages/popup/Start/StartBlueGreenUpgradePopup.js';
import { StartFullUpgradePopup } from '../../claimsolutions/pages/popup/Start/StartFullUpgradePopup.js';
import { StartRollingUpgradePopup } from '../../claimsolutions/pages/popup/Start/StartRollingUpgradePopup.js';
import { StartRuleCsvImportPopup } from '../../claimsolutions/pages/popup/Start/StartRuleCsvImportPopup.js';
import { StartRuleImportPopup } from '../../claimsolutions/pages/popup/Start/StartRuleImportPopup.js';
import { SumExpressionPopup } from '../../claimsolutions/pages/popup/Sum/SumExpressionPopup.js';
import { TeamClaimRemoveFlagPopup } from '../../claimsolutions/pages/popup/Team/TeamClaimRemoveFlagPopup.js';
import { TimeSearchPopup } from '../../claimsolutions/pages/popup/Time/TimeSearchPopup.js';
import { TotalLossCalculatorPopup } from '../../claimsolutions/pages/popup/Total/TotalLossCalculatorPopup.js';
import { TripAccommodationAddressPopup } from '../../claimsolutions/pages/popup/Trip/TripAccommodationAddressPopup.js';
import { TripIncidentPopup } from '../../claimsolutions/pages/popup/Trip/TripIncidentPopup.js';
import { TripRUPopup } from '../../claimsolutions/pages/popup/Trip/TripRUPopup.js';
import { TripSegmentPopup } from '../../claimsolutions/pages/popup/Trip/TripSegmentPopup.js';
import { UnusedServerRolesPopup } from '../../claimsolutions/pages/popup/Unused/UnusedServerRolesPopup.js';
import { UploadDocumentContentPopup } from '../../claimsolutions/pages/popup/Upload/UploadDocumentContentPopup.js';
import { UserAssignmentCalendarPopup } from '../../claimsolutions/pages/popup/User/UserAssignmentCalendarPopup.js';
import { UserAttributesPopup } from '../../claimsolutions/pages/popup/User/UserAttributesPopup.js';
import { UserContactDetailPopup } from '../../claimsolutions/pages/popup/User/UserContactDetailPopup.js';
import { UserRegionPopup } from '../../claimsolutions/pages/popup/User/UserRegionPopup.js';
import { UserSearchPopup } from '../../claimsolutions/pages/popup/User/UserSearchPopup.js';
import { UserSelectPopup } from '../../claimsolutions/pages/popup/User/UserSelectPopup.js';
import { ValidationPopupErrorsInputSet } from '../../claimsolutions/pages/popup/Validation/ValidationPopupErrorsInputSet.js';
import { VehAssessItemPopup } from '../../claimsolutions/pages/popup/Veh/VehAssessItemPopup.js';
import { VehAssessSourcePopup } from '../../claimsolutions/pages/popup/Veh/VehAssessSourcePopup.js';
import { WCBenefitParameterSetPopup } from '../../claimsolutions/pages/popup/WCBenefit/WCBenefitParameterSetPopup.js';
import { WorkQueueHistoryDownloadConfigurePopup } from '../../claimsolutions/pages/popup/Work/WorkQueueHistoryDownloadConfigurePopup.js';
import { WorkQueueInfoDownloadConfigurePopup } from '../../claimsolutions/pages/popup/Work/WorkQueueInfoDownloadConfigurePopup.js';
import { WorkQueueRawDataDownloadConfigurePopup } from '../../claimsolutions/pages/popup/Work/WorkQueueRawDataDownloadConfigurePopup.js';
import { WorkStatusPopup } from '../../claimsolutions/pages/popup/Work/WorkStatusPopup.js';
import { WorkloadClassificationDetailPopup } from '../../claimsolutions/pages/popup/Workload/WorkloadClassificationDetailPopup.js';
import { NewAccount } from '../../claimsolutions/pages/other/NewAccount.js';
import { NewActivity } from '../../claimsolutions/pages/other/NewActivity.js';
import { NewActivityPattern } from '../../claimsolutions/pages/other/NewActivityPattern.js';
import { NewAssignableQueue } from '../../claimsolutions/pages/other/NewAssignableQueue.js';
import { NewAttribute } from '../../claimsolutions/pages/other/NewAttribute.js';
import { NewAuthorityLimitProfile } from '../../claimsolutions/pages/other/NewAuthorityLimitProfile.js';
import { NewBulkInvoiceDetail } from '../../claimsolutions/pages/other/NewBulkInvoiceDetail.js';
import { NewBulkRestoreArchivedClaims } from '../../claimsolutions/pages/other/NewBulkRestoreArchivedClaims.js';
import { NewBusinessWeek } from '../../claimsolutions/pages/other/NewBusinessWeek.js';
import { NewCatastrophe } from '../../claimsolutions/pages/other/NewCatastrophe.js';
import { NewCheckNoAbilityToPay } from '../../claimsolutions/pages/other/NewCheckNoAbilityToPay.js';
import { NewClaimAssociation } from '../../claimsolutions/pages/other/NewClaimAssociation.js';
import { NewClaimDuplicatesWorksheet } from '../../claimsolutions/pages/other/NewClaimDuplicatesWorksheet.js';
import { NewClaimNewDocumentExistsWorksheet } from '../../claimsolutions/pages/other/NewClaimNewDocumentExistsWorksheet.js';
import { NewClaimNewDocumentFromTemplateWorksheet } from '../../claimsolutions/pages/other/NewClaimNewDocumentFromTemplateWorksheet.js';
import { NewClaimNewDocumentLinkedWorksheet } from '../../claimsolutions/pages/other/NewClaimNewDocumentLinkedWorksheet.js';
import { NewClaimSaved } from '../../claimsolutions/pages/other/NewClaimSaved.js';
import { NewCustomerServiceTier } from '../../claimsolutions/pages/other/NewCustomerServiceTier.js';
import { NewEvaluation } from '../../claimsolutions/pages/other/NewEvaluation.js';
import { NewExposure } from '../../claimsolutions/pages/other/NewExposure.js';
import { NewGroup } from '../../claimsolutions/pages/other/NewGroup.js';
import { NewHoliday } from '../../claimsolutions/pages/other/NewHoliday.js';
import { NewInvoice } from '../../claimsolutions/pages/other/NewInvoice.js';
import { NewMatter } from '../../claimsolutions/pages/other/NewMatter.js';
import { NewNegotiation } from '../../claimsolutions/pages/other/NewNegotiation.js';
import { NewNoteWorksheet } from '../../claimsolutions/pages/other/NewNoteWorksheet.js';
import { NewProperty } from '../../claimsolutions/pages/other/NewProperty.js';
import { NewRIAgreement } from '../../claimsolutions/pages/other/NewRIAgreement.js';
import { NewRecoveryReserveSet } from '../../claimsolutions/pages/other/NewRecoveryReserveSet.js';
import { NewRecoverySet } from '../../claimsolutions/pages/other/NewRecoverySet.js';
import { NewRegion } from '../../claimsolutions/pages/other/NewRegion.js';
import { NewReserveSet } from '../../claimsolutions/pages/other/NewReserveSet.js';
import { NewRole } from '../../claimsolutions/pages/other/NewRole.js';
import { NewScriptParameter } from '../../claimsolutions/pages/other/NewScriptParameter.js';
import { NewSecurityZone } from '../../claimsolutions/pages/other/NewSecurityZone.js';
import { NewServiceRequest } from '../../claimsolutions/pages/other/NewServiceRequest.js';
import { NewUser } from '../../claimsolutions/pages/other/NewUser.js';

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

	getDashboardtabbar() {
		return new DashboardTabBar();
	}

	getAddressbooktabbar() {
		return new AddressBookTabBar();
	}

	getDesktoptabbar() {
		return new DesktopTabBar();
	}

	getClaimtabbar() {
		return new ClaimTabBar();
	}

	getFnolwizard() {
		return new FNOLWizard();
	}

	getAdmintabbar() {
		return new AdminTabBar();
	}

	getAdmin() {
		return new Admin();
	}

	getReporttabbar() {
		return new ReportTabBar();
	}

	getSearchtabbar() {
		return new SearchTabBar();
	}

	getTeamtabbar() {
		return new TeamTabBar();
	}

	getVacationtabbar() {
		return new VacationTabBar();
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
