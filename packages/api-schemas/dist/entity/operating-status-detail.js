// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityOperatingStatusSchema } from "./operating-status.js";
const EntityOperatingStatusDetailSchemaDefinition = z.object({
    /** Current operating status; null when no status has been assigned. */
    operatingStatus: EntityOperatingStatusSchema.nullish(),
});
/**
 * Current operating status for one entity.
 *
 * @openapiSchema EntityOperatingStatusDetail
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @contractShape entity.operating-status-detail
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityOperatingStatus.kt
 */
export const EntityOperatingStatusDetailSchema = EntityOperatingStatusDetailSchemaDefinition;
//# sourceMappingURL=operating-status-detail.js.map