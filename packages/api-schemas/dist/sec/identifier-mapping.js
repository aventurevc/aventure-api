// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UniqueIdSchema } from "../unique/id.js";
const SecIdentifierMappingSchemaDefinition = z.object({
    /** Unique-id rows already mapped to the entity and therefore skipped. */
    alreadyPresent: z.array(UniqueIdSchema),
    /** Unique-id rows written to the entity by this call. */
    attached: z.array(UniqueIdSchema),
    /** SEC Central Index Key of the resolved company. */
    cik: z.string(),
});
/**
 * Outcome of mapping SEC external identifiers onto an entity: the newly attached unique-id rows plus any that were already present.
 *
 * @openapiSchema SecIdentifierMapping
 * @endpoint POST /v1/sec/entities/{entityId}/identifiers
 * @contractShape sec.identifier-mapping
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/sec/SecIdentifierMapping.kt
 */
export const SecIdentifierMappingSchema = SecIdentifierMappingSchemaDefinition;
//# sourceMappingURL=identifier-mapping.js.map