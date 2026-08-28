// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityUrlLinkMutationSchema } from "../entity/url-link-mutation.js";
import { PersonMutationSchema } from "./mutation.js";
const PersonCreateSchemaDefinition = z.object({
    /** Person fields to create. */
    person: PersonMutationSchema,
    /** URL links to create with the person; at least one is required */
    urlLink: z.array(EntityUrlLinkMutationSchema),
});
/**
 * Person create envelope. urlLink must include at least one current URL.
 *
 * @openapiSchema PersonCreate
 * @endpoint POST /v1/people/detail
 * @contractShape person.create
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonCreate.kt
 */
export const PersonCreateSchema = PersonCreateSchemaDefinition;
//# sourceMappingURL=create.js.map