// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "../entity/type.js";
const ClassificationAuditFilterSchemaDefinition = z.object({
    /** Only entities holding both an ancestor and its descendant code inside one hierarchical standardized category (ISIC, NAICS, SIC); descendant means the ancestor code digits are a strict prefix of the descendant code digits. */
    ancestorChain: z.boolean().optional(),
    /** Restrict to entities holding at least one join in this standardized category; matched rows still report the entity's full standardized join set. */
    category: z.string().nullish(),
    /** Privileged read scope for admin callers. Includes hidden and not-yet-published entities. Defaults to private visibility for admin API key or ROLE_ADMIN callers; client-secret callers stay public. */
    includePrivate: z.boolean().nullish(),
    /** Only entities with at least this many standardized joins; when omitted, entities with zero joins remain in the fleet audit. */
    minCount: z.int().min(1).nullish(),
    /** Only entities holding more than one primary join inside a single standardized category. */
    multiplePrimary: z.boolean().optional(),
    /** Restrict to entities with this typeRecord, e.g. Company. */
    type: EntityTypeSchema.nullish(),
});
/**
 * Filters for the standardized classification audit. Omit every field to page the full visible entity fleet, including entities with no standardized joins.
 *
 * @openapiSchema ClassificationAuditFilter
 * @endpoint POST /v1/entities/classifications/audit
 * @endpoint POST /v1/entities/classifications/audit/fleet
 * @contractShape classification.audit-filter
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/ClassificationAuditFilter.kt
 */
export const ClassificationAuditFilterSchema = ClassificationAuditFilterSchemaDefinition;
//# sourceMappingURL=audit-filter.js.map