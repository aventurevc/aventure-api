// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationJoinKeySchema } from "./join-key.js";
/**
 * Server-computed diff from the entity's current standardized join set to the desired set: joins to delete, primary flags to patch, and joins to create.
 *
 * @openapiSchema ClassificationReconcilePlan
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileOutcomeSchema
 * @contractShape classification.reconcile-plan
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationReconcilePlanSchema = z.object({
    /** Joins added to the entity. */
    create: z.array(ClassificationJoinKeySchema),
    /** Registry ids whose joins are removed from the entity. */
    delete: z.array(z.int()),
    /** Joins whose primary flag changes. */
    patch: z.array(ClassificationJoinKeySchema),
});
//# sourceMappingURL=reconcile-plan.js.map