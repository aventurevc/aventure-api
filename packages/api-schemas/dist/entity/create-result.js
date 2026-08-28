// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityCreateLogoSchema } from "./create-logo.js";
import { EntityDetailSchema } from "./detail.js";
const EntityCreateResultSchemaDefinition = z.object({
    /** Persisted entity detail after create, including the canonical id, slug, status, text, classification, URL, and relationship sections returned by the write. */
    entity: EntityDetailSchema,
    /** Logo import details requiring agent audit when present */
    importedLogo: EntityCreateLogoSchema.nullish(),
});
/**
 * Entity create confirmation. `entity` is the persisted detail returned by the write and is the identity proof for the created row. New entities normally remain hidden from public list/detail reads until visibility promotion. `importedLogo` is present only when the create attached a logo. Manual logo failures reject the create; automatic website-logo import is opportunistic and may be absent so Phase 1 identity creation can succeed.
 *
 * @openapiSchema EntityCreateResult
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @contractShape entity.create-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityCreateResult.kt
 */
export const EntityCreateResultSchema = EntityCreateResultSchemaDefinition;
//# sourceMappingURL=create-result.js.map