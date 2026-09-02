// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
import { WebPageSchema } from "./page.js";
const WebSiteSchemaDefinition = z.object({
    /** Timestamp when this website map was created */
    createdAt: z.iso.datetime({ offset: true }).nullish(),
    /** Parsed registrable domain (e.g., aventure.vc) */
    domain: z.string(),
    /** Autoincrementing website map record ID; null for pending writes */
    id: z.number().int().nullish(),
    owner: EntityPersonOwnerSchema,
    /** Section name to ordered list of canonical web pages captured for the domain */
    pages: z.record(z.string(), z.array(WebPageSchema)),
    /** Timestamp when this website map was last updated */
    updatedAt: z.iso.datetime({ offset: true }).nullish(),
});
/**
 * Canonical website map and sitemap structured page data for an owner's domain.
 *
 * @openapiSchema WebSite
 * @endpoint GET /v1/entities/{entityId}/sites
 * @endpoint POST /v1/entities/{entityId}/sites
 * @usedBySchema PageWebSiteSchema
 * @contractShape web.site
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/website/WebSite.kt
 */
export const WebSiteSchema = WebSiteSchemaDefinition;
//# sourceMappingURL=site.js.map