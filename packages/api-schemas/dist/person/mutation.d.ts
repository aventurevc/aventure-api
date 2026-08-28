import { z } from "zod/v4";
/**
 * Canonical person mutation body for create, update, and RFC 7396 merge-patch operations. Omitted nullable fields leave existing values unchanged on writes.
 *
 * @openapiSchema PersonMutation
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/merge
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonCreateSchema
 * @usedBySchema PersonMergeSchema
 * @contractShape person.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMutation.kt
 */
export declare const PersonMutationSchema: z.ZodObject<{
    gender: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    image: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        picture: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    nameFirst: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameLast: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nameMiddle: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    newSlug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    nickname: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    source: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        workflowStatus: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    }, z.core.$strip>>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
        showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    }, z.core.$strip>>>;
    suffix: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type PersonMutation = z.infer<typeof PersonMutationSchema>;
//# sourceMappingURL=mutation.d.ts.map