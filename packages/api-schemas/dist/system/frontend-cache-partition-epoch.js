// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const FrontendCachePartitionEpochSchemaDefinition = z.object({
    blog: z.string(),
    entity: z.string(),
    news: z.string(),
    person: z.string(),
});
/**
 * @openapiSchema FrontendCachePartitionEpoch
 * @endpoint GET /internal/frontend-cache/epoch
 * @usedBySchema FrontendCacheEpochSchema
 * @contractShape system.frontend-cache-partition-epoch
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/system/cache/FrontendCacheEpoch.kt
 */
export const FrontendCachePartitionEpochSchema = FrontendCachePartitionEpochSchemaDefinition;
//# sourceMappingURL=frontend-cache-partition-epoch.js.map