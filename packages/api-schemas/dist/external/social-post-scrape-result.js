// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { ExternalSocialPostPlatformSchema } from "./social-post-platform.js";
import { ExternalSocialPostSchema } from "./social-post.js";
const ExternalSocialPostScrapeResultSchemaDefinition = z.object({
    /** Upstream failure reason when failed */
    failureReason: z.string().nullish(),
    /** Server timestamp when the ready record was ingested */
    fetchedAt: z.iso.datetime({ offset: true }).nullish(),
    /** Social platform selected from the provider dataset */
    platform: ExternalSocialPostPlatformSchema,
    /** Canonical persisted post when ready */
    post: ExternalSocialPostSchema.nullish(),
    /** Bright Data snapshot id */
    snapshotId: z.string(),
    /** Provider-returned canonical permalink when ready */
    sourceUrl: z.string().nullish(),
    /** Current structured-scrape lifecycle state */
    status: z.enum(["RUNNING", "READY", "DEAD_PAGE", "FAILED"]),
});
/**
 * Async state and, once ready, canonical externally-authored social post.
 *
 * @openapiSchema ExternalSocialPostScrapeResult
 * @endpoint POST /v1/research/external-social-posts/scrape/{snapshotId}
 * @contractShape external.social-post-scrape-result
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/externalsocialpost/ExternalSocialPost.kt
 */
export const ExternalSocialPostScrapeResultSchema = ExternalSocialPostScrapeResultSchemaDefinition;
//# sourceMappingURL=social-post-scrape-result.js.map