// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Operating state accepted by entity mutation endpoints. Acquired Subsidiary means the entity was acquired and still operates; Closed (Acquihire) means the entity was acquired for its team and is terminal, rendering like Closed everywhere; Acquired means the entity is terminal, folded into the buyer, or closed.
 *
 * @openapiSchema EntityOperatingStatus
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @endpoint GET /v1/entities/{entityId}/operating-status/signal
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityMutationSchema
 * @usedBySchema EntityOperatingStatusDetailSchema
 * @usedBySchema EntityOperatingStatusSignalSchema
 * @contractShape entity.operating-status
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatus.kt
 */
export const EntityOperatingStatusSchema = z.enum([
    "Operating",
    "Acquired",
    "Acquired Subsidiary",
    "Closed",
    "Closed (Acquihire)",
    "Inactive",
]);
//# sourceMappingURL=operating-status.js.map