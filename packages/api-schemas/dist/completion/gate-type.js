// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { CompletionGateIndexSchema } from "./gate-index.js";
const CompletionGateTypeSchemaDefinition = z.object({
    /** Entity type tokens the gate applies to; empty means all types. */
    appliesToType: z.array(z.string()),
    /** Whether the gate is part of the mandatory full-enrichment floor set. */
    floor: z.boolean(),
    /** Canonical dotted completion gate id. */
    gateId: z.string(),
    /** Parent row the gate instantiates against. NONE is the flat entity-level gate; any other value owes one coverage slot per existing parent row and is never part of the flat floor set. */
    indexed: CompletionGateIndexSchema,
    /** Human-readable gate name. */
    label: z.string(),
    /** Minimum row count when the gate requires multiple rows. */
    minCount: z.int().nullish(),
    /** OpenAPI operationId of the canonical read that proves the gate. */
    owningRead: z.string(),
    /** What makes the gate pass. */
    passCriteria: z.string(),
    /** Dotted EntityDetail field path the gate reads. */
    slotRef: z.string(),
    /** Whether a source-backed unobtainable closes the gate. */
    unobtainableAllowed: z.boolean(),
});
/**
 * Canonical completion gate definition: what an enrichment run must satisfy, which read proves it, and whether it is part of the mandatory floor.
 *
 * @openapiSchema CompletionGateType
 * @endpoint GET /v1/entities/research/completion/gates
 * @contractShape completion.gate-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/completion/CompletionGateType.kt
 */
export const CompletionGateTypeSchema = CompletionGateTypeSchemaDefinition;
//# sourceMappingURL=gate-type.js.map