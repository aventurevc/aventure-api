/**
 * Entity filter catalog — auto-generated from application-contracts.yml.
 *
 * LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
 * DO NOT EDIT. This file is replaced on every build by scripts/build-filter-catalog.mjs.
 */
import { z } from "zod/v4";
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.key
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterKeySchema: z.ZodEnum<{
    acceleratorBrand: "acceleratorBrand";
    acceleratorCohort: "acceleratorCohort";
    acceleratorName: "acceleratorName";
    acceleratorStatus: "acceleratorStatus";
    affinity: "affinity";
    amountInvested: "amountInvested";
    amountRaised: "amountRaised";
    companyProfitability: "companyProfitability";
    employeeCount: "employeeCount";
    foundedYear: "foundedYear";
    growthScore: "growthScore";
    hasLogo: "hasLogo";
    headquartersCity: "headquartersCity";
    headquartersCountry: "headquartersCountry";
    headquartersState: "headquartersState";
    industry: "industry";
    industryEconomics: "industryEconomics";
    isHidden: "isHidden";
    lastRoundYear: "lastRoundYear";
    lastValuation: "lastValuation";
    mainProduct: "mainProduct";
    operatingStatus: "operatingStatus";
    portfolioHeadquartersCity: "portfolioHeadquartersCity";
    portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
    portfolioHeadquartersState: "portfolioHeadquartersState";
    relativeProfitability: "relativeProfitability";
    riskScore: "riskScore";
    round: "round";
    showOnSitemap: "showOnSitemap";
    stage: "stage";
    tag: "tag";
    totalRaised: "totalRaised";
    typeCustomer: "typeCustomer";
    typeModel: "typeModel";
    typeOwnership: "typeOwnership";
    typeRevenue: "typeRevenue";
    typeTechnologyUsed: "typeTechnologyUsed";
}>;
export type EntityFilterKey = z.infer<typeof EntityFilterKeySchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.dependency-parent-key
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterDependencyParentKeySchema: z.ZodEnum<{
    headquartersCountry: "headquartersCountry";
    headquartersState: "headquartersState";
    portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
    portfolioHeadquartersState: "portfolioHeadquartersState";
}>;
export type EntityFilterDependencyParentKey = z.infer<typeof EntityFilterDependencyParentKeySchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.lookup-type
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterLookupTypeSchema: z.ZodEnum<{
    AFFINITY: "AFFINITY";
    BOOLEAN: "BOOLEAN";
    CLASSIFICATION: "CLASSIFICATION";
    DETAIL_COLUMN: "DETAIL_COLUMN";
    LOCATION: "LOCATION";
    OPERATING_STATUS: "OPERATING_STATUS";
    PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
    RANGE: "RANGE";
    ROUND: "ROUND";
    STAGE: "STAGE";
}>;
export type EntityFilterLookupType = z.infer<typeof EntityFilterLookupTypeSchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.search-type
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterSearchTypeSchema: z.ZodEnum<{
    AFFINITY: "AFFINITY";
    CLASSIFICATION: "CLASSIFICATION";
    DETAIL_COLUMN: "DETAIL_COLUMN";
    LOCATION: "LOCATION";
    NONE: "NONE";
    OPERATING_STATUS: "OPERATING_STATUS";
    PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
    ROUND: "ROUND";
    STAGE: "STAGE";
}>;
export type EntityFilterSearchType = z.infer<typeof EntityFilterSearchTypeSchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.range-type
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterRangeTypeSchema: z.ZodEnum<{
    AMOUNT_INVESTED: "AMOUNT_INVESTED";
    AMOUNT_RAISED: "AMOUNT_RAISED";
    EMPLOYEE_COUNT: "EMPLOYEE_COUNT";
    FOUNDED_YEAR: "FOUNDED_YEAR";
    LAST_ROUND_YEAR: "LAST_ROUND_YEAR";
    LAST_VALUATION: "LAST_VALUATION";
    TOTAL_RAISED: "TOTAL_RAISED";
}>;
export type EntityFilterRangeType = z.infer<typeof EntityFilterRangeTypeSchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.refinement-type
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterRefinementTypeSchema: z.ZodEnum<{
    ACCELERATOR_BRAND: "ACCELERATOR_BRAND";
    ACCELERATOR_COHORT: "ACCELERATOR_COHORT";
    ACCELERATOR_NAME: "ACCELERATOR_NAME";
    ACCELERATOR_STATUS: "ACCELERATOR_STATUS";
    AFFINITY: "AFFINITY";
    CLASSIFICATION: "CLASSIFICATION";
    HEADQUARTERS_CITY: "HEADQUARTERS_CITY";
    HEADQUARTERS_COUNTRY: "HEADQUARTERS_COUNTRY";
    HEADQUARTERS_STATE: "HEADQUARTERS_STATE";
    NONE: "NONE";
    STAGE: "STAGE";
}>;
export type EntityFilterRefinementType = z.infer<typeof EntityFilterRefinementTypeSchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.classification-bucket-key
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterClassificationBucketKeySchema: z.ZodEnum<{
    industry: "industry";
    mainProduct: "mainProduct";
    tag: "tag";
    typeCustomer: "typeCustomer";
    typeModel: "typeModel";
    typeOwnership: "typeOwnership";
    typeRevenue: "typeRevenue";
    typeTechnologyUsed: "typeTechnologyUsed";
}>;
export type EntityFilterClassificationBucketKey = z.infer<typeof EntityFilterClassificationBucketKeySchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.location-field
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterLocationFieldSchema: z.ZodEnum<{
    CITY: "CITY";
    COUNTRY: "COUNTRY";
    STATE: "STATE";
}>;
export type EntityFilterLocationField = z.infer<typeof EntityFilterLocationFieldSchema>;
/**
 * @shared primitive:single reusable domain entity.filter-catalog; not direct because generated filter metadata is consumed by higher-level schemas and tooling
 * @usedBySchema EntityFilterCatalogSchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog.entry
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterCatalogEntrySchema: z.ZodObject<{
    filterKey: z.ZodEnum<{
        acceleratorBrand: "acceleratorBrand";
        acceleratorCohort: "acceleratorCohort";
        acceleratorName: "acceleratorName";
        acceleratorStatus: "acceleratorStatus";
        affinity: "affinity";
        amountInvested: "amountInvested";
        amountRaised: "amountRaised";
        companyProfitability: "companyProfitability";
        employeeCount: "employeeCount";
        foundedYear: "foundedYear";
        growthScore: "growthScore";
        hasLogo: "hasLogo";
        headquartersCity: "headquartersCity";
        headquartersCountry: "headquartersCountry";
        headquartersState: "headquartersState";
        industry: "industry";
        industryEconomics: "industryEconomics";
        isHidden: "isHidden";
        lastRoundYear: "lastRoundYear";
        lastValuation: "lastValuation";
        mainProduct: "mainProduct";
        operatingStatus: "operatingStatus";
        portfolioHeadquartersCity: "portfolioHeadquartersCity";
        portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
        portfolioHeadquartersState: "portfolioHeadquartersState";
        relativeProfitability: "relativeProfitability";
        riskScore: "riskScore";
        round: "round";
        showOnSitemap: "showOnSitemap";
        stage: "stage";
        tag: "tag";
        totalRaised: "totalRaised";
        typeCustomer: "typeCustomer";
        typeModel: "typeModel";
        typeOwnership: "typeOwnership";
        typeRevenue: "typeRevenue";
        typeTechnologyUsed: "typeTechnologyUsed";
    }>;
    label: z.ZodString;
    filterShape: z.ZodEnum<{
        ARRAY: "ARRAY";
        RANGE: "RANGE";
    }>;
    queryType: z.ZodEnum<{
        AFFINITY: "AFFINITY";
        BOOLEAN: "BOOLEAN";
        CLASSIFICATION: "CLASSIFICATION";
        DETAIL_COLUMN: "DETAIL_COLUMN";
        LOCATION: "LOCATION";
        OPERATING_STATUS: "OPERATING_STATUS";
        PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
        RANGE: "RANGE";
        ROUND: "ROUND";
        STAGE: "STAGE";
    }>;
    searchType: z.ZodEnum<{
        AFFINITY: "AFFINITY";
        CLASSIFICATION: "CLASSIFICATION";
        DETAIL_COLUMN: "DETAIL_COLUMN";
        LOCATION: "LOCATION";
        NONE: "NONE";
        OPERATING_STATUS: "OPERATING_STATUS";
        PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
        ROUND: "ROUND";
        STAGE: "STAGE";
    }>;
    supportedTypeGroup: z.ZodNullable<z.ZodString>;
    supportedTypeRecord: z.ZodArray<z.ZodString>;
    locationField: z.ZodNullable<z.ZodEnum<{
        CITY: "CITY";
        COUNTRY: "COUNTRY";
        STATE: "STATE";
    }>>;
    optionLimit: z.ZodNullable<z.ZodNumber>;
    searchLimit: z.ZodNullable<z.ZodNumber>;
    rangeType: z.ZodNullable<z.ZodEnum<{
        AMOUNT_INVESTED: "AMOUNT_INVESTED";
        AMOUNT_RAISED: "AMOUNT_RAISED";
        EMPLOYEE_COUNT: "EMPLOYEE_COUNT";
        FOUNDED_YEAR: "FOUNDED_YEAR";
        LAST_ROUND_YEAR: "LAST_ROUND_YEAR";
        LAST_VALUATION: "LAST_VALUATION";
        TOTAL_RAISED: "TOTAL_RAISED";
    }>>;
    classificationBucketKey: z.ZodNullable<z.ZodEnum<{
        industry: "industry";
        mainProduct: "mainProduct";
        tag: "tag";
        typeCustomer: "typeCustomer";
        typeModel: "typeModel";
        typeOwnership: "typeOwnership";
        typeRevenue: "typeRevenue";
        typeTechnologyUsed: "typeTechnologyUsed";
    }>>;
    refinementType: z.ZodEnum<{
        ACCELERATOR_BRAND: "ACCELERATOR_BRAND";
        ACCELERATOR_COHORT: "ACCELERATOR_COHORT";
        ACCELERATOR_NAME: "ACCELERATOR_NAME";
        ACCELERATOR_STATUS: "ACCELERATOR_STATUS";
        AFFINITY: "AFFINITY";
        CLASSIFICATION: "CLASSIFICATION";
        HEADQUARTERS_CITY: "HEADQUARTERS_CITY";
        HEADQUARTERS_COUNTRY: "HEADQUARTERS_COUNTRY";
        HEADQUARTERS_STATE: "HEADQUARTERS_STATE";
        NONE: "NONE";
        STAGE: "STAGE";
    }>;
    dependencyParentFilterKey: z.ZodArray<z.ZodEnum<{
        headquartersCountry: "headquartersCountry";
        headquartersState: "headquartersState";
        portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
        portfolioHeadquartersState: "portfolioHeadquartersState";
    }>>;
    requireAllParent: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>;
export type EntityFilterCatalogEntry = z.infer<typeof EntityFilterCatalogEntrySchema>;
export declare const ENTITY_FILTER_CATALOG: readonly [{
    readonly filterKey: "acceleratorBrand";
    readonly label: "Accelerator Brand";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "ACCELERATOR_BRAND";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "acceleratorCohort";
    readonly label: "Accelerator Batch";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "ACCELERATOR_COHORT";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "acceleratorName";
    readonly label: "Accelerator";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "ACCELERATOR_NAME";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "acceleratorStatus";
    readonly label: "Accelerator Status";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "ACCELERATOR_STATUS";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "affinity";
    readonly label: "Affinity";
    readonly filterShape: "ARRAY";
    readonly queryType: "AFFINITY";
    readonly searchType: "AFFINITY";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "AFFINITY";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "amountInvested";
    readonly label: "Amount Invested ($)";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "AMOUNT_INVESTED";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "amountRaised";
    readonly label: "Amount Raised in Round ($)";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "AMOUNT_RAISED";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "companyProfitability";
    readonly label: "Company Profitability";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "employeeCount";
    readonly label: "Employee Count";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "EMPLOYEE_COUNT";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "foundedYear";
    readonly label: "Year Founded";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "FOUNDED_YEAR";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "growthScore";
    readonly label: "aV Average Growth Score";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "hasLogo";
    readonly label: "Has Logo";
    readonly filterShape: "ARRAY";
    readonly queryType: "BOOLEAN";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "headquartersCity";
    readonly label: "Headquarters City";
    readonly filterShape: "ARRAY";
    readonly queryType: "LOCATION";
    readonly searchType: "LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: "CITY";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "HEADQUARTERS_CITY";
    readonly dependencyParentFilterKey: ["headquartersCountry", "headquartersState"];
    readonly requireAllParent: true;
}, {
    readonly filterKey: "headquartersCountry";
    readonly label: "Headquarters";
    readonly filterShape: "ARRAY";
    readonly queryType: "LOCATION";
    readonly searchType: "LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: "COUNTRY";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "HEADQUARTERS_COUNTRY";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "headquartersState";
    readonly label: "Headquarters State";
    readonly filterShape: "ARRAY";
    readonly queryType: "LOCATION";
    readonly searchType: "LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: "STATE";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "HEADQUARTERS_STATE";
    readonly dependencyParentFilterKey: ["headquartersCountry"];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "industry";
    readonly label: "Industry";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "industry";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "industryEconomics";
    readonly label: "Industry Economics";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "isHidden";
    readonly label: "Hidden";
    readonly filterShape: "ARRAY";
    readonly queryType: "BOOLEAN";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "lastRoundYear";
    readonly label: "Last Round Year";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "LAST_ROUND_YEAR";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "lastValuation";
    readonly label: "Last Valuation ($)";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "LAST_VALUATION";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "mainProduct";
    readonly label: "Main Product";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: 250;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "mainProduct";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "operatingStatus";
    readonly label: "Operating Status";
    readonly filterShape: "ARRAY";
    readonly queryType: "OPERATING_STATUS";
    readonly searchType: "OPERATING_STATUS";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "portfolioHeadquartersCity";
    readonly label: "Portfolio Headquarters City";
    readonly filterShape: "ARRAY";
    readonly queryType: "PORTFOLIO_LOCATION";
    readonly searchType: "PORTFOLIO_LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: ["Investment Firm"];
    readonly locationField: "CITY";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: ["portfolioHeadquartersCountry", "portfolioHeadquartersState"];
    readonly requireAllParent: true;
}, {
    readonly filterKey: "portfolioHeadquartersCountry";
    readonly label: "Portfolio Headquarters";
    readonly filterShape: "ARRAY";
    readonly queryType: "PORTFOLIO_LOCATION";
    readonly searchType: "PORTFOLIO_LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: ["Investment Firm"];
    readonly locationField: "COUNTRY";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "portfolioHeadquartersState";
    readonly label: "Portfolio Headquarters State";
    readonly filterShape: "ARRAY";
    readonly queryType: "PORTFOLIO_LOCATION";
    readonly searchType: "PORTFOLIO_LOCATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: ["Investment Firm"];
    readonly locationField: "STATE";
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: ["portfolioHeadquartersCountry"];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "relativeProfitability";
    readonly label: "Profitability Relative to Peers";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "riskScore";
    readonly label: "aV Average Risk Score";
    readonly filterShape: "ARRAY";
    readonly queryType: "DETAIL_COLUMN";
    readonly searchType: "DETAIL_COLUMN";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "round";
    readonly label: "Fundraise Round";
    readonly filterShape: "ARRAY";
    readonly queryType: "ROUND";
    readonly searchType: "ROUND";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "showOnSitemap";
    readonly label: "Show On Sitemap";
    readonly filterShape: "ARRAY";
    readonly queryType: "BOOLEAN";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "stage";
    readonly label: "Investment Stage";
    readonly filterShape: "ARRAY";
    readonly queryType: "STAGE";
    readonly searchType: "STAGE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: null;
    readonly refinementType: "STAGE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "tag";
    readonly label: "Tag";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: 500;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "tag";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "totalRaised";
    readonly label: "Total Raised ($)";
    readonly filterShape: "RANGE";
    readonly queryType: "RANGE";
    readonly searchType: "NONE";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: "TOTAL_RAISED";
    readonly classificationBucketKey: null;
    readonly refinementType: "NONE";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "typeCustomer";
    readonly label: "Customer Type";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "typeCustomer";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "typeModel";
    readonly label: "Business Model";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "typeModel";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "typeOwnership";
    readonly label: "Ownership Type(s)";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "typeOwnership";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "typeRevenue";
    readonly label: "Revenue Type(s)";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "typeRevenue";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}, {
    readonly filterKey: "typeTechnologyUsed";
    readonly label: "Technology Used / Offered";
    readonly filterShape: "ARRAY";
    readonly queryType: "CLASSIFICATION";
    readonly searchType: "CLASSIFICATION";
    readonly supportedTypeGroup: null;
    readonly supportedTypeRecord: [];
    readonly locationField: null;
    readonly optionLimit: null;
    readonly searchLimit: 200;
    readonly rangeType: null;
    readonly classificationBucketKey: "typeTechnologyUsed";
    readonly refinementType: "CLASSIFICATION";
    readonly dependencyParentFilterKey: [];
    readonly requireAllParent: null;
}];
/**
 * @shared composition:used as building block for other schemas entity.filter-catalog; not direct because generated catalog arrays are imported by tooling rather than served as endpoint payloads
 * @usedBySchema none
 * @usedByEndpoint none:external-root
 * @contractShape entity.filter-catalog
 * @contractRole canonical
 * @ownerModule entity/filter-catalog.ts
 */
export declare const EntityFilterCatalogSchema: z.ZodArray<z.ZodObject<{
    filterKey: z.ZodEnum<{
        acceleratorBrand: "acceleratorBrand";
        acceleratorCohort: "acceleratorCohort";
        acceleratorName: "acceleratorName";
        acceleratorStatus: "acceleratorStatus";
        affinity: "affinity";
        amountInvested: "amountInvested";
        amountRaised: "amountRaised";
        companyProfitability: "companyProfitability";
        employeeCount: "employeeCount";
        foundedYear: "foundedYear";
        growthScore: "growthScore";
        hasLogo: "hasLogo";
        headquartersCity: "headquartersCity";
        headquartersCountry: "headquartersCountry";
        headquartersState: "headquartersState";
        industry: "industry";
        industryEconomics: "industryEconomics";
        isHidden: "isHidden";
        lastRoundYear: "lastRoundYear";
        lastValuation: "lastValuation";
        mainProduct: "mainProduct";
        operatingStatus: "operatingStatus";
        portfolioHeadquartersCity: "portfolioHeadquartersCity";
        portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
        portfolioHeadquartersState: "portfolioHeadquartersState";
        relativeProfitability: "relativeProfitability";
        riskScore: "riskScore";
        round: "round";
        showOnSitemap: "showOnSitemap";
        stage: "stage";
        tag: "tag";
        totalRaised: "totalRaised";
        typeCustomer: "typeCustomer";
        typeModel: "typeModel";
        typeOwnership: "typeOwnership";
        typeRevenue: "typeRevenue";
        typeTechnologyUsed: "typeTechnologyUsed";
    }>;
    label: z.ZodString;
    filterShape: z.ZodEnum<{
        ARRAY: "ARRAY";
        RANGE: "RANGE";
    }>;
    queryType: z.ZodEnum<{
        AFFINITY: "AFFINITY";
        BOOLEAN: "BOOLEAN";
        CLASSIFICATION: "CLASSIFICATION";
        DETAIL_COLUMN: "DETAIL_COLUMN";
        LOCATION: "LOCATION";
        OPERATING_STATUS: "OPERATING_STATUS";
        PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
        RANGE: "RANGE";
        ROUND: "ROUND";
        STAGE: "STAGE";
    }>;
    searchType: z.ZodEnum<{
        AFFINITY: "AFFINITY";
        CLASSIFICATION: "CLASSIFICATION";
        DETAIL_COLUMN: "DETAIL_COLUMN";
        LOCATION: "LOCATION";
        NONE: "NONE";
        OPERATING_STATUS: "OPERATING_STATUS";
        PORTFOLIO_LOCATION: "PORTFOLIO_LOCATION";
        ROUND: "ROUND";
        STAGE: "STAGE";
    }>;
    supportedTypeGroup: z.ZodNullable<z.ZodString>;
    supportedTypeRecord: z.ZodArray<z.ZodString>;
    locationField: z.ZodNullable<z.ZodEnum<{
        CITY: "CITY";
        COUNTRY: "COUNTRY";
        STATE: "STATE";
    }>>;
    optionLimit: z.ZodNullable<z.ZodNumber>;
    searchLimit: z.ZodNullable<z.ZodNumber>;
    rangeType: z.ZodNullable<z.ZodEnum<{
        AMOUNT_INVESTED: "AMOUNT_INVESTED";
        AMOUNT_RAISED: "AMOUNT_RAISED";
        EMPLOYEE_COUNT: "EMPLOYEE_COUNT";
        FOUNDED_YEAR: "FOUNDED_YEAR";
        LAST_ROUND_YEAR: "LAST_ROUND_YEAR";
        LAST_VALUATION: "LAST_VALUATION";
        TOTAL_RAISED: "TOTAL_RAISED";
    }>>;
    classificationBucketKey: z.ZodNullable<z.ZodEnum<{
        industry: "industry";
        mainProduct: "mainProduct";
        tag: "tag";
        typeCustomer: "typeCustomer";
        typeModel: "typeModel";
        typeOwnership: "typeOwnership";
        typeRevenue: "typeRevenue";
        typeTechnologyUsed: "typeTechnologyUsed";
    }>>;
    refinementType: z.ZodEnum<{
        ACCELERATOR_BRAND: "ACCELERATOR_BRAND";
        ACCELERATOR_COHORT: "ACCELERATOR_COHORT";
        ACCELERATOR_NAME: "ACCELERATOR_NAME";
        ACCELERATOR_STATUS: "ACCELERATOR_STATUS";
        AFFINITY: "AFFINITY";
        CLASSIFICATION: "CLASSIFICATION";
        HEADQUARTERS_CITY: "HEADQUARTERS_CITY";
        HEADQUARTERS_COUNTRY: "HEADQUARTERS_COUNTRY";
        HEADQUARTERS_STATE: "HEADQUARTERS_STATE";
        NONE: "NONE";
        STAGE: "STAGE";
    }>;
    dependencyParentFilterKey: z.ZodArray<z.ZodEnum<{
        headquartersCountry: "headquartersCountry";
        headquartersState: "headquartersState";
        portfolioHeadquartersCountry: "portfolioHeadquartersCountry";
        portfolioHeadquartersState: "portfolioHeadquartersState";
    }>>;
    requireAllParent: z.ZodNullable<z.ZodBoolean>;
}, z.core.$strip>>;
export type EntityFilterCatalog = z.infer<typeof EntityFilterCatalogSchema>;
//# sourceMappingURL=filter-catalog.d.ts.map