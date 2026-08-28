/**
 * Research field catalog — auto-generated from application-contracts.yml.
 *
 * LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES.
 * DO NOT EDIT. This file is replaced on every build by scripts/build-filter-catalog.mjs.
 */
import { z } from "zod/v4";
/**
 * @shared primitive:single reusable domain entity.research-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema ResearchCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.research-catalog.object-key
 * @contractRole canonical
 * @ownerModule entity/research-catalog.ts
 */
export declare const RESEARCH_OBJECT_KEYS: readonly ["company", "fund", "investor", "organization", "organization.workforce", "product"];
/**
 * Dotted camelCase key identifying which domain object a research detail or snippet field belongs to
 *
 * @shared primitive:single reusable domain entity.research-catalog; not direct because generated catalog enums are consumed by higher-level schemas and tooling
 * @usedBySchema ResearchCatalogEntrySchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.research-catalog.object-key
 * @contractRole canonical
 * @ownerModule entity/research-catalog.ts
 */
export declare const ResearchObjectKeySchema: z.ZodEnum<{
    company: "company";
    fund: "fund";
    investor: "investor";
    organization: "organization";
    "organization.workforce": "organization.workforce";
    product: "product";
}>;
export type ResearchObjectKey = z.infer<typeof ResearchObjectKeySchema>;
/**
 * Single research field — objectKey + fieldKey identify the YAML path, valueShape selects write validation, timeSeries gates historical chart eligibility
 *
 * @shared primitive:single reusable domain entity.research-catalog; not direct because generated catalog metadata is consumed directly by front-end and console-ui
 * @usedBySchema ResearchCatalogSchema
 * @usedByEndpoint none:external-root
 * @contractShape entity.research-catalog.entry
 * @contractRole canonical
 * @ownerModule entity/research-catalog.ts
 */
export declare const ResearchCatalogEntrySchema: z.ZodObject<{
    objectKey: z.ZodEnum<{
        company: "company";
        fund: "fund";
        investor: "investor";
        organization: "organization";
        "organization.workforce": "organization.workforce";
        product: "product";
    }>;
    fieldKey: z.ZodString;
    label: z.ZodString;
    valueShape: z.ZodEnum<{
        acceleratorParticipation: "acceleratorParticipation";
        enumeratedToken: "enumeratedToken";
        freeText: "freeText";
        isoCurrencyCode: "isoCurrencyCode";
        monetaryFlow: "monetaryFlow";
        monetaryFlowOverPeriod: "monetaryFlowOverPeriod";
        monetaryStock: "monetaryStock";
        numericCount: "numericCount";
        numericCountOrRange: "numericCountOrRange";
        numericGrowthRate: "numericGrowthRate";
        numericRatio: "numericRatio";
        numericScore: "numericScore";
        targetDateAbsolute: "targetDateAbsolute";
    }>;
    allowedToken: z.ZodNullable<z.ZodArray<z.ZodString>>;
    range: z.ZodNullable<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>>;
    timeSeries: z.ZodBoolean;
}, z.core.$strip>;
export type ResearchCatalogEntry = z.infer<typeof ResearchCatalogEntrySchema>;
/** Complete catalog of all canonical research detail and snippet fields */
export declare const RESEARCH_CATALOG: readonly [{
    readonly objectKey: "company";
    readonly fieldKey: "customerRetentionRate";
    readonly label: "Customer Retention Rate";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 1;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "fundraisingNeeds";
    readonly label: "Fundraising Needs";
    readonly valueShape: "targetDateAbsolute";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "fundraisingSectorStatus";
    readonly label: "Fundraising Sector Status";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["contracting", "flat", "growing", "hot"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "growthScoreAggregate";
    readonly label: "Growth Score Aggregate";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "growthScoreCapitalEfficiency";
    readonly label: "Growth Score Capital Efficiency";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "growthScoreMarketDynamics";
    readonly label: "Growth Score Market Dynamics";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "growthScoreProductDifferentiation";
    readonly label: "Growth Score Product Differentiation";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "growthScoreSalesEfficiency";
    readonly label: "Growth Score Sales Efficiency";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "impliedRunway";
    readonly label: "Implied Runway";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["underSixMonths", "sixToTwelveMonths", "oneToTwoYears", "overTwoYears", "profitable"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "industryEconomics";
    readonly label: "Industry Economics";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["poor", "mixed", "attractive", "exceptional"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "latestValuation";
    readonly label: "Latest Valuation";
    readonly valueShape: "monetaryStock";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: true;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "numberOfCustomers";
    readonly label: "Number of Customers";
    readonly valueShape: "numericCount";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "profitability";
    readonly label: "Profitability";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["unprofitable", "breakeven", "profitable", "highlyProfitable"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "relativeProfitability";
    readonly label: "Relative Profitability";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["belowPeers", "atPeers", "abovePeers"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "revenueEstimate";
    readonly label: "Revenue Estimate";
    readonly valueShape: "monetaryFlow";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "revenueGrowthEstimate";
    readonly label: "Revenue Growth Estimate";
    readonly valueShape: "numericGrowthRate";
    readonly allowedToken: null;
    readonly range: {
        readonly min: -100;
        readonly max: 1000;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "riskScoreAggregate";
    readonly label: "Risk Score Aggregate";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "riskScoreFundraising";
    readonly label: "Risk Score Fundraising";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "riskScoreGovernance";
    readonly label: "Risk Score Governance";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "riskScoreSustainability";
    readonly label: "Risk Score Sustainability";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "company";
    readonly fieldKey: "riskScoreTechnology";
    readonly label: "Risk Score Technology";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "domicile";
    readonly label: "Fund Domicile";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "dpi";
    readonly label: "DPI";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 20;
    };
    readonly timeSeries: true;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "fundStatus";
    readonly label: "Fund Status";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["fundraising", "investing", "realizing", "closed", "wound"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "fundType";
    readonly label: "Fund Type";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["venture", "growth", "buyout", "hedge", "fundOfFunds", "secondary", "debt", "realEstate", "infrastructure"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "legalStructure";
    readonly label: "Legal Structure";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["limitedPartnership", "llc", "corporation", "trust"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "managementFee";
    readonly label: "Management Fee";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 0.1;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "nativeCurrency";
    readonly label: "Native Currency";
    readonly valueShape: "isoCurrencyCode";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "netIrr";
    readonly label: "Net IRR";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: -1;
        readonly max: 5;
    };
    readonly timeSeries: true;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "percentCalled";
    readonly label: "Percent Called";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 1;
    };
    readonly timeSeries: true;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "percentDeployed";
    readonly label: "Percent Deployed";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 1;
    };
    readonly timeSeries: true;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "performanceFee";
    readonly label: "Performance Fee";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 0.5;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "termType";
    readonly label: "Term Type";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["fixedTerm", "evergreen"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "termYears";
    readonly label: "Term (Years)";
    readonly valueShape: "numericCount";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 1;
        readonly max: 30;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "fund";
    readonly fieldKey: "tvpi";
    readonly label: "TVPI";
    readonly valueShape: "numericRatio";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 20;
    };
    readonly timeSeries: true;
}, {
    readonly objectKey: "investor";
    readonly fieldKey: "assetsUnderManagement";
    readonly label: "Assets Under Management";
    readonly valueShape: "monetaryStock";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "investor";
    readonly fieldKey: "capitalRaisedInPeriod";
    readonly label: "Capital Raised In Period";
    readonly valueShape: "monetaryFlowOverPeriod";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: true;
}, {
    readonly objectKey: "investor";
    readonly fieldKey: "committedCapitalTotal";
    readonly label: "Committed Capital Total";
    readonly valueShape: "monetaryStock";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "investor";
    readonly fieldKey: "geographicFocus";
    readonly label: "Geographic Focus";
    readonly valueShape: "enumeratedToken";
    readonly allowedToken: ["global", "regional", "national", "local"];
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "acceleratorParticipation";
    readonly label: "Accelerator Participation";
    readonly valueShape: "acceleratorParticipation";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: true;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "competitiveAdvantages";
    readonly label: "Competitive Advantages";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "competitiveDisadvantages";
    readonly label: "Competitive Disadvantages";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "history";
    readonly label: "History";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "marketOutlook";
    readonly label: "Market Outlook";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "memo";
    readonly label: "Memo";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "monthlyTraffic";
    readonly label: "Monthly Traffic";
    readonly valueShape: "numericCount";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "monthlyTrafficGrowth";
    readonly label: "Monthly Traffic Growth";
    readonly valueShape: "numericGrowthRate";
    readonly allowedToken: null;
    readonly range: {
        readonly min: -100;
        readonly max: 1000;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "nameCongruencyScore";
    readonly label: "Name Congruency Score";
    readonly valueShape: "numericScore";
    readonly allowedToken: null;
    readonly range: {
        readonly min: 0;
        readonly max: 100;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "pricingStrategy";
    readonly label: "Pricing Strategy";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "wikipediaPageViewGrowth";
    readonly label: "Wikipedia Page View Growth";
    readonly valueShape: "numericGrowthRate";
    readonly allowedToken: null;
    readonly range: {
        readonly min: -100;
        readonly max: 1000;
    };
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization";
    readonly fieldKey: "wikipediaPageViews";
    readonly label: "Wikipedia Page Views";
    readonly valueShape: "numericCount";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}, {
    readonly objectKey: "organization.workforce";
    readonly fieldKey: "numberOfEmployees";
    readonly label: "Number of Employees";
    readonly valueShape: "numericCountOrRange";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: true;
}, {
    readonly objectKey: "product";
    readonly fieldKey: "productOverview";
    readonly label: "Product Overview";
    readonly valueShape: "freeText";
    readonly allowedToken: null;
    readonly range: null;
    readonly timeSeries: false;
}];
/**
 * @shared composition:used as building block for other schemas entity.research-catalog; not direct because generated catalog arrays are imported by tooling rather than served as endpoint payloads
 * @usedBySchema none
 * @usedByEndpoint none:external-root
 * @contractShape entity.research-catalog
 * @contractRole canonical
 * @ownerModule entity/research-catalog.ts
 */
export declare const ResearchCatalogSchema: z.ZodArray<z.ZodObject<{
    objectKey: z.ZodEnum<{
        company: "company";
        fund: "fund";
        investor: "investor";
        organization: "organization";
        "organization.workforce": "organization.workforce";
        product: "product";
    }>;
    fieldKey: z.ZodString;
    label: z.ZodString;
    valueShape: z.ZodEnum<{
        acceleratorParticipation: "acceleratorParticipation";
        enumeratedToken: "enumeratedToken";
        freeText: "freeText";
        isoCurrencyCode: "isoCurrencyCode";
        monetaryFlow: "monetaryFlow";
        monetaryFlowOverPeriod: "monetaryFlowOverPeriod";
        monetaryStock: "monetaryStock";
        numericCount: "numericCount";
        numericCountOrRange: "numericCountOrRange";
        numericGrowthRate: "numericGrowthRate";
        numericRatio: "numericRatio";
        numericScore: "numericScore";
        targetDateAbsolute: "targetDateAbsolute";
    }>;
    allowedToken: z.ZodNullable<z.ZodArray<z.ZodString>>;
    range: z.ZodNullable<z.ZodObject<{
        max: z.ZodNumber;
        min: z.ZodNumber;
    }, z.core.$strip>>;
    timeSeries: z.ZodBoolean;
}, z.core.$strip>>;
export type ResearchCatalog = z.infer<typeof ResearchCatalogSchema>;
/** Available research field keys grouped by containing camelCase object */
export declare const RESEARCH_KEYS_BY_OBJECT: {
    readonly company: readonly ["customerRetentionRate", "fundraisingNeeds", "fundraisingSectorStatus", "growthScoreAggregate", "growthScoreCapitalEfficiency", "growthScoreMarketDynamics", "growthScoreProductDifferentiation", "growthScoreSalesEfficiency", "impliedRunway", "industryEconomics", "latestValuation", "numberOfCustomers", "profitability", "relativeProfitability", "revenueEstimate", "revenueGrowthEstimate", "riskScoreAggregate", "riskScoreFundraising", "riskScoreGovernance", "riskScoreSustainability", "riskScoreTechnology"];
    readonly fund: readonly ["domicile", "dpi", "fundStatus", "fundType", "legalStructure", "managementFee", "nativeCurrency", "netIrr", "percentCalled", "percentDeployed", "performanceFee", "termType", "termYears", "tvpi"];
    readonly investor: readonly ["assetsUnderManagement", "capitalRaisedInPeriod", "committedCapitalTotal", "geographicFocus"];
    readonly organization: readonly ["acceleratorParticipation", "competitiveAdvantages", "competitiveDisadvantages", "history", "marketOutlook", "memo", "monthlyTraffic", "monthlyTrafficGrowth", "nameCongruencyScore", "pricingStrategy", "wikipediaPageViewGrowth", "wikipediaPageViews"];
    readonly "organization.workforce": readonly ["numberOfEmployees"];
    readonly product: readonly ["productOverview"];
};
//# sourceMappingURL=research-catalog.d.ts.map