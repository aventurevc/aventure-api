// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityTextRefreshSweepRunSchemaDefinition = z.object({
    /** Caller correlation ID stored with the app-job run. */
    correlationId: z.string().max(128).nullish(),
    /** Maximum entities to enqueue in this run. */
    limit: z.int().nullish(),
    /** Select entities holding a current text shorter than this many words. Omit to use the configured default word floor. */
    maxWordCount: z.int().nullish(),
    /** Select entities whose matching current text has not been updated on or after this date. Omit to ignore text age. */
    notUpdatedSince: z.iso.date().nullish(),
    /** Restrict selection to one entity text type. Omit to consider every writable entity text type, selecting an entity when any one of them matches. */
    textType: z.string().nullish(),
});
/**
 * Manual entity-text-refresh-sweep app-job payload. Supplied criteria narrow the selection together; omitted criteria fall back to the configured defaults.
 *
 * @openapiSchema EntityTextRefreshSweepRun
 * @endpoint POST /v1/jobs/entity-text-refresh-sweep/runs
 * @contractShape entity.text-refresh-sweep-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/job/text/EntityTextRefreshSweep.kt
 */
export const EntityTextRefreshSweepRunSchema = EntityTextRefreshSweepRunSchemaDefinition;
//# sourceMappingURL=text-refresh-sweep-run.js.map