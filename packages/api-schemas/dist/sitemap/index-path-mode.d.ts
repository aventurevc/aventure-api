import { z } from "zod/v4";
/**
 * How the sitemap index path should be expanded by the front-end sitemap builder
 *
 * @openapiSchema SitemapIndexPathMode
 * @endpoint GET /v1/sitemap/index-manifest
 * @usedBySchema SitemapFamilyEntrySchema
 * @contractShape sitemap.index-path-mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sitemap/SitemapIndexPathMode.kt
 */
export declare const SitemapIndexPathModeSchema: z.ZodEnum<{
    pageBase: "pageBase";
    singleFile: "singleFile";
}>;
export type SitemapIndexPathMode = z.infer<typeof SitemapIndexPathModeSchema>;
//# sourceMappingURL=index-path-mode.d.ts.map