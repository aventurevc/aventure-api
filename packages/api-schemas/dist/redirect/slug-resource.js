// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Resource type whose slug is being changed
 *
 * @openapiSchema SlugResource
 * @standardProblemResponse
 * @usedBySchema CurrentSlugOwnerSchema
 * @usedBySchema RedirectSlugPathSchema
 * @usedBySchema SlugChangeResultSchema
 * @usedBySchema SlugLocationSchema
 * @contractShape redirect.slug-resource
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugResource.kt
 */
export const SlugResourceSchema = z.enum(["entity", "person", "news", "blog", "content"]);
//# sourceMappingURL=slug-resource.js.map