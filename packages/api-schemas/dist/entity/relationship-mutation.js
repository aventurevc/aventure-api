// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityRelationshipMutationSchemaDefinition = z.object({
    /** Effective date for this relationship when known */
    asOf: z.iso.date().nullish(),
    /** Relationship-specific detail. Required for acceleratorParticipant as `batch=<label>`, or `program=<name>; batch=<label>` only when the program is a distinct sub-program (e.g. a Techstars track). The row already points to the accelerator entity, so program= must not repeat the accelerator name or the batch, and batch= must not contain the accelerator name; otherwise the write is rejected accelerator-detail-restates-target. */
    detail: z.string().nullish(),
    /** Current-state curation flag. CREATE and PUT default omitted values to true; PATCH preserves the existing value when omitted; false hides the row from default reads. */
    isCurrent: z.boolean().nullish(),
    /** Primary/renderable curation flag. CREATE and PUT default omitted values to true; PATCH preserves the existing value when omitted; false hides the row from default reads. */
    isPrimary: z.boolean().nullish(),
    /** General relationship type. Writable values: acceleratorParticipant, affinity, competingProductService, competitor, customer, fundManagerFirm, parent, productService, serviceProvider, similarCompany, spinOffFrom, successor. Use entities relationships types for policy flags; non-acquisition writes accept joinable=true values, while acquisition events must use the entity acquisitions endpoint with acquirerEntityId. */
    relationshipType: z.string(),
    /** Source URL or compact source label copied to the relationship row */
    source: z.string().nullish(),
    /** Source entity UUID. Non-acquisition PATCH/PUT writes may repoint this field in place. For type-oriented row writes this is the canonical source role: productService provider, fundManagerFirm fund, or acceleratorParticipant participant. For affinity this is the member organization. Move Product/Service provider ownership by repointing the productService row to the replacement provider; do not clear the current row. */
    sourceEntityId: z.uuid(),
    /** Target entity UUID. Non-acquisition PATCH/PUT writes may repoint this field in place. For acceleratorParticipant this is the accelerator entity and must have typeRecord=Investment Firm. For affinity this is the provider organization. */
    targetEntityId: z.uuid(),
});
/**
 * General non-acquisition relationship write payload. Acquisition relationships are rejected here and must use EntityAcquisitionMutation; parent relationships cannot coexist with acquisition rows for the same unordered entity pair. productService writes keep Product and Service records provider-scoped: do not delete or clear the current provider row unless another current provider row already exists; move the row to the new provider instead. Product/Service nameBrand must not exactly match the joined provider; use a descriptor/category such as Consumer Sedans or Light Industrial Vehicles for eponymous offerings without a distinct product-line brand. For affinity writes, sourceEntityId is the member organization and targetEntityId is the provider organization.
 *
 * @openapiSchema EntityRelationshipMutation
 * @endpoint POST /v1/entities/{entityId}/relationships
 * @endpoint PATCH /v1/entities/relationships/{relationshipId}
 * @contractShape entity.relationship-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityRelationship.kt
 */
export const EntityRelationshipMutationSchema = EntityRelationshipMutationSchemaDefinition;
//# sourceMappingURL=relationship-mutation.js.map