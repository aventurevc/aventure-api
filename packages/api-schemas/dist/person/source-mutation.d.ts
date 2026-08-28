import { z } from "zod/v4";
/**
 * Mutation fragment: person source/workflow metadata
 *
 * @openapiSchema PersonSourceMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonMutationSchema
 * @contractShape person.source-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export declare const PersonSourceMutationSchema: z.ZodObject<{
    workflowStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersonSourceMutation = z.infer<typeof PersonSourceMutationSchema>;
//# sourceMappingURL=source-mutation.d.ts.map