// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { HarnessRunDetailSchema } from "../harness/run-detail.js";
const CursorSliceHarnessRunDetailSchemaDefinition = z.object({
    content: z.array(HarnessRunDetailSchema),
    nextCursor: z.string().nullish(),
});
/**
 * @openapiSchema CursorSliceHarnessRunDetail
 * @endpoint GET /v1/harness/runs
 * @contractShape cursor.slice-harness-run-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/pagination/CursorPage.kt
 */
export const CursorSliceHarnessRunDetailSchema = CursorSliceHarnessRunDetailSchemaDefinition;
//# sourceMappingURL=slice-harness-run-detail.js.map