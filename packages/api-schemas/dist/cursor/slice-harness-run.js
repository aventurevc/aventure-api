// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunSchema } from "../harness/run.js";
const CursorSliceHarnessRunSchemaDefinition = z.object({
    content: z.array(HarnessRunSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceHarnessRun
 * @endpoint GET /v1/harness/control-plane/runs/usage-recovery-candidates
 * @contractShape cursor.slice-harness-run
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/CursorPage.kt
 */
export const CursorSliceHarnessRunSchema = CursorSliceHarnessRunSchemaDefinition;
//# sourceMappingURL=slice-harness-run.js.map