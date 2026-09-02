import { z } from "zod/v4";
/**
 * LinkedIn funding summary signal.
 *
 * @openapiSchema WebCompanyFunding
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-funding
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export declare const WebCompanyFundingSchema: z.ZodObject<{
    lastRoundDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    lastRoundType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roundCount: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
export type WebCompanyFunding = z.infer<typeof WebCompanyFundingSchema>;
//# sourceMappingURL=company-funding.d.ts.map