// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
import { StandardizedClassificationSchema } from "../standardized/classification.js";
const ClassificationAuditEntrySchemaDefinition = z.object({
    /** Hierarchical categories where this entity joins both an ancestor code and one of its descendants (after zero-padding to the taxonomy width, the ancestor's significant digits prefix the descendant's code). */
    ancestorChainCategory: z.array(z.string()),
    /** Canonical entity UUID. */
    entityId: z.uuid(),
    /** Deterministic hash of the current standardized join set; pass to reconcile as expectedHash. */
    expectedHash: z.string(),
    /** Current standardized classification joins. */
    join: z.array(StandardizedClassificationSchema),
    /** Standardized join count for the entity. */
    joinCount: z.int(),
    /** Categories holding more than one primary join on this entity. */
    multiplePrimaryCategory: z.array(z.string()),
    /** Entity brand name. */
    name: z.string().nullish(),
    /** Canonical public SSR detail route when this entity is visible and routable; null when hidden, invalidly slugged, or not served by a public detail route. */
    publicRoute: z.string().nullish(),
    /** Whether this entity is visible to public reads. */
    publicVisible: z.boolean(),
    /** Entity slug. */
    slug: z.string().nullish(),
    /** Entity typeRecord; null on the type-null completeness gap. */
    type: EntityTypeSchema.nullish(),
});
/**
 * One audited entity: its full standardized classification join set, deterministic findings, and the set hash reconcile uses as expectedHash.
 *
 * @openapiSchema ClassificationAuditEntry
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @usedBySchema ClassificationAuditSchema
 * @contractShape classification.audit-entry
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAudit.kt
 */
export const ClassificationAuditEntrySchema = ClassificationAuditEntrySchemaDefinition;
//# sourceMappingURL=audit-entry.js.map