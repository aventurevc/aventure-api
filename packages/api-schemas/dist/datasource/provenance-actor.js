// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceAgentIdentitySchema } from "./agent-identity.js";
import { DatasourceProvenanceActorTypeSchema } from "./provenance-actor-type.js";
/**
 * Authenticated actor that authored a provenance write event
 *
 * @openapiSchema DatasourceProvenanceActor
 * @endpoint GET /v1/provenance/history
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @contractShape datasource.provenance-actor
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export const DatasourceProvenanceActorSchema = z.object({
    agent: DatasourceAgentIdentitySchema.nullish(),
    displayName: z.string(),
    employeeDisplayName: z.string().nullish(),
    employeeUserId: z.string().nullish(),
    type: DatasourceProvenanceActorTypeSchema,
});
//# sourceMappingURL=provenance-actor.js.map