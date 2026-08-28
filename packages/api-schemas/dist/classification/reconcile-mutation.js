// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationReconcileEntitySchema } from "./reconcile-entity.js";
const ClassificationReconcileMutationSchemaDefinition = z.object({
    /** false (default) computes and returns the per-entity plan without writing; true applies each plan atomically. */
    apply: z.boolean().optional(),
    /** Entities to reconcile; each applied independently. */
    entity: z.array(ClassificationReconcileEntitySchema).min(1).max(100),
});
/**
 * Standardized classification reconcile request. Each entity row is applied in its own atomic transaction. apply=false (default) returns the computed plan without writing; apply=true deletes, patches, and creates joins to make the current set exactly equal the desired set, then verifies the final set before reporting success.
 *
 * @openapiSchema ClassificationReconcileMutation
 * @endpoint POST /v1/entities/classifications/reconcile
 * @contractShape classification.reconcile-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationReconcileMutationSchema = ClassificationReconcileMutationSchemaDefinition;
//# sourceMappingURL=reconcile-mutation.js.map