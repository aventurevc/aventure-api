import { z } from "zod/v4";
declare const ContentViewCountSchemaDefinition: z.ZodObject<{
    viewCount: z.ZodInt;
}, z.core.$strip>;
type ContentViewCountDefinition = z.infer<typeof ContentViewCountSchemaDefinition>;
/**
 * Updated content view count
 *
 * @openapiSchema ContentViewCount
 * @endpoint POST /v1/app/blog/articles/{slug}/view
 * @endpoint POST /v1/app/pages/{slug}/view
 * @contractShape content.view-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentViewCount.kt
 */
export declare const ContentViewCountSchema: z.ZodType<ContentViewCountDefinition>;
export type ContentViewCount = z.infer<typeof ContentViewCountSchema>;
export {};
//# sourceMappingURL=view-count.d.ts.map