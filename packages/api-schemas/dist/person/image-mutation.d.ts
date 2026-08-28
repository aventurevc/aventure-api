import { z } from "zod/v4";
/**
 * Mutation fragment: person image update
 *
 * @openapiSchema PersonImageMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonMutationSchema
 * @contractShape person.image-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export declare const PersonImageMutationSchema: z.ZodObject<{
    picture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersonImageMutation = z.infer<typeof PersonImageMutationSchema>;
//# sourceMappingURL=image-mutation.d.ts.map