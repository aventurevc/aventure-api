import { z } from "zod/v4";
declare const WebCompanyLinkSchemaDefinition: z.ZodObject<{
    industry: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    location: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    name: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    profileUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCompanyLinkDefinition = z.infer<typeof WebCompanyLinkSchemaDefinition>;
/**
 * A related/affiliated company link.
 *
 * @openapiSchema WebCompanyLink
 * @endpoint GET /v1/web/profile/company
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCompanyProfileSchema
 * @contractShape web.company-link
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCompanyProfile.kt
 */
export declare const WebCompanyLinkSchema: z.ZodType<WebCompanyLinkDefinition>;
export type WebCompanyLink = z.infer<typeof WebCompanyLinkSchema>;
export {};
//# sourceMappingURL=company-link.d.ts.map