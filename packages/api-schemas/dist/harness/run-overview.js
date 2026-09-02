// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const HarnessRunOverviewSchemaDefinition = z.object({
    /** Number of completed runs */
    completed: z.int(),
    /** Number of failed runs requiring attention */
    failed: z.int(),
    /** Number of runs waiting in queue */
    queued: z.int(),
    /** Number of runs currently executing */
    running: z.int(),
    /** Number of manually stopped runs */
    stopped: z.int(),
    /** Total runs across every status */
    total: z.int(),
});
/**
 * Harness run ledger status counts
 *
 * @openapiSchema HarnessRunOverview
 * @endpoint GET /v1/harness/control-plane/runs/overview
 * @contractShape harness.run-overview
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunOverview.kt
 */
export const HarnessRunOverviewSchema = HarnessRunOverviewSchemaDefinition;
//# sourceMappingURL=run-overview.js.map