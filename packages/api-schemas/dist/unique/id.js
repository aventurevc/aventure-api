// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { UniqueIdTypeSchema } from "./id-type.js";
const UniqueIdSchemaDefinition = z.object({
    /** Row creation timestamp. */
    createdAt: z.iso.datetime({ offset: true }),
    /** Unique-id row id. */
    id: z.int(),
    /** Identifier value as issued by the registry (normalized per type). */
    identifier: z.string(),
    /** Identifier type. */
    idType: UniqueIdTypeSchema,
    /** Owning entity or person id; exactly one nested id is present. */
    owner: EntityPersonOwnerSchema,
    /** Attribution source label for the mapping, when recorded. */
    source: z.string().nullish(),
    /** Row update timestamp. */
    updatedAt: z.iso.datetime({ offset: true }),
});
/**
 * External identifier mapped to one owner (entity or person): for example a company's EIN, SEC CIK, or ticker symbol. Owner carries exactly one entityId or personId.
 *
 * @openapiSchema UniqueId
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/unique-ids/lookup
 * @endpoint GET /v1/entities/{entityId}/unique-ids
 * @endpoint GET /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint GET /v1/people/{personId}/unique-ids
 * @endpoint GET /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @endpoint POST /v1/sec/entities/{entityId}/identifiers
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/unique-ids/{uniqueIdId}
 * @endpoint DELETE /v1/people/{personId}/unique-ids/{uniqueIdId}
 * @usedBySchema EntityDetailSchema
 * @usedBySchema PageUniqueIdSchema
 * @usedBySchema SecIdentifierMappingSchema
 * @contractShape unique.id
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueId.kt
 */
export const UniqueIdSchema = UniqueIdSchemaDefinition;
//# sourceMappingURL=id.js.map