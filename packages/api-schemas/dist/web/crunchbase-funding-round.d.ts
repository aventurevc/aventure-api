import { z } from "zod/v4";
declare const WebCrunchbaseFundingRoundSchemaDefinition: z.ZodObject<{
    announcedOn: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadInvestor: z.ZodArray<z.ZodType<{
        imageUrl?: string | null | undefined;
        name?: string | null | undefined;
        permalink?: string | null | undefined;
    }, unknown, z.core.$ZodTypeInternals<{
        imageUrl?: string | null | undefined;
        name?: string | null | undefined;
        permalink?: string | null | undefined;
    }, unknown>>>;
    moneyRaised: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        currency: z.ZodOptional<z.ZodNullable<z.ZodString>>;
        value: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
        valueUsd: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    }, z.core.$strip>>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    transactionName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseFundingRoundDefinition = z.infer<typeof WebCrunchbaseFundingRoundSchemaDefinition>;
/**
 * A single Crunchbase funding round.
 *
 * @openapiSchema WebCrunchbaseFundingRound
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-funding-round
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseFundingRoundSchema: z.ZodType<WebCrunchbaseFundingRoundDefinition>;
export type WebCrunchbaseFundingRound = z.infer<typeof WebCrunchbaseFundingRoundSchema>;
export {};
//# sourceMappingURL=crunchbase-funding-round.d.ts.map