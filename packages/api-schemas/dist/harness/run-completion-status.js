// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Successful or user-requested terminal disposition
 *
 * @openapiSchema HarnessRunCompletionStatus
 * @endpoint POST /v1/harness/control-plane/runs/{runId}/complete
 * @usedBySchema HarnessRunCompletionSchema
 * @contractShape harness.run-completion-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/harness/HarnessRunProgress.kt
 */
export const HarnessRunCompletionStatusSchema = z.enum(["completed", "stopped"]);
//# sourceMappingURL=run-completion-status.js.map