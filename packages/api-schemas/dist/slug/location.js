// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
const SlugLocationSchemaDefinition = z.object({
    entityType: z.string().nullish(),
    id: z.string(),
    path: z.string(),
    /** Resource type whose slug is being changed */
    resourceType: z.enum(["entity", "person", "news", "blog", "content"]),
    slug: z.string(),
    url: z.string(),
});
/**
 * Current slug location for a resource
 *
 * @openapiSchema SlugLocation
 * @endpoint GET /v1/app/blog/articles/{id}/slug
 * @endpoint GET /v1/app/pages/{id}/slug
 * @endpoint GET /v1/entities/{entityId}/slug
 * @endpoint GET /v1/news/{newsId}/slug
 * @endpoint GET /v1/people/{personId}/slug
 * @contractShape slug.location
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugLocation.kt
 */
export const SlugLocationSchema = SlugLocationSchemaDefinition;
//# sourceMappingURL=location.js.map