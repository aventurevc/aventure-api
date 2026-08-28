// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ClassificationAuditEntrySchema } from "./audit-entry.js";
const ClassificationAuditSchemaDefinition = z.object({
    /** Opaque continuation cursor; null on the last page. */
    nextCursor: z.string().nullish(),
    /** Audited entities in entityId order. */
    row: z.array(ClassificationAuditEntrySchema),
    /** Frozen snapshot total for fleet audits; keyset pages report page size. */
    total: z.int(),
});
/**
 * Standardized classification audit page. Continue with the nextCursor value until it is null.
 *
 * @openapiSchema ClassificationAudit
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @contractShape classification.audit
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAudit.kt
 */
export const ClassificationAuditSchema = ClassificationAuditSchemaDefinition;
//# sourceMappingURL=audit.js.map