// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
export const OPENAPI_COMPONENT_MANIFEST = Object.freeze({
    Address: { modulePath: "address/address", schemaName: "AddressSchema" },
    AddressAssociation: {
        modulePath: "address/association",
        schemaName: "AddressAssociationSchema",
    },
    AddressAssociationRole: {
        modulePath: "address/association-role",
        schemaName: "AddressAssociationRoleSchema",
    },
    AddressCity: { modulePath: "address/city", schemaName: "AddressCitySchema" },
    AddressCountry: { modulePath: "address/country", schemaName: "AddressCountrySchema" },
    AddressMutation: { modulePath: "address/mutation", schemaName: "AddressMutationSchema" },
    AddressState: { modulePath: "address/state", schemaName: "AddressStateSchema" },
    AgentChassisCatalog: {
        modulePath: "agent/chassis-catalog",
        schemaName: "AgentChassisCatalogSchema",
    },
    AgentHelp: { modulePath: "agent/help", schemaName: "AgentHelpSchema" },
    AgentHelpQuestion: { modulePath: "agent/help-question", schemaName: "AgentHelpQuestionSchema" },
    AgentHelpReindexResult: {
        modulePath: "agent/help-reindex-result",
        schemaName: "AgentHelpReindexResultSchema",
    },
    AgentInstruction: { modulePath: "agent/instruction", schemaName: "AgentInstructionSchema" },
    AgentInstructionDetail: {
        modulePath: "agent/instruction-detail",
        schemaName: "AgentInstructionDetailSchema",
    },
    AgentInstructionKind: {
        modulePath: "agent/instruction-kind",
        schemaName: "AgentInstructionKindSchema",
    },
    AgentInstructionManifest: {
        modulePath: "agent/instruction-manifest",
        schemaName: "AgentInstructionManifestSchema",
    },
    AgentInstructionPointer: {
        modulePath: "agent/instruction-pointer",
        schemaName: "AgentInstructionPointerSchema",
    },
    AuthPermissionGrant: {
        modulePath: "auth/permission-grant",
        schemaName: "AuthPermissionGrantSchema",
    },
    BillingCheckout: { modulePath: "billing/checkout", schemaName: "BillingCheckoutSchema" },
    BillingCheckoutMutation: {
        modulePath: "billing/checkout-mutation",
        schemaName: "BillingCheckoutMutationSchema",
    },
    BillingPlanType: { modulePath: "billing/plan-type", schemaName: "BillingPlanTypeSchema" },
    BillingPortal: { modulePath: "billing/portal", schemaName: "BillingPortalSchema" },
    BillingSubscription: {
        modulePath: "billing/subscription",
        schemaName: "BillingSubscriptionSchema",
    },
    BlogPost: { modulePath: "blog/post", schemaName: "BlogPostSchema" },
    BlogPostMutation: { modulePath: "blog/post-mutation", schemaName: "BlogPostMutationSchema" },
    BlogPostType: { modulePath: "blog/post-type", schemaName: "BlogPostTypeSchema" },
    ChartBucket: { modulePath: "chart/bucket", schemaName: "ChartBucketSchema" },
    Classification: {
        modulePath: "classification/classification",
        schemaName: "ClassificationSchema",
    },
    ClassificationAudit: {
        modulePath: "classification/audit",
        schemaName: "ClassificationAuditSchema",
    },
    ClassificationAuditEntry: {
        modulePath: "classification/audit-entry",
        schemaName: "ClassificationAuditEntrySchema",
    },
    ClassificationAuditFilter: {
        modulePath: "classification/audit-filter",
        schemaName: "ClassificationAuditFilterSchema",
    },
    ClassificationCatalog: {
        modulePath: "classification/catalog",
        schemaName: "ClassificationCatalogSchema",
    },
    ClassificationCatalogBucket: {
        modulePath: "classification/catalog-bucket",
        schemaName: "ClassificationCatalogBucketSchema",
    },
    ClassificationCatalogCategory: {
        modulePath: "classification/catalog-category",
        schemaName: "ClassificationCatalogCategorySchema",
    },
    ClassificationInactiveTagDetails: {
        modulePath: "classification/inactive-tag-details",
        schemaName: "ClassificationInactiveTagDetailsSchema",
    },
    ClassificationJoinKey: {
        modulePath: "classification/join-key",
        schemaName: "ClassificationJoinKeySchema",
    },
    ClassificationReconcile: {
        modulePath: "classification/reconcile",
        schemaName: "ClassificationReconcileSchema",
    },
    ClassificationReconcileEntity: {
        modulePath: "classification/reconcile-entity",
        schemaName: "ClassificationReconcileEntitySchema",
    },
    ClassificationReconcileMutation: {
        modulePath: "classification/reconcile-mutation",
        schemaName: "ClassificationReconcileMutationSchema",
    },
    ClassificationReconcileOutcome: {
        modulePath: "classification/reconcile-outcome",
        schemaName: "ClassificationReconcileOutcomeSchema",
    },
    ClassificationReconcilePlan: {
        modulePath: "classification/reconcile-plan",
        schemaName: "ClassificationReconcilePlanSchema",
    },
    CliAuthorization: { modulePath: "cli/authorization", schemaName: "CliAuthorizationSchema" },
    CliAuthorizationClientPlatform: {
        modulePath: "cli/authorization-client-platform",
        schemaName: "CliAuthorizationClientPlatformSchema",
    },
    CliAuthorizationDelivery: {
        modulePath: "cli/authorization-delivery",
        schemaName: "CliAuthorizationDeliverySchema",
    },
    CliAuthorizationEncryptionAlgorithm: {
        modulePath: "cli/authorization-encryption-algorithm",
        schemaName: "CliAuthorizationEncryptionAlgorithmSchema",
    },
    CliAuthorizationMutation: {
        modulePath: "cli/authorization-mutation",
        schemaName: "CliAuthorizationMutationSchema",
    },
    CliAuthorizationPoll: {
        modulePath: "cli/authorization-poll",
        schemaName: "CliAuthorizationPollSchema",
    },
    CliAuthorizationStart: {
        modulePath: "cli/authorization-start",
        schemaName: "CliAuthorizationStartSchema",
    },
    CliAuthorizationStatus: {
        modulePath: "cli/authorization-status",
        schemaName: "CliAuthorizationStatusSchema",
    },
    CliAuthorizationTerminalReason: {
        modulePath: "cli/authorization-terminal-reason",
        schemaName: "CliAuthorizationTerminalReasonSchema",
    },
    CompletionGateCoverage: {
        modulePath: "completion/gate-coverage",
        schemaName: "CompletionGateCoverageSchema",
    },
    CompletionGateIndex: {
        modulePath: "completion/gate-index",
        schemaName: "CompletionGateIndexSchema",
    },
    CompletionGateType: {
        modulePath: "completion/gate-type",
        schemaName: "CompletionGateTypeSchema",
    },
    Confidence: { modulePath: "confidence/confidence", schemaName: "ConfidenceSchema" },
    Content: { modulePath: "content/content", schemaName: "ContentSchema" },
    ContentBatchReplaceEntry: {
        modulePath: "content/batch-replace-entry",
        schemaName: "ContentBatchReplaceEntrySchema",
    },
    ContentCompliance: { modulePath: "content/compliance", schemaName: "ContentComplianceSchema" },
    ContentEmbeddingActivity: {
        modulePath: "content/embedding-activity",
        schemaName: "ContentEmbeddingActivitySchema",
    },
    ContentEmbeddingBacklog: {
        modulePath: "content/embedding-backlog",
        schemaName: "ContentEmbeddingBacklogSchema",
    },
    ContentEmbeddingBacklogTypeCount: {
        modulePath: "content/embedding-backlog-type-count",
        schemaName: "ContentEmbeddingBacklogTypeCountSchema",
    },
    ContentEmbeddingBacklogWork: {
        modulePath: "content/embedding-backlog-work",
        schemaName: "ContentEmbeddingBacklogWorkSchema",
    },
    ContentEmbeddingBacklogWorkType: {
        modulePath: "content/embedding-backlog-work-type",
        schemaName: "ContentEmbeddingBacklogWorkTypeSchema",
    },
    ContentEmbeddingClusterMode: {
        modulePath: "content/embedding-cluster-mode",
        schemaName: "ContentEmbeddingClusterModeSchema",
    },
    ContentEmbeddingMatch: {
        modulePath: "content/embedding-match",
        schemaName: "ContentEmbeddingMatchSchema",
    },
    ContentEmbeddingMutation: {
        modulePath: "content/embedding-mutation",
        schemaName: "ContentEmbeddingMutationSchema",
    },
    ContentEmbeddingNeighbor: {
        modulePath: "content/embedding-neighbor",
        schemaName: "ContentEmbeddingNeighborSchema",
    },
    ContentEmbeddingOwnerActivity: {
        modulePath: "content/embedding-owner-activity",
        schemaName: "ContentEmbeddingOwnerActivitySchema",
    },
    ContentFilter: { modulePath: "content/filter", schemaName: "ContentFilterSchema" },
    ContentRelation: { modulePath: "content/relation", schemaName: "ContentRelationSchema" },
    ContentSearchInterpretation: {
        modulePath: "content/search-interpretation",
        schemaName: "ContentSearchInterpretationSchema",
    },
    ContentSearchResult: {
        modulePath: "content/search-result",
        schemaName: "ContentSearchResultSchema",
    },
    ContentSortField: { modulePath: "content/sort-field", schemaName: "ContentSortFieldSchema" },
    ContentSourceType: { modulePath: "content/source-type", schemaName: "ContentSourceTypeSchema" },
    ContentType: { modulePath: "content/type", schemaName: "ContentTypeSchema" },
    CrawlRunJob: { modulePath: "crawl/run-job", schemaName: "CrawlRunJobSchema" },
    CurrentSlugOwner: {
        modulePath: "redirect/current-slug-owner",
        schemaName: "CurrentSlugOwnerSchema",
    },
    DatasourceAgentIdentity: {
        modulePath: "datasource/agent-identity",
        schemaName: "DatasourceAgentIdentitySchema",
    },
    DatasourceDataSourceType: {
        modulePath: "datasource/data-source-type",
        schemaName: "DatasourceDataSourceTypeSchema",
    },
    DatasourceFieldProvenance: {
        modulePath: "datasource/field-provenance",
        schemaName: "DatasourceFieldProvenanceSchema",
    },
    DatasourceProvenanceActor: {
        modulePath: "datasource/provenance-actor",
        schemaName: "DatasourceProvenanceActorSchema",
    },
    DatasourceProvenanceActorType: {
        modulePath: "datasource/provenance-actor-type",
        schemaName: "DatasourceProvenanceActorTypeSchema",
    },
    DatasourceProvenanceFieldChange: {
        modulePath: "datasource/provenance-field-change",
        schemaName: "DatasourceProvenanceFieldChangeSchema",
    },
    DatasourceProvenanceOperation: {
        modulePath: "datasource/provenance-operation",
        schemaName: "DatasourceProvenanceOperationSchema",
    },
    DatasourceProvenanceSource: {
        modulePath: "datasource/provenance-source",
        schemaName: "DatasourceProvenanceSourceSchema",
    },
    DatasourceProvenanceStatus: {
        modulePath: "datasource/provenance-status",
        schemaName: "DatasourceProvenanceStatusSchema",
    },
    DatasourceSourceMetadata: {
        modulePath: "datasource/source-metadata",
        schemaName: "DatasourceSourceMetadataSchema",
    },
    DatasourceTrackedProvenanceTable: {
        modulePath: "datasource/tracked-provenance-table",
        schemaName: "DatasourceTrackedProvenanceTableSchema",
    },
    DatasourceWritableDataSourceType: {
        modulePath: "datasource/writable-data-source-type",
        schemaName: "DatasourceWritableDataSourceTypeSchema",
    },
    DecimalRange: { modulePath: "decimal/range", schemaName: "DecimalRangeSchema" },
    DeleteMode: { modulePath: "delete/mode", schemaName: "DeleteModeSchema" },
    DomainConflictDetails: {
        modulePath: "domain/conflict-details",
        schemaName: "DomainConflictDetailsSchema",
    },
    DuplicateCreateReview: {
        modulePath: "duplicate/create-review",
        schemaName: "DuplicateCreateReviewSchema",
    },
    DuplicateUrlCandidate: {
        modulePath: "duplicate/url-candidate",
        schemaName: "DuplicateUrlCandidateSchema",
    },
    EmployeeCount: { modulePath: "employee/count", schemaName: "EmployeeCountSchema" },
    Entity: { modulePath: "entity/entity", schemaName: "EntitySchema" },
    EntityAcceleratorParticipation: {
        modulePath: "entity/accelerator-participation",
        schemaName: "EntityAcceleratorParticipationSchema",
    },
    EntityAcquisition: { modulePath: "entity/acquisition", schemaName: "EntityAcquisitionSchema" },
    EntityAcquisitionEvidence: {
        modulePath: "entity/acquisition-evidence",
        schemaName: "EntityAcquisitionEvidenceSchema",
    },
    EntityAcquisitionMutation: {
        modulePath: "entity/acquisition-mutation",
        schemaName: "EntityAcquisitionMutationSchema",
    },
    EntityAcquisitionRole: {
        modulePath: "entity/acquisition-role",
        schemaName: "EntityAcquisitionRoleSchema",
    },
    EntityAcquisitionStage: {
        modulePath: "entity/acquisition-stage",
        schemaName: "EntityAcquisitionStageSchema",
    },
    EntityAliasType: { modulePath: "entity/alias-type", schemaName: "EntityAliasTypeSchema" },
    EntityClassification: {
        modulePath: "entity/classification",
        schemaName: "EntityClassificationSchema",
    },
    EntityClassificationInactiveTagOverride: {
        modulePath: "entity/classification-inactive-tag-override",
        schemaName: "EntityClassificationInactiveTagOverrideSchema",
    },
    EntityClassificationMutation: {
        modulePath: "entity/classification-mutation",
        schemaName: "EntityClassificationMutationSchema",
    },
    EntityClassificationSuggestion: {
        modulePath: "entity/classification-suggestion",
        schemaName: "EntityClassificationSuggestionSchema",
    },
    EntityComparisonSignals: {
        modulePath: "entity/comparison-signals",
        schemaName: "EntityComparisonSignalsSchema",
    },
    EntityCreate: { modulePath: "entity/create", schemaName: "EntityCreateSchema" },
    EntityCreateLogo: { modulePath: "entity/create-logo", schemaName: "EntityCreateLogoSchema" },
    EntityCreateLogoSource: {
        modulePath: "entity/create-logo-source",
        schemaName: "EntityCreateLogoSourceSchema",
    },
    EntityCreateResult: {
        modulePath: "entity/create-result",
        schemaName: "EntityCreateResultSchema",
    },
    EntityDetail: { modulePath: "entity/detail", schemaName: "EntityDetailSchema" },
    EntityDetailBatch: { modulePath: "entity/detail-batch", schemaName: "EntityDetailBatchSchema" },
    EntityDetailCoverage: {
        modulePath: "entity/detail-coverage",
        schemaName: "EntityDetailCoverageSchema",
    },
    EntityDetailCoverageSlot: {
        modulePath: "entity/detail-coverage-slot",
        schemaName: "EntityDetailCoverageSlotSchema",
    },
    EntityDuplicateCriteria: {
        modulePath: "entity/duplicate-criteria",
        schemaName: "EntityDuplicateCriteriaSchema",
    },
    EntityEnrichment: { modulePath: "entity/enrichment", schemaName: "EntityEnrichmentSchema" },
    EntityFilter: { modulePath: "entity/filter", schemaName: "EntityFilterSchema" },
    EntityFilterChoice: {
        modulePath: "entity/filter-choice",
        schemaName: "EntityFilterChoiceSchema",
    },
    EntityFilterControlType: {
        modulePath: "entity/filter-control-type",
        schemaName: "EntityFilterControlTypeSchema",
    },
    EntityFilterCount: { modulePath: "entity/filter-count", schemaName: "EntityFilterCountSchema" },
    EntityFilterCountMeta: {
        modulePath: "entity/filter-count-meta",
        schemaName: "EntityFilterCountMetaSchema",
    },
    EntityFilterCountResult: {
        modulePath: "entity/filter-count-result",
        schemaName: "EntityFilterCountResultSchema",
    },
    EntityFilterEntry: { modulePath: "entity/filter-entry", schemaName: "EntityFilterEntrySchema" },
    EntityFilterHeadquartersCountry: {
        modulePath: "entity/filter-headquarters-country",
        schemaName: "EntityFilterHeadquartersCountrySchema",
    },
    EntityFilterHeadquartersOptionSet: {
        modulePath: "entity/filter-headquarters-option-set",
        schemaName: "EntityFilterHeadquartersOptionSetSchema",
    },
    EntityFilterHeadquartersStateCity: {
        modulePath: "entity/filter-headquarters-state-city",
        schemaName: "EntityFilterHeadquartersStateCitySchema",
    },
    EntityFilterLogoOption: {
        modulePath: "entity/filter-logo-option",
        schemaName: "EntityFilterLogoOptionSchema",
    },
    EntityFilterMeta: { modulePath: "entity/filter-meta", schemaName: "EntityFilterMetaSchema" },
    EntityFilterOptionMode: {
        modulePath: "entity/filter-option-mode",
        schemaName: "EntityFilterOptionModeSchema",
    },
    EntityFilterOptionSet: {
        modulePath: "entity/filter-option-set",
        schemaName: "EntityFilterOptionSetSchema",
    },
    EntityFilterOptionSetMeta: {
        modulePath: "entity/filter-option-set-meta",
        schemaName: "EntityFilterOptionSetMetaSchema",
    },
    EntityFilterRefinedFilters: {
        modulePath: "entity/filter-refined-filters",
        schemaName: "EntityFilterRefinedFiltersSchema",
    },
    EntityFilterScope: { modulePath: "entity/filter-scope", schemaName: "EntityFilterScopeSchema" },
    EntityFilterSearch: {
        modulePath: "entity/filter-search",
        schemaName: "EntityFilterSearchSchema",
    },
    EntityFilterSearchResult: {
        modulePath: "entity/filter-search-result",
        schemaName: "EntityFilterSearchResultSchema",
    },
    EntityFilterUiMeta: {
        modulePath: "entity/filter-ui-meta",
        schemaName: "EntityFilterUiMetaSchema",
    },
    EntityFullMutation: {
        modulePath: "entity/full-mutation",
        schemaName: "EntityFullMutationSchema",
    },
    EntityFundingDetail: {
        modulePath: "entity/funding-detail",
        schemaName: "EntityFundingDetailSchema",
    },
    EntityFundraise: { modulePath: "entity/fundraise", schemaName: "EntityFundraiseSchema" },
    EntityFundraiseFilterCriteria: {
        modulePath: "entity/fundraise-filter-criteria",
        schemaName: "EntityFundraiseFilterCriteriaSchema",
    },
    EntityFundraiseInvestorActivity: {
        modulePath: "entity/fundraise-investor-activity",
        schemaName: "EntityFundraiseInvestorActivitySchema",
    },
    EntityFundraiseInvestorJoin: {
        modulePath: "entity/fundraise-investor-join",
        schemaName: "EntityFundraiseInvestorJoinSchema",
    },
    EntityFundraiseInvestorJoinMutation: {
        modulePath: "entity/fundraise-investor-join-mutation",
        schemaName: "EntityFundraiseInvestorJoinMutationSchema",
    },
    EntityFundraiseTransaction: {
        modulePath: "entity/fundraise-transaction",
        schemaName: "EntityFundraiseTransactionSchema",
    },
    EntityFundraiseTransactionEntity: {
        modulePath: "entity/fundraise-transaction-entity",
        schemaName: "EntityFundraiseTransactionEntitySchema",
    },
    EntityFundraiseTransactionMutation: {
        modulePath: "entity/fundraise-transaction-mutation",
        schemaName: "EntityFundraiseTransactionMutationSchema",
    },
    EntityImage: { modulePath: "entity/image", schemaName: "EntityImageSchema" },
    EntityInvestorParticipation: {
        modulePath: "entity/investor-participation",
        schemaName: "EntityInvestorParticipationSchema",
    },
    EntityList: { modulePath: "entity/list", schemaName: "EntityListSchema" },
    EntityListFilter: { modulePath: "entity/list-filter", schemaName: "EntityListFilterSchema" },
    EntityListQualityGate: {
        modulePath: "entity/list-quality-gate",
        schemaName: "EntityListQualityGateSchema",
    },
    EntityListResearch: {
        modulePath: "entity/list-research",
        schemaName: "EntityListResearchSchema",
    },
    EntityListSummary: { modulePath: "entity/list-summary", schemaName: "EntityListSummarySchema" },
    EntityLogoType: { modulePath: "entity/logo-type", schemaName: "EntityLogoTypeSchema" },
    EntityManualLogo: { modulePath: "entity/manual-logo", schemaName: "EntityManualLogoSchema" },
    EntityMerge: { modulePath: "entity/merge", schemaName: "EntityMergeSchema" },
    EntityMutation: { modulePath: "entity/mutation", schemaName: "EntityMutationSchema" },
    EntityNameAliasEntityAliasType: {
        modulePath: "entity/name-alias-entity-alias-type",
        schemaName: "EntityNameAliasEntityAliasTypeSchema",
    },
    EntityNameAliasPersonAliasType: {
        modulePath: "entity/name-alias-person-alias-type",
        schemaName: "EntityNameAliasPersonAliasTypeSchema",
    },
    EntityNaturalSearch: {
        modulePath: "entity/natural-search",
        schemaName: "EntityNaturalSearchSchema",
    },
    EntityOperatingStatus: {
        modulePath: "entity/operating-status",
        schemaName: "EntityOperatingStatusSchema",
    },
    EntityOperatingStatusDetail: {
        modulePath: "entity/operating-status-detail",
        schemaName: "EntityOperatingStatusDetailSchema",
    },
    EntityOperatingStatusSignal: {
        modulePath: "entity/operating-status-signal",
        schemaName: "EntityOperatingStatusSignalSchema",
    },
    EntityPersonAssociation: {
        modulePath: "entity/person-association",
        schemaName: "EntityPersonAssociationSchema",
    },
    EntityPersonOwner: { modulePath: "entity/person-owner", schemaName: "EntityPersonOwnerSchema" },
    EntityRelationship: {
        modulePath: "entity/relationship",
        schemaName: "EntityRelationshipSchema",
    },
    EntityRelationshipMutation: {
        modulePath: "entity/relationship-mutation",
        schemaName: "EntityRelationshipMutationSchema",
    },
    EntityRelationshipTypeOption: {
        modulePath: "entity/relationship-type-option",
        schemaName: "EntityRelationshipTypeOptionSchema",
    },
    EntityResearch: { modulePath: "entity/research", schemaName: "EntityResearchSchema" },
    EntityResearchDetail: {
        modulePath: "entity/research-detail",
        schemaName: "EntityResearchDetailSchema",
    },
    EntityResearchDetailMutation: {
        modulePath: "entity/research-detail-mutation",
        schemaName: "EntityResearchDetailMutationSchema",
    },
    EntityResearchFactValue: {
        modulePath: "entity/research-fact-value",
        schemaName: "EntityResearchFactValueSchema",
    },
    EntityResearchSnippet: {
        modulePath: "entity/research-snippet",
        schemaName: "EntityResearchSnippetSchema",
    },
    EntityResearchSnippetMutation: {
        modulePath: "entity/research-snippet-mutation",
        schemaName: "EntityResearchSnippetMutationSchema",
    },
    EntityResearchValueType: {
        modulePath: "entity/research-value-type",
        schemaName: "EntityResearchValueTypeSchema",
    },
    EntityResolution: { modulePath: "entity/resolution", schemaName: "EntityResolutionSchema" },
    EntitySimilarityContext: {
        modulePath: "entity/similarity-context",
        schemaName: "EntitySimilarityContextSchema",
    },
    EntitySimilarityOrigin: {
        modulePath: "entity/similarity-origin",
        schemaName: "EntitySimilarityOriginSchema",
    },
    EntitySimilarityResult: {
        modulePath: "entity/similarity-result",
        schemaName: "EntitySimilarityResultSchema",
    },
    EntitySitemap: { modulePath: "entity/sitemap", schemaName: "EntitySitemapSchema" },
    EntityStatus: { modulePath: "entity/status", schemaName: "EntityStatusSchema" },
    EntityStatusMutation: {
        modulePath: "entity/status-mutation",
        schemaName: "EntityStatusMutationSchema",
    },
    EntitySuggestion: { modulePath: "entity/suggestion", schemaName: "EntitySuggestionSchema" },
    EntitySuggestionResult: {
        modulePath: "entity/suggestion-result",
        schemaName: "EntitySuggestionResultSchema",
    },
    EntityTag: { modulePath: "entity/tag", schemaName: "EntityTagSchema" },
    EntityTagCount: { modulePath: "entity/tag-count", schemaName: "EntityTagCountSchema" },
    EntityText: { modulePath: "entity/text", schemaName: "EntityTextSchema" },
    EntityTextBundle: { modulePath: "entity/text-bundle", schemaName: "EntityTextBundleSchema" },
    EntityTextMutation: {
        modulePath: "entity/text-mutation",
        schemaName: "EntityTextMutationSchema",
    },
    EntityType: { modulePath: "entity/type", schemaName: "EntityTypeSchema" },
    EntityTypeAlias: { modulePath: "entity/type-alias", schemaName: "EntityTypeAliasSchema" },
    EntityTypeCount: { modulePath: "entity/type-count", schemaName: "EntityTypeCountSchema" },
    EntityTypeGroup: { modulePath: "entity/type-group", schemaName: "EntityTypeGroupSchema" },
    EntityTypeGroupMembership: {
        modulePath: "entity/type-group-membership",
        schemaName: "EntityTypeGroupMembershipSchema",
    },
    EntityUrlCrawlCdnProvider: {
        modulePath: "entity/url-crawl-cdn-provider",
        schemaName: "EntityUrlCrawlCdnProviderSchema",
    },
    EntityUrlCrawlRenderMode: {
        modulePath: "entity/url-crawl-render-mode",
        schemaName: "EntityUrlCrawlRenderModeSchema",
    },
    EntityUrlLink: { modulePath: "entity/url-link", schemaName: "EntityUrlLinkSchema" },
    EntityUrlLinkMutation: {
        modulePath: "entity/url-link-mutation",
        schemaName: "EntityUrlLinkMutationSchema",
    },
    EntityUrlMatchStrictness: {
        modulePath: "entity/url-match-strictness",
        schemaName: "EntityUrlMatchStrictnessSchema",
    },
    EntityUrlType: { modulePath: "entity/url-type", schemaName: "EntityUrlTypeSchema" },
    EntityValuationDataConfidence: {
        modulePath: "entity/valuation-data-confidence",
        schemaName: "EntityValuationDataConfidenceSchema",
    },
    EntityValuationDerivation: {
        modulePath: "entity/valuation-derivation",
        schemaName: "EntityValuationDerivationSchema",
    },
    EntityValuationMutation: {
        modulePath: "entity/valuation-mutation",
        schemaName: "EntityValuationMutationSchema",
    },
    EntityValuationSource: {
        modulePath: "entity/valuation-source",
        schemaName: "EntityValuationSourceSchema",
    },
    EntityValuationTimeSeriesPoint: {
        modulePath: "entity/valuation-time-series-point",
        schemaName: "EntityValuationTimeSeriesPointSchema",
    },
    ExternalSocialPostPlatform: {
        modulePath: "external/social-post-platform",
        schemaName: "ExternalSocialPostPlatformSchema",
    },
    FederatedSearch: { modulePath: "federated/search", schemaName: "FederatedSearchSchema" },
    FederatedSearchProvenance: {
        modulePath: "federated/search-provenance",
        schemaName: "FederatedSearchProvenanceSchema",
    },
    FundingStage: { modulePath: "funding/stage", schemaName: "FundingStageSchema" },
    FundraiseDataConfidence: {
        modulePath: "fundraise/data-confidence",
        schemaName: "FundraiseDataConfidenceSchema",
    },
    FundraiseFinancialInstrumentType: {
        modulePath: "fundraise/financial-instrument-type",
        schemaName: "FundraiseFinancialInstrumentTypeSchema",
    },
    FundraiseInvestmentAttribution: {
        modulePath: "fundraise/investment-attribution",
        schemaName: "FundraiseInvestmentAttributionSchema",
    },
    FundraiseInvestmentAttributionType: {
        modulePath: "fundraise/investment-attribution-type",
        schemaName: "FundraiseInvestmentAttributionTypeSchema",
    },
    FundraiseTransactionStatus: {
        modulePath: "fundraise/transaction-status",
        schemaName: "FundraiseTransactionStatusSchema",
    },
    GithubRepo: { modulePath: "github/repo", schemaName: "GithubRepoSchema" },
    HelpCitation: { modulePath: "help/citation", schemaName: "HelpCitationSchema" },
    HelpScope: { modulePath: "help/scope", schemaName: "HelpScopeSchema" },
    HelpSourceType: { modulePath: "help/source-type", schemaName: "HelpSourceTypeSchema" },
    IntRange: { modulePath: "int/range", schemaName: "IntRangeSchema" },
    InvestorActivityFilter: {
        modulePath: "investor/activity-filter",
        schemaName: "InvestorActivityFilterSchema",
    },
    JobCancel: { modulePath: "job/cancel", schemaName: "JobCancelSchema" },
    JobEnqueue: { modulePath: "job/enqueue", schemaName: "JobEnqueueSchema" },
    JobState: { modulePath: "job/state", schemaName: "JobStateSchema" },
    JsonValue: { modulePath: "http/json-value", schemaName: "JsonValueSchema" },
    LinkSearch: { modulePath: "link/search", schemaName: "LinkSearchSchema" },
    LogoAccuracy: { modulePath: "logo/accuracy", schemaName: "LogoAccuracySchema" },
    LogoAccuracyReference: {
        modulePath: "logo/accuracy-reference",
        schemaName: "LogoAccuracyReferenceSchema",
    },
    MediaImportResult: { modulePath: "media/import-result", schemaName: "MediaImportResultSchema" },
    MediaLogoAuditEnqueue: {
        modulePath: "media/logo-audit-enqueue",
        schemaName: "MediaLogoAuditEnqueueSchema",
    },
    MediaLogoAuditJob: {
        modulePath: "media/logo-audit-job",
        schemaName: "MediaLogoAuditJobSchema",
    },
    MediaObjectType: { modulePath: "media/object-type", schemaName: "MediaObjectTypeSchema" },
    MediaRetrofitEnqueue: {
        modulePath: "media/retrofit-enqueue",
        schemaName: "MediaRetrofitEnqueueSchema",
    },
    MediaRetrofitJob: { modulePath: "media/retrofit-job", schemaName: "MediaRetrofitJobSchema" },
    MediaScreenshot: { modulePath: "media/screenshot", schemaName: "MediaScreenshotSchema" },
    MediaUpload: { modulePath: "media/upload", schemaName: "MediaUploadSchema" },
    NaturalSearch: { modulePath: "natural/search", schemaName: "NaturalSearchSchema" },
    NaturalSearchResult: {
        modulePath: "natural/search-result",
        schemaName: "NaturalSearchResultSchema",
    },
    News: { modulePath: "news/news", schemaName: "NewsSchema" },
    NewsCandidateScore: {
        modulePath: "news/candidate-score",
        schemaName: "NewsCandidateScoreSchema",
    },
    NewsDeleteMode: { modulePath: "news/delete-mode", schemaName: "NewsDeleteModeSchema" },
    NewsDetail: { modulePath: "news/detail", schemaName: "NewsDetailSchema" },
    NewsDuplicateCheck: {
        modulePath: "news/duplicate-check",
        schemaName: "NewsDuplicateCheckSchema",
    },
    NewsFeedback: { modulePath: "news/feedback", schemaName: "NewsFeedbackSchema" },
    NewsFeedbackAcknowledgement: {
        modulePath: "news/feedback-acknowledgement",
        schemaName: "NewsFeedbackAcknowledgementSchema",
    },
    NewsFilter: { modulePath: "news/filter", schemaName: "NewsFilterSchema" },
    NewsLinkerCandidate: {
        modulePath: "news/linker-candidate",
        schemaName: "NewsLinkerCandidateSchema",
    },
    NewsMutation: { modulePath: "news/mutation", schemaName: "NewsMutationSchema" },
    NewsResolvedEntityLink: {
        modulePath: "news/resolved-entity-link",
        schemaName: "NewsResolvedEntityLinkSchema",
    },
    NewsResolvedPersonLink: {
        modulePath: "news/resolved-person-link",
        schemaName: "NewsResolvedPersonLinkSchema",
    },
    NewsSourceUrlConflict: {
        modulePath: "news/source-url-conflict",
        schemaName: "NewsSourceUrlConflictSchema",
    },
    OperatingStatusSignalVerdict: {
        modulePath: "operating/status-signal-verdict",
        schemaName: "OperatingStatusSignalVerdictSchema",
    },
    OverrideGate: { modulePath: "override/gate", schemaName: "OverrideGateSchema" },
    PageableObject: { modulePath: "pageable/object", schemaName: "PageableObjectSchema" },
    PageBlogPost: { modulePath: "pagination/schemas", schemaName: "PageBlogPostSchema" },
    PageClassification: {
        modulePath: "pagination/schemas",
        schemaName: "PageClassificationSchema",
    },
    PageContent: { modulePath: "pagination/schemas", schemaName: "PageContentSchema" },
    PageDatasourceFieldProvenance: {
        modulePath: "pagination/schemas",
        schemaName: "PageDatasourceFieldProvenanceSchema",
    },
    PageEmployeeCount: { modulePath: "pagination/schemas", schemaName: "PageEmployeeCountSchema" },
    PageEntity: { modulePath: "pagination/schemas", schemaName: "PageEntitySchema" },
    PageEntityAcquisition: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityAcquisitionSchema",
    },
    PageEntityDetail: { modulePath: "pagination/schemas", schemaName: "PageEntityDetailSchema" },
    PageEntityFundraiseInvestorJoin: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityFundraiseInvestorJoinSchema",
    },
    PageEntityFundraiseTransaction: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityFundraiseTransactionSchema",
    },
    PageEntityInvestorParticipation: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityInvestorParticipationSchema",
    },
    PageEntityList: { modulePath: "pagination/schemas", schemaName: "PageEntityListSchema" },
    PageEntityListSummary: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityListSummarySchema",
    },
    PageEntityPersonAssociation: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityPersonAssociationSchema",
    },
    PageEntityRelationship: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityRelationshipSchema",
    },
    PageEntityResearchDetail: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityResearchDetailSchema",
    },
    PageEntityResearchSnippet: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityResearchSnippetSchema",
    },
    PageEntitySimilarityResult: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntitySimilarityResultSchema",
    },
    PageEntityTag: { modulePath: "pagination/schemas", schemaName: "PageEntityTagSchema" },
    PageEntityText: { modulePath: "pagination/schemas", schemaName: "PageEntityTextSchema" },
    PageEntityUrlLink: { modulePath: "pagination/schemas", schemaName: "PageEntityUrlLinkSchema" },
    PageEntityValuationTimeSeriesPoint: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityValuationTimeSeriesPointSchema",
    },
    PageGithubRepo: { modulePath: "pagination/schemas", schemaName: "PageGithubRepoSchema" },
    PageMediaLogoAuditJob: {
        modulePath: "pagination/schemas",
        schemaName: "PageMediaLogoAuditJobSchema",
    },
    PageMediaScreenshot: {
        modulePath: "pagination/schemas",
        schemaName: "PageMediaScreenshotSchema",
    },
    PageNews: { modulePath: "pagination/schemas", schemaName: "PageNewsSchema" },
    PageNewsCandidateScore: {
        modulePath: "pagination/schemas",
        schemaName: "PageNewsCandidateScoreSchema",
    },
    PageNewsDetail: { modulePath: "pagination/schemas", schemaName: "PageNewsDetailSchema" },
    PageNewsLinkerCandidate: {
        modulePath: "pagination/schemas",
        schemaName: "PageNewsLinkerCandidateSchema",
    },
    PagePerson: { modulePath: "pagination/schemas", schemaName: "PagePersonSchema" },
    PagePersonDetail: { modulePath: "pagination/schemas", schemaName: "PagePersonDetailSchema" },
    PagePersonInvestment: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonInvestmentSchema",
    },
    PagePersonInvestorParticipation: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonInvestorParticipationSchema",
    },
    PagePersonSimilarityResult: {
        modulePath: "pagination/schemas",
        schemaName: "PagePersonSimilarityResultSchema",
    },
    PageResultContent: { modulePath: "pagination/schemas", schemaName: "PageResultContentSchema" },
    PageResultEntityList: {
        modulePath: "pagination/schemas",
        schemaName: "PageResultEntityListSchema",
    },
    PageResultNews: { modulePath: "pagination/schemas", schemaName: "PageResultNewsSchema" },
    PageResultPerson: { modulePath: "pagination/schemas", schemaName: "PageResultPersonSchema" },
    PageSearchDuplicateCandidateScore: {
        modulePath: "pagination/schemas",
        schemaName: "PageSearchDuplicateCandidateScoreSchema",
    },
    PageUniqueId: { modulePath: "pagination/schemas", schemaName: "PageUniqueIdSchema" },
    PageUrlSlugRedirect: {
        modulePath: "pagination/schemas",
        schemaName: "PageUrlSlugRedirectSchema",
    },
    Person: { modulePath: "person/person", schemaName: "PersonSchema" },
    PersonalApiKey: { modulePath: "personal/api-key", schemaName: "PersonalApiKeySchema" },
    PersonAliasType: { modulePath: "person/alias-type", schemaName: "PersonAliasTypeSchema" },
    PersonCreate: { modulePath: "person/create", schemaName: "PersonCreateSchema" },
    PersonDetail: { modulePath: "person/detail", schemaName: "PersonDetailSchema" },
    PersonDetailBatch: { modulePath: "person/detail-batch", schemaName: "PersonDetailBatchSchema" },
    PersonDuplicateCriteria: {
        modulePath: "person/duplicate-criteria",
        schemaName: "PersonDuplicateCriteriaSchema",
    },
    PersonEnrichment: { modulePath: "person/enrichment", schemaName: "PersonEnrichmentSchema" },
    PersonEntityAssociationMutation: {
        modulePath: "person/entity-association-mutation",
        schemaName: "PersonEntityAssociationMutationSchema",
    },
    PersonFilter: { modulePath: "person/filter", schemaName: "PersonFilterSchema" },
    PersonGraph: { modulePath: "person/graph", schemaName: "PersonGraphSchema" },
    PersonGraphCareerContext: {
        modulePath: "person/graph-career-context",
        schemaName: "PersonGraphCareerContextSchema",
    },
    PersonGraphCoInvestor: {
        modulePath: "person/graph-co-investor",
        schemaName: "PersonGraphCoInvestorSchema",
    },
    PersonGraphMember: { modulePath: "person/graph-member", schemaName: "PersonGraphMemberSchema" },
    PersonGraphRolePeer: {
        modulePath: "person/graph-role-peer",
        schemaName: "PersonGraphRolePeerSchema",
    },
    PersonGraphSimilarEntity: {
        modulePath: "person/graph-similar-entity",
        schemaName: "PersonGraphSimilarEntitySchema",
    },
    PersonImage: { modulePath: "person/image", schemaName: "PersonImageSchema" },
    PersonImageMutation: {
        modulePath: "person/image-mutation",
        schemaName: "PersonImageMutationSchema",
    },
    PersonInvestedCompany: {
        modulePath: "person/invested-company",
        schemaName: "PersonInvestedCompanySchema",
    },
    PersonInvestment: { modulePath: "person/investment", schemaName: "PersonInvestmentSchema" },
    PersonInvestorParticipation: {
        modulePath: "person/investor-participation",
        schemaName: "PersonInvestorParticipationSchema",
    },
    PersonListArrayFilter: {
        modulePath: "person/list-array-filter",
        schemaName: "PersonListArrayFilterSchema",
    },
    PersonMerge: { modulePath: "person/merge", schemaName: "PersonMergeSchema" },
    PersonMutation: { modulePath: "person/mutation", schemaName: "PersonMutationSchema" },
    PersonNaturalSearch: {
        modulePath: "person/natural-search",
        schemaName: "PersonNaturalSearchSchema",
    },
    PersonNaturalSearchResult: {
        modulePath: "person/natural-search-result",
        schemaName: "PersonNaturalSearchResultSchema",
    },
    PersonSearchInterpretation: {
        modulePath: "person/search-interpretation",
        schemaName: "PersonSearchInterpretationSchema",
    },
    PersonSimilarityContext: {
        modulePath: "person/similarity-context",
        schemaName: "PersonSimilarityContextSchema",
    },
    PersonSimilarityOrigin: {
        modulePath: "person/similarity-origin",
        schemaName: "PersonSimilarityOriginSchema",
    },
    PersonSimilarityResult: {
        modulePath: "person/similarity-result",
        schemaName: "PersonSimilarityResultSchema",
    },
    PersonSourceMutation: {
        modulePath: "person/source-mutation",
        schemaName: "PersonSourceMutationSchema",
    },
    PersonVisibilityStatusMutation: {
        modulePath: "person/visibility-status-mutation",
        schemaName: "PersonVisibilityStatusMutationSchema",
    },
    ProblemDetail: { modulePath: "http/problem-detail", schemaName: "ProblemDetailSchema" },
    ProblemResolution: { modulePath: "problem/resolution", schemaName: "ProblemResolutionSchema" },
    RedirectSlugPath: {
        modulePath: "redirect/redirect-slug-path",
        schemaName: "RedirectSlugPathSchema",
    },
    RefinementMeta: { modulePath: "refinement/meta", schemaName: "RefinementMetaSchema" },
    RefreshSweepKind: { modulePath: "refresh/sweep-kind", schemaName: "RefreshSweepKindSchema" },
    RefreshTriggerOutcome: {
        modulePath: "refresh/trigger-outcome",
        schemaName: "RefreshTriggerOutcomeSchema",
    },
    RelationshipDirection: {
        modulePath: "relationship/direction",
        schemaName: "RelationshipDirectionSchema",
    },
    ResearchAllowance: { modulePath: "research/allowance", schemaName: "ResearchAllowanceSchema" },
    ResearchAllowanceUsage: {
        modulePath: "research/allowance-usage",
        schemaName: "ResearchAllowanceUsageSchema",
    },
    ResearchDerivedBucket: {
        modulePath: "research/derived-bucket",
        schemaName: "ResearchDerivedBucketSchema",
    },
    ResearchDerivedRange: {
        modulePath: "research/derived-range",
        schemaName: "ResearchDerivedRangeSchema",
    },
    ResearchDetailType: {
        modulePath: "research/detail-type",
        schemaName: "ResearchDetailTypeSchema",
    },
    ResearchParagraphShape: {
        modulePath: "research/paragraph-shape",
        schemaName: "ResearchParagraphShapeSchema",
    },
    ResearchSnippetType: {
        modulePath: "research/snippet-type",
        schemaName: "ResearchSnippetTypeSchema",
    },
    ResearchValueRange: {
        modulePath: "research/value-range",
        schemaName: "ResearchValueRangeSchema",
    },
    ResearchValueShapeType: {
        modulePath: "research/value-shape-type",
        schemaName: "ResearchValueShapeTypeSchema",
    },
    ResolvedHandle: { modulePath: "resolved/handle", schemaName: "ResolvedHandleSchema" },
    RoundLabel: { modulePath: "round/label", schemaName: "RoundLabelSchema" },
    Search: { modulePath: "search/search", schemaName: "SearchSchema" },
    SearchDuplicateCandidateScore: {
        modulePath: "search/duplicate-candidate-score",
        schemaName: "SearchDuplicateCandidateScoreSchema",
    },
    SearchHit: { modulePath: "search/hit", schemaName: "SearchHitSchema" },
    SearchInterpretation: {
        modulePath: "search/interpretation",
        schemaName: "SearchInterpretationSchema",
    },
    SearchMode: { modulePath: "search/mode", schemaName: "SearchModeSchema" },
    SearchModeExecution: {
        modulePath: "search/mode-execution",
        schemaName: "SearchModeExecutionSchema",
    },
    SecCompany: { modulePath: "sec/company", schemaName: "SecCompanySchema" },
    SecIdentifierMapping: {
        modulePath: "sec/identifier-mapping",
        schemaName: "SecIdentifierMappingSchema",
    },
    SlugChange: { modulePath: "slug/change", schemaName: "SlugChangeSchema" },
    SlugChangeResult: { modulePath: "slug/change-result", schemaName: "SlugChangeResultSchema" },
    SlugDelete: { modulePath: "slug/delete", schemaName: "SlugDeleteSchema" },
    SlugLocation: { modulePath: "slug/location", schemaName: "SlugLocationSchema" },
    SlugResource: { modulePath: "redirect/slug-resource", schemaName: "SlugResourceSchema" },
    SortObject: { modulePath: "sort/object", schemaName: "SortObjectSchema" },
    SortOrderContentSortField: {
        modulePath: "sort/order-content-sort-field",
        schemaName: "SortOrderContentSortFieldSchema",
    },
    SortOrderEntityFilterSortable: {
        modulePath: "sort/order-entity-filter-sortable",
        schemaName: "SortOrderEntityFilterSortableSchema",
    },
    SortOrderPersonSortField: {
        modulePath: "sort/order-person-sort-field",
        schemaName: "SortOrderPersonSortFieldSchema",
    },
    SortSpecContentSortField: {
        modulePath: "sort/spec-content-sort-field",
        schemaName: "SortSpecContentSortFieldSchema",
    },
    SortSpecEntityFilterSortable: {
        modulePath: "sort/spec-entity-filter-sortable",
        schemaName: "SortSpecEntityFilterSortableSchema",
    },
    SortSpecPersonSortField: {
        modulePath: "sort/spec-person-sort-field",
        schemaName: "SortSpecPersonSortFieldSchema",
    },
    SourceDocumentList: {
        modulePath: "source/document-list",
        schemaName: "SourceDocumentListSchema",
    },
    StageFrequency: { modulePath: "stage/frequency", schemaName: "StageFrequencySchema" },
    StandardizedClassification: {
        modulePath: "standardized/classification",
        schemaName: "StandardizedClassificationSchema",
    },
    StrictUrlLookupConflict: {
        modulePath: "strict/url-lookup-conflict",
        schemaName: "StrictUrlLookupConflictSchema",
    },
    SystemBuild: { modulePath: "system/system-build", schemaName: "SystemBuildSchema" },
    SystemBuildDetail: {
        modulePath: "system/system-build-detail",
        schemaName: "SystemBuildDetailSchema",
    },
    SystemStatus: { modulePath: "system/status", schemaName: "SystemStatusSchema" },
    TextTypeOption: { modulePath: "text/type-option", schemaName: "TextTypeOptionSchema" },
    UniqueId: { modulePath: "unique/id", schemaName: "UniqueIdSchema" },
    UniqueIdMutation: { modulePath: "unique/id-mutation", schemaName: "UniqueIdMutationSchema" },
    UniqueIdOwnerScope: {
        modulePath: "unique/id-owner-scope",
        schemaName: "UniqueIdOwnerScopeSchema",
    },
    UniqueIdType: { modulePath: "unique/id-type", schemaName: "UniqueIdTypeSchema" },
    UniqueIdTypeAlias: {
        modulePath: "unique/id-type-alias",
        schemaName: "UniqueIdTypeAliasSchema",
    },
    Uptime: { modulePath: "uptime/uptime", schemaName: "UptimeSchema" },
    UrlDuplicateConflict: {
        modulePath: "url/duplicate-conflict",
        schemaName: "UrlDuplicateConflictSchema",
    },
    UrlDuplicateJoin: { modulePath: "url/duplicate-join", schemaName: "UrlDuplicateJoinSchema" },
    UrlMatchMode: { modulePath: "url/match-mode", schemaName: "UrlMatchModeSchema" },
    UrlSlugRedirect: { modulePath: "url/slug-redirect", schemaName: "UrlSlugRedirectSchema" },
    UrlSurfaceMisclassificationCatalog: {
        modulePath: "url/surface-misclassification-catalog",
        schemaName: "UrlSurfaceMisclassificationCatalogSchema",
    },
    UrlSurfaceMisclassificationRoute: {
        modulePath: "url/surface-misclassification-route",
        schemaName: "UrlSurfaceMisclassificationRouteSchema",
    },
    UrlTypeAlias: { modulePath: "url/type-alias", schemaName: "UrlTypeAliasSchema" },
    ValuationType: { modulePath: "valuation/type", schemaName: "ValuationTypeSchema" },
    WebSearch: { modulePath: "web/search", schemaName: "WebSearchSchema" },
});
//# sourceMappingURL=openapi-component-manifest.js.map