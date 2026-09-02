import { z } from "zod/v4";
declare const WebCrunchbaseInvestorSchemaDefinition: z.ZodObject<{
    investorType: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    leadInvestor: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    roundName: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseInvestorDefinition = z.infer<typeof WebCrunchbaseInvestorSchemaDefinition>;
/**
 * A Crunchbase cap-table investor entry.
 *
 * @openapiSchema WebCrunchbaseInvestor
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-investor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseFinancials.kt
 */
export declare const WebCrunchbaseInvestorSchema: z.ZodType<WebCrunchbaseInvestorDefinition>;
export type WebCrunchbaseInvestor = z.infer<typeof WebCrunchbaseInvestorSchema>;
export {};
//# sourceMappingURL=crunchbase-investor.d.ts.map