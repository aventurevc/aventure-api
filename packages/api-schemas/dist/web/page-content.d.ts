import { z } from "zod/v4";
declare const WebPageContentSchemaDefinition: z.ZodObject<{
    fetchedAt: z.ZodISODateTime;
    filter: z.ZodEnum<{
        FIT: "FIT";
        RAW: "RAW";
    }>;
    markdown: z.ZodString;
    success: z.ZodBoolean;
    url: z.ZodString;
}, z.core.$strip>;
type WebPageContentDefinition = z.infer<typeof WebPageContentSchemaDefinition>;
/**
 * Markdown content of a single fetched public web page.
 *
 * @openapiSchema WebPageContent
 * @endpoint GET /v1/web/page
 * @endpoint GET /v1/web/pages
 * @contractShape web.page-content
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPageContent.kt
 */
export declare const WebPageContentSchema: z.ZodType<WebPageContentDefinition>;
export type WebPageContent = z.infer<typeof WebPageContentSchema>;
export {};
//# sourceMappingURL=page-content.d.ts.map