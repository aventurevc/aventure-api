import { z } from "zod/v4";
declare const WebCrunchbaseFounderSchemaDefinition: z.ZodObject<{
    crunchbaseId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseFounderDefinition = z.infer<typeof WebCrunchbaseFounderSchemaDefinition>;
/**
 * A Crunchbase-listed company founder.
 *
 * @openapiSchema WebCrunchbaseFounder
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-founder
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export declare const WebCrunchbaseFounderSchema: z.ZodType<WebCrunchbaseFounderDefinition>;
export type WebCrunchbaseFounder = z.infer<typeof WebCrunchbaseFounderSchema>;
export {};
//# sourceMappingURL=crunchbase-founder.d.ts.map