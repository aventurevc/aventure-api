import { z } from "zod/v4";
declare const EntityTagSchemaDefinition: z.ZodIntersection<z.ZodType<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, unknown, z.core.$ZodTypeInternals<{
    creatable: boolean;
    isCurrent?: boolean | null | undefined;
    isPrimary?: boolean | null | undefined;
    name: string;
    writable: boolean;
}, unknown>>, z.ZodObject<{
    bucket: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    classificationId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    creatable: z.ZodBoolean;
    createdAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    id: z.ZodInt;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    slug: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    type: z.ZodString;
    updatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    writable: z.ZodBoolean;
}, z.core.$strip>>;
type EntityTagDefinition = z.infer<typeof EntityTagSchemaDefinition>;
/**
 * Canonical classification tag projection. Catalog/search responses describe registry tags; entity-classification responses include classificationId plus join state.
 *
 * @openapiSchema EntityTag
 * @endpoint GET /v1/classifications/catalog
 * @endpoint GET /v1/classifications/search
 * @endpoint GET /v1/classifications/tags
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/classifications
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/classifications/{classificationId}
 * @usedBySchema ClassificationCatalogBucketSchema
 * @usedBySchema EntityClassificationSchema
 * @usedBySchema EntityClassificationSuggestionSchema
 * @usedBySchema PageClassificationSchema
 * @usedBySchema PageEntityTagSchema
 * @contractShape entity.tag
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
 */
export declare const EntityTagSchema: z.ZodType<EntityTagDefinition>;
export type EntityTag = z.infer<typeof EntityTagSchema>;
export {};
//# sourceMappingURL=tag.d.ts.map