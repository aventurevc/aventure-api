// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const EntityAcquisitionMutationSchemaDefinition = z.object({
    /** Buyer/acquirer entity id. Must differ from the acquired entityId path segment. */
    acquirerEntityId: z.uuid().nullish(),
    /** Acquisition amount in currency units (full units, not minor); requires currency when supplied. */
    amount: z.number().int().nullish(),
    /** Announced acquisition date as an ISO offset date-time, date, year-month, or year. Coarse values normalize to the UTC period start; original precision is not persisted. */
    announcedAt: z
        .string()
        .regex(/^(?:\d{4}|\d{4}-(?:0[1-9]|1[0-2])|(?:\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:[02468][048]|[13579][26])00|\d{2}(?:0[48]|[2468][048]|[13579][26]))-02-29)|(?:\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:[02468][048]|[13579][26])00|\d{2}(?:0[48]|[2468][048]|[13579][26]))-02-29)T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,9})?)?(?:Z|[+-](?:(?:0\d|1[0-7]):[0-5]\d|18:00)))$/)
        .nullish(),
    /** Effective date when announcedAt and completedAt are absent */
    asOf: z.iso.date().nullish(),
    /** Completed acquisition date as an ISO offset date-time, date, year-month, or year. Coarse values normalize to the UTC period start; original precision is not persisted. */
    completedAt: z
        .string()
        .regex(/^(?:\d{4}|\d{4}-(?:0[1-9]|1[0-2])|(?:\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:[02468][048]|[13579][26])00|\d{2}(?:0[48]|[2468][048]|[13579][26]))-02-29)|(?:\d{4}-(?:(?:0[13578]|1[02])-(?:0[1-9]|[12]\d|3[01])|(?:0[469]|11)-(?:0[1-9]|[12]\d|30)|02-(?:0[1-9]|1\d|2[0-8]))|(?:(?:[02468][048]|[13579][26])00|\d{2}(?:0[48]|[2468][048]|[13579][26]))-02-29)T(?:[01]\d|2[0-3]):[0-5]\d(?::[0-5]\d(?:\.\d{1,9})?)?(?:Z|[+-](?:(?:0\d|1[0-7]):[0-5]\d|18:00)))$/)
        .nullish(),
    /** Creator label */
    creator: z.string().nullish(),
    /** ISO 4217 currency code */
    currency: z.string().nullish(),
    /** Data confidence level */
    dataConfidence: z.string().nullish(),
    /** Source URL or compact source label copied to the relationship row */
    source: z.string().nullish(),
    /** Transaction status */
    transactionStatus: z.string().nullish(),
});
/**
 * Canonical acquisition write payload. Use with the entity acquisitions endpoint where the path entityId is the acquired company and acquirerEntityId is the buyer.
 *
 * @openapiSchema EntityAcquisitionMutation
 * @endpoint POST /v1/entities/{entityId}/acquisitions
 * @endpoint PATCH /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @endpoint PUT /v1/entities/{entityId}/acquisitions/{relationshipId}
 * @contractShape entity.acquisition-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityAcquisition.kt
 */
export const EntityAcquisitionMutationSchema = EntityAcquisitionMutationSchemaDefinition;
//# sourceMappingURL=acquisition-mutation.js.map