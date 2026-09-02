// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { FrontendCachePartitionEpochSchema } from "./frontend-cache-partition-epoch.js";
const FrontendCacheEpochSchemaDefinition = z.object({
    epochs: FrontendCachePartitionEpochSchema,
});
/**
 * @openapiSchema FrontendCacheEpoch
 * @endpoint GET /internal/frontend-cache/epoch
 * @contractShape system.frontend-cache-epoch
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/cache/FrontendCacheEpoch.kt
 */
export const FrontendCacheEpochSchema = FrontendCacheEpochSchemaDefinition;
//# sourceMappingURL=frontend-cache-epoch.js.map