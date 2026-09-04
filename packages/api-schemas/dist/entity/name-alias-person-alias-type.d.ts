import { z } from "zod/v4";
declare const EntityNameAliasPersonAliasTypeSchemaDefinition: z.ZodObject<{
    displayable: z.ZodOptional<z.ZodNullable<z.ZodBoolean>>;
    name: z.ZodString;
    type: z.ZodOptional<z.ZodNullable<z.ZodEnum<{
        formerName: "formerName";
        maidenName: "maidenName";
        nickname: "nickname";
        stageName: "stageName";
    }>>>;
}, z.core.$strip>;
type EntityNameAliasPersonAliasTypeDefinition = z.infer<typeof EntityNameAliasPersonAliasTypeSchemaDefinition>;
/**
 * Alternate name used for search and display
 *
 * @openapiSchema EntityNameAliasPersonAliasType
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/people
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/people/duplicate-check
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
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
 * @usedBySchema PersonDetailSchema
 * @usedBySchema PersonSchema
 * @contractShape entity.name-alias-person-alias-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/alias/NameAlias.kt
 */
export declare const EntityNameAliasPersonAliasTypeSchema: z.ZodType<EntityNameAliasPersonAliasTypeDefinition>;
export type EntityNameAliasPersonAliasType = z.infer<typeof EntityNameAliasPersonAliasTypeSchema>;
export {};
//# sourceMappingURL=name-alias-person-alias-type.d.ts.map