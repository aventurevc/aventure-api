// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityNameAliasEntityAliasTypeSchema } from "./name-alias-entity-alias-type.js";
import { EntityOperatingStatusSchema } from "./operating-status.js";
import { EntityStatusMutationSchema } from "./status-mutation.js";
/**
 * Create or update core entity fields: names, slug, type, operating status, visibility, currency, founding year, and aliases.
 *
 * @openapiSchema EntityMutation
 * @endpoint GET /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/{entityId}/operating-status
 * @endpoint POST /v1/entities/detail
 * @endpoint POST /v1/entities/detail/full
 * @endpoint POST /v1/entities/merge
 * @endpoint PATCH /v1/entities/{entityId}/operating-status
 * @endpoint PATCH /v1/entities/{entityId}/type-record
 * @endpoint PATCH /v1/entities/detail
 * @endpoint PUT /v1/entities/{entityId}/operating-status
 * @endpoint PUT /v1/entities/detail
 * @usedBySchema EntityCreateSchema
 * @usedBySchema EntityMergeSchema
 * @contractShape entity.mutation
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/entity/EntityMutation.kt
 */
export const EntityMutationSchema = z.object({
    /** Allow intentional money-like text without a currency marker; prefer --from-file. */
    allowSuspectedShellStrip: z.boolean().nullish(),
    /** Default operating currency. */
    defaultCurrency: z.string().nullish(),
    /** Year founded. */
    foundedYear: z.int().nullish(),
    /** Alternative or former names used for search and display. When supplied, the list replaces existing aliases. */
    nameAlias: z.array(EntityNameAliasEntityAliasTypeSchema).nullish(),
    /** Brand name. For Product or Service records, this must name a distinct offering and must not exactly match the joined provider entity. If an eponymous offering has no distinct product-line brand, use a descriptor/category such as Consumer Sedans or Light Industrial Vehicles instead. */
    nameBrand: z.string().nullish(),
    /** Legal name. */
    nameLegal: z.string().nullish(),
    /** Preferred detail-update slug rename field. Omit on create; when slug is also sent both fields must normalize to the same value. */
    newSlug: z.string().nullish(),
    /** Operating status. Required on create; omitted update values preserve existing status. Use Acquired Subsidiary when an acquired entity still operates; use Acquired only when it is terminal, folded, or closed. Closed and terminal Acquired keep attached person joins current; update association endDate separately with a closing-date estimate. */
    operatingStatus: EntityOperatingStatusSchema.nullish(),
    /** Entity URL slug. Create may omit it when the server can derive one; detail updates may rename through this field or newSlug. Company-class slugs are one shared namespace and must end with the HQ location suffix (brand-city-state-country); a held slug returns 409. Product and Service slugs derive from nameBrand, stay scoped to the provider pair, and may repeat across providers; reusing a slug under the same provider or one held by a non-product entity returns 409. */
    slug: z.string().nullish(),
    /** Visibility and verification flags; omitted update fields preserve existing values. */
    status: EntityStatusMutationSchema.nullish(),
    /** Concrete entity type such as Company, Investment Firm, Product, or Service. Product and Service records always pair with a current productService provider relationship: creates write the join atomically via productServiceProviderId, the sole provider join cannot be removed or re-pointed, and moving an offering to a different provider means delete and recreate. */
    typeRecord: z.string().nullish(),
});
//# sourceMappingURL=mutation.js.map