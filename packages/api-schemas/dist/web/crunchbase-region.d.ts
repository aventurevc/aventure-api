import { z } from "zod/v4";
declare const WebCrunchbaseRegionSchemaDefinition: z.ZodObject<{
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    value: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebCrunchbaseRegionDefinition = z.infer<typeof WebCrunchbaseRegionSchemaDefinition>;
/**
 * A Crunchbase location/region tag.
 *
 * @openapiSchema WebCrunchbaseRegion
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebCrunchbaseCompanySchema
 * @contractShape web.crunchbase-region
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebCrunchbaseCompany.kt
 */
export declare const WebCrunchbaseRegionSchema: z.ZodType<WebCrunchbaseRegionDefinition>;
export type WebCrunchbaseRegion = z.infer<typeof WebCrunchbaseRegionSchema>;
export {};
//# sourceMappingURL=crunchbase-region.d.ts.map