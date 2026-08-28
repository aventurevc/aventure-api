// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const UniqueIdMutationSchemaDefinition = z.object({
    /** Identifier value as issued by the registry. */
    identifier: z.string().nullish(),
    /** Identifier type token, for example ein, secCik, or ticker. */
    idType: z.string().nullish(),
    /** Optional attribution source label for the mapping. */
    source: z.string().nullish(),
});
/**
 * Create payload for attaching an external identifier to an owner.
 *
 * @openapiSchema UniqueIdMutation
 * @endpoint POST /v1/entities/{entityId}/unique-ids
 * @endpoint POST /v1/people/{personId}/unique-ids
 * @contractShape unique.id-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/uniqueid/UniqueIdMutation.kt
 */
export const UniqueIdMutationSchema = UniqueIdMutationSchemaDefinition;
//# sourceMappingURL=id-mutation.js.map