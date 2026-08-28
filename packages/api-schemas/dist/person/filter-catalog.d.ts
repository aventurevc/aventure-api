/**
 * Person filter catalog — auto-generated from application-contracts.yml.
 *
 * LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
 * DO NOT EDIT. This file is replaced on every build by scripts/build-filter-catalog.mjs.
 */
import { z } from "zod/v4";
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.key
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export declare const PersonFilterKeySchema: z.ZodEnum<{
    amountInvestedRange: "amountInvestedRange";
    amountRaisedRange: "amountRaisedRange";
    entityName: "entityName";
    investedCompany: "investedCompany";
    personTitle: "personTitle";
    round: "round";
    totalInvestmentCount: "totalInvestmentCount";
    typeRecord: "typeRecord";
}>;
export type PersonFilterKey = z.infer<typeof PersonFilterKeySchema>;
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.shape
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export declare const PersonFilterShapeSchema: z.ZodEnum<{
    ARRAY: "ARRAY";
    RANGE: "RANGE";
}>;
export type PersonFilterShape = z.infer<typeof PersonFilterShapeSchema>;
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.source-type
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export declare const PersonFilterSourceTypeSchema: z.ZodEnum<{
    AMOUNT_INVESTED_BUCKET: "AMOUNT_INVESTED_BUCKET";
    AMOUNT_RAISED_BUCKET: "AMOUNT_RAISED_BUCKET";
    ASSOCIATED_ENTITY: "ASSOCIATED_ENTITY";
    INVESTED_COMPANY: "INVESTED_COMPANY";
    PERSON_TITLE: "PERSON_TITLE";
    ROUND: "ROUND";
    TOTAL_INVESTMENTS_BUCKET: "TOTAL_INVESTMENTS_BUCKET";
    TYPE_RECORD: "TYPE_RECORD";
}>;
export type PersonFilterSourceType = z.infer<typeof PersonFilterSourceTypeSchema>;
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated person filter metadata is consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogSchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.entry
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export declare const PersonFilterCatalogEntrySchema: z.ZodObject<{
    filterKey: z.ZodEnum<{
        amountInvestedRange: "amountInvestedRange";
        amountRaisedRange: "amountRaisedRange";
        entityName: "entityName";
        investedCompany: "investedCompany";
        personTitle: "personTitle";
        round: "round";
        totalInvestmentCount: "totalInvestmentCount";
        typeRecord: "typeRecord";
    }>;
    label: z.ZodString;
    filterShape: z.ZodEnum<{
        ARRAY: "ARRAY";
        RANGE: "RANGE";
    }>;
    sourceType: z.ZodEnum<{
        AMOUNT_INVESTED_BUCKET: "AMOUNT_INVESTED_BUCKET";
        AMOUNT_RAISED_BUCKET: "AMOUNT_RAISED_BUCKET";
        ASSOCIATED_ENTITY: "ASSOCIATED_ENTITY";
        INVESTED_COMPANY: "INVESTED_COMPANY";
        PERSON_TITLE: "PERSON_TITLE";
        ROUND: "ROUND";
        TOTAL_INVESTMENTS_BUCKET: "TOTAL_INVESTMENTS_BUCKET";
        TYPE_RECORD: "TYPE_RECORD";
    }>;
    optionLimit: z.ZodNullable<z.ZodNumber>;
    searchLimit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>;
export type PersonFilterCatalogEntry = z.infer<typeof PersonFilterCatalogEntrySchema>;
export declare const PERSON_FILTER_CATALOG: readonly [{
    readonly filterKey: "amountInvestedRange";
    readonly label: "Check Sizes";
    readonly filterShape: "RANGE";
    readonly sourceType: "AMOUNT_INVESTED_BUCKET";
    readonly optionLimit: 6;
    readonly searchLimit: 6;
}, {
    readonly filterKey: "amountRaisedRange";
    readonly label: "Deal Sizes";
    readonly filterShape: "RANGE";
    readonly sourceType: "AMOUNT_RAISED_BUCKET";
    readonly optionLimit: 6;
    readonly searchLimit: 6;
}, {
    readonly filterKey: "entityName";
    readonly label: "Associated Entities";
    readonly filterShape: "ARRAY";
    readonly sourceType: "ASSOCIATED_ENTITY";
    readonly optionLimit: 100;
    readonly searchLimit: 100;
}, {
    readonly filterKey: "investedCompany";
    readonly label: "Invested Companies";
    readonly filterShape: "ARRAY";
    readonly sourceType: "INVESTED_COMPANY";
    readonly optionLimit: 100;
    readonly searchLimit: 100;
}, {
    readonly filterKey: "personTitle";
    readonly label: "Company Title";
    readonly filterShape: "ARRAY";
    readonly sourceType: "PERSON_TITLE";
    readonly optionLimit: 150;
    readonly searchLimit: 150;
}, {
    readonly filterKey: "round";
    readonly label: "Deal Stages";
    readonly filterShape: "ARRAY";
    readonly sourceType: "ROUND";
    readonly optionLimit: 75;
    readonly searchLimit: 100;
}, {
    readonly filterKey: "totalInvestmentCount";
    readonly label: "Total Investments";
    readonly filterShape: "RANGE";
    readonly sourceType: "TOTAL_INVESTMENTS_BUCKET";
    readonly optionLimit: 4;
    readonly searchLimit: 4;
}, {
    readonly filterKey: "typeRecord";
    readonly label: "Associated Entity Type";
    readonly filterShape: "ARRAY";
    readonly sourceType: "TYPE_RECORD";
    readonly optionLimit: 8;
    readonly searchLimit: 8;
}];
/**
 * @shared composition:used as building block for other schemas person.filter-catalog; not direct because generated catalog arrays are imported by tooling rather than served as endpoint payloads
 * @usedBySchema none
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export declare const PersonFilterCatalogSchema: z.ZodArray<z.ZodObject<{
    filterKey: z.ZodEnum<{
        amountInvestedRange: "amountInvestedRange";
        amountRaisedRange: "amountRaisedRange";
        entityName: "entityName";
        investedCompany: "investedCompany";
        personTitle: "personTitle";
        round: "round";
        totalInvestmentCount: "totalInvestmentCount";
        typeRecord: "typeRecord";
    }>;
    label: z.ZodString;
    filterShape: z.ZodEnum<{
        ARRAY: "ARRAY";
        RANGE: "RANGE";
    }>;
    sourceType: z.ZodEnum<{
        AMOUNT_INVESTED_BUCKET: "AMOUNT_INVESTED_BUCKET";
        AMOUNT_RAISED_BUCKET: "AMOUNT_RAISED_BUCKET";
        ASSOCIATED_ENTITY: "ASSOCIATED_ENTITY";
        INVESTED_COMPANY: "INVESTED_COMPANY";
        PERSON_TITLE: "PERSON_TITLE";
        ROUND: "ROUND";
        TOTAL_INVESTMENTS_BUCKET: "TOTAL_INVESTMENTS_BUCKET";
        TYPE_RECORD: "TYPE_RECORD";
    }>;
    optionLimit: z.ZodNullable<z.ZodNumber>;
    searchLimit: z.ZodNullable<z.ZodNumber>;
}, z.core.$strip>>;
export type PersonFilterCatalog = z.infer<typeof PersonFilterCatalogSchema>;
//# sourceMappingURL=filter-catalog.d.ts.map