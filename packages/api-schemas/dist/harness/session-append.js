// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessSessionEntrySchema } from "./session-entry.js";
const HarnessSessionAppendSchemaDefinition = z.object({
    /** Ordered session entries to append */
    entry: z.array(HarnessSessionEntrySchema),
    /** Sub-session subpath; empty string is the root session */
    subpath: z.string(),
});
/**
 * Append entries to a run's Claude session
 *
 * @openapiSchema HarnessSessionAppend
 * @endpoint POST /v1/harness/sessions/{sessionId}/entries
 * @contractShape harness.session-append
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessSession.kt
 */
export const HarnessSessionAppendSchema = HarnessSessionAppendSchemaDefinition;
//# sourceMappingURL=session-append.js.map