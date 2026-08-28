// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Full read/storage source type for field-level provenance rows. Write query parameters use DatasourceWritableDataSourceType.
 *
 * @openapiSchema DatasourceDataSourceType
 * @endpoint GET /v1/provenance/history
 * @usedBySchema DatasourceProvenanceSourceSchema
 * @contractShape datasource.data-source-type
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/datasource/Provenance.kt
 */
export const DatasourceDataSourceTypeSchema = z.enum([
    "requestChangeForm",
    "newsArticle",
    "blogArticle",
    "firstPartyWebsite",
    "relatedPartyWebsite",
    "thirdPartyWebsite",
    "llm",
    "aventureStaff",
    "api",
    "manual",
    "import",
]);
//# sourceMappingURL=data-source-type.js.map