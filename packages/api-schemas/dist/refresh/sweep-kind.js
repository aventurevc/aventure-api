// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * User-triggerable refresh sweep modes for the /refresh/sweep `kind` query param
 *
 * @openapiSchema RefreshSweepKind
 * @endpoint POST /v1/content/embedding/refresh/sweep
 * @contractShape refresh.sweep-kind
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/content/RefreshSweepKind.kt
 */
export const RefreshSweepKindSchema = z.enum([
    "owner-reconcile",
    "stale-embedding",
    "stale-similarity",
]);
//# sourceMappingURL=sweep-kind.js.map