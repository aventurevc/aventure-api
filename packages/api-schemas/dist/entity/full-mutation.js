// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityAddressMutationSchema } from "./address-mutation.js";
import { EntityClassificationMutationSchema } from "./classification-mutation.js";
import { EntityCreateSchema } from "./create.js";
import { EntityManualLogoSchema } from "./manual-logo.js";
import { EntityResearchDetailMutationSchema } from "./research-detail-mutation.js";
import { EntityTextMutationSchema } from "./text-mutation.js";
/**
 * Multipart JSON body for full entity create. Supply base entity fields, required summary and expanded texts, URL links, and optional classifications, addresses, research details, product/service provider join, or manual logo.
 *
 * @openapiSchema EntityFullMutation
 * @endpoint POST /v1/entities/detail/full
 * @contractShape entity.full-mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityFullMutation.kt
 */
export const EntityFullMutationSchema = z.object({
    /** Address rows created with the entity. Provide this as a top-level array on the full-create body alongside text, not nested under create.entity. Company-class entities need one current HQ address row (isHq=true); products and services may omit addresses. */
    address: z.array(EntityAddressMutationSchema).nullish(),
    /** Classification joins created with the entity. */
    classification: z.array(EntityClassificationMutationSchema).nullish(),
    /** Base entity fields. */
    create: EntityCreateSchema,
    /** Manual logo URL to import or attach; local files use multipart --logo. */
    manualLogo: EntityManualLogoSchema.nullish(),
    /** Existing provider entity UUID for Product or Service creates. Required when create.entity.typeRecord is Product or Service; the server creates the current productService relationship in the same transaction. The Product/Service nameBrand must not exactly match this provider. If an eponymous offering is correct and has no distinct product-line brand, use a descriptor/category such as Consumer Sedans or Light Industrial Vehicles instead of duplicating the provider name. */
    productServiceProviderId: z.uuid().nullish(),
    /** Optional research detail rows to create in the same transaction */
    researchDetail: z.array(EntityResearchDetailMutationSchema).nullish(),
    /** Text rows created with the entity. Include summary and expanded rows; optional rows may add generated or source text. */
    text: z.array(EntityTextMutationSchema),
});
//# sourceMappingURL=full-mutation.js.map