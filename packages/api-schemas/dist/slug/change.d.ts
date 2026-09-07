import { z } from "zod/v4";
declare const SlugChangeSchemaDefinition: z.ZodObject<{
    newSlug: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
type SlugChangeDefinition = z.infer<typeof SlugChangeSchemaDefinition>;
/**
 * Slug change merge-patch body
 *
 * @openapiSchema SlugChange
 * @endpoint PATCH /v1/entities/{entityId}/slug
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/people/{personId}/slug
 * @contractShape slug.change
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugChange.kt
 */
export declare const SlugChangeSchema: z.ZodType<SlugChangeDefinition>;
export type SlugChange = z.infer<typeof SlugChangeSchema>;
export {};
//# sourceMappingURL=change.d.ts.map