// LLM AGENTS MAY NOT EDIT THIS FILE UNDER ANY CIRCUMSTANCES. DO NOT EDIT - generated from Kotlin data classes via OpenAPI. Edit the backend owner and run: make docs-openapi && make docs-zod
import { z } from "zod/v4";
import { EntityPersonOwnerSchema } from "../entity/person-owner.js";
const MediaCrawlScreenshotSchemaDefinition = z.object({
    contentType: z.string(),
    crawledAt: z.iso.datetime({ offset: true }),
    createdAt: z.iso.datetime({ offset: true }),
    fileSize: z.int().nullish(),
    /** Type-safe identifier for crawl screenshots */
    id: z.number().int(),
    owner: EntityPersonOwnerSchema.nullish(),
    position: z.int(),
    s3Key: z.string(),
    updatedAt: z.iso.datetime({ offset: true }),
    url: z.string(),
    urlId: z.int().nullish(),
    viewportHeight: z.int().nullish(),
    viewportWidth: z.int().nullish(),
});
/**
 * Domain record for crawl screenshot metadata - also the API response type
 *
 * @openapiSchema MediaCrawlScreenshot
 * @endpoint GET /v1/media/screenshots
 * @endpoint GET /v1/media/screenshots/{id}
 * @endpoint POST /v1/media/screenshots
 * @usedBySchema PageMediaCrawlScreenshotSchema
 * @contractShape media.crawl-screenshot
 * @contractRole canonical
 * @ownerSourceFile src/main/kotlin/vc/aventure/domain/model/media/CrawlScreenshot.kt
 */
export const MediaCrawlScreenshotSchema = MediaCrawlScreenshotSchemaDefinition;
//# sourceMappingURL=crawl-screenshot.js.map