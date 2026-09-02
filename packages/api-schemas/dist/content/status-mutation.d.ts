import { z } from "zod/v4";
declare const ContentStatusMutationSchemaDefinition: z.ZodObject<{
    status: z.ZodEnum<{
        draft: "draft";
        featured: "featured";
        published: "published";
    }>;
}, z.core.$strip>;
type ContentStatusMutationDefinition = z.infer<typeof ContentStatusMutationSchemaDefinition>;
/**
 * Shared content status mutation input
 *
 * @openapiSchema ContentStatusMutation
 * @endpoint PATCH /v1/app/blog/articles/{id}/status
 * @endpoint PATCH /v1/app/pages/{id}/status
 * @contractShape content.status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/ContentStatusMutation.kt
 */
export declare const ContentStatusMutationSchema: z.ZodType<ContentStatusMutationDefinition>;
export type ContentStatusMutation = z.infer<typeof ContentStatusMutationSchema>;
export {};
//# sourceMappingURL=status-mutation.d.ts.map