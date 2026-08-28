// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const PersonEntityAssociationMutationSchemaDefinition = z.object({
    /** Existing corporate title id */
    corporateTitleId: z.int().nullish(),
    /** Association creator label */
    creator: z.string().nullish(),
    /** Association end timestamp */
    endDate: z.iso.datetime({ offset: true }).nullish(),
    /** Entity id when the path does not scope the entity */
    entityId: z.uuid().nullish(),
    /** Current-state flag. When omitted, create and replace derive it from endDate for compatibility; PATCH preserves the existing value. Set false for a historical association without an end timestamp; true requires no end timestamp. */
    isCurrent: z.boolean().nullish(),
    /** Optional title level */
    jobLevel: z.string().nullish(),
    /** Optional title function */
    personFunction: z.string().nullish(),
    /** Person id when the path does not scope the person */
    personId: z.uuid().nullish(),
    /** Write-side corporate title text; read association rows expose it as titleName */
    personTitle: z.string().nullish(),
    /** Association start timestamp */
    startDate: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Mutation body for joining or updating a person-entity association.
 *
 * @openapiSchema PersonEntityAssociationMutation
 * @endpoint POST /v1/entities/{entityId}/people
 * @endpoint POST /v1/people/{personId}/entities
 * @endpoint PATCH /v1/entities/{entityId}/people/{associationId}
 * @endpoint PATCH /v1/people/{personId}/entities/{associationId}
 * @endpoint PUT /v1/entities/{entityId}/people/{associationId}
 * @endpoint PUT /v1/people/{personId}/entities/{associationId}
 * @contractShape person.entity-association-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entitypersonassociation/EntityPersonAssociation.kt
 */
export const PersonEntityAssociationMutationSchema = PersonEntityAssociationMutationSchemaDefinition;
//# sourceMappingURL=entity-association-mutation.js.map