import { z } from "zod/v4";
/**
 * Entity mutation-side visibility fragment. On create, omitted status defaults to hidden from public list/detail reads, not featured, not verified, and omitted from the sitemap. On update, omitted nested fields leave existing flags unchanged.
 *
 * @openapiSchema EntityStatusMutation
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityMutationSchema
 * @contractShape entity.status-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityStatus.kt
 */
export declare const EntityStatusMutationSchema: z.ZodObject<{
    isFeatured: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isHidden: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isVerified: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    showOnSitemap: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
}, z.core.$strip>;
export type EntityStatusMutation = z.infer<typeof EntityStatusMutationSchema>;
//# sourceMappingURL=status-mutation.d.ts.map