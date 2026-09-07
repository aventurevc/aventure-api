// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressAssociationRoleSchema } from "./association-role.js";
const AddressAssociationSchemaDefinition = z.object({
    /** Last known day this role applied */
    endDate: z.iso.date().nullish(),
    /** Address association row identifier */
    id: z.int(),
    /** Whether this role is currently relevant */
    isCurrent: z.boolean(),
    /** Address association role; null means unclassified */
    role: AddressAssociationRoleSchema.nullish(),
    /** First known day this role applied */
    startDate: z.iso.date().nullish(),
});
/**
 * One role and effective period for a physical address association
 *
 * @openapiSchema AddressAssociation
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/people/detail/similar
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/addresses
 * @endpoint GET /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/people/{personId}/addresses
 * @endpoint GET /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint GET /v1/people/{personId}/entities
 * @endpoint GET /v1/people/{personId}/entities/{associationId}
 * @endpoint GET /v1/people/{personId}/graph
 * @endpoint POST /v1/entities/{entityId}/addresses
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/entities/search
 * @endpoint POST /v1/people/{personId}/addresses
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint POST /v1/search/all
 * @endpoint POST /v1/sec/entities/{entityId}/address
 * @endpoint PATCH /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/people/detail
 * @endpoint DELETE /v1/entities/{entityId}/addresses/{addressJoinId}
 * @endpoint DELETE /v1/people/{personId}/addresses/{addressJoinId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}
 * @endpoint DELETE /v1/people/{personId}/entities/{associationId}/corporate-title
 * @usedBySchema AddressSchema
 * @contractShape address.association
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/address/Address.kt
 */
export const AddressAssociationSchema = AddressAssociationSchemaDefinition;
//# sourceMappingURL=association.js.map