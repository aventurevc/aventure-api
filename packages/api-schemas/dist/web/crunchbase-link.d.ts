import { z } from "zod/v4";
declare const WebCrunchbaseLinkSchemaDefinition: z.ZodObject<{
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseLinkDefinition = z.infer<typeof WebCrunchbaseLinkSchemaDefinition>;
/**
 * A related Crunchbase company link.
 *
 * @openapiSchema WebCrunchbaseLink
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export declare const WebCrunchbaseLinkSchema: z.ZodType<WebCrunchbaseLinkDefinition>;
export type WebCrunchbaseLink = z.infer<typeof WebCrunchbaseLinkSchema>;
export {};
//# sourceMappingURL=crunchbase-link.d.ts.map