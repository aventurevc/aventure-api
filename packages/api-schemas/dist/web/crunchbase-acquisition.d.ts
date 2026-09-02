import { z } from "zod/v4";
/**
 * Crunchbase acquisition details.
 *
 * @openapiSchema WebCrunchbaseAcquisition
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-acquisition
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseAcquisitionSchema: z.ZodObject<{
    acquirer: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    acquirerPermalink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    acquisitionPrice: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type WebCrunchbaseAcquisition = z.infer<typeof WebCrunchbaseAcquisitionSchema>;
//# sourceMappingURL=crunchbase-acquisition.d.ts.map