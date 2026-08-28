// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityTypeSchema } from "./type.js";
const EntityTypeCountSchemaDefinition = z.object({
    /** Total visible entities of this type */
    totalCount: z.number().int().min(0),
    /** Entity type classification */
    typeRecord: EntityTypeSchema,
});
/**
 * Visible entity count for one EntityType.
 *
 * @openapiSchema EntityTypeCount
 * @endpoint GET /v1/entities/counts
 * @contractShape entity.type-count
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/identity/EntityTypeCount.kt
 */
export const EntityTypeCountSchema = EntityTypeCountSchemaDefinition;
//# sourceMappingURL=type-count.js.map