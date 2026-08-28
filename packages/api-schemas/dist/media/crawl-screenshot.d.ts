import { z } from "zod/v4";
declare const MediaCrawlScreenshotSchemaDefinition: z.ZodObject<{
    contentType: z.ZodString;
    crawledAt: z.ZodISODateTime;
    createdAt: z.ZodISODateTime;
    fileSize: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    id: z.ZodNumber;
    owner: z.ZodOptional<z.ZodNullable<z.ZodObject<{
        entityId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
        personId: z.ZodOptional<z.ZodNullable<z.ZodUUID>>;
    }, z.core.$strip>>>;
    position: z.ZodInt;
    s3Key: z.ZodString;
    updatedAt: z.ZodISODateTime;
    url: z.ZodString;
    urlId: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    viewportHeight: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
    viewportWidth: z.ZodOptional<z.ZodNullable<z.ZodInt>>;
}, z.core.$strip>;
type MediaCrawlScreenshotDefinition = z.infer<typeof MediaCrawlScreenshotSchemaDefinition>;
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
export declare const MediaCrawlScreenshotSchema: z.ZodType<MediaCrawlScreenshotDefinition>;
export type MediaCrawlScreenshot = z.infer<typeof MediaCrawlScreenshotSchema>;
export {};
//# sourceMappingURL=crawl-screenshot.d.ts.map