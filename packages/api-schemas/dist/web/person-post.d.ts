import { z } from "zod/v4";
declare const WebPersonPostSchemaDefinition: z.ZodObject<{
    attribution: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    id: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    interaction: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    link: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    title: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
type WebPersonPostDefinition = z.infer<typeof WebPersonPostSchemaDefinition>;
/**
 * A LinkedIn post authored by the person.
 *
 * @openapiSchema WebPersonPost
 * @endpoint GET /v1/web/profile/person
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebPersonProfileSchema
 * @contractShape web.person-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebPersonProfile.kt
 */
export declare const WebPersonPostSchema: z.ZodType<WebPersonPostDefinition>;
export type WebPersonPost = z.infer<typeof WebPersonPostSchema>;
export {};
//# sourceMappingURL=person-post.d.ts.map