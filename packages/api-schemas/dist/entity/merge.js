// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DeleteModeSchema } from "../delete/mode.js";
import { EntityMutationSchema } from "./mutation.js";
const EntityMergeSchemaDefinition = z.object({
    /** Create permanent redirects from the loser's public URL shapes to the survivor's canonical public URL. */
    createSlugRedirect: z.boolean(),
    /** How to remove the loser after relationships move; default is hard. */
    deleteMode: DeleteModeSchema,
    /** Number of child-table rows updated or deleted while consolidating the loser into the survivor (server stamped). */
    foreignKeyRowsRepointed: z.int().nullish(),
    /** Duplicate entity removed after relationships move. */
    loserId: z.uuid(),
    /** Public URL of the loser before deletion (server stamped). */
    loserUrl: z.string().nullish(),
    /** First redirect row id created during merge, when [createSlugRedirect] is true. */
    slugRedirectId: z.int().nullish(),
    /** Optional survivor field updates applied during merge. */
    survivor: EntityMutationSchema.nullish(),
    /** Entity that remains after merge. */
    survivorId: z.uuid(),
    /** Public URL of the survivor (server stamped). */
    survivorUrl: z.string().nullish(),
});
/**
 * Merge two duplicate entities into one survivor. Known duplicate fundraise and same-month latest-valuation collisions are handled before foreign-key repointing.
 *
 * @openapiSchema EntityMerge
 * @endpoint POST /v1/entities/merge
 * @contractShape entity.merge
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityMerge.kt
 */
export const EntityMergeSchema = EntityMergeSchemaDefinition;
//# sourceMappingURL=merge.js.map