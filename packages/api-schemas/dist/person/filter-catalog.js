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
export const PersonFilterKeySchema = z.enum([
    "amountInvestedRange",
    "amountRaisedRange",
    "entityName",
    "investedCompany",
    "personTitle",
    "round",
    "totalInvestmentCount",
    "typeRecord",
]);
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.shape
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export const PersonFilterShapeSchema = z.enum(["ARRAY", "RANGE"]);
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.source-type
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export const PersonFilterSourceTypeSchema = z.enum([
    "AMOUNT_INVESTED_BUCKET",
    "AMOUNT_RAISED_BUCKET",
    "ASSOCIATED_ENTITY",
    "INVESTED_COMPANY",
    "PERSON_TITLE",
    "ROUND",
    "TOTAL_INVESTMENTS_BUCKET",
    "TYPE_RECORD",
]);
/**
 * @shared primitive:single reusable domain person.filter-catalog; not direct because generated person filter metadata is consumed by higher-level schemas and tooling
 * @usedBySchema PersonFilterCatalogSchema
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog.entry
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export const PersonFilterCatalogEntrySchema = z.object({
    filterKey: PersonFilterKeySchema,
    label: z.string().min(1),
    filterShape: PersonFilterShapeSchema,
    sourceType: PersonFilterSourceTypeSchema,
    optionLimit: z.number().int().positive().nullable(),
    searchLimit: z.number().int().positive().nullable(),
});
export const PERSON_FILTER_CATALOG = [
    {
        filterKey: "amountInvestedRange",
        label: "Check Sizes",
        filterShape: "RANGE",
        sourceType: "AMOUNT_INVESTED_BUCKET",
        optionLimit: 6,
        searchLimit: 6,
    },
    {
        filterKey: "amountRaisedRange",
        label: "Deal Sizes",
        filterShape: "RANGE",
        sourceType: "AMOUNT_RAISED_BUCKET",
        optionLimit: 6,
        searchLimit: 6,
    },
    {
        filterKey: "entityName",
        label: "Associated Entities",
        filterShape: "ARRAY",
        sourceType: "ASSOCIATED_ENTITY",
        optionLimit: 100,
        searchLimit: 100,
    },
    {
        filterKey: "investedCompany",
        label: "Invested Companies",
        filterShape: "ARRAY",
        sourceType: "INVESTED_COMPANY",
        optionLimit: 100,
        searchLimit: 100,
    },
    {
        filterKey: "personTitle",
        label: "Company Title",
        filterShape: "ARRAY",
        sourceType: "PERSON_TITLE",
        optionLimit: 150,
        searchLimit: 150,
    },
    {
        filterKey: "round",
        label: "Deal Stages",
        filterShape: "ARRAY",
        sourceType: "ROUND",
        optionLimit: 75,
        searchLimit: 100,
    },
    {
        filterKey: "totalInvestmentCount",
        label: "Total Investments",
        filterShape: "RANGE",
        sourceType: "TOTAL_INVESTMENTS_BUCKET",
        optionLimit: 4,
        searchLimit: 4,
    },
    {
        filterKey: "typeRecord",
        label: "Associated Entity Type",
        filterShape: "ARRAY",
        sourceType: "TYPE_RECORD",
        optionLimit: 8,
        searchLimit: 8,
    },
];
/**
 * @shared composition:used as building block for other schemas person.filter-catalog; not direct because generated catalog arrays are imported by tooling rather than served as endpoint payloads
 * @usedBySchema none
 * @usedByEndpoint none:external-root
 * @contractShape person.filter-catalog
 * @contractRole canonical
 * @ownerModule person/filter-catalog.ts
 */
export const PersonFilterCatalogSchema = z.array(PersonFilterCatalogEntrySchema);
//# sourceMappingURL=filter-catalog.js.map