// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityMutationSchema } from "./mutation.js";
import { EntityUrlLinkMutationSchema } from "./url-link-mutation.js";
const EntityCreateSchemaDefinition = z.object({
    /** Base entity mutation to create */
    entity: EntityMutationSchema,
    /** Initial URL links. Required except for eponymous Product/Service creates when research finds no distinct official page URL that describes the product/service. */
    urlLink: z.array(EntityUrlLinkMutationSchema).optional(),
});
/**
 * Canonical request body for creating a new entity. Carries the entity payload plus its URL set; duplicate detection runs server-side and returns a conflict envelope when potential matches exist. Override review gates with GateOverride query parameters after reviewing 409 ProblemDetail.details.candidate from the original create conflict.
 *
 * @openapiSchema EntityCreate
 * @endpoint POST /v1/entities/detail/full
 * @usedBySchema EntityFullMutationSchema
 * @contractShape entity.create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreate.kt
 */
export const EntityCreateSchema = EntityCreateSchemaDefinition;
//# sourceMappingURL=create.js.map