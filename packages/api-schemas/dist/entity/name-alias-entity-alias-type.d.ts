import { z } from "zod/v4";
declare const EntityNameAliasEntityAliasTypeSchemaDefinition: z.ZodObject<{
    displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        alternativeDba: "alternativeDba";
        relatedLegal: "relatedLegal";
    }>>>;
}, z.core.$strip>;
type EntityNameAliasEntityAliasTypeDefinition = z.infer<typeof EntityNameAliasEntityAliasTypeSchemaDefinition>;
/**
 * Alternate name used for search and display
 *
 * @openapiSchema EntityNameAliasEntityAliasType
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/fundraise-rounds
 * @endpoint GET /v1/entities/detail/investments
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/entities/duplicate-check
 * @endpoint GET /v1/entities/summary
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/investments
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/acquisitions
 * @endpoint GET /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint GET /v1/entities/relationships/{relationshipId}
 * @endpoint GET /v1/news/{id}/related-companies
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/{entityId}/relationships
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/fundraise-rounds
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/duplicate-check
 * @endpoint POST /v1/entities/merge
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/relationships/join
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/sec/entities/{entityId}/aliases
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PATCH /v1/entities/relationships/{relationshipId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint DELETE /v1/entities/detail/fundraise-rounds/{transactionId}
 * @endpoint DELETE /v1/entities/relationships/{relationshipId}
 * @usedBySchema EntityMutationSchema
 * @usedBySchema EntitySchema
 * @contractShape entity.name-alias-entity-alias-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/NameAlias.kt
 */
export declare const EntityNameAliasEntityAliasTypeSchema: z.ZodType<EntityNameAliasEntityAliasTypeDefinition>;
export type EntityNameAliasEntityAliasType = z.infer<typeof EntityNameAliasEntityAliasTypeSchema>;
export {};
//# sourceMappingURL=name-alias-entity-alias-type.d.ts.map