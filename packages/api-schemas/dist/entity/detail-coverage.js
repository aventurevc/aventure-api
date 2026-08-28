// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityDetailCoverageSlotSchema } from "./detail-coverage-slot.js";
const EntityDetailCoverageSchemaDefinition = z.object({
    /** Canonical entity UUID this coverage describes. */
    entityId: z.uuid(),
    /** One coverage row per evaluated gate: flat entity-level gates, plus one indexed row per associated person or Product/Service child for gates that repeat by parent. */
    slot: z.array(EntityDetailCoverageSlotSchema),
});
/**
 * Per-entity completion-gate coverage: for each evaluated gate, whether the assembled entity detail already satisfies it and how to obtain it when it does not.
 *
 * @openapiSchema EntityDetailCoverage
 * @endpoint GET /v1/entities/{entityId}/detail/coverage
 * @contractShape entity.detail-coverage
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityDetailCoverage.kt
 */
export const EntityDetailCoverageSchema = EntityDetailCoverageSchemaDefinition;
//# sourceMappingURL=detail-coverage.js.map