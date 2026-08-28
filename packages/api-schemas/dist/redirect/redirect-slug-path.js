// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
/**
 * Redirect slug path
 *
 * @openapiSchema RedirectSlugPath
 * @standardProblemResponse
 * @usedBySchema ProblemDetailSchema
 * @contractShape redirect.redirect-slug-path
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/redirect/SlugAvailability.kt
 */
export const RedirectSlugPathSchema = z.object({
    newUrl: z.string().nullish(),
    oldUrl: z.string(),
    targetCurrentSlug: z.string().nullish(),
    targetId: z.string().nullish(),
    /** Resource type whose slug is being changed */
    targetResourceType: z.enum(["entity", "person", "news", "blog", "content"]).nullish(),
});
//# sourceMappingURL=redirect-slug-path.js.map