import { z } from "zod/v4";
/**
 * Mutation fragment: person visibility update with create defaults
 *
 * @openapiSchema PersonVisibilityStatusMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonMutationSchema
 * @contractShape person.visibility-status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export declare const PersonVisibilityStatusMutationSchema: z.ZodObject<{
    isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type PersonVisibilityStatusMutation = z.infer<typeof PersonVisibilityStatusMutationSchema>;
//# sourceMappingURL=visibility-status-mutation.d.ts.map