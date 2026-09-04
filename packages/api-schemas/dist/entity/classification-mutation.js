// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityClassificationInactiveTagOverrideSchema } from "./classification-inactive-tag-override.js";
const EntityClassificationMutationSchemaDefinition = z.object({
    /** Dormant-value handling when type plus name matches an inactive catalog row. Omitted reactivates the dormant value by default (it becomes current and the write returns a Warning header naming the reactivated tag). Set ATTACH_INACTIVE to attach the dormant value without reactivating it. */
    inactiveTagOverride: EntityClassificationInactiveTagOverrideSchema.nullish(),
    /** Current join row. Create and replace default to true when omitted. */
    isCurrent: z.boolean().nullish(),
    /** Primary tag within its bucket. Create and replace default to false when omitted. */
    isPrimary: z.boolean().nullish(),
    /** Source-backed classification value; requires type and is mutually exclusive with tagId and standardizedClassificationId. */
    name: z.string().max(40).nullish(),
    /** Existing standardized classification id from res_classification_ref. Mutually exclusive with tagId and with the type+name pair. */
    standardizedClassificationId: z.int().nullish(),
    /** Existing active classification tag id. Mutually exclusive with type and name (and with standardizedClassificationId): provide either tagId alone or the type+name pair, never both. */
    tagId: z.int().nullish(),
    /** Writable classification bucket; requires name and is mutually exclusive with tagId and standardizedClassificationId. */
    type: z.string().nullish(),
});
/**
 * Create or update an entity classification. Use tagId for an existing tag, standardizedClassificationId for an existing standardized classification, or type and name for a creatable editorial value.
 *
 * @openapiSchema EntityClassificationMutation
 * @endpoint POST /v1/entities/{entityId}/classifications
 * @endpoint POST /v1/entities/detail/full
 * @endpoint PATCH /v1/entities/{entityId}/classifications/{classificationId}
 * @endpoint PUT /v1/entities/{entityId}/classifications/{classificationId}
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.classification-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/classification/EntityClassification.kt
 */
export const EntityClassificationMutationSchema = EntityClassificationMutationSchemaDefinition;
//# sourceMappingURL=classification-mutation.js.map