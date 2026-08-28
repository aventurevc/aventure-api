// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { UrlSlugRedirectSchema } from "../url/slug-redirect.js";
const SlugChangeResultSchemaDefinition = z.object({
    newSlug: z.string(),
    newUrl: z.string(),
    oldSlug: z.string(),
    oldUrl: z.string(),
    redirect: UrlSlugRedirectSchema,
    /** Resource type whose slug is being changed */
    resourceType: z.enum(["entity", "person", "news", "blog", "content"]),
});
/**
 * Completed slug change with created redirect
 *
 * @openapiSchema SlugChangeResult
 * @endpoint PATCH /v1/entities/{entityId}/slug
 * @endpoint PATCH /v1/news/{newsId}/slug
 * @endpoint PATCH /v1/people/{personId}/slug
 * @contractShape slug.change-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugChangeResult.kt
 */
export const SlugChangeResultSchema = SlugChangeResultSchemaDefinition;
//# sourceMappingURL=change-result.js.map