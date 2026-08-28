// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const ClassificationJoinKeySchemaDefinition = z.object({
    /** Primary join within the classification's category; default false. */
    isPrimary: z.boolean().optional(),
    /** Standardized classification registry id from res_classification_ref. */
    standardizedClassificationId: z.int(),
});
/**
 * One desired standardized classification join for an entity: the res_classification_ref registry id plus the primary flag inside that classification's category.
 *
 * @openapiSchema ClassificationJoinKey
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileEntitySchema
 * @usedBySchema ClassificationReconcilePlanSchema
 * @contractShape classification.join-key
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationJoinKeySchema = ClassificationJoinKeySchemaDefinition;
//# sourceMappingURL=join-key.js.map