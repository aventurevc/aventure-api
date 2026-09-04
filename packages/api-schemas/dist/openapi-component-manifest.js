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
    AddressLookupContext: {
        modulePath: "address/lookup-context",
        schemaName: "AddressLookupContextSchema",
    },
    AddressProviderMetadata: {
        modulePath: "address/provider-metadata",
        schemaName: "AddressProviderMetadataSchema",
    },
    AddressReferenceMatch: {
        modulePath: "address/reference-match",
        schemaName: "AddressReferenceMatchSchema",
    },
    AddressReferenceMatchSource: {
        modulePath: "address/reference-match-source",
        schemaName: "AddressReferenceMatchSourceSchema",
    },
    AddressState: { modulePath: "address/state", schemaName: "AddressStateSchema" },
    AddressValidationMutation: {
        modulePath: "address/validation-mutation",
        schemaName: "AddressValidationMutationSchema",
    },
    AddressValidationProvider: {
        modulePath: "address/validation-provider",
        schemaName: "AddressValidationProviderSchema",
    },
    AddressValidationResult: {
        modulePath: "address/validation-result",
        schemaName: "AddressValidationResultSchema",
    },
    AddressValidationStatus: {
        modulePath: "address/validation-status",
        schemaName: "AddressValidationStatusSchema",
    },
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
    AgentTaskPreset: { modulePath: "agent/task-preset", schemaName: "AgentTaskPresetSchema" },
    AgentTaskPresetCatalog: {
        modulePath: "agent/task-preset-catalog",
        schemaName: "AgentTaskPresetCatalogSchema",
    },
    AgentTaskPresetPhase: {
        modulePath: "agent/task-preset-phase",
        schemaName: "AgentTaskPresetPhaseSchema",
    },
    AgentTaskResultMetadata: {
        modulePath: "agent/task-result-metadata",
        schemaName: "AgentTaskResultMetadataSchema",
    },
    AgentTaskTranscript: {
        modulePath: "agent/task-transcript",
        schemaName: "AgentTaskTranscriptSchema",
    },
    AgentTaskTurn: { modulePath: "agent/task-turn", schemaName: "AgentTaskTurnSchema" },
    AgentTaskUsage: { modulePath: "agent/task-usage", schemaName: "AgentTaskUsageSchema" },
    AppJob: { modulePath: "app/job", schemaName: "AppJobSchema" },
    AppJobClaimHistory: {
        modulePath: "app/job-claim-history",
        schemaName: "AppJobClaimHistorySchema",
    },
    AppJobInstance: { modulePath: "app/job-instance", schemaName: "AppJobInstanceSchema" },
    AppJobMutation: { modulePath: "app/job-mutation", schemaName: "AppJobMutationSchema" },
    AppJobRun: { modulePath: "app/job-run", schemaName: "AppJobRunSchema" },
    AppJobRunDetail: { modulePath: "app/job-run-detail", schemaName: "AppJobRunDetailSchema" },
    AppJobRunStatus: { modulePath: "app/job-run-status", schemaName: "AppJobRunStatusSchema" },
    AuthAck: { modulePath: "auth/ack", schemaName: "AuthAckSchema" },
    AuthAdminUserMutation: {
        modulePath: "auth/admin-user-mutation",
        schemaName: "AuthAdminUserMutationSchema",
    },
    AuthLoginMutation: { modulePath: "auth/login-mutation", schemaName: "AuthLoginMutationSchema" },
    AuthPasswordResetMutation: {
        modulePath: "auth/password-reset-mutation",
        schemaName: "AuthPasswordResetMutationSchema",
    },
    AuthPermissionGrant: {
        modulePath: "auth/permission-grant",
        schemaName: "AuthPermissionGrantSchema",
    },
    AuthProviderCatalog: {
        modulePath: "auth/provider-catalog",
        schemaName: "AuthProviderCatalogSchema",
    },
    AuthRefreshTokenMutation: {
        modulePath: "auth/refresh-token-mutation",
        schemaName: "AuthRefreshTokenMutationSchema",
    },
    AuthToken: { modulePath: "auth/token", schemaName: "AuthTokenSchema" },
    AuthUser: { modulePath: "auth/user", schemaName: "AuthUserSchema" },
    AuthUserMetadata: { modulePath: "auth/user-metadata", schemaName: "AuthUserMetadataSchema" },
    AuthUserMutation: { modulePath: "auth/user-mutation", schemaName: "AuthUserMutationSchema" },
    AventureBlogArticle: {
        modulePath: "aventure/blog-article",
        schemaName: "AventureBlogArticleSchema",
    },
    AventureBlogArticleList: {
        modulePath: "aventure/blog-article-list",
        schemaName: "AventureBlogArticleListSchema",
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
    BlogPostIngestRun: {
        modulePath: "blog/post-ingest-run",
        schemaName: "BlogPostIngestRunSchema",
    },
    BlogPostMentionSweepRun: {
        modulePath: "blog/post-mention-sweep-run",
        schemaName: "BlogPostMentionSweepRunSchema",
    },
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
    ClerkScriptLoadCspDirective: {
        modulePath: "clerk/script-load-csp-directive",
        schemaName: "ClerkScriptLoadCspDirectiveSchema",
    },
    ClerkScriptLoadCspDisposition: {
        modulePath: "clerk/script-load-csp-disposition",
        schemaName: "ClerkScriptLoadCspDispositionSchema",
    },
    ClerkScriptLoadEvent: {
        modulePath: "clerk/script-load-event",
        schemaName: "ClerkScriptLoadEventSchema",
    },
    ClerkScriptLoadEventType: {
        modulePath: "clerk/script-load-event-type",
        schemaName: "ClerkScriptLoadEventTypeSchema",
    },
    ClerkScriptLoadFailureClassification: {
        modulePath: "clerk/script-load-failure-classification",
        schemaName: "ClerkScriptLoadFailureClassificationSchema",
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
    CompositeHealthDescriptor: {
        modulePath: "system/composite-health-descriptor",
        schemaName: "CompositeHealthDescriptorSchema",
    },
    Confidence: { modulePath: "confidence/confidence", schemaName: "ConfidenceSchema" },
    Contact: { modulePath: "contact/contact", schemaName: "ContactSchema" },
    ContactForm: { modulePath: "contact/form", schemaName: "ContactFormSchema" },
    ContactFormAdminEmail: {
        modulePath: "contact/form-admin-email",
        schemaName: "ContactFormAdminEmailSchema",
    },
    ContactFormCreateResult: {
        modulePath: "contact/form-create-result",
        schemaName: "ContactFormCreateResultSchema",
    },
    ContactFormMutation: {
        modulePath: "contact/form-mutation",
        schemaName: "ContactFormMutationSchema",
    },
    ContactFormSource: { modulePath: "contact/form-source", schemaName: "ContactFormSourceSchema" },
    ContactMutation: { modulePath: "contact/mutation", schemaName: "ContactMutationSchema" },
    ContactSocialProfile: {
        modulePath: "contact/social-profile",
        schemaName: "ContactSocialProfileSchema",
    },
    ContactWaitlistStatus: {
        modulePath: "contact/waitlist-status",
        schemaName: "ContactWaitlistStatusSchema",
    },
    Content: { modulePath: "content/content", schemaName: "ContentSchema" },
    ContentAuthor: { modulePath: "content/author", schemaName: "ContentAuthorSchema" },
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
    ContentMutation: { modulePath: "content/mutation", schemaName: "ContentMutationSchema" },
    ContentPage: { modulePath: "content/page", schemaName: "ContentPageSchema" },
    ContentPageList: { modulePath: "content/page-list", schemaName: "ContentPageListSchema" },
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
    ContentStatus: { modulePath: "content/status", schemaName: "ContentStatusSchema" },
    ContentStatusMutation: {
        modulePath: "content/status-mutation",
        schemaName: "ContentStatusMutationSchema",
    },
    ContentTaxonomy: { modulePath: "content/taxonomy", schemaName: "ContentTaxonomySchema" },
    ContentTaxonomyCount: {
        modulePath: "content/taxonomy-count",
        schemaName: "ContentTaxonomyCountSchema",
    },
    ContentType: { modulePath: "content/type", schemaName: "ContentTypeSchema" },
    ContentViewCount: { modulePath: "content/view-count", schemaName: "ContentViewCountSchema" },
    CrawlRun: { modulePath: "crawl/run", schemaName: "CrawlRunSchema" },
    CrawlRunJob: { modulePath: "crawl/run-job", schemaName: "CrawlRunJobSchema" },
    CurrentSlugOwner: {
        modulePath: "redirect/current-slug-owner",
        schemaName: "CurrentSlugOwnerSchema",
    },
    CursorSliceHarnessRun: {
        modulePath: "cursor/slice-harness-run",
        schemaName: "CursorSliceHarnessRunSchema",
    },
    CursorSliceHarnessRunDetail: {
        modulePath: "cursor/slice-harness-run-detail",
        schemaName: "CursorSliceHarnessRunDetailSchema",
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
    DateRange: { modulePath: "date/range", schemaName: "DateRangeSchema" },
    DecimalRange: { modulePath: "decimal/range", schemaName: "DecimalRangeSchema" },
    DeleteMode: { modulePath: "delete/mode", schemaName: "DeleteModeSchema" },
    DeployEvent: { modulePath: "deploy/event", schemaName: "DeployEventSchema" },
    DeployGuard: { modulePath: "deploy/guard", schemaName: "DeployGuardSchema" },
    DeployMode: { modulePath: "deploy/mode", schemaName: "DeployModeSchema" },
    DeployOutcome: { modulePath: "deploy/outcome", schemaName: "DeployOutcomeSchema" },
    DeployPair: { modulePath: "deploy/pair", schemaName: "DeployPairSchema" },
    DeployPairMember: { modulePath: "deploy/pair-member", schemaName: "DeployPairMemberSchema" },
    DeployPairPromotionMember: {
        modulePath: "deploy/pair-promotion-member",
        schemaName: "DeployPairPromotionMemberSchema",
    },
    DeployPairRevert: { modulePath: "deploy/pair-revert", schemaName: "DeployPairRevertSchema" },
    DeployPairRevertMember: {
        modulePath: "deploy/pair-revert-member",
        schemaName: "DeployPairRevertMemberSchema",
    },
    DeployPairSourceType: {
        modulePath: "deploy/pair-source-type",
        schemaName: "DeployPairSourceTypeSchema",
    },
    DeployPromotion: { modulePath: "deploy/promotion", schemaName: "DeployPromotionSchema" },
    DeployPromotionMember: {
        modulePath: "deploy/promotion-member",
        schemaName: "DeployPromotionMemberSchema",
    },
    DeployRuntimeTaskEvidence: {
        modulePath: "deploy/runtime-task-evidence",
        schemaName: "DeployRuntimeTaskEvidenceSchema",
    },
    DeployStatus: { modulePath: "deploy/status", schemaName: "DeployStatusSchema" },
    DeployTag: { modulePath: "deploy/tag", schemaName: "DeployTagSchema" },
    DeployTarget: { modulePath: "deploy/target", schemaName: "DeployTargetSchema" },
    DeployTargetSpec: { modulePath: "deploy/target-spec", schemaName: "DeployTargetSpecSchema" },
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
    EnrichmentMode: { modulePath: "enrichment/mode", schemaName: "EnrichmentModeSchema" },
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
    EntityAddressMutation: {
        modulePath: "entity/address-mutation",
        schemaName: "EntityAddressMutationSchema",
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
    EntityDuplicateCheckJob: {
        modulePath: "entity/duplicate-check-job",
        schemaName: "EntityDuplicateCheckJobSchema",
    },
    EntityDuplicateCheckResult: {
        modulePath: "entity/duplicate-check-result",
        schemaName: "EntityDuplicateCheckResultSchema",
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
    EntityOperatingStatusSignal: {
        modulePath: "entity/operating-status-signal",
        schemaName: "EntityOperatingStatusSignalSchema",
    },
    EntityPerson: { modulePath: "http/json-value", schemaName: "JsonValueSchema" },
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
    EntityResearchSource: {
        modulePath: "entity/research-source",
        schemaName: "EntityResearchSourceSchema",
    },
    EntityResearchSourceOperationMode: {
        modulePath: "entity/research-source-operation-mode",
        schemaName: "EntityResearchSourceOperationModeSchema",
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
    EntitySitemapUrl: { modulePath: "entity/sitemap-url", schemaName: "EntitySitemapUrlSchema" },
    EntitySitemapUrlType: {
        modulePath: "entity/sitemap-url-type",
        schemaName: "EntitySitemapUrlTypeSchema",
    },
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
    EntityTextRefreshSweepRun: {
        modulePath: "entity/text-refresh-sweep-run",
        schemaName: "EntityTextRefreshSweepRunSchema",
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
    EntityUrlMatchMode: {
        modulePath: "entity/url-match-mode",
        schemaName: "EntityUrlMatchModeSchema",
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
    ExternalSocialPost: {
        modulePath: "external/social-post",
        schemaName: "ExternalSocialPostSchema",
    },
    ExternalSocialPostMutation: {
        modulePath: "external/social-post-mutation",
        schemaName: "ExternalSocialPostMutationSchema",
    },
    ExternalSocialPostPermalink: {
        modulePath: "external/social-post-permalink",
        schemaName: "ExternalSocialPostPermalinkSchema",
    },
    ExternalSocialPostPlatform: {
        modulePath: "external/social-post-platform",
        schemaName: "ExternalSocialPostPlatformSchema",
    },
    ExternalSocialPostScrapeResult: {
        modulePath: "external/social-post-scrape-result",
        schemaName: "ExternalSocialPostScrapeResultSchema",
    },
    ExternalSocialPostScrapeTicket: {
        modulePath: "external/social-post-scrape-ticket",
        schemaName: "ExternalSocialPostScrapeTicketSchema",
    },
    FederatedSearch: { modulePath: "federated/search", schemaName: "FederatedSearchSchema" },
    FederatedSearchProvenance: {
        modulePath: "federated/search-provenance",
        schemaName: "FederatedSearchProvenanceSchema",
    },
    FrontendCacheEpoch: {
        modulePath: "system/frontend-cache-epoch",
        schemaName: "FrontendCacheEpochSchema",
    },
    FrontendCachePartitionEpoch: {
        modulePath: "system/frontend-cache-partition-epoch",
        schemaName: "FrontendCachePartitionEpochSchema",
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
    FundraiseReconciliation: {
        modulePath: "fundraise/reconciliation",
        schemaName: "FundraiseReconciliationSchema",
    },
    FundraiseReconciliationBlock: {
        modulePath: "fundraise/reconciliation-block",
        schemaName: "FundraiseReconciliationBlockSchema",
    },
    FundraiseReconciliationDecision: {
        modulePath: "fundraise/reconciliation-decision",
        schemaName: "FundraiseReconciliationDecisionSchema",
    },
    FundraiseReconciliationDecisionType: {
        modulePath: "fundraise/reconciliation-decision-type",
        schemaName: "FundraiseReconciliationDecisionTypeSchema",
    },
    FundraiseReconciliationGroup: {
        modulePath: "fundraise/reconciliation-group",
        schemaName: "FundraiseReconciliationGroupSchema",
    },
    FundraiseReconciliationOutcome: {
        modulePath: "fundraise/reconciliation-outcome",
        schemaName: "FundraiseReconciliationOutcomeSchema",
    },
    FundraiseReconciliationPlan: {
        modulePath: "fundraise/reconciliation-plan",
        schemaName: "FundraiseReconciliationPlanSchema",
    },
    FundraiseReconciliationReason: {
        modulePath: "fundraise/reconciliation-reason",
        schemaName: "FundraiseReconciliationReasonSchema",
    },
    FundraiseReconciliationRun: {
        modulePath: "fundraise/reconciliation-run",
        schemaName: "FundraiseReconciliationRunSchema",
    },
    FundraiseTransactionStatus: {
        modulePath: "fundraise/transaction-status",
        schemaName: "FundraiseTransactionStatusSchema",
    },
    GithubRepo: { modulePath: "github/repo", schemaName: "GithubRepoSchema" },
    HarnessQueuePosition: {
        modulePath: "harness/queue-position",
        schemaName: "HarnessQueuePositionSchema",
    },
    HarnessRun: { modulePath: "harness/run", schemaName: "HarnessRunSchema" },
    HarnessRunCheckpoint: {
        modulePath: "harness/run-checkpoint",
        schemaName: "HarnessRunCheckpointSchema",
    },
    HarnessRunClaim: { modulePath: "harness/run-claim", schemaName: "HarnessRunClaimSchema" },
    HarnessRunCompletion: {
        modulePath: "harness/run-completion",
        schemaName: "HarnessRunCompletionSchema",
    },
    HarnessRunCompletionStatus: {
        modulePath: "harness/run-completion-status",
        schemaName: "HarnessRunCompletionStatusSchema",
    },
    HarnessRunCreate: { modulePath: "harness/run-create", schemaName: "HarnessRunCreateSchema" },
    HarnessRunDetail: { modulePath: "harness/run-detail", schemaName: "HarnessRunDetailSchema" },
    HarnessRunEnvironment: {
        modulePath: "harness/run-environment",
        schemaName: "HarnessRunEnvironmentSchema",
    },
    HarnessRunEvent: { modulePath: "harness/run-event", schemaName: "HarnessRunEventSchema" },
    HarnessRunEventAppend: {
        modulePath: "harness/run-event-append",
        schemaName: "HarnessRunEventAppendSchema",
    },
    HarnessRunEventBatchAppend: {
        modulePath: "harness/run-event-batch-append",
        schemaName: "HarnessRunEventBatchAppendSchema",
    },
    HarnessRunFailure: { modulePath: "harness/run-failure", schemaName: "HarnessRunFailureSchema" },
    HarnessRunMutation: {
        modulePath: "harness/run-mutation",
        schemaName: "HarnessRunMutationSchema",
    },
    HarnessRunOverview: {
        modulePath: "harness/run-overview",
        schemaName: "HarnessRunOverviewSchema",
    },
    HarnessRunProgress: {
        modulePath: "harness/run-progress",
        schemaName: "HarnessRunProgressSchema",
    },
    HarnessRunPromptAttribution: {
        modulePath: "harness/run-prompt-attribution",
        schemaName: "HarnessRunPromptAttributionSchema",
    },
    HarnessRunPromptEstimate: {
        modulePath: "harness/run-prompt-estimate",
        schemaName: "HarnessRunPromptEstimateSchema",
    },
    HarnessRunRequeue: { modulePath: "harness/run-requeue", schemaName: "HarnessRunRequeueSchema" },
    HarnessRunRoleUsage: {
        modulePath: "harness/run-role-usage",
        schemaName: "HarnessRunRoleUsageSchema",
    },
    HarnessRunStatus: { modulePath: "harness/run-status", schemaName: "HarnessRunStatusSchema" },
    HarnessRunSubagentModelResolution: {
        modulePath: "harness/run-subagent-model-resolution",
        schemaName: "HarnessRunSubagentModelResolutionSchema",
    },
    HarnessRunSubagentUsage: {
        modulePath: "harness/run-subagent-usage",
        schemaName: "HarnessRunSubagentUsageSchema",
    },
    HarnessRunSubmission: {
        modulePath: "harness/run-submission",
        schemaName: "HarnessRunSubmissionSchema",
    },
    HarnessRunType: { modulePath: "harness/run-type", schemaName: "HarnessRunTypeSchema" },
    HarnessRunUsage: { modulePath: "harness/run-usage", schemaName: "HarnessRunUsageSchema" },
    HarnessRunUsageModel: {
        modulePath: "harness/run-usage-model",
        schemaName: "HarnessRunUsageModelSchema",
    },
    HarnessSessionAppend: {
        modulePath: "harness/session-append",
        schemaName: "HarnessSessionAppendSchema",
    },
    HarnessSessionEntryInput: {
        modulePath: "harness/session-entry",
        schemaName: "HarnessSessionEntrySchema",
    },
    HealthDescriptor: {
        modulePath: "system/health-descriptor",
        schemaName: "HealthDescriptorSchema",
    },
    HelpCitation: { modulePath: "help/citation", schemaName: "HelpCitationSchema" },
    HelpScope: { modulePath: "help/scope", schemaName: "HelpScopeSchema" },
    HelpSourceType: { modulePath: "help/source-type", schemaName: "HelpSourceTypeSchema" },
    IndicatedHealthDescriptor: {
        modulePath: "system/indicated-health-descriptor",
        schemaName: "IndicatedHealthDescriptorSchema",
    },
    InferenceJob: { modulePath: "inference/job", schemaName: "InferenceJobSchema" },
    InferenceModelCapability: {
        modulePath: "inference/model-capability",
        schemaName: "InferenceModelCapabilitySchema",
    },
    InferenceModelCatalog: {
        modulePath: "inference/model-catalog",
        schemaName: "InferenceModelCatalogSchema",
    },
    IntRange: { modulePath: "int/range", schemaName: "IntRangeSchema" },
    InvestorActivityFilter: {
        modulePath: "investor/activity-filter",
        schemaName: "InvestorActivityFilterSchema",
    },
    Job: { modulePath: "job/job", schemaName: "JobSchema" },
    JobCancel: { modulePath: "job/cancel", schemaName: "JobCancelSchema" },
    JobDetail: { modulePath: "job/detail", schemaName: "JobDetailSchema" },
    JobEnqueue: { modulePath: "job/enqueue", schemaName: "JobEnqueueSchema" },
    JobLogLine: { modulePath: "job/log-line", schemaName: "JobLogLineSchema" },
    JobOverview: { modulePath: "job/overview", schemaName: "JobOverviewSchema" },
    JobState: { modulePath: "job/state", schemaName: "JobStateSchema" },
    JobStateTransition: {
        modulePath: "job/state-transition",
        schemaName: "JobStateTransitionSchema",
    },
    JobTypeSummary: { modulePath: "job/type-summary", schemaName: "JobTypeSummarySchema" },
    JsonValue: { modulePath: "http/json-value", schemaName: "JsonValueSchema" },
    LetterCounts: { modulePath: "letter/counts", schemaName: "LetterCountsSchema" },
    LinkSearch: { modulePath: "link/search", schemaName: "LinkSearchSchema" },
    LocationDirectoryEntry: {
        modulePath: "location/directory-entry",
        schemaName: "LocationDirectoryEntrySchema",
    },
    LocationIdentifier: {
        modulePath: "location/identifier",
        schemaName: "LocationIdentifierSchema",
    },
    LocationResolutionOutcome: {
        modulePath: "location/resolution-outcome",
        schemaName: "LocationResolutionOutcomeSchema",
    },
    LocationScope: { modulePath: "location/scope", schemaName: "LocationScopeSchema" },
    LocationSitemap: { modulePath: "location/sitemap", schemaName: "LocationSitemapSchema" },
    LocationSitemapBatch: {
        modulePath: "location/sitemap-batch",
        schemaName: "LocationSitemapBatchSchema",
    },
    LocationSitemapBoundary: {
        modulePath: "location/sitemap-boundary",
        schemaName: "LocationSitemapBoundarySchema",
    },
    LocationSitemapBoundaryDetail: {
        modulePath: "location/sitemap-boundary-detail",
        schemaName: "LocationSitemapBoundaryDetailSchema",
    },
    LocationSlugResolution: {
        modulePath: "location/slug-resolution",
        schemaName: "LocationSlugResolutionSchema",
    },
    LogoAccuracy: { modulePath: "logo/accuracy", schemaName: "LogoAccuracySchema" },
    LogoAccuracyReference: {
        modulePath: "logo/accuracy-reference",
        schemaName: "LogoAccuracyReferenceSchema",
    },
    MediaCrawlScreenshot: {
        modulePath: "media/crawl-screenshot",
        schemaName: "MediaCrawlScreenshotSchema",
    },
    MediaHeroImage: { modulePath: "media/hero-image", schemaName: "MediaHeroImageSchema" },
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
    NewsDetail: { modulePath: "news/detail", schemaName: "NewsDetailSchema" },
    NewsDuplicateCheck: {
        modulePath: "news/duplicate-check",
        schemaName: "NewsDuplicateCheckSchema",
    },
    NewsDuplicateCheckJob: {
        modulePath: "news/duplicate-check-job",
        schemaName: "NewsDuplicateCheckJobSchema",
    },
    NewsDuplicateCheckResult: {
        modulePath: "news/duplicate-check-result",
        schemaName: "NewsDuplicateCheckResultSchema",
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
    NotificationSetting: {
        modulePath: "notification/setting",
        schemaName: "NotificationSettingSchema",
    },
    NotificationSettingMutation: {
        modulePath: "notification/setting-mutation",
        schemaName: "NotificationSettingMutationSchema",
    },
    OperatingStatusSignalVerdict: {
        modulePath: "operating/status-signal-verdict",
        schemaName: "OperatingStatusSignalVerdictSchema",
    },
    OverrideGate: { modulePath: "override/gate", schemaName: "OverrideGateSchema" },
    PageableObject: { modulePath: "pageable/object", schemaName: "PageableObjectSchema" },
    PageAventureBlogArticleList: {
        modulePath: "pagination/schemas",
        schemaName: "PageAventureBlogArticleListSchema",
    },
    PageBlogPost: { modulePath: "pagination/schemas", schemaName: "PageBlogPostSchema" },
    PageClassification: {
        modulePath: "pagination/schemas",
        schemaName: "PageClassificationSchema",
    },
    PageCliAuthorization: {
        modulePath: "pagination/schemas",
        schemaName: "PageCliAuthorizationSchema",
    },
    PageContent: { modulePath: "pagination/schemas", schemaName: "PageContentSchema" },
    PageContentPageList: {
        modulePath: "pagination/schemas",
        schemaName: "PageContentPageListSchema",
    },
    PageContentTaxonomyCount: {
        modulePath: "pagination/schemas",
        schemaName: "PageContentTaxonomyCountSchema",
    },
    PageDatasourceFieldProvenance: {
        modulePath: "pagination/schemas",
        schemaName: "PageDatasourceFieldProvenanceSchema",
    },
    PageDeployEvent: { modulePath: "pagination/schemas", schemaName: "PageDeployEventSchema" },
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
    PageEntityPerson: { modulePath: "pagination/schemas", schemaName: "PageEntityPersonSchema" },
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
    PageEntitySitemapUrl: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntitySitemapUrlSchema",
    },
    PageEntityTag: { modulePath: "pagination/schemas", schemaName: "PageEntityTagSchema" },
    PageEntityText: { modulePath: "pagination/schemas", schemaName: "PageEntityTextSchema" },
    PageEntityUrlLink: { modulePath: "pagination/schemas", schemaName: "PageEntityUrlLinkSchema" },
    PageEntityValuationTimeSeriesPoint: {
        modulePath: "pagination/schemas",
        schemaName: "PageEntityValuationTimeSeriesPointSchema",
    },
    PageExternalSocialPost: {
        modulePath: "pagination/schemas",
        schemaName: "PageExternalSocialPostSchema",
    },
    PageGithubRepo: { modulePath: "pagination/schemas", schemaName: "PageGithubRepoSchema" },
    PageHarnessRun: { modulePath: "pagination/schemas", schemaName: "PageHarnessRunSchema" },
    PageJob: { modulePath: "pagination/schemas", schemaName: "PageJobSchema" },
    PageLocationDirectoryEntry: {
        modulePath: "pagination/schemas",
        schemaName: "PageLocationDirectoryEntrySchema",
    },
    PageMediaCrawlScreenshot: {
        modulePath: "pagination/schemas",
        schemaName: "PageMediaCrawlScreenshotSchema",
    },
    PageMediaLogoAuditJob: {
        modulePath: "pagination/schemas",
        schemaName: "PageMediaLogoAuditJobSchema",
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
    PageResultLocationDirectoryEntry: {
        modulePath: "pagination/schemas",
        schemaName: "PageResultLocationDirectoryEntrySchema",
    },
    PageResultNews: { modulePath: "pagination/schemas", schemaName: "PageResultNewsSchema" },
    PageResultPerson: { modulePath: "pagination/schemas", schemaName: "PageResultPersonSchema" },
    PageResultSitemapUrlSlot: {
        modulePath: "pagination/schemas",
        schemaName: "PageResultSitemapUrlSlotSchema",
    },
    PageSavedView: { modulePath: "pagination/schemas", schemaName: "PageSavedViewSchema" },
    PageSearchDuplicateCandidateScore: {
        modulePath: "pagination/schemas",
        schemaName: "PageSearchDuplicateCandidateScoreSchema",
    },
    PageSitemapUrlSlot: {
        modulePath: "pagination/schemas",
        schemaName: "PageSitemapUrlSlotSchema",
    },
    PageSocialMediaPost: {
        modulePath: "pagination/schemas",
        schemaName: "PageSocialMediaPostSchema",
    },
    PageSourceDocumentList: {
        modulePath: "pagination/schemas",
        schemaName: "PageSourceDocumentListSchema",
    },
    PageUniqueId: { modulePath: "pagination/schemas", schemaName: "PageUniqueIdSchema" },
    PageUrlSlugRedirect: {
        modulePath: "pagination/schemas",
        schemaName: "PageUrlSlugRedirectSchema",
    },
    PageWebSite: { modulePath: "pagination/schemas", schemaName: "PageWebSiteSchema" },
    Person: { modulePath: "person/person", schemaName: "PersonSchema" },
    PersonAddressMutation: {
        modulePath: "person/address-mutation",
        schemaName: "PersonAddressMutationSchema",
    },
    PersonalApiKey: { modulePath: "personal/api-key", schemaName: "PersonalApiKeySchema" },
    PersonAliasType: { modulePath: "person/alias-type", schemaName: "PersonAliasTypeSchema" },
    PersonCreate: { modulePath: "person/create", schemaName: "PersonCreateSchema" },
    PersonDetail: { modulePath: "person/detail", schemaName: "PersonDetailSchema" },
    PersonDetailBatch: { modulePath: "person/detail-batch", schemaName: "PersonDetailBatchSchema" },
    PersonDuplicateCheckJob: {
        modulePath: "person/duplicate-check-job",
        schemaName: "PersonDuplicateCheckJobSchema",
    },
    PersonDuplicateCheckResult: {
        modulePath: "person/duplicate-check-result",
        schemaName: "PersonDuplicateCheckResultSchema",
    },
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
    PersonVisibilityStatus: {
        modulePath: "person/visibility-status",
        schemaName: "PersonVisibilityStatusSchema",
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
    RssNewsIngestRun: { modulePath: "rss/news-ingest-run", schemaName: "RssNewsIngestRunSchema" },
    SavedList: { modulePath: "saved/list", schemaName: "SavedListSchema" },
    SavedListMembership: {
        modulePath: "saved/list-membership",
        schemaName: "SavedListMembershipSchema",
    },
    SavedListMutation: { modulePath: "saved/list-mutation", schemaName: "SavedListMutationSchema" },
    SavedListPersonMembership: {
        modulePath: "saved/list-person-membership",
        schemaName: "SavedListPersonMembershipSchema",
    },
    SavedResourceFrontmatter: {
        modulePath: "saved/resource-frontmatter",
        schemaName: "SavedResourceFrontmatterSchema",
    },
    SavedView: { modulePath: "saved/view", schemaName: "SavedViewSchema" },
    SavedViewMutation: { modulePath: "saved/view-mutation", schemaName: "SavedViewMutationSchema" },
    SavedViewParam: { modulePath: "saved/view-param", schemaName: "SavedViewParamSchema" },
    SavedViewSortField: {
        modulePath: "saved/view-sort-field",
        schemaName: "SavedViewSortFieldSchema",
    },
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
    SentryBreadcrumb: { modulePath: "sentry/breadcrumb", schemaName: "SentryBreadcrumbSchema" },
    SentryEvent: { modulePath: "sentry/event", schemaName: "SentryEventSchema" },
    SentryEventDetail: { modulePath: "sentry/event-detail", schemaName: "SentryEventDetailSchema" },
    SentryIssue: { modulePath: "sentry/issue", schemaName: "SentryIssueSchema" },
    SentryIssueMetadata: {
        modulePath: "sentry/issue-metadata",
        schemaName: "SentryIssueMetadataSchema",
    },
    SentryIssuesSummary: {
        modulePath: "sentry/issues-summary",
        schemaName: "SentryIssuesSummarySchema",
    },
    SentryProjectIssueCount: {
        modulePath: "sentry/project-issue-count",
        schemaName: "SentryProjectIssueCountSchema",
    },
    SentryProjectIssueCounts: {
        modulePath: "sentry/project-issue-counts",
        schemaName: "SentryProjectIssueCountsSchema",
    },
    SentryStackFrame: { modulePath: "sentry/stack-frame", schemaName: "SentryStackFrameSchema" },
    SentryTag: { modulePath: "sentry/tag", schemaName: "SentryTagSchema" },
    SitemapChangeFrequency: {
        modulePath: "sitemap/change-frequency",
        schemaName: "SitemapChangeFrequencySchema",
    },
    SitemapFamily: { modulePath: "sitemap/family", schemaName: "SitemapFamilySchema" },
    SitemapFamilyEntry: {
        modulePath: "sitemap/family-entry",
        schemaName: "SitemapFamilyEntrySchema",
    },
    SitemapIndexManifest: {
        modulePath: "sitemap/index-manifest",
        schemaName: "SitemapIndexManifestSchema",
    },
    SitemapIndexPathMode: {
        modulePath: "sitemap/index-path-mode",
        schemaName: "SitemapIndexPathModeSchema",
    },
    SitemapUrlSlot: { modulePath: "sitemap/url-slot", schemaName: "SitemapUrlSlotSchema" },
    SlugChange: { modulePath: "slug/change", schemaName: "SlugChangeSchema" },
    SlugChangeResult: { modulePath: "slug/change-result", schemaName: "SlugChangeResultSchema" },
    SlugDelete: { modulePath: "slug/delete", schemaName: "SlugDeleteSchema" },
    SlugLocation: { modulePath: "slug/location", schemaName: "SlugLocationSchema" },
    SlugResource: { modulePath: "redirect/slug-resource", schemaName: "SlugResourceSchema" },
    SocialEventType: { modulePath: "social/event-type", schemaName: "SocialEventTypeSchema" },
    SocialMediaPost: { modulePath: "social/media-post", schemaName: "SocialMediaPostSchema" },
    SocialMediaPostStatus: {
        modulePath: "social/media-post-status",
        schemaName: "SocialMediaPostStatusSchema",
    },
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
    SourceDocument: { modulePath: "source/document", schemaName: "SourceDocumentSchema" },
    SourceDocumentCaptureConsumption: {
        modulePath: "source/document-capture-consumption",
        schemaName: "SourceDocumentCaptureConsumptionSchema",
    },
    SourceDocumentCaptureDispatchIntent: {
        modulePath: "source/document-capture-dispatch-intent",
        schemaName: "SourceDocumentCaptureDispatchIntentSchema",
    },
    SourceDocumentCaptureExtraction: {
        modulePath: "source/document-capture-extraction",
        schemaName: "SourceDocumentCaptureExtractionSchema",
    },
    SourceDocumentCaptureImageReference: {
        modulePath: "source/document-capture-image-reference",
        schemaName: "SourceDocumentCaptureImageReferenceSchema",
    },
    SourceDocumentCaptureMethod: {
        modulePath: "source/document-capture-method",
        schemaName: "SourceDocumentCaptureMethodSchema",
    },
    SourceDocumentCaptureOmission: {
        modulePath: "source/document-capture-omission",
        schemaName: "SourceDocumentCaptureOmissionSchema",
    },
    SourceDocumentCaptureOmissionReason: {
        modulePath: "source/document-capture-omission-reason",
        schemaName: "SourceDocumentCaptureOmissionReasonSchema",
    },
    SourceDocumentCapturePart: {
        modulePath: "source/document-capture-part",
        schemaName: "SourceDocumentCapturePartSchema",
    },
    SourceDocumentCapturePartRole: {
        modulePath: "source/document-capture-part-role",
        schemaName: "SourceDocumentCapturePartRoleSchema",
    },
    SourceDocumentCaptureScope: {
        modulePath: "source/document-capture-scope",
        schemaName: "SourceDocumentCaptureScopeSchema",
    },
    SourceDocumentCaptureType: {
        modulePath: "source/document-capture-type",
        schemaName: "SourceDocumentCaptureTypeSchema",
    },
    SourceDocumentCaptureViewport: {
        modulePath: "source/document-capture-viewport",
        schemaName: "SourceDocumentCaptureViewportSchema",
    },
    SourceDocumentClientCapture: {
        modulePath: "source/document-client-capture",
        schemaName: "SourceDocumentClientCaptureSchema",
    },
    SourceDocumentDeletionState: {
        modulePath: "source/document-deletion-state",
        schemaName: "SourceDocumentDeletionStateSchema",
    },
    SourceDocumentEntityAssociation: {
        modulePath: "source/document-entity-association",
        schemaName: "SourceDocumentEntityAssociationSchema",
    },
    SourceDocumentList: {
        modulePath: "source/document-list",
        schemaName: "SourceDocumentListSchema",
    },
    SourceDocumentMatchType: {
        modulePath: "source/document-match-type",
        schemaName: "SourceDocumentMatchTypeSchema",
    },
    SourceDocumentMutation: {
        modulePath: "source/document-mutation",
        schemaName: "SourceDocumentMutationSchema",
    },
    SourceDocumentPersonAssociation: {
        modulePath: "source/document-person-association",
        schemaName: "SourceDocumentPersonAssociationSchema",
    },
    SourceDocumentStorageState: {
        modulePath: "source/document-storage-state",
        schemaName: "SourceDocumentStorageStateSchema",
    },
    SseEmitter: { modulePath: "sse/emitter", schemaName: "SseEmitterSchema" },
    StageFrequency: { modulePath: "stage/frequency", schemaName: "StageFrequencySchema" },
    StandardizedClassification: {
        modulePath: "standardized/classification",
        schemaName: "StandardizedClassificationSchema",
    },
    StrictUrlLookupConflict: {
        modulePath: "strict/url-lookup-conflict",
        schemaName: "StrictUrlLookupConflictSchema",
    },
    SystemBlockingTransaction: {
        modulePath: "system/blocking-transaction",
        schemaName: "SystemBlockingTransactionSchema",
    },
    SystemBuild: { modulePath: "system/system-build", schemaName: "SystemBuildSchema" },
    SystemBuildDetail: {
        modulePath: "system/system-build-detail",
        schemaName: "SystemBuildDetailSchema",
    },
    SystemCacheMetrics: {
        modulePath: "system/cache-metrics",
        schemaName: "SystemCacheMetricsSchema",
    },
    SystemCheckpointMetrics: {
        modulePath: "system/checkpoint-metrics",
        schemaName: "SystemCheckpointMetricsSchema",
    },
    SystemConflictMetrics: {
        modulePath: "system/conflict-metrics",
        schemaName: "SystemConflictMetricsSchema",
    },
    SystemConnectionMetrics: {
        modulePath: "system/connection-metrics",
        schemaName: "SystemConnectionMetricsSchema",
    },
    SystemDatabaseDiagnostics: {
        modulePath: "system/database-diagnostics",
        schemaName: "SystemDatabaseDiagnosticsSchema",
    },
    SystemDatabaseMetrics: {
        modulePath: "system/database-metrics",
        schemaName: "SystemDatabaseMetricsSchema",
    },
    SystemGlobalMetrics: {
        modulePath: "system/global-metrics",
        schemaName: "SystemGlobalMetricsSchema",
    },
    SystemHealthDescriptor: {
        modulePath: "system/system-health-descriptor",
        schemaName: "SystemHealthDescriptorSchema",
    },
    SystemHealthStatus: {
        modulePath: "system/health-status",
        schemaName: "SystemHealthStatusSchema",
    },
    SystemIndexUsage: { modulePath: "system/index-usage", schemaName: "SystemIndexUsageSchema" },
    SystemInstanceType: {
        modulePath: "system/instance-type",
        schemaName: "SystemInstanceTypeSchema",
    },
    SystemMetrics: { modulePath: "system/metrics", schemaName: "SystemMetricsSchema" },
    SystemPoolMetrics: { modulePath: "system/pool-metrics", schemaName: "SystemPoolMetricsSchema" },
    SystemPoolStatus: { modulePath: "system/pool-status", schemaName: "SystemPoolStatusSchema" },
    SystemQueryStats: { modulePath: "system/query-stats", schemaName: "SystemQueryStatsSchema" },
    SystemReplicationMetrics: {
        modulePath: "system/replication-metrics",
        schemaName: "SystemReplicationMetricsSchema",
    },
    SystemServiceSqlConnection: {
        modulePath: "system/service-sql-connection",
        schemaName: "SystemServiceSqlConnectionSchema",
    },
    SystemServiceSqlLatency: {
        modulePath: "system/service-sql-latency",
        schemaName: "SystemServiceSqlLatencySchema",
    },
    SystemSlowQuery: { modulePath: "system/slow-query", schemaName: "SystemSlowQuerySchema" },
    SystemStatus: { modulePath: "system/status", schemaName: "SystemStatusSchema" },
    SystemSupabaseTelemetry: {
        modulePath: "system/supabase-telemetry",
        schemaName: "SystemSupabaseTelemetrySchema",
    },
    SystemTupleMetrics: {
        modulePath: "system/tuple-metrics",
        schemaName: "SystemTupleMetricsSchema",
    },
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
    WebCompanyEmployee: {
        modulePath: "web/company-employee",
        schemaName: "WebCompanyEmployeeSchema",
    },
    WebCompanyFunding: { modulePath: "web/company-funding", schemaName: "WebCompanyFundingSchema" },
    WebCompanyLink: { modulePath: "web/company-link", schemaName: "WebCompanyLinkSchema" },
    WebCompanyOffice: { modulePath: "web/company-office", schemaName: "WebCompanyOfficeSchema" },
    WebCompanyProfile: { modulePath: "web/company-profile", schemaName: "WebCompanyProfileSchema" },
    WebCompanyUpdate: { modulePath: "web/company-update", schemaName: "WebCompanyUpdateSchema" },
    WebCrawlContent: { modulePath: "web/crawl-content", schemaName: "WebCrawlContentSchema" },
    WebCrawlJob: { modulePath: "web/crawl-job", schemaName: "WebCrawlJobSchema" },
    WebCrunchbaseAcquisition: {
        modulePath: "web/crunchbase-acquisition",
        schemaName: "WebCrunchbaseAcquisitionSchema",
    },
    WebCrunchbaseCompany: {
        modulePath: "web/crunchbase-company",
        schemaName: "WebCrunchbaseCompanySchema",
    },
    WebCrunchbaseFounder: {
        modulePath: "web/crunchbase-founder",
        schemaName: "WebCrunchbaseFounderSchema",
    },
    WebCrunchbaseFunding: {
        modulePath: "web/crunchbase-funding",
        schemaName: "WebCrunchbaseFundingSchema",
    },
    WebCrunchbaseFundingRound: {
        modulePath: "web/crunchbase-funding-round",
        schemaName: "WebCrunchbaseFundingRoundSchema",
    },
    WebCrunchbaseInvestor: {
        modulePath: "web/crunchbase-investor",
        schemaName: "WebCrunchbaseInvestorSchema",
    },
    WebCrunchbaseInvestorRef: {
        modulePath: "web/crunchbase-investor-ref",
        schemaName: "WebCrunchbaseInvestorRefSchema",
    },
    WebCrunchbaseIpo: { modulePath: "web/crunchbase-ipo", schemaName: "WebCrunchbaseIpoSchema" },
    WebCrunchbaseLink: { modulePath: "web/crunchbase-link", schemaName: "WebCrunchbaseLinkSchema" },
    WebCrunchbaseMoney: {
        modulePath: "web/crunchbase-money",
        schemaName: "WebCrunchbaseMoneySchema",
    },
    WebCrunchbaseRegion: {
        modulePath: "web/crunchbase-region",
        schemaName: "WebCrunchbaseRegionSchema",
    },
    WebMarkdownFilter: { modulePath: "web/markdown-filter", schemaName: "WebMarkdownFilterSchema" },
    WebPage: { modulePath: "web/page", schemaName: "WebPageSchema" },
    WebPageContent: { modulePath: "web/page-content", schemaName: "WebPageContentSchema" },
    WebPersonActivity: { modulePath: "web/person-activity", schemaName: "WebPersonActivitySchema" },
    WebPersonEducation: {
        modulePath: "web/person-education",
        schemaName: "WebPersonEducationSchema",
    },
    WebPersonExperience: {
        modulePath: "web/person-experience",
        schemaName: "WebPersonExperienceSchema",
    },
    WebPersonPost: { modulePath: "web/person-post", schemaName: "WebPersonPostSchema" },
    WebPersonProfile: { modulePath: "web/person-profile", schemaName: "WebPersonProfileSchema" },
    WebPitchbookCompany: {
        modulePath: "web/pitchbook-company",
        schemaName: "WebPitchbookCompanySchema",
    },
    WebPitchbookCompetitor: {
        modulePath: "web/pitchbook-competitor",
        schemaName: "WebPitchbookCompetitorSchema",
    },
    WebPitchbookInvestment: {
        modulePath: "web/pitchbook-investment",
        schemaName: "WebPitchbookInvestmentSchema",
    },
    WebPitchbookMoney: { modulePath: "web/pitchbook-money", schemaName: "WebPitchbookMoneySchema" },
    WebPitchbookSocial: {
        modulePath: "web/pitchbook-social",
        schemaName: "WebPitchbookSocialSchema",
    },
    WebProfile: { modulePath: "http/json-value", schemaName: "JsonValueSchema" },
    WebProfileAttribute: {
        modulePath: "web/profile-attribute",
        schemaName: "WebProfileAttributeSchema",
    },
    WebProfileLink: { modulePath: "web/profile-link", schemaName: "WebProfileLinkSchema" },
    WebProfileScrapeResult: {
        modulePath: "web/profile-scrape-result",
        schemaName: "WebProfileScrapeResultSchema",
    },
    WebProfileScrapeTicket: {
        modulePath: "web/profile-scrape-ticket",
        schemaName: "WebProfileScrapeTicketSchema",
    },
    WebProfileTarget: { modulePath: "web/profile-target", schemaName: "WebProfileTargetSchema" },
    WebRelatedProfile: { modulePath: "web/related-profile", schemaName: "WebRelatedProfileSchema" },
    WebSearch: { modulePath: "web/search", schemaName: "WebSearchSchema" },
    WebSite: { modulePath: "web/site", schemaName: "WebSiteSchema" },
    WebXProfile: { modulePath: "web/xprofile", schemaName: "WebXProfileSchema" },
    WebXProfilePost: { modulePath: "web/xprofile-post", schemaName: "WebXProfilePostSchema" },
});
//# sourceMappingURL=openapi-component-manifest.js.map