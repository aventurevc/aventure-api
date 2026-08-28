import { z } from "zod/v4";
/**
 * Grouped source/provenance metadata for private v1 response fields
 *
 * @openapiSchema DatasourceSourceMetadata
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/media
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/provenance/latest
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/media/convert
 * @endpoint POST /v1/media/entity-logo/import
 * @endpoint POST /v1/media/logo-accuracy
 * @endpoint POST /v1/media/news-thumbnail/import
 * @endpoint POST /v1/media/upload
 * @endpoint POST /v1/people
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/people/duplicate-check
 * @endpoint POST /v1/people/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema LogoAccuracySchema
 * @usedBySchema MediaUploadSchema
 * @usedBySchema PersonSchema
 * @contractShape datasource.source-metadata
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export declare const DatasourceSourceMetadataSchema: z.ZodObject<{
    changedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    dataSourceUpdatedAt: z.ZodOptional<z.ZodNullable<z.ZodISODateTime>>;
    detail: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    kind: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    pendingApproval: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    sourceId: z.ZodOptional<z.ZodNullable<z.ZodString>>;
    status: z.ZodOptional<z.ZodNullable<z.ZodString>>;
}, z.core.$strip>;
export type DatasourceSourceMetadata = z.infer<typeof DatasourceSourceMetadataSchema>;
//# sourceMappingURL=source-metadata.d.ts.map