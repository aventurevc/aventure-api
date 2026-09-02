import { z } from "zod/v4";
declare const WebPitchbookInvestmentSchemaDefinition: z.ZodObject<{
    companyName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    companyUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dealDate: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dealSize: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    dealType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPitchbookInvestmentDefinition = z.infer<typeof WebPitchbookInvestmentSchemaDefinition>;
/**
 * A PitchBook-listed investment.
 *
 * @openapiSchema WebPitchbookInvestment
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPitchbookCompanySchema
 * @contractShape web.pitchbook-investment
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPitchbookCompany.kt
 */
export declare const WebPitchbookInvestmentSchema: z.ZodType<WebPitchbookInvestmentDefinition>;
export type WebPitchbookInvestment = z.infer<typeof WebPitchbookInvestmentSchema>;
export {};
//# sourceMappingURL=pitchbook-investment.d.ts.map