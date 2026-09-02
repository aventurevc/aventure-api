import { z } from "zod/v4";
declare const WebSiteSchemaDefinition: z.ZodObject<{
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    domain: z.ZodString;
    id: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    owner: z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>;
    pages: z.ZodRecord<z.ZodString, z.ZodArray<z.ZodType<{
        comparisonTarget?: string[] | null | undefined;
        kind?: string | null | undefined;
        label?: string | null | undefined;
        offDomain?: boolean | null | undefined;
        url: string;
    }, unknown, z.core.$ZodTypeInternals<{
        comparisonTarget?: string[] | null | undefined;
        kind?: string | null | undefined;
        label?: string | null | undefined;
        offDomain?: boolean | null | undefined;
        url: string;
    }, unknown>>>>;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
}, z.core.$strip>;
type WebSiteDefinition = z.infer<typeof WebSiteSchemaDefinition>;
/**
 * Canonical website map and sitemap structured page data for an owner's domain.
 *
 * @openapiSchema WebSite
 * @endpoint GET /v1/entities/{entityId}/sites
 * @endpoint POST /v1/entities/{entityId}/sites
 * @usedBySchema PageWebSiteSchema
 * @contractShape web.site
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/website/WebSite.kt
 */
export declare const WebSiteSchema: z.ZodType<WebSiteDefinition>;
export type WebSite = z.infer<typeof WebSiteSchema>;
export {};
//# sourceMappingURL=site.d.ts.map