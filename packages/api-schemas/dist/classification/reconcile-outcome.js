// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationReconcilePlanSchema } from "./reconcile-plan.js";
const ClassificationReconcileOutcomeSchemaDefinition = z.object({
    /** Canonical entity UUID. */
    entityId: z.uuid(),
    /** Failure or staleness detail; null on success. */
    message: z.string().nullish(),
    /** Computed diff; null on stale rows and pre-diff validation failures. */
    plan: ClassificationReconcilePlanSchema.nullish(),
    /** Standardized set hash after applying the diff; on a plan this is the hash the desired set will produce; on a stale row this is the current set hash. */
    resultHash: z.string().nullish(),
    /** true when the post-apply set exactly equals the desired set; always false on plans, stale rows, and failures. */
    verified: z.boolean(),
});
/**
 * Per-entity reconcile outcome: the computed (plan) or applied diff, the resulting set hash, and exact-set verification state.
 *
 * @openapiSchema ClassificationReconcileOutcome
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileSchema
 * @contractShape classification.reconcile-outcome
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationReconcileOutcomeSchema = ClassificationReconcileOutcomeSchemaDefinition;
//# sourceMappingURL=reconcile-outcome.js.map