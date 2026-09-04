import { z } from "zod/v4";
/**
 * Resource type whose slug is being changed
 *
 * @openapiSchema SlugResource
 * @standardProblemResponse
 * @usedBySchema CurrentSlugOwnerSchema
 * @usedBySchema RedirectSlugPathSchema
 * @usedBySchema SlugChangeResultSchema
 * @usedBySchema SlugLocationSchema
 * @contractShape redirect.slug-resource
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugResource.kt
 */
export declare const SlugResourceSchema: z.ZodEnum<{
    blog: "blog";
    content: "content";
    entity: "entity";
    news: "news";
    person: "person";
}>;
export type SlugResource = z.infer<typeof SlugResourceSchema>;
//# sourceMappingURL=slug-resource.d.ts.map