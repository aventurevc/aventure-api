// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityTextMutationSchemaDefinition = z.object({
    /** Admin override for public entity text word limits; use only with explicit approval. */
    allowPublicEntityTextWordLimitOverride: z.boolean().nullish(),
    /** Allow intentional magnitude phrases without a currency marker ('100K customers') or intentional escape sequences before '$'; never use this to persist corrupted currency text — write '$' literally instead. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Current row. Create defaults to true; inactive rows are hidden from default lists. */
    isCurrent: z.boolean().nullish(),
    /** Primary row. Create defaults to true; inactive rows are not primary. */
    isPrimary: z.boolean().nullish(),
    /** Source note for the text row. */
    source: z.string().max(255).nullish(),
    /** Text body for the selected text type. Entity create requires both a summary row and an expanded row. Shape: summary is a single short sentence; expanded is split into paragraphs by one blank line ("\n\n" in JSON). Run GET /v1/entities/texts/types (CLI: entities texts types list --data) before writing to inspect each textType's minWords, maxWords, rewriteHint, and paragraphShape contract. Write '$' literally in currency amounts; escaped forms like '\$50M' are rejected as shell artifacts. */
    text: z.string().max(65536).nullish(),
    /** Optional name for this text row. */
    textName: z.string().max(255).nullish(),
    /** Canonical text slot to write, such as summary or expanded */
    textType: z.string().nullish(),
});
/**
 * Create or update one entity/person text row.
 *
 * @openapiSchema EntityTextMutation
 * @endpoint POST /v1/entities/{entityId}/texts
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/people/{personId}/texts
 * @endpoint PATCH /v1/entities/{entityId}/texts/{textId}
 * @endpoint PATCH /v1/people/{personId}/texts/{textId}
 * @endpoint PUT /v1/entities/{entityId}/texts/{textId}
 * @endpoint PUT /v1/people/{personId}/texts/{textId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.text-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/text/Text.kt
 */
export const EntityTextMutationSchema = EntityTextMutationSchemaDefinition;
//# sourceMappingURL=text-mutation.js.map