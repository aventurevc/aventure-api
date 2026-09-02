import { z } from "zod/v4";
/**
 * Crunchbase IPO details.
 *
 * @openapiSchema WebCrunchbaseIpo
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-ipo
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseIpoSchema: z.ZodObject<{
    amountRaised: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    date: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    sharePrice: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    stockLink: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    stockSymbol: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type WebCrunchbaseIpo = z.infer<typeof WebCrunchbaseIpoSchema>;
//# sourceMappingURL=crunchbase-ipo.d.ts.map