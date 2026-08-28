import { z } from "zod/v4";
declare const ClassificationSchemaDefinition: z.ZodObject<{
    creatable: z.ZodBoolean;
    isCurrent: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    isPrimary: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    writable: z.ZodBoolean;
}, z.core.$strip>;
type ClassificationDefinition = z.infer<typeof ClassificationSchemaDefinition>;
/**
 * @openapiSchema Classification
 * @endpoint GET /v1/classifications/catalog
 * @endpoint GET /v1/classifications/search
 * @endpoint GET /v1/classifications/tags
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/{entityId}/classifications
 * @endpoint GET /v1/entities/{entityId}/classifications/suggestions
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/classifications
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
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
 * @usedBySchema EntityTagSchema
 * @usedBySchema StandardizedClassificationSchema
 * @contractShape classification.classification
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
 */
export declare const ClassificationSchema: z.ZodType<ClassificationDefinition>;
export type Classification = z.infer<typeof ClassificationSchema>;
export {};
//# sourceMappingURL=classification.d.ts.map