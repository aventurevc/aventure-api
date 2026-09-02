import { z } from "zod/v4";
declare const WebXProfilePostSchemaDefinition: z.ZodObject<{
    description: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    likeCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    postedAt: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    postUrl: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    replyCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    repostCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
    viewCount: z.ZodOptional<z.ZodNullable<z.ZodNumber>>;
}, z.core.$strip>;
type WebXProfilePostDefinition = z.infer<typeof WebXProfilePostSchemaDefinition>;
/**
 * Recent post nested in an X profile snapshot.
 *
 * @openapiSchema WebXProfilePost
 * @endpoint GET /v1/web/profile/scrape/{snapshotId}
 * @usedBySchema WebXProfileSchema
 * @contractShape web.xprofile-post
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/web/WebXProfile.kt
 */
export declare const WebXProfilePostSchema: z.ZodType<WebXProfilePostDefinition>;
export type WebXProfilePost = z.infer<typeof WebXProfilePostSchema>;
export {};
//# sourceMappingURL=xprofile-post.d.ts.map