// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { AddressSchema } from "../address/address.js";
import { EntityUrlLinkSchema } from "../entity/url-link.js";
const PersonEnrichmentSchemaDefinition = z.object({
    /** Addresses associated with the person */
    address: z.array(AddressSchema),
    /** External and social URL links associated with the person */
    urlLink: z.array(EntityUrlLinkSchema),
});
/**
 * Supplemental person data — addresses and URL links
 *
 * @openapiSchema PersonEnrichment
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/people
 * @endpoint GET /v1/entities/detail/person-investors
 * @endpoint GET /v1/people/detail
 * @endpoint GET /v1/entities/{entityId}/people
 * @endpoint GET /v1/entities/{entityId}/people/{associationId}
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/people/batch
 * @endpoint POST /v1/people/detail
 * @endpoint POST /v1/people/detail/batch
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PATCH /v1/people/detail
 * @endpoint PUT /v1/entities/detail
 * @endpoint PUT /v1/people/detail
 * @usedBySchema PersonDetailSchema
 * @contractShape person.enrichment
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonEnrichment.kt
 */
export const PersonEnrichmentSchema = PersonEnrichmentSchemaDefinition;
//# sourceMappingURL=enrichment.js.map