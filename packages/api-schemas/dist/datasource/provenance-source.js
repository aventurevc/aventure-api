// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { DatasourceDataSourceTypeSchema } from "./data-source-type.js";
import { DatasourceProvenanceActorTypeSchema } from "./provenance-actor-type.js";
/**
 * Write provenance supplied on mutation query parameters.
 *
 * @openapiSchema DatasourceProvenanceSource
 * @endpoint GET /v1/entities
 * @endpoint GET /v1/entities/detail
 * @endpoint GET /v1/entities/detail/investors
 * @endpoint GET /v1/entities/detail/similar
 * @endpoint GET /v1/provenance/history
 * @endpoint GET /v1/search/link
 * @endpoint GET /v1/entities/{entityId}/products/suggestions
 * @endpoint GET /v1/entities/{entityId}/relationships/suggestions
 * @endpoint GET /v1/entities/{entityId}/research
 * @endpoint GET /v1/entities/{entityId}/research/details
 * @endpoint GET /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint GET /v1/entities/{entityId}/research/snippets
 * @endpoint GET /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint POST /v1/entities
 * @endpoint POST /v1/entities/{entityId}/research/details
 * @endpoint POST /v1/entities/{entityId}/research/snippets
 * @endpoint POST /v1/entities/batch
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/batch
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/detail/resolve
 * @endpoint POST /v1/entities/natural-search
 * @endpoint POST /v1/search/all
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint PUT /v1/entities/{entityId}/research/snippets/{snippetId}
 * @endpoint PUT /v1/entities/detail
 * @endpoint DELETE /v1/entities/{entityId}/research/details/{detailId}
 * @endpoint DELETE /v1/entities/{entityId}/research/snippets/{snippetId}
 * @usedBySchema DatasourceFieldProvenanceSchema
 * @usedBySchema EntityResearchSourceSchema
 * @contractShape datasource.provenance-source
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/ProvenanceSource.kt
 */
export const DatasourceProvenanceSourceSchema = z.object({
    /** Actor type; inferred as agent when agentChassis and agentModel are supplied, or as employee from an authenticated user JWT session. */
    actorType: DatasourceProvenanceActorTypeSchema.optional(),
    /** Agent chassis token for agent-authored writes. */
    agentChassis: z.string().nullish(),
    /** Agent model id for agent-authored writes. */
    agentModel: z.string().nullish(),
    /** Source detail or reviewer reference for the write. */
    sourceDetail: z.string(),
    /** Provider name for provider-native IDs or slugs. */
    sourceProvider: z.string().nullish(),
    /** Provider-native source ID. */
    sourceProviderId: z.string().nullish(),
    /** Provider-native source slug. */
    sourceProviderSlug: z.string().nullish(),
    /** Write provenance source type. */
    sourceType: DatasourceDataSourceTypeSchema,
});
//# sourceMappingURL=provenance-source.js.map