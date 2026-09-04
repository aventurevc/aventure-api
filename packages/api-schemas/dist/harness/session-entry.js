// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessSessionEntrySchemaDefinition = z.object({
    /** Opaque harness session entry as a JSON string */
    entry: z.string(),
    /** Entry UUID for de-duplication; entries without one are never deduped */
    entryUuid: z.uuid().nullish(),
});
/**
 * One opaque harness session entry to append
 *
 * @openapiSchema HarnessSessionEntryInput
 * @endpoint POST /v1/harness/sessions/{sessionId}/entries
 * @usedBySchema HarnessSessionAppendSchema
 * @contractShape harness.session-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessSession.kt
 */
export const HarnessSessionEntrySchema = HarnessSessionEntrySchemaDefinition;
//# sourceMappingURL=session-entry.js.map