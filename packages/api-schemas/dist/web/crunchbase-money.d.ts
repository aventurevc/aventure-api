import { z } from "zod/v4";
/**
 * A Crunchbase monetary amount.
 *
 * @openapiSchema WebCrunchbaseMoney
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseAcquisitionSchema
 * @usedBySchema WebCrunchbaseFundingRoundSchema
 * @usedBySchema WebCrunchbaseFundingSchema
 * @usedBySchema WebCrunchbaseIpoSchema
 * @contractShape web.crunchbase-money
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseMoneySchema: z.ZodObject<{
    currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
export type WebCrunchbaseMoney = z.infer<typeof WebCrunchbaseMoneySchema>;
//# sourceMappingURL=crunchbase-money.d.ts.map