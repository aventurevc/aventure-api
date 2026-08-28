import { z } from "zod/v4";
/**
 * Deletion behavior for media assets and mutable resources
 *
 * @openapiSchema DeleteMode
 * @endpoint POST /v1/entities/merge
 * @endpoint POST /v1/media/logo-audit/jobs
 * @endpoint POST /v1/people/merge
 * @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint DELETE /v1/entities/{entityId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint DELETE /v1/entities/{entityId}/texts/{textId}
 * @endpoint DELETE /v1/entities/{entityId}/urls/{urlId}
 * @endpoint DELETE /v1/entities/detail
 * @endpoint DELETE /v1/media/delete
 * @endpoint DELETE /v1/people/{personId}/blog-posts/{blogPostId}
 * @endpoint DELETE /v1/people/{personId}/texts/{textId}
 * @endpoint DELETE /v1/people/{personId}/urls/{urlId}
 * @endpoint DELETE /v1/people/detail
 * @usedBySchema EntityMergeSchema
 * @usedBySchema PersonMergeSchema
 * @contractShape delete.mode
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/DeleteMode.kt
 */
export declare const DeleteModeSchema: z.ZodEnum<{
    hard: "hard";
    soft: "soft";
}>;
export type DeleteMode = z.infer<typeof DeleteModeSchema>;
//# sourceMappingURL=mode.d.ts.map