// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationJoinKeySchema } from "./join-key.js";
const ClassificationReconcileEntitySchemaDefinition = z.object({
    /** Exact desired standardized join set; an empty list deletes every standardized join on the entity. */
    desiredJoin: z.array(ClassificationJoinKeySchema).max(200),
    /** Canonical entity UUID. */
    entityId: z.uuid(),
    /** Standardized set hash the caller audited; compare-and-swap guard against concurrent writers. Obtain from the audit endpoint's expectedHash. */
    expectedHash: z.string().regex(/^[0-9a-f]{64}$/),
});
/**
 * Desired exact standardized classification join set for one entity. The server computes the delete/patch/create diff against the current set and applies it atomically. expectedHash must match the entity's current standardized set hash from the audit endpoint or the row is reported stale and left untouched.
 *
 * @openapiSchema ClassificationReconcileEntity
 * @endpoint POST /v1/entities/classifications/reconcile
 * @usedBySchema ClassificationReconcileMutationSchema
 * @contractShape classification.reconcile-entity
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationReconcile.kt
 */
export const ClassificationReconcileEntitySchema = ClassificationReconcileEntitySchemaDefinition;
//# sourceMappingURL=reconcile-entity.js.map