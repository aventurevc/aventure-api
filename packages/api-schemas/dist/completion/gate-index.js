// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Parent row an indexed completion gate instantiates against. NONE is the flat entity-level gate that owes exactly one coverage slot; any other value owes one slot per existing row of that kind. Indexed slots are conditional on their parent rows; a server-decidable indexed slot may still be required once instantiated.
 *
 * @openapiSchema CompletionGateIndex
 * @endpoint GET /v1/entities/research/completion/gates
 * @usedBySchema CompletionGateTypeSchema
 * @contractShape completion.gate-index
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/completion/CompletionGateIndex.kt
 */
export const CompletionGateIndexSchema = z.enum(["NONE", "PERSON", "PRODUCT_SERVICE"]);
//# sourceMappingURL=gate-index.js.map