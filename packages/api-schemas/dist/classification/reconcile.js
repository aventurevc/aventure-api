// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationReconcileOutcomeSchema } from "./reconcile-outcome.js";
const ClassificationReconcileSchemaDefinition = z.object({
    /** true when apply=true executed writes; false for plan-only responses. */
    applied: z.boolean(),
    /** Rows rejected or rolled back. */
    failed: z.array(ClassificationReconcileOutcomeSchema),
    /** Rows whose expectedHash no longer matches; resultHash is current. */
    stale: z.array(ClassificationReconcileOutcomeSchema),
    /** Rows planned or applied successfully. */
    succeeded: z.array(ClassificationReconcileOutcomeSchema),
});
/**
 * Reconcile result. stale rows failed the expectedHash compare-and-swap and were left untouched; failed rows hit a validation or verification error and were rolled back.
 *
 * @openapiSchema ClassificationReconcile
 * @endpoint POST /v1/entities/classifications/reconcile
 * @contractShape classification.reconcile
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationReconcileSchema = ClassificationReconcileSchemaDefinition;
//# sourceMappingURL=reconcile.js.map