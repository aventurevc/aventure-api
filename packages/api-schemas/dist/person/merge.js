// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeleteModeSchema } from "../delete/mode.js";
import { PersonMutationSchema } from "./mutation.js";
const PersonMergeSchemaDefinition = z.object({
    /** Create a permanent slug redirect from the loser's public URL to the survivor's URL before the loser is deleted. Default true. Set false only when no public link to the loser slug needs to be preserved. */
    createSlugRedirect: z.boolean(),
    /** How to remove the loser after foreign keys are repointed. Defaults to hard delete; merge specifically intends to eliminate the loser record. */
    deleteMode: DeleteModeSchema,
    /** Number of foreign-key rows repointed across all child tables (server stamped). */
    foreignKeyRowsRepointed: z.int().nullish(),
    /** Person whose foreign keys move to [survivorId] and which is then deleted. */
    loserId: z.uuid(),
    /** Public URL of the loser before deletion (server stamped). */
    loserUrl: z.string().nullish(),
    /** Redirect row id created during merge, when [createSlugRedirect] is true. */
    slugRedirectId: z.int().nullish(),
    /** Optional partial survivor write applied after foreign keys are repointed. Sent fields overwrite the survivor's current values; omit a field to leave it unchanged. Explicit null is NOT honored here (use `PATCH /v1/people/detail` for null-clearing). Use to copy a chosen field from the loser onto the survivor before the loser disappears. */
    survivor: PersonMutationSchema.nullish(),
    /** Person that keeps its id and absorbs the loser's relationships. */
    survivorId: z.uuid(),
    /** Public URL of the survivor (server stamped). */
    survivorUrl: z.string().nullish(),
});
/**
 * Atomic two-person merge action
 *
 * @openapiSchema PersonMerge
 * @endpoint POST /v1/people/merge
 * @contractShape person.merge
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/person/PersonMerge.kt
 */
export const PersonMergeSchema = PersonMergeSchemaDefinition;
//# sourceMappingURL=merge.js.map