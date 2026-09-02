import { z } from "zod/v4";
/**
 * Crunchbase funding roll-up.
 *
 * @openapiSchema WebCrunchbaseFunding
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-funding
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseFundingSchema: z.ZodObject<{
    fundingTotal: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    numFundingRounds: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    numInvestors: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    numLeadInvestors: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
export type WebCrunchbaseFunding = z.infer<typeof WebCrunchbaseFundingSchema>;
//# sourceMappingURL=crunchbase-funding.d.ts.map